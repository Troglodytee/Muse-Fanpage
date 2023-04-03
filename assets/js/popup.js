function closeFooterPopup() {
    document.getElementById("footer-popup").classList.add("d-none");
    document.getElementById("privacy-policy").classList.add("d-none");
    document.getElementById("legal-notice").classList.add("d-none");
    document.getElementById("accessibility-notice").classList.add("d-none");
}

function showFooterPopup()
{
    document.getElementById("footer-popup").classList.remove("d-none");
    document.getElementById("close-footer-popup").focus();
}

function showPrivacyPolicy() {
    document.getElementById("privacy-policy").classList.remove("d-none");
    showFooterPopup();
}

function showLegalNotice() {
    document.getElementById("legal-notice").classList.remove("d-none");
    showFooterPopup();
}

function showAccessibilityNotice() {
    document.getElementById("accessibility-notice").classList.remove("d-none");
    showFooterPopup();
}