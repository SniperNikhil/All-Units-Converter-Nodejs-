const express = require("express");
const path = require("path")
const http = require('http');
var convert = require('convert-units')
const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO(server);

const port = 4001;

const home = path.join(__dirname, "/public")
app.use(express.static(home))

app.set("view engine", "hbs");
app.get("/", async (req, res) => {
    res.render("index");
})

io.on('connection', (socket) => {
    socket.on('calculate', (inputvalue, textinputunit, textoutputunit, selectedContent) => {
        if (textoutputunit == null) {
            try {
                let selectedContent;

                if (selectedContent == "volume flow rate") {
                    selectedContent = "volumeFlowRate";
                }

                // var possibilities = convert().possibilities(selectedContent);
                var possibilities = convert().from(textinputunit).possibilities()
                const result = {};
                const description = {};

                for (let i = 0; i < possibilities.length; i++) {
                    try {
                        description[i] = convert().describe(possibilities[i]);
                        result[possibilities[i]] = convert(inputvalue).from(textinputunit).to(possibilities[i]);
                    } catch (error) {

                    }
                }
                socket.emit('conversionResultOfAll', result, description);
            } catch (error) {
                socket.emit('Error', error);
            }
        } else {
            try {
                var result = convert(inputvalue).from(textinputunit).to(textoutputunit);
                description = convert().describe(textoutputunit);

                socket.emit('conversionResultOfAll', result, description, textoutputunit);
            } catch (error) {
                socket.emit('Error', error);
            }
        }
    });
});


server.listen(port, () => {
    console.log(`Server running on port number ${port}`);
});