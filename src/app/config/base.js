
export const AppVersion = '1';
window.version = AppVersion;

export const RecaptchaSiteKey = '6LezK1YUAAAAADfj-NlrMQh_PETr7fzfYeRwCAaS';

export const AppConfig = {
    baseApiUrl: (endPoint) => {
        switch (process.env.NODE_ENV) {
            case 'production':
                return `https://api.newconnection.digital/${endPoint}`;
            default:
                return `http://127.0.0.1/${endPoint}`;
        }
    },
    general: {
        appTitle: "qrsecurity",
        appLogo: '<span>qrsecurity</span>'
    },
};
