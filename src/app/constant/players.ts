import {RoleEnum} from "../enum/role.enum";
import {HeroModel} from "../model/hero.model";
import {AffiliationEnum} from "../enum/affiliation.enum";
import {SideEnum} from "../enum/side.enum";
import {AttackRangeEnum} from "../enum/attackRange.enum";
import {HeroTypeEnum} from "../enum/hero-type.enum";
import {NumberOfDiceEnum} from "../enum/number-of-dice.enum";
import {ThrowsEnum} from "../enum/throws.enum";

export const Players: HeroModel[] = [
  {
    "id": "17_6Kmol4HJh3bW_RyOBFmVkqI894KRTW",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Iceman",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.SPEED, RoleEnum.CC ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1UXLi5AVp2QuqdbQR82zyX6s5uHm8vOwc",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Cyclops",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION,RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1QBwWSy6u1c8GkkWBKSjpbzVW2MA9rvyZ",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Dark Phoenix",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.UTILITY, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1sHMmpL1aN3DfpkECWlHbSs65vG5OAOmM",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Sabertooth",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1wlyaW5i4Vb202lv-ZWlhg2NIJAXKX-kJ",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Storm",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1TflW7sVCFVGGktNr3VcDInENdMQiwh0Y",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Magneto",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.UTILITY, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "10YDTE2-KNV3WEg0J4GWb0jsNtt3S5Zyq",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Wolverine",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1zmDLBgIZ6sIAre3PxSUS6JuPIFMS-65C",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Mystique",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1_IxQO7_8dOu29BK0ruHJasEojJblAKd_",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Colossus",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.TANK, RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "12kx9WGx28Mqjot6EQEr5D2W-SRgHx1OL",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Rogue",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1eQobDvusdD1JLBq06r-4h1eoHhJij56J",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Psylocke",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1AwyM0yLZbJ7RL09QF7VchZHvHbj9rI0L",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Juggernaut",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.TANK],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "18HuJehbkwjfp5Sez9OmEREZQ3Xy3UoKh",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "She-Hulk",
    "affiliation": AffiliationEnum.HEROES_FOR_HIRE,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1e15Et7jE7iasAuQXLMmbrQiZcyFFVoXB",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Thanos",
    "affiliation": AffiliationEnum.WITHOUT_AFFILIATION,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION,RoleEnum.UTILITY, RoleEnum.CC ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1RVKv1tZPLvbh9Rglv_uo6CzafmW73T6w",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "The Thing",
    "affiliation": AffiliationEnum.FANTASTIC_FOUR,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1PDlG4KV7BfDd95ZtKtoaBIIsc1sfTyy7",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Mister Fantastic",
    "affiliation": AffiliationEnum.FANTASTIC_FOUR,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1NBmbJAZssGSY5gmLAEK6TWdRi6_zeQgI",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Scorpion",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1XqWyd0p9zccO2nHtCDHpRksHq8_zAkz1",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Storm",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.UTILITY, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1j-PGFB0-dEgFuMp3b0llyzC6YgwgWxfa",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Human Torch",
    "affiliation": AffiliationEnum.FANTASTIC_FOUR,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1ASM8h2_HZ1gKih6oQ2UN17IlVndWt2Oq",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Multiple Man",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.UTILITY, RoleEnum.SPEED ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1fhvJZHrZS6yMKIP0Jk7cF5wofO-JUt37",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Mystique",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "10GrQpZbLDQ1UoPCqPc_Q-4ygHurylZ_c",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Professor X",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_1,
    "throws": ThrowsEnum.THROWS_2
  },
  {
    "id": "1JvilXJ4lld3-zWGI8acubPkHGw8lBF6f",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Black Widow",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "14JIRNAVZRMdeCOE4uS6ejPUilasC6QTg",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Mantis",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },{
    "id": "1M6clDn_7TgmH3Qw7uF0mcWkZvXM8OUW3",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Invisible Woman",
    "affiliation": AffiliationEnum.FANTASTIC_FOUR,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY, RoleEnum.CC ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1QzkcsVfDuYpM0-2jTpGKkf0fbLjyvqqs",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Mysterio",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.CC,RoleEnum.DMG_BOOST, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1zBItvTzh_jPrWCWh1ycOVHcdshjL7Jzk",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Venom",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1O3KJpbChc3Jk9plIYThMServMAXq4aNp",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Kingpin",
    "affiliation": AffiliationEnum.HEROES_FOR_HIRE,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.UTILITY, RoleEnum.FREE_ACTION, RoleEnum.CC ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1q0Df-4TzvEOob64nElef1rxzBmP2TOEs",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Wolverine",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1bzz1HvFupZdJx7lHwVebCa33AigqlSWL",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Winter Soldier",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1yWbyuKDX_z-rwSKYmYkvdDaJ_X3nPznt",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Thor",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION, RoleEnum.SPEED ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1NDFfC8j2XRLdiGX-d16khyoyYu-j1i1F",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Scarlet Witch",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1781xsjNwxuQ5tDjdrBmeDqJGmOSEEjB7",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Rogue",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.SPEED, RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1XnGUaQWMpjpxWnTO5xnnrCW2Hh4fiGFl",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Nova",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1zMFAEPwjTOMGZVXNutmCgDYYUU0nlAvy",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Nightcrawler",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1jnWoXMbpIB9rHN7k0f8yEKtj8bpomhPe",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Ms. Marvel",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.UTILITY, RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },{
    "id": "1JB0aFkGo9KxZvZr7ChVRzXq_uDtT_W4c",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Moon Knight",
    "affiliation": AffiliationEnum.WITHOUT_AFFILIATION,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1WZPoeF4tJhSiq_6IIsst_ZbXGfQthFu5",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Magneto",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION,RoleEnum.CC, RoleEnum.DMG_BOOST, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1g9I71wGhUWhMfessmmTa3J4Ug1qQQIID",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Luke Cage",
    "affiliation": AffiliationEnum.HEROES_FOR_HIRE,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.TANK, RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1gjxskB7B_2JJsaPzYS-REzlUgalB1VxB",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Kraven",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION, RoleEnum.SPEED ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "12Vanprq6_6DnlEDl4taRmiWbll4CUPOj",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Daredevil",
    "affiliation": AffiliationEnum.HEROES_FOR_HIRE,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.CC, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1fUOgNb1royKRPR7dKGxYC5iJgY0P4vFz",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Doctor Strange",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.UTILITY, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1vEgpjHyxV-pnzyIdqXA0MIwjUTDeHmWo",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Giant-man",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.SPEED, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1iyw3WZJZFvftpK1G2DcUa0HVkHbBiZrP",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Gamora",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.SPEED, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1tq8lI9wm4yi-jLEzSampTlIUHzLnvDmX",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Gambit",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1lGH8kumXSrph2CnoaHl6VDFWMSzuhIKy",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Elektra",
    "affiliation": AffiliationEnum.WITHOUT_AFFILIATION,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "111CS8932BgEoSOid24pkW1sdEPTVDLAD",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Colossus",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.TANK, RoleEnum.SPEED, RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST, RoleEnum.CC ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1j4jXDIPKWe7ePxOKv4H5QsXnrMlDdfsd",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Bullseye",
    "affiliation": AffiliationEnum.HEROES_FOR_HIRE,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },{
    "id": "1hko_yLIUtK_lRupHXuNlxPxVTdCwpM2p",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Black Cat",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1kO98LGuwJVwpn5jV7Rl8xU9r4n1fbJX2",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Beast",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.UTILITY, RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  }

  ,
  {
    "id": "1yt6E4otC5eLb1AhYPwtM_ftm-NPf9taL",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Nebula",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },{
    "id": "19n7Ur1cQvPRKV7rMRHWbm5jo9omUr4T_",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Drax",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.SPEED, RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1eV3kJj8MxXGXAGxEpCq_DLEVZl5BKFcZ",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Rocket",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1DGy32ARCr3luvUecv64_legm_4PoSdpD",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Star-Lord",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.SPEED, RoleEnum.DMG_BOOST, RoleEnum.UTILITY],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },{
    "id": "1VV2lKE7mT7Llr_1MLMOvqajTuoe-QONz",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Loki",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.UTILITY, RoleEnum.CC, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1QK_qMzUtAUS6bnE9_mBy9MCbcaESu6Qc",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Falcon",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.SPEED, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1FzmO0166jkzj0k7RbtbGsYhmDoDwtHey",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Quicksilver",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.SPEED, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },{
    "id": "1y999ELhJ9FY2vGjFOZ139cUHmGAES9hD",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Hawkeye",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.UTILITY, RoleEnum.DMG_BOOST ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1X34lr2hCGiG5esM_dMzeqZLq84uG-lnr",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Green Goblin",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.SPEED, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1STQcOEaP5_Q3U-OxktG8wWR9kr823f_o",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Electro",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.SPEED, RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },{
    "id": "1uWJFzs6cHzpzytGUEOFw2IDOqnIlppy6",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Lizard",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG_BOOST, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1BWxc9lneNAm-MaKXBYNyrrHG026gr7bD",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Rhino",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.TANK, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1RDW_i_OhVwlVMbXdxPpAr1qNQ_zoALkm",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Doctor Octopus",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY, RoleEnum.CC, RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },{
    "id": "1jq_cDhzArIUpYMCBGyudvAIh36NqZ9K8",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Vulture",
    "affiliation": AffiliationEnum.SPIDERMAN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.SPEED, RoleEnum.FREE_ACTION ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "17uHroVkCJlOs5VWdGrnygbGPcyamZ7Nm",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Super-Skrull",
    "affiliation": AffiliationEnum.FANTASTIC_FOUR,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.UTILITY, RoleEnum.CC, RoleEnum.FREE_ACTION],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1mfvmCmqgEFUz-wz8K2000qDRKASe3ZIc",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Black Bolt",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.FREE_ACTION, RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },{
    "id": "13vAv-Ab3T08Rxww2e4NSLfcmvVaZjDFa",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Namor",
    "affiliation": AffiliationEnum.AVENGERS,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.SPEED, RoleEnum.FREE_ACTION, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1dInJD_NJudg5UiXPCmRhmidhL0nKCdZN",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Doctor Doom",
    "affiliation": AffiliationEnum.GUARDIANS,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.UTILITY, RoleEnum.DMG_BOOST],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  }
]


