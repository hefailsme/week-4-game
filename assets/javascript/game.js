$(document).ready(function () {
    //array of character objs
    var charArr = [{
            name: 'Metallica',
            health: 50,
            power: 10,
            image: "./assets/images/metallica.jpg",
                       takeDamage: function (damageAmount) {
                this.health -= damageAmount
            }

        },
        {
            name: 'Slayer',
            health: 50,
            power: 6,
            image: "./assets/images/slayer.jpg",
                       takeDamage: function (damageAmount) {
                this.health -= damageAmount
            }

        },
        {
            name: 'Pantera',
            health: 50,
            power: 13,
            image: "./assets/images/pantera.jpg",
                       takeDamage: function (damageAmount) {
                this.health -= damageAmount
            }

        },
        {
            name: 'Backstreet Boys',
            health: 50,
            power: 9,
            image: "./assets/images/backstreet.jpg",
                       takeDamage: function (damageAmount) {
                this.health -= damageAmount
            }

        },
        {
            name: 'N Sync',
            health: 50,
            power: 11,
            image: "./assets/images/nsync.jpg",
            takeDamage: function (damageAmount) {
                this.health -= damageAmount
            }

        },
        {
            name: '98 Degrees',
            health: 50,
            power: 7,
            image: "./assets/images/98degrees.jpg",
                       takeDamage: function (damageAmount) {
                this.health -= damageAmount
            }

        }
    ]
    //chosen hero obj
    var chosenHero
    //is hero chosen bool
    var isHeroChosen
    //is hero alive bool
    var isHeroAlive
    //chosen enemy obj
    var chosenEnemy
    //is enemy chosen bool
    var isEnemyChosen
    //is enemy alive bool
    var isEnemyAlive
    //is player section
    var heroSection = $("playerSection")
    //is defender section
    var defenderSection = $("defenderSection")
    // hero Attack
    var heroAttack
    //enemy attack
    var enemyAttack
    //result of attack
    var attackResult

    var metalbandIsInAttackArea

    //   var myVar = setTimeout(function(){
    //        console.log("hello")
    //    }, 5000)
    //    var myOthervVar = setInterval(function() {
    //        console.log("Dude")
    //    }, 3000)
    //    $("#myButton").on("click", function() {
    //        clearTimeout(myVar)
    //})

    //init game function
    function initGame() {
        isHeroChosen = false
        isEnemyChosen = false
        var num = Math.floor(12 / charArr.length)
        for (var i = 0; i < charArr.length; i++) {
            var charThing = $("<div id='" + i + "' class='char col-md-" +
                num + "'value='" + i + "'></div>")
            charThing.html(
                "<img src='" + charArr[i].image + "' style='width:140px; height:140px;'/><h3></h3>" +
                charArr[i].health + "<br>" + charArr[i].name + "</h3>")
            $(".characters").append(charThing)
        }
    }
    //choosing hero, they are moved to "hero area"
    $(document).on("click", ".char", function () {


        var characterClicked = $(this)
        var index = characterClicked.attr('value')
        var metalbandSelected = charArr[index]


        // does not run first time
        if (metalbandIsInAttackArea === true) {
            var enemyplay = $('.enemyplay')
            var boyBandSelected = $('#' + index);
            boyBandSelected.detach()
            enemyplay.append(boyBandSelected)



            return
        }

        // runs first time
        isHeroChosen = true;
        if (isHeroChosen) {
            var chosenMetalBand = $('#' + index);
            chosenMetalBand.detach()
            $('#hero-section').append(chosenMetalBand)
            var attackButton = $('<button id="attack-button" data-attack="' + metalbandSelected.power + '">Attack</button>')
            $('#hero-section').append(attackButton)
            metalbandIsInAttackArea = true

            //attack function
            //if user presses attack button
            $("#attack-button").on("click", function () {
                var btn = $(this)
                var damageAmount = btn.data('attack')
                //    takeDamage(damageAmount)

                console.log(damageAmount)

                var enemyIndex = $('#enemy').find('.char').attr('value')

                console.log(charArr[enemyIndex].takeDamage(damageAmount))


                console.log('charArr[enemyIndex].health', charArr[enemyIndex].health)
            })
        }
    });




    //reset game function
    $("#button-start").on("click", function () {
        initGame()
    });
});