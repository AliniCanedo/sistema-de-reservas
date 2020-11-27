const ADMIN_PROFILE = '2';

function isAdmin(profile){
    return profile === ADMIN_PROFILE;
}

module.exports = (request) => {

    const user = request.user;
    if (!user) return false; // usuário anônimo

    const originalUrl = request.originalUrl;
    const profile = request.user.profile;
    //no futuro, você pode restringir de maneira diferente por method (GET,POST, etc)
    const method = request.method;

    console.log(originalUrl);
    //switch/case para tomada de decisão sobre autorizações
    switch(originalUrl){
        case '/': return true;
        case '/index': return true;
        case '/login': return true;
        case '/signup': return true;
        case '/reports': { return isAdmin(profile); }
        default: return false;
    }

}