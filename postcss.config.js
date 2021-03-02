module.exports = {
    plugins:[
        require("tailwindcss"),
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content:[
                "./404.html",
                "./comingsoon.html",
                "./contact.html",
                "./index.html",
                "./privacy.html",
                "./resources.html",
                "./services.html",
                "./support.html",
                "./user.html"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)||[]
        })
    ]
}