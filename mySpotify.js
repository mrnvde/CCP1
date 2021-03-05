$(document).ready(() => {

	$('#pagePlaylistFavoris').hide()
	$('#pageFavoris').hide()
	$('#pagePlaylist').hide()
	$('#pageTitre').hide()


        var usersObj
        if (!localStorage.getItem('accounts')) {
            usersObj = {
                "users": []
            }
        } else {
            usersObj = JSON.parse(localStorage.getItem('accounts'))
        }

    $('#formRegister').submit(register)

    $('#btnDeco').click(function (event) {
            event.preventDefault()
            sessionStorage.removeItem('session')
            $('#pagePlaylistFavoris').hide()
            $('#pageTitre').hide()
            $('#homePage').show()
        })

	function register(event) {
            event.preventDefault()

            var pseudo = $('#pseudoRegister').val()
            var email = $('#mailRegister').val()
            var mdp = $('#mdpRegister').val()

            if (mdp == "" || pseudo == "" || email == "") {
                alert("Les champs sont obligatoires")
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
                        mdp: mdp
                    }
                    usersObj.users.push(user);
                    saveUsers()

                    $('#pseudoRegister').val("")
                    $('#mailRegister').val("")
                    $('#mdpRegister').val("")

                    displayLogin()
                }
            }
        }

    function saveUsers() {
        localStorage.setItem('accounts', JSON.stringify(usersObj))
    }

    function displayLogin(){
        $('#homePage').hide()
    	$('#pagePlaylistFavoris').show()
    	$('#pageTitre').show()
    }

	function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
})