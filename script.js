// Funções de utilidades. Aqui ficarão as funções utilizadas como suporte para outras funções.

//getRandomBetween: Retorna um valor entre um número mínimo e um máximo.
const getRandomBetween = (min, max) => {
  let answer = Math.floor(Math.random() * (max - min + 1)) + min;
  return answer;
};
// writeBattle: para criar um P no battle log com uma string (mensagem)
const writeBattle = (message) => {
  p = document.createElement('p');
  p.innerHTML = message;
  battleLog.appendChild(p);
};

//otherMember para pegar outro membro da party (se houver), se não houver retorna o mesmo membro (atual)
const otherMember = (actual, array) => {
  let answer = actual;
  if (array.length === 1) {
    answer = actual;
  }
  if (array.length > 1) {
    while (answer === actual || answer === undefined) {
      answer = array[getRandomBetween(0, array.length - 1)];
    }
  }
  return answer;
};

//rollPercentage: A partir de um número entre zero e cem,  retorna true se a porcentagem for sucedida ou false se não.
const rollPercentage = (percentage) => {
  let number = getRandomBetween(0, 100);
  return percentage >= number ? true : false;
};

//Classes: Aqui ficarão as classes definidas para o jogo.
const classes = {
  mage: {
    name: 'Mago',
    class: 'mage',
    status: 'alive',
    agility: 20,
    inteligence: 60,
    strength: 10,
    maxHp: 150,
    hp: 150,
    maxMp: 300,
    mp: 300,
    armor: 15,
    critChance: 0.2,
    type: ['magic'],
    armorType: 'light',
    equips: ['robe', 'lether-boots', 'scepter'],
    skillsList: ['thunderbolt', 'firewall', 'freeze', 'blackfire', 'smallheal'],
    style: {
      icon: 'Images / CharacterIcons / Mage.png',
      color: 'rgb(43, 80, 172)',
      animation: 'Images/character-animations/mage1.gif',
      attackAnimation: 'Images/character-animations/mage1.gif',
    },
  },
  warrior: {
    name: 'Guerreiro',
    class: 'warrior',
    status: 'alive',
    agility: 20,
    inteligence: 10,
    strength: 50,
    maxHp: 300,
    hp: 300,
    maxMp: 100,
    mp: 100,
    armor: 30,
    critChance: 0.25,
    type: ['berserker'],
    armorType: 'heavy armor',
    equips: ['fullplate', 'twin-swords', 'helmet'],
    skillsList: [
      'slash',
      'armorbreak',
      'shielded',
      'ultraslash',
      'warriorrage',
      'magicsword',
    ],
    style: {
      icon: 'Images / CharacterIcons / Warrior.png',
      color: 'rgb(85, 44, 44)',
      animation: 'Images/character-animations/warior1.gif',
      attackAnimation: 'Images/character-animations/warior1.gif',
    },
  },
};

//Skils: Aqui ficarão as skills dos personagens.
const skills = {
  thunderbolt: {
    name: 'Thunder bolt',
    skill: getThunderbolt(),
    animation: animateThunderbolt(),
    minDamage: function () {
      return 40;
    },
    maxDamage: function () {
      return 2 * this.inteligence;
    },
    manaCost: 30,
    quantity: 5,
    type: 'Magic damage',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/thunderbolt.png',
      animation: 'Images/skill-animations/thunderbolt.gif',
    },
  },
  firewall: {
    name: 'Fire wall',
    skill: getFirewall(),
    animation: animateFirewall(),
    minDamage: function () {
      return 50;
    },
    maxDamage: function () {
      return 2 * this.inteligence;
    },
    manaCost: 35,
    quantity: 4,
    type: 'Magic damage',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/fire.png',
      animation: 'Images/skill-animations/firewall.gif',
    },
  },
  freeze: {
    name: 'Freeze',
    skill: getFreeze(),
    animation: animateFreeze(),
    minDamage: function () {
      return 10;
    },
    maxDamage: function () {
      return 30;
    },
    manaCost: 30,
    quantity: 3,
    type: 'Debuff',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/ice.png',
      animation: 'Images/skill-animations/freeze.gif',
    },
  },
  blackfire: {
    name: 'Black fire',
    skill: getBlackfire(),
    animation: animateBlackfire(),
    minDamage: function () {
      return 5 * this.inteligence;
    },
    maxDamage: function () {
      return 10 * this.inteligence;
    },
    manaCost: 40,
    quantity: 1,
    type: 'S+ magic damage',
    actions: 2,
    style: {
      icon: 'Images/skills-icons/dark-fire.png',
      animation: 'Images/skill-animations/black-fire.gif',
    },
  },
  smallheal: {
    name: 'Small heal',
    skill: getSmallheal(),
    animation: animateSmallheal(),
    minDamage: function () {
      return 0;
    },
    maxDamage: function () {
      return 0;
    },
    manaCost: 30,
    quantity: 3,
    type: 'Healing',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/smallheal.png',
      animation: 'Images/skill-animations/small-heal.gif',
    },
  },
  slash: {
    name: 'Slash',
    skill: getSlash(),
    animation: animateSlash(),
    minDamage: function () {
      return 10;
    },
    maxDamage: function () {
      return 2 * this.strength;
    },
    manaCost: 0,
    quantity: 7,
    type: 'Physical damage',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/slash.png',
      animation: 'Images/skill-animations/slash.gif',
    },
  },
  armorbreak: {
    name: 'Armor break',
    skill: getArmorbreak(),
    animation: animateArmorbreak(),
    minDamage: function () {
      return 0;
    },
    maxDamage: function () {
      return 20;
    },
    manaCost: 5,
    quantity: 3,
    type: 'Debuff',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/shield-break.png',
      animation: 'Images/skill-animations/armor-break.gif',
    },
  },
  shielded: {
    name: 'Shielded',
    skill: getShielded(),
    animation: animateshielded(),
    minDamage: function () {
      return 0;
    },
    maxDamage: function () {
      return 0;
    },
    manaCost: 20,
    quantity: 3,
    type: 'Self buff',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/shielded.png',
      animation: 'Images/skill-animations/shielded.gif',
    },
  },
  ultraslash: {
    name: 'Ultra slash',
    skill: getUltraslash(),
    animation: animateUltraslash(),
    minDamage: function () {
      return 2 * this.strength + 160;
    },
    maxDamage: function () {
      return 5 * this.strength + 160;
    },
    manaCost: 20,
    quantity: 1,
    type: 'S+ physic damage',
    actions: 2,
    style: {
      icon: 'Images/skills-icons/super-slash.png',
      animation: 'Images/skill-animations/ultra-slash.gif',
    },
  },
  warriorrage: {
    name: 'Warrior rage',
    skill: getWarriorrage(),
    animation: animateWarriorrage(),
    minDamage: function () {
      return 0;
    },
    maxDamage: function () {
      return 0;
    },
    manaCost: 10,
    quantity: 2,
    type: 'Conditional buff',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/rage.png',
      animation: 'Images/skill-animations/warrior-rage.gif',
    },
  },
  magicsword: {
    name: 'Magic sword',
    skill: getMagicsword(),
    animation: animateMagicsword(),
    minDamage: function () {
      return 100;
    },
    maxDamage: function () {
      return 100 + 7 * this.inteligence;
    },
    manaCost: 30,
    quantity: 2,
    type: 'Magic damage',
    actions: 1,
    style: {
      icon: 'Images/skills-icons/magicsword.png',
      animation: 'Images/skill-animations/magic-sword.gif',
    },
  },
};

//Funções de Magia: Aqui ficam as funções para a realização de cada magia. Vale lembrar que cada função retorna a função da própria magia, então para acessa-la deve-se utilizar skills.magia.skill.
//OBS: Algumas skills usam this() para retornar máximo e mínimo. Isso sói funciona se for utilizado o .bind(objeto) quando for chamar a skill. Ex: skill.brind(caster)

function getThunderbolt() {
  return function thunderbolt(caster, target) {
    let name = 'thunderbolt';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    damage = damage - targetArmor;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#9889; ${caster.name} acabou de utilizar ${skillName} em ${target.name}.  ${target.name} levou ${damage} de dano em seus hitpoins. A vida atual de ${target.name} é ${target.hp}`;
    return message;
  };
}

function getFirewall() {
  return function firewall(caster, target) {
    let name = 'firewall';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let effect = rollPercentage(5);
    effect === true ? (damage = 2 * damage) : (damage = damage);
    let targetArmor = target.armor;
    damage = damage - targetArmor;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#9889; ${caster.name} acabou de utilizar ${skillName} em ${target.name}.  ${target.name} levou ${damage} de dano em seus hitpoins. A vida atual de ${target.name} é ${target.hp}.`;
    effect === true
      ? (message += `&#128293; TA PEGANO FOGO BIXO. ${target.name} recebeu dano crítico`)
      : (message = message);
    return message;
  };
}

function getFreeze() {
  return function freeze(caster, target) {
    let name = 'freeze';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    damage = damage - targetArmor;
    damage < 0 ? (damage = 0) : damage;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#9889; ${caster.name} acabou de utilizar ${skillName} em ${target.name} que levou ${damage} de dano. A vida atual de ${target.name} é ${target.hp}.`;
    let effect = rollPercentage(20);
    if (effect === true) {
      target.strength -= 10;
      message += ` &#128148; ${target.name} está congelando e perdeu 10 de strength. Sua strength atual é de ${target.strength}.`;
    }

    return message;
  };
}

function getBlackfire() {
  return function blackfire(caster, target) {
    let name = 'blackfire';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#9889; ${caster.name} acabou de utilizar ${skillName} em ${target.name}.  ${target.name} levou ${damage} de dano em seus hitpoins. A vida atual de ${target.name} é ${target.hp}`;
    return message;
  };
}

function getSmallheal() {
  return function smallheal(caster, target) {
    let name = 'smallheal';
    let skillName = skills[name].name;
    let mana = skills[name].manaCost;
    let heal = getRandomBetween(10, 30);
    let other = otherMember(caster, party);
    let casterHeal = heal + Math.floor(caster.maxHp / 10);
    let otherHeal = heal + Math.floor(other.maxHp / 10);
    caster.hp += casterHeal;
    other.hp += otherHeal;
    caster.mp -= mana;
    let message = `[${turn}]: &#128147; ${caster.name} acabou de utilizar ${skillName}. ${caster.name} foi curado em ${casterHeal} e também curou ${other.name} em ${otherHeal}.`;
    return message;
  };
}

function getSlash() {
  return function slash(caster, target) {
    let name = 'slash';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    damage = damage - targetArmor;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#128481; ${caster.name} acabou de utilizar ${skillName} em ${target.name}.  ${target.name} levou ${damage} de dano em seus hitpoins. A vida atual de ${target.name} é ${target.hp}`;
    return message;
  };
}

function getArmorbreak() {
  return function slash(caster, target) {
    let name = 'armorbreak';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    target.armor -= 3;
    damage = damage - targetArmor;
    damage < 0 ? (damage = 0) : (damage = damage);
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]:&#128148; ${caster.name} se atirou para utilizar ${skillName} em ${target.name} para quebrar sua ${target.armorType}.  ${target.name} levou ${damage} de dano em seus hitpoins e teve sua armadura danificada. A armor atual de ${target.name} é ${target.armor}`;
    return message;
  };
}

function getShielded() {
  return function shielded(caster, target) {
    let name = 'shielded';
    let skillName = skills[name].name;
    let mana = skills[name].manaCost;
    caster.mana -= mana;
    let armorIncrease = getRandomBetween(3, 7);
    caster.armor += armorIncrease;
    let message = `[${turn}]: &#128170; ${caster.name} se concentra para utilizar ${skillName}. Magicamente sua ${caster.armorType} se aprimora em ${armorIncrease} pontos. A armor atual de ${caster.name} é de ${caster.armor}`;
    return message;
  };
}

function getUltraslash() {
  return function ultraslash(caster, target) {
    let name = 'ultraslash';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    damage = damage - targetArmor;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#128481; ${caster.name} acabou de utilizar ${skillName} em ${target.name}.  ${target.name} levou ${damage} de dano em seus hitpoins. A vida atual de ${target.name} é ${target.hp}`;
    return message;
  };
}

function getWarriorrage() {
  return function warriorrage(caster, target) {
    let name = 'warriorrage';
    let skillName = skills[name].name;
    let mana = skills[name].manaCost;
    caster.mana -= mana;
    let message = `[${turn}]: ${caster.name} está sem ferimentos e mais calmo que o Batman, nada acontece.`;
    if (caster.hp < caster.maxHp / 2) {
      let strengthIncrease = getRandomBetween(30, caster.strength);
      caster.strength += strengthIncrease;
      message = `[${turn}]:&#128170 A dor de seus ferimentos afoga ${caster.name} em fúria. ${caster.name} está com sangue nozoi e ganha ${strengthIncrease} de strength`;
    }
    return message;
  };
}

function getMagicsword() {
  return function magicsword(caster, target) {
    let name = 'magicsword';
    let skillName = skills[name].name;
    let max = skills[name].maxDamage.bind(this)();
    let min = skills[name].minDamage.bind(this)();
    let mana = skills[name].manaCost;
    let damage = getRandomBetween(min, max);
    let targetArmor = target.armor;
    damage = damage - targetArmor;
    target.hp -= damage;
    caster.mp -= mana;
    let message = `[${turn}]: &#9889; ${caster.name} acabou de utilizar ${skillName} em ${target.name}.  ${target.name} levou ${damage} de dano em seus hitpoins. A vida atual de ${target.name} é ${target.hp}`;
    return message;
  };
}

//Funções de animação: Aqui ficarão as funções para animar as magias.  Novamente cada função retorna a função da animação, assim como no caso das funções de magia.

function animateThunderbolt() {
  return function thunderboltAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';
    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);
    setTimeout(() => {
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/thunderbolt.gif)';
    }, 1500);
    setTimeout(() => {
      target.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateFirewall() {
  return function firewallAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 0.8;
      target.DOM.effect.style.borderRadius = '40%';
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/firewall.gif)';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateFreeze() {
  return function freezeAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/freeze.gif)';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateBlackfire() {
  return function blackfireAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using-special.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.borderRadius = '100%';
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/black-fire.gif)';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateSmallheal() {
  return function smallhealAnimation(caster, target) {
    let other = otherMember(caster, party);
    target = target;

    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      caster.DOM.effect.style.borderRadius = '0';
      caster.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/small-heal.gif)';
    }, 1500);

    setTimeout(() => {
      other.DOM.effect.style.borderRadius = '0';
      other.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/small-heal.gif)';
    }, 1500);

    setTimeout(() => {
      caster.DOM.effect.style.opacity = 1;
      caster.DOM.effect.style.borderRadius = '0';
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 3000);

    setTimeout(() => {
      other.DOM.effect.style.opacity = 1;
      other.DOM.effect.style.borderRadius = '0';
      other.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateSlash() {
  return function slashAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.borderRadius = '100%';
      target.DOM.effect.style.opacity = 0.6;
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/slash.gif)';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateArmorbreak() {
  return function armorbreakhAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.borderRadius = '100%';
      target.DOM.effect.style.opacity = 0.6;
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/armor-break.gif)';
      target.DOM.effect.style.backgroundSize = 'contain';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
      target.DOM.effect.style.backgroundSize = 'cover';
    }, 3000);
  };
}

function animateshielded() {
  return function shieldedAnimation(caster, target) {
    target = target;
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      caster.DOM.effect.style.borderRadius = '100%';
      caster.DOM.effect.style.opacity = 0.5;
      caster.DOM.effect.style.backgroundPosition = '40% 50%';
      caster.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/shilded.gif)';
    }, 1500);

    setTimeout(() => {
      caster.DOM.effect.style.opacity = 1;
      caster.DOM.effect.style.backgroundSize = 'cover';
      caster.DOM.effect.style.backgroundPosition = '0% 0%';
      caster.DOM.effect.style.borderRadius = '0';
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateUltraslash() {
  return function ultraslashAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using-special.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.borderRadius = '50%';
      target.DOM.effect.style.opacity = 0.7;
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/ultra-slash.gif)';
      target.DOM.effect.style.backgroundPosition = '40% 50%';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
      target.DOM.effect.style.backgroundPosition = '0% 0%';
    }, 4000);
  };
}

function animateWarriorrage() {
  return function warriorrageAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      if (caster.hp < caster.maxHp / 2) {
        caster.DOM.effect.style.borderRadius = '0%';
        caster.DOM.effect.style.opacity = 0.6;
        caster.DOM.effect.style.backgroundImage =
          'url(Images/skill-animations/warrior-rage.gif)';
        caster.DOM.effect.style.backgroundPosition = '0% 35%';
      }
    }, 1500);

    setTimeout(() => {
      caster.DOM.effect.style.opacity = 1;
      caster.DOM.effect.style.borderRadius = '0';
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

function animateMagicsword() {
  return function magicswordAnimation(caster, target) {
    caster.DOM.effect.style.backgroundImage =
      'url(Images/skill-animations/using.gif)';

    setTimeout(() => {
      caster.DOM.effect.style.backgroundImage = 'none';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.borderRadius = '100%';
      target.DOM.effect.style.opacity = 0.8;
      target.DOM.effect.style.backgroundImage =
        'url(Images/skill-animations/magic-sword.gif)';
    }, 1500);

    setTimeout(() => {
      target.DOM.effect.style.opacity = 1;
      target.DOM.effect.style.borderRadius = '0';
      target.DOM.effect.style.backgroundImage = 'none';
    }, 3000);
  };
}

//Monsters: Aqui ficarão os monstros inimigos:

const monsters = {
  dragon: {
    name: 'Dragão',
    class: 'dragon',
    status: 'alive',
    agility: 50,
    inteligence: 30,
    strength: 60,
    maxHp: 1500,
    hp: 1500,
    maxMp: Infinity,
    mp: Infinity,
    armor: 20,
    critChance: 0.1,
    type: 'fire',
    armorType: 'dragonskin',
    equips: [],
    skillsList: [
      'fireclaws',
      'winghurricane',
      'dragonstrongfirebreath',
      'dragonfirebite',
      'firewall',
    ],
    style: {
      icon: 'Images / CharacterIcons / Images/CharacterIcons/Dragon.png',
      color: 'rgb(100, 66, 104)',
      animation: 'Images/character-animations/dragon2.gif',
      attackAnimation: 'Images/character-animations/dragon2.gif',
    },
  },
};

//Funções de início de jogo: Aqui ficam as funções para utilizar na criação de um novo game
//choseClass: Define qual classe os players 1 e 2 será, entre mage e warrior.
const chooseClass = (className) => {
  return Object.assign({}, classes[className]);
};

//chooseEnemy: Define qual monstro será o inimigo. Apenas dragon
const chooseEnemy = (monster) => {
  return Object.assign({}, monsters[monster]);
};

//createDOM1: Cria um objeto com os caminhos da barra de vida, mp, efeitos e animação do personagem 1
const createDOM1 = (player1) => {
  player1['DOM'] = {
    character: document.querySelector('#character1.character'),
    effect: document.querySelector('#character1 .effect'),
    hp: document.querySelector('#character1-bar .hp'),
    hpText: document.querySelector('#character1-bar .hp-text'),
    mp: document.querySelector('#character1-bar .mp'),
    mpText: document.querySelector('#character1-bar .mp-text'),
  };
};

//createDOM2: Cria um objeto com os caminhos da barra de vida, mp, efeitos e animação do personagem 2
const createDOM2 = (player2) => {
  player2['DOM'] = {
    character: document.querySelector('#character2.character'),
    effect: document.querySelector('#character2 .effect'),
    hp: document.querySelector('#character2-bar .hp'),
    hpText: document.querySelector('#character2-bar .hp-text'),
    mp: document.querySelector('#character2-bar .mp'),
    mpText: document.querySelector('#character2-bar .mp-text'),
  };
};

//createDOMenemy: Cria um objeto com os caminhos da barra de vida, efeitos e animação do enemy
const createDOMenemy = (enemy) => {
  enemy['DOM'] = {
    character: document.querySelector('#enemy.monster'),
    effect: document.querySelector('#enemy .effect'),
    hp: document.querySelector('#enemy-bar .hp'),
    hpText: document.querySelector('#enemy-bar .hp-text'),
  };
};

//Funções de jogo: Aqui ficaram as funções para utilizar no game.
//getCards: Pega as cartas do deck de um player
function getCards(player) {
  let cards = [];
  player.skillsList.forEach((skill) => {
    for (let index = 0; index < skills[skill].quantity; index += 1) {
      cards.push(skill);
    }
  });
  return cards;
}

//fixHP função que arruma a width da barra de hp de um personagem.
const fixHP = (character) => {
  if (character.DOM.hp !== undefined) {
    if (character.hp > character.maxHp) {
      character.hp = character.maxHp;
    }
    if (character.hp < 0) {
      character.hp = 0;
    }
    let value = Math.ceil((character.hp / character.maxHp) * 100);
    let width = `${value}%`;
    let text = `HP: ${character.hp}/${character.maxHp}`;
    character.DOM.hp.style.width = width;
    character.DOM.hpText.innerText = text;
  }
};

//fixMP função que arruma a width da barra de mp de um personagem.
const fixMP = (character) => {
  if (character.DOM.mp !== undefined) {
    if (character.mp > character.maxMp) {
      character.mp = character.maxMp;
    }
    if (character.mp < 0) {
      character.mp = 0;
    }
    let value = Math.ceil((character.mp / character.maxMp) * 100);
    let width = `${value}%`;
    let text = `MP: ${character.mp}/${character.maxMp}`;
    character.DOM.mp.style.width = width;
    character.DOM.mpText.innerText = text;
  }
};
//fixBars função que arruma a width das barras de mp e hp de um personagem.
const fixBars = (character) => {
  fixHP(character);
  fixMP(character);
};

//fixAllBars função que arruma a width das barras de mp e hp de uma array de personagems (combat)
const fixAllBars = (battleCharacters) => {
  battleCharacters.forEach((character) => {
    fixBars(character);
  });
  actionsDisplay.innerText = actions;
};

//useSkill: Função para usar uma magia específica. Já poe o .bind . OBS: O .bind é porque em skills o máximo e mínimo retornam this(). Checa mana do personagem e ações. SkillName é uma string

function useSkill(skillName, caster, target) {
  let message;
  if (caster.mp < skills[skillName].manaCost) {
    message = `[${turn}]: ${caster.name} não possui mana para utilizar ${skills[skillName].name}`;
    //animação sem mana
  } else if (actions < skills[skillName].actions) {
    alert(`Você não possui ações para utilizar ${skills[skillName].name}`);
  } else {
    message = skills[skillName].skill.bind(caster)(caster, target);
    skills[skillName].animation(caster, target);
    actions -= skills[skillName].actions;
  }
  setTimeout(() => {
    writeBattle(message);
    fixAllBars(combat);
  }, 3000);
}

//getPartyCardsArray: retorna uma array de objetos, com o primeira key player que é o indice do personagem na party e o segundo parametro card que é o nome da carta. Utiliza a skillList do personagem para fazer.
const getPartyCardsArray = () => {
  let array = [];

  party.forEach((player, pIndex) => {
    let pArray = getCards(player);
    pArray.forEach((card) => {
      let obj = {};
      obj.player = pIndex;
      obj.card = card;
      array.push(obj);
    });
  });

  return array;
};

//createButtonCard : Função que com o elemento botão DOM (carta no jogo), nome da magia e personagem. Cria o estilo do botão. Cria apenas o estilo da card .card
function createButtonCard(buttonDOM, skillName, caster) {
  let skill = skills[skillName];
  buttonDOM.classList = 'card unturned';
  buttonDOM.style.backgroundColor = caster.style.color;
  buttonDOM.children[0].innerText = skill.name;
  buttonDOM.children[1].src = skill.style.icon;
  buttonDOM.children[2].children[0].innerText = skill.actions;
  buttonDOM.children[2].children[1].innerText = skill.manaCost;
  buttonDOM.children[2].children[2].innerText = skill.type;
}

// Função que cria, além do estilo utilizando a createButtonCard, cria a funcionalidade de skill no botão.
function createButtonSkill(buttonDOM, skillName, caster) {
  createButtonCard(buttonDOM, skillName, caster);
  buttonDOM.addEventListener('click', function func() {
    if (actions >= skills[skillName].actions) {
      buttonDOM.classList = 'card turned';
      buttonDOM.removeEventListener('click', func);
    }
    useSkill(skillName, caster, enemy);
  });
}

// Função que cria um botão com um personagem e skills aleatórios a partir da função getPartyCardsArray. Pega player e magia aleatória que está na skillList do personagem
function createButtonRandonPartySkill(buttonDOM) {
  let array = getPartyCardsArray(party);
  let randomIndex = getRandomBetween(0, array.length - 1);
  let partyObj = array[randomIndex];
  let caster = party[partyObj.player];
  let skillName = partyObj.card;

  createButtonSkill(buttonDOM, skillName, caster);
}

//Função que para todos os botões(cartas) viradas (.turned) cria estilo e funcionalidade de magia aleatória com createButtonRandomPartySkill
function unturnButtons() {
  let buttons = document.querySelectorAll('#hand .card.turned');
  buttons.forEach((button) => {
    createButtonRandonPartySkill(button);
  });
}

//Seletores HTML: Aqui ficarão alguns seletores HTML para utilização no jogo.
const battleLog = document.querySelector('#console');
const actionsDisplay = document.querySelector('#actions');
//cardsInHand: Seletor para as cartas (3) que são a mão do jogador.
let cardsInHand = document.querySelectorAll('#hand .card');

//Inicio de jogo: Aqui é onde o jogo é iniciado e personagens são criados.

//Começa a contagem de turnos e ações restantes:
let turn = 1;
let actions = 2;

//Cria os personagens 1 e 2 e inimigo
const player1 = chooseClass('warrior');
const player2 = chooseClass('mage');
const enemy = chooseEnemy('dragon');

//Cria objetos DOM dos player 1 e 2
createDOM1(player1);
createDOM2(player2);

//Cria objetos DOM do enemy
createDOMenemy(enemy);

//Cria as arrays de party(aliados) e combat(aliados e inimigo), além da array de deadPlayers
let party = [player1, player2];
let combat = [player1, player2, enemy];
let deadPlayers = [];

//Arruma as barras de vida
fixAllBars(combat);

//Vira as cartas .turned
unturnButtons();
