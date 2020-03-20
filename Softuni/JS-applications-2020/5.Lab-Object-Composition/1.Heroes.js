function heroes() {

    let fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
        }

        return Object.assign(state, canFight(state));
    }

    let mage = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(state, canCast(state));
    }

    let canFight = (state) => {
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }

    }
    let canCast = (state) => {
        cast: () => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    }

    return {
        mage: mage,
        fighter: fighter
    }
}