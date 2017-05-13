var pythonShell = require('python-shell')
var pcap = require('pcap')
// pythonShell.run('sniffer.py', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('finished');
// })



console.log(pcap);

pcap_session = pcap.createSession();
pcap_session.on('packet', function (raw_packet) {
   var packet = pcap.decode.packet(raw_packet);
//    console.log(packet);

   console.log(packet.link.ip.tcp.dport)
});