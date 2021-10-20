module.exports = {
    app: {
        px: '!',
        token: 'OTAwMjQyOTAzMzkyMjIzMjgz.YW-eiQ.8aVQU9Rbk_92I3O8M4iPbT3YV4w',
        playing: 'Big Music ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
