export const dbUrl = "mongodb+srv://botsbazaar:SqeIfowwk7xwcmoE@botsbazaar.sjj4mn8.mongodb.net/?retryWrites=true&w=majority&appName=botsbazaar";
export const botToken = "6288837444:AAFy0htn41tqZ_pqpOA6mrzeqCPX3bLjxtI";
export const admins = [6966849450, 5547959277]
export const channels = ["TC_30SEC_WINGO", "TC_30SEC_WINGO"]
export const cancelKeyboard = {
    reply_markup: {
        keyboard: [
            ['Cancel'],
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    },
    parse_mode: "HTML"
};
export const predictionKeyboard = {
    reply_markup: {
        keyboard: [
            ['Get Prediction', 'Result'],
            ['Register Link', '🔙Back']
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    },
    parse_mode: "HTML"
};
