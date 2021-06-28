let mago = {
    class: 'mage',
    status: 'inteligence',
    inteligence: 60,
    skillList: ['thunderbolt', 'fireball'],
    thunderBolt: getThunderbolt(),
    fireBall: getFireball()
}


let personagem1 = mago


//let partyskills = personagem1.skillList.concat(personagem2.skillList)


function getThunderbolt () {
    return function thunderBolt () {
        console.log('thunderbolt')
        console.log(this.inteligence)
        console.log(this.skillList)
        console.log(skills.thunderBolt.maxDamage)
    }
}

let skills = [
    {       name: 'thunderbolt',
            skill: getThunderbolt(),
            maxDamage: 150,
            minDamage: 30,
            manaCost: 50,
            quantity: 5
        },

    {       name: 'fireball',
            skill: getFireball(),
            maxDamage: 140,
            minDamage: 20,
            manaCost: 10,
            quantity: 5
        },
]


    function getFireball () {
    

        return function fireBall () {
            console.log('fireball')
            console.log(this.class)
            console.log(this.skillList)
            console.log(skills.fireBall.minDamage)
    
        }
    }
    
    function getCards () {
        let array =[];
        for (key in skills) {
            for (let index = 0; index < skills[key].quantity; index+=1) {
                array.push(key)
            }
        }
        console.log(array)
    }

    