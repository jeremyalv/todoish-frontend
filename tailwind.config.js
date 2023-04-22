/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/components/**/*.{js, jsx, ts, tsx}"],
    theme: {
        extend: {
            maxHeight: {
                0: "0",
                "1/8": "12.5%",
                "2/8": "25%",
                "3/8": "37.5%",
                "4/8": "50%",
                "5/8": "62.5%",
                "6/8": "75%",
                "7/8": "87.5%",
                full: "100%",
                112: "28rem",
                128: "32rem",
            },
        },
    },
    plugins: [],
};
