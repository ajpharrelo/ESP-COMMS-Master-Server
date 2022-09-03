function cleanIP(ipAddr) {
    return ipAddr.replace("::ffff:", "")
}

module.exports = {
    cleanIP
}