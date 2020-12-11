const referralKey = 'invite';

module.exports.getInvite = () => {
    return localStorage.getItem(referralKey);
};

module.exports.saveInvite = () => {
    let search = new URLSearchParams(window.location.search);
    let invite = search.get(referralKey);
    if (invite && invite.length > 0) {
        localStorage.setItem(referralKey, invite);
    }
};
