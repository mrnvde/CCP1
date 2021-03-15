$(document).ready(() => {
	// $(window).resize(resizePage)
	// resizePage()
	$('#playlistTitreFavoris').hide()
    $('#header').hide()
    $('#pageFavoris').hide() 

    var musiques = {
                    "songs":[
                        {
                            id:1,
                            name:"Young & Wild & free",
                            artist:"Vosai",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/912/young-wild-free-1614333632-xGqBA20Zwl.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/912/325x325/young-wild-free-1614333630-w1BIujxRP1.jpg"
                        },
                        {
                            id:2,
                            name:"You and me",
                            artist:"Facading",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/913/you-and-me-1614333639-TFbNLFMMGs.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/913/325x325/you-and-me-1614333636-hCtC3rwpZJ.jpg"
                        },
                        {
                            id:3,
                            name:"Burn 'Em (Explicit)",
                            artist: "OTG Stiffy, The FifthGuys, Mandrazo",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/911/burn-em-explicit-1614092438-4x7GzFZ0LY.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/911/325x325/burn-em-explicit-1614092434-xJZUeGWDBu.jpg"
                        },
                        {
                            id:4,
                            name:"Run For Your Life ",
                            artist:"Tom Wilson",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/910/run-for-your-life-1613754037-kmRk1tZzDy.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/910/325x325/run-for-your-life-1613754034-PBCg90kPGQ.jpg"
                        },
                        {
                            id:5,
                            name: "Uncharted",
                            artist:"32Stitches",
                            song:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/909/1613675182_Ql9bmO30dy_32Stitches---Uncharted-NCS-Release.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/909/325x325/1613675182_0IKvAczCXJ_Artwork2.jpg"
                        },
                        {
                            id:6,
                            name:"Golden",
                            artist:"Outwild",
                            song:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/908/1613576935_d56g5qXLRj_Outwild-x-She-Is-Jules---Golden-NCS-Release.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/908/325x325/1613508688_qytwmeOxDA_Artwork.jpg"
                        },
                        {
                            id:7,
                            name: "Letter",
                            artist: "Shiah Maisel, Electro-Light",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/907/letter-1613149240-U1nOe432HM.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/907/325x325/letter-1613149237-GcyfNKUrQh.jpg"
                        },
                        {
                            id:8,
                            name:"Red Light",
                            artist:"Hayve",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/906/red-light-1613052036-E3A5hO27f0.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/906/325x325/red-light-1613052034-bcORtZUSWL.jpg"
                        },
                        {
                            id:9,
                            name:"Love Potion",
                            artist :"Arcana, Zack Merci",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/905/love-potion-1612882838-hkIEAlX5s6.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/905/325x325/love-potion-1612882835-4KKvUeMcoQ.jpg"
                        },
                        {
                            id:10,
                            name:"Touchdown",
                            artist: "M.I.M.E, N3WPORT",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/904/touchdown-1612530035-cbHYvvHdea.mp3",
                            image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/904/325x325/touchdown-1612530032-KEToyqvmDT.jpg"
                        },
                        {
                            id:11,
                            name: "Don't Surrender",
                            artist:"Abandoned, EMM, Egzod",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/901/1612865138_tksCdbpEFx_Egzod-EMM---Dont-Surrender-Abandoned-Remix-NCS-Release.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/901/325x325/dont-surrender-1612454433-tf6wf87sP7.jpg"
                        },
                        {
                            id:12,
                            name: "Mutiny",
                            artist:"xChenda, Wasiu, Egzod",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/902/mutiny-1612454444-t6ZPg7YTID.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/902/325x325/mutiny-1612454440-Al4Vzknxhj.jpg"
                        },
                        {
                            id:13,
                            name: "The Revolution",
                            artist:"Arc North, Neoni, Egzod",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/903/the-revolution-1612454454-WLdzt3tdFe.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/903/325x325/the-revolution-1612454450-97lxhUL6he.jpg"
                        },
                        {
                            id:14,
                            name: "Dioma",
                            artist:"Jnathyn",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/900/dioma-1612285237-GdIGshSEX2.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/900/325x325/dioma-1612285234-1edesvIRrF.jpg"
                        },
                        {
                            id:15,
                            name: "Black Sunrise",
                            artist:"Denniz Jamm, Andreas Stone",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/899/black-sunrise-1611928834-F7yGZfsTOO.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/899/325x325/black-sunrise-1611928830-ij2SVZ7k85.jpg"
                        },
                        {
                            id:16,
                            name: "Never Give Up",
                            artist:"Steve Hartz",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/898/never-give-up-1611838833-ZU4Dg5hiqH.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/898/325x325/never-give-up-1611838830-vXfAVJVqDH.jpg"
                        },
                        {
                            id:17,
                            name: "Victory",
                            artist:"Poylow",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/897/victory-1611673237-MPEImoSEqz.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/897/325x325/victory-1611673232-PItNnjEJTu.jpg"
                        },
                        {
                            id:18,
                            name: "Swalla",
                            artist:"Mandrazo, Julius Dreisig",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/896/swalla-1611320432-KTFvgKxkXC.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/896/325x325/swalla-1611320429-9cGRL9HULv.jpg"
                        },
                        {
                            id:19,
                            name: "Crossed The Line",
                            artist:"Linn Sandin, Facading, Vosai",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/895/crossed-the-line-1611248435-tMSvTHdnlh.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/895/325x325/crossed-the-line-1611248431-rzkzijyo0g.jpg"
                        },
                        {
                            id:20,
                            name: "Into The Light",
                            artist:"jeonghyeon, Raptures.",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/894/into-the-light-1611057632-IuXvshHPLC.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/894/325x325/1613990436_Zxtw9SLACG_Artwork.jpg"
                        },
                        {
                            id:21,
                            name: "Finally Healing ",
                            artist:"Abandoned, Shiah Maisel, InfiNoise",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/893/finally-healing-1610715634-F0MiE2EFUL.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/893/325x325/finally-healing-1610715631-pOWAHImjuT.jpg"
                        },
                        {
                            id:22,
                            name: "Nobody",
                            artist:"Kozah",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/892/nobody-1610632835-sr5RjBlDNp.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/892/325x325/nobody-1610632832-mFJRQDenxO.jpg"
                        },
                        {
                            id:23,
                            name: "Trouble With Love",
                            artist:"SOXX",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/891/trouble-with-love-1610460031-siOsB8afDR.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/891/325x325/trouble-with-love-1610460028-dKHzFjXWqW.jpg"
                        },
                        {
                            id:24,
                            name: "Losing Control",
                            artist:"Mendum, JPB",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/890/losing-control-1610121631-P9GX1l4YOO.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/890/325x325/losing-control-1610121628-8vpDMAT4bO.jpg"
                        },
                        {
                            id:25,
                            name: "21",
                            artist:"Shiah Maisel, Arlow",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/889/21-1610028032-ILqHvSooxR.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/889/325x325/21-1610028029-cVdnE9jTFZ.jpg"
                        },
                        {
                            id:26,
                            name: "Banger Machine",
                            artist:"Castion",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/888/banger-machine-1609840831-lRyrl6bQHj.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/888/325x325/banger-machine-1609840828-prJWNTE6ke.jpg"
                        },
                        {
                            id:27,
                            name: "Sky High pt. II",
                            artist:"Elektronomia",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/887/sky-high-pt-ii-1609495231-50f9lRx1Nv.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/887/325x325/sky-high-pt-ii-1609495228-Btc2vjc4Vf.jpg"
                        },
                        {
                            id:28,
                            name: "Firefly pt. II",
                            artist:"Jim Yosef",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/886/firefly-pt-ii-1609452032-XJzweRIPsK.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/886/325x325/1609847592_3Q1SpFgO1S_Artwork.jpg"
                        },
                        {
                            id:29,
                            name: "Dead of Night",
                            artist:"if found",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/885/dead-of-night-1609236037-9MfpB6VEhX.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/885/325x325/dead-of-night-1609236028-MO9yxOe5HC.jpg"
                        },
                        {
                            id:30,
                            name: "Need You",
                            artist:"Lost Sky",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/883/1609102805_xqBo18AgD8_Lost-Sky---Need-You-NCS-Release.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/883/325x325/need-you-1608886828-luTyHNlPRu.jpg"
                        },
                        {
                            id:31,
                            name: "Dancing On The Moon",
                            artist:"Luke Burr, Unknown Brain",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/884/dancing-on-the-moon-1608886840-OqDdRsadNd.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/884/325x325/dancing-on-the-moon-1608886837-RFKu8OFkgh.jpg"
                        },
                        {
                            id:32,
                            name: "Obey",
                            artist:"Barren Gates",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/882/obey-1608804032-C6YDjbj8r8.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/882/325x325/obey-1608804028-ChSEFuAfcQ.jpg"
                        },
                        {
                            id:33,
                            name: "Calm Before The Storm",
                            artist:"Centrix, Dani King, Rebel Scum",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/881/calm-before-the-storm-1608627631-CELPrgeN44.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/881/325x325/calm-before-the-storm-1608627628-KdP6qZgAce.jpg"
                        },
                        {
                            id:34,
                            name: "Primitive",
                            artist:"Snowfyre",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/877/primitive-1608289229-PwOVirm0ej.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/877/325x325/1608310878_8W2GMdsAiy_Wreckout.jpg"
                        },
                        {
                            id:35,
                            name: "Osiris",
                            artist:"Laminar",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/878/osiris-1608289235-5x6bqK74md.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/878/325x325/1608310867_XcY2P5pbjh_Wreckout.jpg"
                        },
                        {
                            id:36,
                            name: "Demons",
                            artist:"NIVIRO",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/879/1608310738_Rg7ZA0UnDM_NIVIRO---Demons-NCS-Release.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/879/325x325/demons-1608289238-X0fcHxRYna.jpg"
                        },
                        {
                            id:37,
                            name: "Space Jam",
                            artist:"Hayve",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/880/space-jame-1608292828-yjnc2RoBWx.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/880/325x325/1608310854_vUvr9WPpOG_Wreckout.jpg"
                        },
                        {
                            id:38,
                            name: "Shivers",
                            artist:"Halvorsen, Netrum",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/875/shivers-1608206431-lLNDMRLBuY.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/875/325x325/shivers-1608206428-kVSSQpFawE.jpg"
                        },
                        {
                            id:39,
                            name: "Accelerate",
                            artist:"Everen Maxwell",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/876/1608229307_JZWF44jSEe_Everen-Maxwell---Accelerate-NCS-Release.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/876/325x325/1608288316_GRqVDdX593_Wreckout.jpg"
                        },
                        {
                            id:40,
                            name: "Non Stop",
                            artist:"Hilefex, Jonth",
                            song: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/874/non-stop-1608037231-AMamHOSQvR.mp3",
                            image:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/874/325x325/non-stop-1608037227-J4tMkpF7kn.jpg"
                        }
                    ]
                }
    if (!localStorage.getItem('musiques')) {
        localStorage.setItem('musiques', JSON.stringify(musiques))
    } else {
        musiques = JSON.parse(localStorage.getItem('musiques'))

        let x = 0
        for (; x < musiques.songs.length ; x ++){
            let lesMusiques = musiques.songs[x]

            $('.titresTitres').after(`
                <div class="blocTitre">
                    <div>
                        <img src="${lesMusiques.image}" class="icon">
                    </div>
                    <div>
                        <a href="" class="playLecteur">
                            <span class="nomArtisteTitre">${lesMusiques.artist}</span><br>
                            <span class="nomMusiqueTitre">${lesMusiques.name}</span>
                            <span class="srcMusiqueTitre" style="display: none">${lesMusiques.song}</span>
                        </a>
                    </div>
                    <div>
                        <a href="#"><img src="dislike.png" class="iconDislike"></a>
                        <a href="#"><img src="removePlaylist.png" class="iconAddPlaylist"></a>
                    </div>
                </div>`)
        }
    }

    var favorisObj
    if(!localStorage.getItem('favoris')) {
    	favorisObj = {
    		"musiquesFav": []
    	}
    } else {
    	favorisObj = JSON.parse(localStorage.getItem('favoris'))

    	let y = 0
    	for (; y < favorisObj.musiquesFav.lenght ; y++){
    		let lesFavoris = favorisObj.musiquesFav[y]

    		$('.blocFavoris1').before(`<div class="blocFavoris1">
                                 <img src="iconFavoris.png" class="icon">
                                 <div>
                                     <span class="nomArtiste">${lesFavoris.artiste}</span><br>
                                     <span class="nomMusique">${lesFavoris.titre}</span>
                                 </div>
                                 </div>`)
            $('.iconLike').unbind('click', addFavoris)
	        $('.blocFavoris2').before(`<div class="blocFavoris2">
                                 <img src="iconFavoris.png" class="icon">
                                 <div>
                                     <span class="nomArtiste">${lesFavoris.artiste}</span><br>
                                     <span class="nomMusique">${lesFavoris.titre}</span>
                                 </div>
                                 <div>
                    			    <a href="#"><img src="like.png" class="iconLike"></a>
                    			    <a href="#"><img src="removePlaylist.png" class="iconAddPlaylist"></a>
                   				 </div>
                                 </div>`)
    	}
    }

    var usersObj
    if (!localStorage.getItem('accounts')) {
                usersObj = {
                "users": []
            }
        } else {
            usersObj = JSON.parse(localStorage.getItem('accounts'))
        }

    if (!sessionStorage.getItem("session")) {
            $('#pageAccueil').show()
        } else {
            $('#pageAccueil').hide()
            $('#header').show()
            $('#playlistTitreFavoris').show()
        }

    $('#formRegister').submit(register)
    $('#formLogin').submit(login)
    $('.iconDislike').click(saveFavoris)
    $('.iconAddPlaylist').click(addPlaylist)
    $('#afficheFavoris').click(affichePageFavoris)
    $('#btnFavorisRetour').click(quitteFavoris)
    $('#btnDeco').click(function (event) {
            event.preventDefault()
            sessionStorage.removeItem('session')
            $('#playlistTitreFavoris').hide()
            $('#header').hide()
            $('#pageAccueil').show()
        })

    $('.prev-track').on('click', prevTrack)
    $('.playpause-track').on('click', playpauseTrack)
    $('.next-track').on('click', nextTrack)
    $('.volume_slider').on('change', setVolume)
    $('.seek_slider').on('change', seekTo)

	function register(event) {
            event.preventDefault()
            var pseudo = $('#pseudoRegister').val()
            var email = $('#mailRegister').val()
            var mdp = $('#mdpRegister').val()
            var img = $('#imgRegister').val()
            var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\&\#\-\_\+\=\@\{\}\[\]\(\)])[A-Za-z\d\&\#\-\_\+\=\@\{\}\[\]\(\)]{6,}$/

            if (mdp == "" || pseudo == "" || email == "" || img == "") {
                alert("Les champs sont obligatoires")
            } else if (mdp.length < 6){
                alert('Le mot de passe doit faire minimum 6 caractères')
            } else if(!mdp.match(regex)){
                alert('Ton mot de passe doit contenir 1 chiffre et un caractère spécial');
            } else {
                let pseudoExist = false
                let x
                for (x in usersObj.users) {
                    let actualUser = usersObj.users[x]
                    if (actualUser.pseudo == pseudo) {
                        pseudoExist = true
                        break;
                    }
                }
                if (pseudoExist) {
                    alert("Cet email est déjà associé à un compte")
                } else {
                    var user = {
                        id: uuidv4(),
                        pseudo: pseudo,
                        mail: email,
                        mdp: mdp,
                        img: img
                    }
                    usersObj.users.push(user);
                    saveUsers()
                    $('#pseudoRegister').val("")
                    $('#mailRegister').val("")
                    $('#mdpRegister').val("")
                    $('#imgRegister').val('')
                    displayLogin()
                }
            }
        }

    function saveUsers() {
        localStorage.setItem('accounts', JSON.stringify(usersObj))
    }

    function displayLogin(){
        $('#pageAccueil').hide()
        $('#playlistTitreFavoris').show()
        $('#header').show()
    }

    function login(event) {
            event.preventDefault()

            var identifiants = $('#identifiantLogin').val()
            var mdp = $('#mdpLogin').val()

            if (identifiants == "" || mdp == "") {
                alert("Les champs sont obligatoires")
            } else {
                let isConnected = false
                let x
                for (x in usersObj.users) {
                    var actualUser = usersObj.users[x]
                    if (actualUser.pseudo == identifiants) {
                        if (actualUser.mdp == mdp) {
                            isConnected = true
                            sessionStorage.setItem("session", JSON.stringify(actualUser))
                            break;
                        }
                    }
                }
                if (isConnected) {
                    $('#pageAccueil').hide()
                    $('#playlistTitreFavoris').show()
                    $('#header').show()
                } else {
                    alert("Il faut créer un compte")
                }
            }
    }

    function saveFavoris(){
    	var titreFavoris = $('.nomMusiqueTitre').val()
    	var artisteFavoris = $('.nomArtisteTitre').val()
    	var srcFavoris = $('.srcMusiqueTitre').val()

    	$(this).attr('src', 'like.png').removeClass('iconDislike').addClass('iconLike')

            $('.blocFavoris1').before(`<div class="blocFavoris1">
                                 <img src="iconFavoris.png" class="icon">
                                 <div>
                                     <span class="nomArtiste">Nom Artiste</span><br>
                                     <span class="nomMusique">Nom Musique</span>
                                 </div>
                                 </div>`)
            $('.iconLike').unbind('click')
	        $('.blocFavoris2').before(`<div class="blocFavoris2">
                                 <img src="iconFavoris.png" class="icon">
                                 <div>
                                     <span class="nomArtiste">Nom Artiste</span><br>
                                     <span class="nomMusique">Nom Musique</span>
                                 </div>
                                 <div>
                    			    <a href="#"><img src="like.png" class="iconLike"></a>
                    			    <a href="#"><img src="removePlaylist.png" class="iconAddPlaylist"></a>
                   				 </div>
                                 </div>`)
    	var fav = {
    		id: "fav_" + uuidv4(),
    		titre: titreFavoris,
    		artist: artisteFavoris,
    		src: srcFavoris
    	}
    	favorisObj.musiquesFav.push(fav)
    	localStorage.setItem('favoris', JSON.stringify(favorisObj))
    }

    function addPlaylist(){
            $(this).attr('src', 'addPlaylist.png')
    }

    function affichePageFavoris(){
    	$('#playlistTitreFavoris').hide()
    	$('#pageFavoris').show()
    }

    function quitteFavoris(){
    	$('#pageFavoris').hide()
    	$('#playlistTitreFavoris').show()
    }

let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

// Define the tracks that have to be played
musiques = JSON.parse(localStorage.getItem('musiques'))

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = musiques.songs[track_index].song;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + musiques.songs[track_index].image + ")";
  track_name.textContent = musiques.songs[track_index].name;
  track_artist.textContent = musiques.songs[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + musiques.songs.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < musiques.songs.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = musiques.songs.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
} 

 //    function resizePage(){
	//     var Largeur = $(window).width();
	//     if(Largeur < 800) {
	//         $('#playlistTitreFavoris').html(`
	// 			<div id="ongletPlaylist">
	// 				<div class="titrePlaylist">
	// 					<span>Playlist</span>
	// 				</div>

	// 				<div class="blocPlaylist">
	// 					<img src="iconPlaylist.png" class="icon">

	// 					<div>
	// 						<span class="nomPlaylist">Pour faire du sport</span><br>
	// 					</div>
	// 				</div>

	// 				<div class="blocPlaylist">
	// 					<img src="iconPlaylist.png" class="icon">

	// 					<div>
	// 						<span class="nomPlaylist">Au soleil</span><br>
	// 					</div>
	// 				</div>

	// 				<div class="blocPlaylist">
	// 					<img src="iconPlaylist.png" class="icon">

	// 					<div>
	// 						<span class="nomPlaylist">Détente</span><br>
	// 					</div>
	// 				</div>

	// 				<div class="blocPlaylist">
	// 					<img src="iconPlaylist.png" class="icon">

	// 					<div>
	// 						<span class="nomPlaylist">Années 80/90</span><br>
	// 					</div>
	// 				</div>

	// 				<div class="blocPlaylist">
	// 					<img src="iconPlaylist.png" class="icon">

	// 					<div>
	// 						<span class="nomPlaylist">La fête</span><br>
	// 					</div>
	// 				</div>

	// 				<div class="blocPlaylist">
	// 					<img src="iconPlaylist.png" class="icon">

	// 					<div>
	// 						<span class="nomPlaylist">En boucle</span><br>
	// 					</div>
	// 				</div>
	// 			</div>

	// 			<div id="ongletFavoris">
	// 				<div class="titreFavoris">
	// 					<span>Favoris</span>
	// 				</div>
	// 				<div class="blocFavoris1"></div>
	// 			</div>

	// 			<div id="ongletTitre">
	// 				<div class="titre">
	// 					<span id="nomPlaylist">Tous les titres</span>
	// 					<div class="blocTitre"></div>
	// 				</div>
	// 			</div>
	//         	`)
	//     }
	// }

	function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }
})