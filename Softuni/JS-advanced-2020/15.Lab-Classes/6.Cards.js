(function () {
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (faces.includes(face.toString())) {
                 this._face = face;
            } else {
                throw new Error('No face')
            }
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (Object.values(Suits).includes(suit)) {
                 this._suit = suit;
            } else {
                throw new Error('No suit')
            }
        }

    }   

    return {
        Suits: Suits,
        Card: Card
    }
})();