const desiredParams = {
    UTM_source: null,
    UTM_medium: null,
    UTM_campaign: null,
    UTM_content: null,
};

module.exports.saveUTMParams = () => {
    let search = new URLSearchParams(window.location.search);
    Object.keys(desiredParams).map(param => {
        let oneParam = search.get(param.toLowerCase());
        if (oneParam && oneParam.length > 0) {
            localStorage.setItem(param, oneParam);
        }
    });
};

module.exports.getUTMParams = () => {
    let finalParams = {};
    Object.keys(desiredParams).map(param => {
        let paramValue = localStorage.getItem(param);
        if (null !== paramValue) {
            finalParams[param] = paramValue;
        }
    });

    return finalParams;
};
