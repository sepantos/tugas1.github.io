var name = "Nina"
var peran = "Ksatria "

if ( name == "Mikael" ) {
    console.log("Halo John, Pilih peranmu untuk memulai game")
}
     else if(name == "Nina" || peran == " Ksatria" ) {
         console.log("Selamat datang di Dunia Proxytia, Nina")
        console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!")
     }
       else if(name == "Danu" || peran == "Tabib" ) {
        console.log("Selamat datang di Dunia Proxytia, Danu")
        console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.")

    } else if (name == "Zero" || peran == "Penyihir" ) {
        console.log("Selamat datang di Dunia Proxytia, Zero")
        console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenaganmu!") 
} else {
    console.log("Nama Harus di isi")
}
