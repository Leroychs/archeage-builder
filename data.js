// База данных предметов ArcheAge
const itemsDatabase = {
    // Гравировки
    engravings: {
        rubyMeleeAttack: {
            name: "Рубин ближнего боя",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    meleeAttack: 3.5
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    meleeAttack: 5
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    meleeAttack: 150
                }
            }
        },
        rubyRangedAttack: {
            name: "Рубин дальнего боя",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    rangedAttack: 3.5
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    rangedAttack: 5
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    rangedAttack: 150
                }
            }
        },
        rubySpellPower: {
            name: "Рубин магической силы",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    spellPower: 2.8
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    spellPower: 4
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    spellPower: 150
                }
            }
        },
        rubyHealingPower: {
            name: "Рубин целительной силы",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    healingPower: 2.8
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    healingPower: 4
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    healingPower: 150
                }
            }
        },
        rubyMeleeCrit: {
            name: "Рубиновая гравировка вихря смерти",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    meleeCritDamage: 2.8
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    meleeCritDamage: 4.2
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    meleeCritDamage: 75
                }
            }
        },
        rubyRangedCrit: {
            name: "Рубин критического урона (дальний)",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    rangedCritDamage: 2.8
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    rangedCritDamage: 4.2
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    rangedCritDamage: 75
                }
            }
        },
        rubySpellCrit: {
            name: "Рубин критического урона (магия)",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    spellCritDamage: 2.8
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    spellCritDamage: 4.2
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    spellCritDamage: 75
                }
            }
        },
        rubyHealingCrit: {
            name: "Рубин критического лечения",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    healingCritPower: 2.8
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    healingCritPower: 4.2
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    healingCritPower: 75
                }
            }
        },
        rubyArmorPen: {
            name: "Рубин пробивания брони",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    armorPenetration: 32
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    armorPenetration: 114
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    armorPenetration: 300
                }
            }
        },
        rubyResistIgnore: {
            name: "Рубин игнорирования сопротивления",
            type: "ruby",
            tiers: {
                t1: {
                    image: "engravings/t1_ruby.png",
                    grade: "rare",
                    resistanceIgnore: 32
                },
                t2: {
                    image: "engravings/t2_ruby.png",
                    grade: "unique",
                    resistanceIgnore: 114
                },
                t3: {
                    image: "engravings/t3_ruby.png",
                    grade: "unique",
                    resistanceIgnore: 300
                }
            }
        },
        emeraldHeraldDragon: {
            name: "Изумрудная гравировка геральдического дракона",
            type: "emerald",
            tiers: {
                t1: {
                    image: "engravings/t1_emerald.png",
                    grade: "rare",
                    critResistance: 367.02
                },
                t2: {
                    image: "engravings/t2_emerald.png",
                    grade: "unique",
                    critResistance: 480.0
                },
                t3: {
                    image: "engravings/t3_emerald.png",
                    grade: "unique",
                    critResistance: 528.0
                }
            }
        },
        emeraldHeraldLion: {
            name: "Изумрудная гравировка геральдического льва",
            type: "emerald",
            tiers: {
                t1: {
                    image: "engravings/t1_emerald.png",
                    grade: "rare",
                    pvpResistance: 224.03
                },
                t2: {
                    image: "engravings/t2_emerald.png",
                    grade: "unique",
                    pvpResistance: 320.0
                },
                t3: {
                    image: "engravings/t3_emerald.png",
                    grade: "unique",
                    pvpResistance: 354.0
                }
            }
        },
        emeraldKnightArmor: {
            name: "Изумрудная гравировка рыцарского доспеха",
            type: "emerald",
            tiers: {
                t1: {
                    image: "engravings/t1_emerald.png",
                    grade: "rare",
                    tacticalPreparation: 179.04
                },
                t2: {
                    image: "engravings/t2_emerald.png",
                    grade: "unique",
                    tacticalPreparation: 330.0
                },
                t3: {
                    image: "engravings/t3_emerald.png",
                    grade: "unique",
                    tacticalPreparation: 500.0
                }
            }
        },
        emeraldKnightHelmet: {
            name: "Изумрудная гравировка рыцарского шлема",
            type: "emerald",
            tiers: {
                t1: {
                    image: "engravings/t1_emerald.png",
                    grade: "rare",
                    tacticalPreparation: 143.0
                },
                t2: {
                    image: "engravings/t2_emerald.png",
                    grade: "unique",
                    tacticalPreparation: 264.0
                },
                t3: {
                    image: "engravings/t3_emerald.png",
                    grade: "unique",
                    tacticalPreparation: 400.0
                }
            }
        }
    },
    
    // Лунные руны
    lunarRunes: {
        starOfIcyRage: {
            id: 1,
            name: "Звезда ледяного гнева",
            type: "lunarRunes",
            image: "runes/icy_rage_star.png",
            grade: "rare",
            stats: {
                meleeCritDamagePercent: 16.0
            }
        }
    },
    
    // Перчатки
    gloves: {
        ramianPlateGloves: {
            id: 1,
            name: "Рамианские латные перчатки",
            type: "gloves",
            image: "gloves/plate/plate_gloves1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 794, resistance: 72, equipmentRating: 43.68 },
                uncommon: { defense: 833, resistance: 75, equipmentRating: 45.8 },
                rare: { defense: 873, resistance: 79, equipmentRating: 48 },
                unique: { defense: 913, resistance: 83, equipmentRating: 50.2 },
                epic: { defense: 952, resistance: 86, equipmentRating: 52.4 },
                legendary: { defense: 992, resistance: 90, equipmentRating: 54.6 },
                relic: { defense: 1072, resistance: 97, equipmentRating: 58.9 },
                wonders: { defense: 1191, resistance: 108, equipmentRating: 65.5 },
                tales: { defense: 1349, resistance: 122, equipmentRating: 74.2 },
                legends: { defense: 1508, resistance: 137, equipmentRating: 82.9 },
                myths: { defense: 1588, resistance: 144, equipmentRating: 87.3 },
                twelve: { defense: 1667, resistance: 151, equipmentRating: 91.7 }
            },
            
        },
        ramianLeatherGloves: {
            id: 2,
            name: "Рамианские кожаные перчатки",
            type: "gloves",
            image: "gloves/leather/leather_gloves1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 433, resistance: 433, equipmentRating: 43.68 },
                uncommon: { defense: 454, resistance: 454, equipmentRating: 45.8 },
                rare: { defense: 476, resistance: 476, equipmentRating: 48 },
                unique: { defense: 498, resistance: 498, equipmentRating: 50.2 },
                epic: { defense: 519, resistance: 519, equipmentRating: 52.4 },
                legendary: { defense: 541, resistance: 541, equipmentRating: 54.6 },
                relic: { defense: 584, resistance: 584, equipmentRating: 58.9 },
                wonders: { defense: 649, resistance: 649, equipmentRating: 65.5 },
                tales: { defense: 736, resistance: 736, equipmentRating: 74.2 },
                legends: { defense: 822, resistance: 822, equipmentRating: 82.9 },
                myths: { defense: 866, resistance: 866, equipmentRating: 87.3 },
                twelve: { defense: 909, resistance: 909, equipmentRating: 91.7 }
            },
            
        },
        ramianClothGloves: {
            id: 3,
            name: "Рамианские матерчатые перчатки",
            type: "gloves",
            image: "gloves/cloth/cloth_gloves1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 216, resistance: 649, equipmentRating: 43.68 },
                uncommon: { defense: 227, resistance: 682, equipmentRating: 45.8 },
                rare: { defense: 238, resistance: 714, equipmentRating: 48 },
                unique: { defense: 249, resistance: 747, equipmentRating: 50.2 },
                epic: { defense: 259, resistance: 779, equipmentRating: 52.4 },
                legendary: { defense: 270, resistance: 812, equipmentRating: 54.6 },
                relic: { defense: 292, resistance: 877, equipmentRating: 58.9 },
                wonders: { defense: 324, resistance: 974, equipmentRating: 65.5 },
                tales: { defense: 368, resistance: 1104, equipmentRating: 74.2 },
                legends: { defense: 411, resistance: 1234, equipmentRating: 82.9 },
                myths: { defense: 433, resistance: 1299, equipmentRating: 87.3 },
                twelve: { defense: 454, resistance: 1364, equipmentRating: 91.7 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateGloves: {
            id: 4,
            name: "Искаженные рамианские латные перчатки",
            type: "gloves",
            image: "gloves/plate/plate_gloves2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 902, resistance: 82, equipmentRating: 49.1 },
                uncommon: { defense: 947, resistance: 86, equipmentRating: 51.6 },
                rare: { defense: 992, resistance: 90, equipmentRating: 54 },
                unique: { defense: 1037, resistance: 94, equipmentRating: 56.5 },
                epic: { defense: 1082, resistance: 98, equipmentRating: 58.9 },
                legendary: { defense: 1127, resistance: 102, equipmentRating: 61.4 },
                relic: { defense: 1218, resistance: 110, equipmentRating: 66.3 },
                wonders: { defense: 1353, resistance: 123, equipmentRating: 73.7 },
                tales: { defense: 1533, resistance: 139, equipmentRating: 83.5 },
                legends: { defense: 1714, resistance: 155, equipmentRating: 93.3 },
                myths: { defense: 1804, resistance: 164, equipmentRating: 98.2 },
                twelve: { defense: 1894, resistance: 172, equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherGloves: {
            id: 5,
            name: "Искаженные рамианские кожаные перчатки",
            type: "gloves",
            image: "gloves/leather/leather_gloves2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 492, resistance: 492, equipmentRating: 49.1 },
                uncommon: { defense: 516, resistance: 516, equipmentRating: 51.6 },
                rare: { defense: 541, resistance: 541, equipmentRating: 54 },
                unique: { defense: 566, resistance: 566, equipmentRating: 56.5 },
                epic: { defense: 590, resistance: 590, equipmentRating: 58.9 },
                legendary: { defense: 615, resistance: 615, equipmentRating: 61.4 },
                relic: { defense: 664, resistance: 664, equipmentRating: 66.3 },
                wonders: { defense: 738, resistance: 738, equipmentRating: 73.7 },
                tales: { defense: 836, resistance: 836, equipmentRating: 83.5 },
                legends: { defense: 935, resistance: 935, equipmentRating: 93.3 },
                myths: { defense: 984, resistance: 984, equipmentRating: 98.2 },
                twelve: { defense: 1033, resistance: 1033, equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        distortedRamianClothGloves: {
            id: 6,
            name: "Искаженные рамианские матерчатые перчатки",
            type: "gloves",
            image: "gloves/cloth/cloth_gloves2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 246, resistance: 738, equipmentRating: 49.1 },
                uncommon: { defense: 258, resistance: 775, equipmentRating: 51.6 },
                rare: { defense: 270, resistance: 812, equipmentRating: 54 },
                unique: { defense: 283, resistance: 849, equipmentRating: 56.5 },
                epic: { defense: 295, resistance: 885, equipmentRating: 58.9 },
                legendary: { defense: 307, resistance: 922, equipmentRating: 61.4 },
                relic: { defense: 332, resistance: 996, equipmentRating: 66.3 },
                wonders: { defense: 369, resistance: 1107, equipmentRating: 73.7 },
                tales: { defense: 418, resistance: 1255, equipmentRating: 83.5 },
                legends: { defense: 467, resistance: 1402, equipmentRating: 93.3 },
                myths: { defense: 492, resistance: 1476, equipmentRating: 98.2 },
                twelve: { defense: 516, resistance: 1550, equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateGloves: {
            id: 7,
            name: "Проклятые рамианские латные перчатки",
            type: "gloves",
            image: "gloves/plate/plate_gloves3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 980, resistance: 89, equipmentRating: 53 },
                uncommon: { defense: 1029, resistance: 93, equipmentRating: 55.6 },
                rare: { defense: 1078, resistance: 98, equipmentRating: 58.3 },
                unique: { defense: 1127, resistance: 102, equipmentRating: 61 },
                epic: { defense: 1176, resistance: 106, equipmentRating: 63.6 },
                legendary: { defense: 1225, resistance: 111, equipmentRating: 66.3 },
                relic: { defense: 1323, resistance: 120, equipmentRating: 71.6 },
                wonders: { defense: 1470, resistance: 133, equipmentRating: 79.5 },
                tales: { defense: 1666, resistance: 151, equipmentRating: 90.1 },
                legends: { defense: 1863, resistance: 169, equipmentRating: 100.7 },
                myths: { defense: 1961, resistance: 178, equipmentRating: 106 },
                twelve: { defense: 2059, resistance: 187, equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherGloves: {
            id: 8,
            name: "Проклятые рамианские кожаные перчатки",
            type: "gloves",
            image: "gloves/leather/leather_gloves3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 534, resistance: 534, equipmentRating: 53 },
                uncommon: { defense: 561, resistance: 561, equipmentRating: 55.6 },
                rare: { defense: 588, resistance: 588, equipmentRating: 58.3 },
                unique: { defense: 615, resistance: 615, equipmentRating: 61 },
                epic: { defense: 641, resistance: 641, equipmentRating: 63.6 },
                legendary: { defense: 668, resistance: 668, equipmentRating: 66.3 },
                relic: { defense: 722, resistance: 722, equipmentRating: 71.6 },
                wonders: { defense: 802, resistance: 802, equipmentRating: 79.5 },
                tales: { defense: 909, resistance: 909, equipmentRating: 90.1 },
                legends: { defense: 1016, resistance: 1016, equipmentRating: 100.7 },
                myths: { defense: 1069, resistance: 1069, equipmentRating: 106 },
                twelve: { defense: 1123, resistance: 1123, equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        cursedRamianClothGloves: {
            id: 9,
            name: "Проклятые рамианские матерчатые перчатки",
            type: "gloves",
            image: "gloves/cloth/cloth_gloves3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 267, resistance: 802, equipmentRating: 53 },
                uncommon: { defense: 280, resistance: 842, equipmentRating: 55.6 },
                rare: { defense: 294, resistance: 882, equipmentRating: 58.3 },
                unique: { defense: 307, resistance: 922, equipmentRating: 61 },
                epic: { defense: 320, resistance: 962, equipmentRating: 63.6 },
                legendary: { defense: 334, resistance: 1002, equipmentRating: 66.3 },
                relic: { defense: 361, resistance: 1083, equipmentRating: 71.6 },
                wonders: { defense: 401, resistance: 1203, equipmentRating: 79.5 },
                tales: { defense: 454, resistance: 1363, equipmentRating: 90.1 },
                legends: { defense: 508, resistance: 1524, equipmentRating: 100.7 },
                myths: { defense: 534, resistance: 1604, equipmentRating: 106 },
                twelve: { defense: 561, resistance: 1684, equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        primalRamianPlateGloves: {
            id: 10,
            name: "Изначальные рамианские латные перчатки",
            type: "gloves",
            image: "gloves/plate/plate_gloves4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 996, resistance: 90, equipmentRating: 53.8 },
                uncommon: { defense: 1045, resistance: 95, equipmentRating: 56.5 },
                rare: { defense: 1095, resistance: 99, equipmentRating: 59.2 },
                unique: { defense: 1145, resistance: 104, equipmentRating: 61.8 },
                epic: { defense: 1195, resistance: 108, equipmentRating: 64.5 },
                legendary: { defense: 1245, resistance: 113, equipmentRating: 67.2 },
                relic: { defense: 1344, resistance: 122, equipmentRating: 72.6 },
                wonders: { defense: 1494, resistance: 135, equipmentRating: 80.7 },
                tales: { defense: 1693, resistance: 153, equipmentRating: 91.4 },
                legends: { defense: 1892, resistance: 172, equipmentRating: 102.2 },
                myths: { defense: 1992, resistance: 181, equipmentRating: 107.6 },
                twelve: { defense: 2091, resistance: 190, equipmentRating: 113 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherGloves: {
            id: 11,
            name: "Изначальные рамианские кожаные перчатки",
            type: "gloves",
            image: "gloves/leather/leather_gloves4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 543, resistance: 543, equipmentRating: 53.8 },
                uncommon: { defense: 570, resistance: 570, equipmentRating: 56.5 },
                rare: { defense: 597, resistance: 598, equipmentRating: 59.2 },
                unique: { defense: 624, resistance: 624, equipmentRating: 61.8 },
                epic: { defense: 652, resistance: 652, equipmentRating: 64.5 },
                legendary: { defense: 679, resistance: 679, equipmentRating: 67.2 },
                relic: { defense: 733, resistance: 733, equipmentRating: 72.6 },
                wonders: { defense: 815, resistance: 815, equipmentRating: 80.7 },
                tales: { defense: 923, resistance: 923, equipmentRating: 91.4 },
                legends: { defense: 1032, resistance: 1032, equipmentRating: 102.2 },
                myths: { defense: 1086, resistance: 1086, equipmentRating: 107.6 },
                twelve: { defense: 1141, resistance: 1141, equipmentRating: 113 }
            },

        },
        primalRamianClothGloves: {
            id: 12,
            name: "Изначальные рамианские матерчатые перчатки",
            type: "gloves",
            image: "gloves/cloth/cloth_gloves4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 271, resistance: 815, equipmentRating: 53.8 },
                uncommon: { defense: 285, resistance: 855, equipmentRating: 56.5 },
                rare: { defense: 298, resistance: 896, equipmentRating: 59.2 },
                unique: { defense: 312, resistance: 937, equipmentRating: 61.8 },
                epic: { defense: 326, resistance: 978, equipmentRating: 64.5 },
                legendary: { defense: 339, resistance: 1018, equipmentRating: 67.2 },
                relic: { defense: 366, resistance: 1100, equipmentRating: 72.6 },
                wonders: { defense: 407, resistance: 1222, equipmentRating: 80.7 },
                tales: { defense: 461, resistance: 1385, equipmentRating: 91.4 },
                legends: { defense: 516, resistance: 1548, equipmentRating: 102.2 },
                myths: { defense: 543, resistance: 1630, equipmentRating: 107.6 },
                twelve: { defense: 570, resistance: 1711, equipmentRating: 113 }
            },
            
        },
        upgradedRamianPlateGloves: {
            id: 13,
            name: "Обновленные рамианские латные перчатки",
            type: "gloves",
            image: "gloves/plate/plate_gloves5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1011, resistance: 91, equipmentRating: 54.6 },
                uncommon: { defense: 1062, resistance: 96, equipmentRating: 57.3 },
                rare: { defense: 1113, resistance: 101, equipmentRating: 60 },
                unique: { defense: 1163, resistance: 105, equipmentRating: 62.7 },
                epic: { defense: 1214, resistance: 110, equipmentRating: 65.5 },
                legendary: { defense: 1264, resistance: 114, equipmentRating: 68.2 },
                relic: { defense: 1366, resistance: 124, equipmentRating: 73.7 },
                wonders: { defense: 1517, resistance: 137, equipmentRating: 81.9 },
                tales: { defense: 1720, resistance: 156, equipmentRating: 92.8 },
                legends: { defense: 1922, resistance: 174, equipmentRating: 103.7 },
                myths: { defense: 2023, resistance: 183, equipmentRating: 109.2 },
                twelve: { defense: 2124, resistance: 193, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherGloves: {
            id: 14,
            name: "Обновленные рамианские кожаные перчатки",
            type: "gloves",
            image: "gloves/leather/leather_gloves5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 551, resistance: 551, equipmentRating: 54.6 },
                uncommon: { defense: 579, resistance: 579, equipmentRating: 57.3 },
                rare: { defense: 607, resistance: 607, equipmentRating: 60 },
                unique: { defense: 634, resistance: 634, equipmentRating: 62.7 },
                epic: { defense: 662, resistance: 662, equipmentRating: 65.5 },
                legendary: { defense: 689, resistance: 689, equipmentRating: 68.2 },
                relic: { defense: 745, resistance: 745, equipmentRating: 73.7 },
                wonders: { defense: 827, resistance: 827, equipmentRating: 81.9 },
                tales: { defense: 938, resistance: 938, equipmentRating: 92.8 },
                legends: { defense: 1048, resistance: 1048, equipmentRating: 103.7 },
                myths: { defense: 1103, resistance: 1103, equipmentRating: 109.2 },
                twelve: { defense: 1159, resistance: 1159, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        upgradedRamianClothGloves: {
            id: 15,
            name: "Обновленные рамианские матерчатые перчатки",
            type: "gloves",
            image: "gloves/cloth/cloth_gloves5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 275, resistance: 827, equipmentRating: 54.6 },
                uncommon: { defense: 289, resistance: 869, equipmentRating: 57.3 },
                rare: { defense: 303, resistance: 910, equipmentRating: 60 },
                unique: { defense: 317, resistance: 952, equipmentRating: 62.7 },
                epic: { defense: 331, resistance: 993, equipmentRating: 65.5 },
                legendary: { defense: 344, resistance: 1034, equipmentRating: 68.2 },
                relic: { defense: 372, resistance: 1117, equipmentRating: 73.7 },
                wonders: { defense: 413, resistance: 1241, equipmentRating: 81.9 },
                tales: { defense: 469, resistance: 1407, equipmentRating: 92.8 },
                legends: { defense: 524, resistance: 1573, equipmentRating: 103.7 },
                myths: { defense: 551, resistance: 1655, equipmentRating: 109.2 },
                twelve: { defense: 579, resistance: 1738, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        magisterskielatnyeperchatkiernardskogoarhivariusa: {
            id: 16,
            name: "Магистерские латные перчатки эрнардского архивариуса",
            type: "gloves",
            image: "gloves/plate/plate_magistr1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 980, resistance: 89, equipmentRating: 53.00, stamina: 37, strength: 25 },
                uncommon: { defense: 1029, resistance: 93, equipmentRating: 55.65, stamina: 40, strength: 27 },
                rare: { defense: 1078, resistance: 98, equipmentRating: 58.30, stamina: 43, strength: 29 },
                unique: { defense: 1127, resistance: 102, equipmentRating: 60.95, stamina: 46, strength: 31 },
                epic: { defense: 1176, resistance: 107, equipmentRating: 63.60, stamina: 50, strength: 34 },
                legendary: { defense: 1225, resistance: 111, equipmentRating: 66.25, stamina: 52, strength: 35 },
                relic: { defense: 1323, resistance: 120, equipmentRating: 71.55, stamina: 56, strength: 38 },
                wonders: { defense: 1470, resistance: 134, equipmentRating: 79.50, stamina: 60, strength: 41 },
                tales: { defense: 1666, resistance: 151, equipmentRating: 90.10, stamina: 64, strength: 43 },
                legends: { defense: 1862, resistance: 169, equipmentRating: 100.70, stamina: 69, strength: 47 },
                myths: { defense: 1960, resistance: 178, equipmentRating: 106.00, stamina: 75, strength: 51 },
                twelve: { defense: 2058, resistance: 187, equipmentRating: 111.30, stamina: 79, strength: 54 }
            },
            engravingSlots: 0
        },
        magisterskiematerchatyeperchatkiernardskogomnemonika: {
            id: 17,
            name: "Магистерские матерчатые перчатки эрнардского мнемоника",
            type: "gloves",
            image: "gloves/cloth/cloth_magistr1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 267, resistance: 802, equipmentRating: 53.04, stamina: 25, intellect: 37 },
                uncommon: { defense: 280, resistance: 842, equipmentRating: 55.69, stamina: 27, intellect: 40 },
                rare: { defense: 294, resistance: 882, equipmentRating: 58.34, stamina: 29, intellect: 43 },
                unique: { defense: 307, resistance: 922, equipmentRating: 61.00, stamina: 31, intellect: 46 },
                epic: { defense: 320, resistance: 962, equipmentRating: 63.65, stamina: 34, intellect: 50 },
                legendary: { defense: 334, resistance: 1003, equipmentRating: 66.30, stamina: 35, intellect: 52 },
                relic: { defense: 360, resistance: 1083, equipmentRating: 71.60, stamina: 38, intellect: 56 },
                wonders: { defense: 401, resistance: 1203, equipmentRating: 79.56, stamina: 41, intellect: 60 },
                tales: { defense: 454, resistance: 1363, equipmentRating: 90.17, stamina: 43, intellect: 64 },
                legends: { defense: 507, resistance: 1524, equipmentRating: 100.78, stamina: 47, intellect: 69 },
                myths: { defense: 534, resistance: 1604, equipmentRating: 106.08, stamina: 51, intellect: 75 },
                twelve: { defense: 561, resistance: 1684, equipmentRating: 111.38, stamina: 54, intellect: 79 }
            },
            engravingSlots: 0
        },
        magisterskiematerchatyeperchatkismotritelyataynyharhivov: {
            id: 18,
            name: "Магистерские матерчатые перчатки смотрителя тайных архивов",
            type: "gloves",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 267, resistance: 802, equipmentRating: 53.00, stamina: 25, spirit: 37 },
                uncommon: { defense: 280, resistance: 842, equipmentRating: 55.65, stamina: 27, spirit: 40 },
                rare: { defense: 294, resistance: 882, equipmentRating: 58.30, stamina: 29, spirit: 43 },
                unique: { defense: 307, resistance: 922, equipmentRating: 60.95, stamina: 31, spirit: 46 },
                epic: { defense: 320, resistance: 962, equipmentRating: 63.60, stamina: 34, spirit: 50 },
                legendary: { defense: 334, resistance: 1003, equipmentRating: 66.25, stamina: 35, spirit: 52 },
                relic: { defense: 360, resistance: 1083, equipmentRating: 71.55, stamina: 38, spirit: 56 },
                wonders: { defense: 401, resistance: 1203, equipmentRating: 79.50, stamina: 41, spirit: 60 },
                tales: { defense: 454, resistance: 1363, equipmentRating: 90.10, stamina: 43, spirit: 64 },
                legends: { defense: 507, resistance: 1524, equipmentRating: 100.70, stamina: 47, spirit: 69 },
                myths: { defense: 534, resistance: 1604, equipmentRating: 106.00, stamina: 51, spirit: 75 },
                twelve: { defense: 561, resistance: 1684, equipmentRating: 111.30, stamina: 54, spirit: 79 }
            },
            engravingSlots: 0
        },
        magisterskiekozhanyeperchatkiukrotitelyagrimuarov: {
            id: 19,
            name: "Магистерские кожаные перчатки укротителя гримуаров",
            type: "gloves",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 534, resistance: 534, equipmentRating: 53.04, stamina: 25, agility: 37 },
                uncommon: { defense: 561, resistance: 561, equipmentRating: 55.69, stamina: 27, agility: 40 },
                rare: { defense: 587, resistance: 587, equipmentRating: 58.34, stamina: 29, agility: 43 },
                unique: { defense: 614, resistance: 614, equipmentRating: 61.00, stamina: 31, agility: 46 },
                epic: { defense: 641, resistance: 641, equipmentRating: 63.65, stamina: 34, agility: 50 },
                legendary: { defense: 668, resistance: 668, equipmentRating: 66.30, stamina: 35, agility: 52 },
                relic: { defense: 721, resistance: 721, equipmentRating: 71.60, stamina: 38, agility: 56 },
                wonders: { defense: 801, resistance: 801, equipmentRating: 79.56, stamina: 41, agility: 60 },
                tales: { defense: 908, resistance: 908, equipmentRating: 90.17, stamina: 43, agility: 64 },
                legends: { defense: 1015, resistance: 1015, equipmentRating: 100.78, stamina: 47, agility: 69 },
                myths: { defense: 1068, resistance: 1068, equipmentRating: 106.08, stamina: 51, agility: 75 },
                twelve: { defense: 1121, resistance: 1121, equipmentRating: 111.38, stamina: 54, agility: 79 }
            },
            engravingSlots: 0
        },
        magisterskiekozhanyeperchatkizaklinatelyagrimuarov: {
            id: 20,
            name: "Магистерские кожаные перчатки заклинателя гримуаров",
            type: "gloves",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 534, resistance: 534, equipmentRating: 53.04, stamina: 25, strength: 37 },
                uncommon: { defense: 561, resistance: 561, equipmentRating: 55.69, stamina: 27, strength: 40 },
                rare: { defense: 587, resistance: 587, equipmentRating: 58.34, stamina: 29, strength: 43 },
                unique: { defense: 614, resistance: 614, equipmentRating: 61.00, stamina: 31, strength: 46 },
                epic: { defense: 641, resistance: 641, equipmentRating: 63.65, stamina: 34, strength: 50 },
                legendary: { defense: 668, resistance: 668, equipmentRating: 66.30, stamina: 35, strength: 52 },
                relic: { defense: 721, resistance: 721, equipmentRating: 71.60, stamina: 38, strength: 56 },
                wonders: { defense: 801, resistance: 801, equipmentRating: 79.56, stamina: 41, strength: 60 },
                tales: { defense: 908, resistance: 908, equipmentRating: 90.17, stamina: 43, strength: 64 },
                legends: { defense: 1015, resistance: 1015, equipmentRating: 100.78, stamina: 47, strength: 69 },
                myths: { defense: 1068, resistance: 1068, equipmentRating: 106.08, stamina: 51, strength: 75 },
                twelve: { defense: 1121, resistance: 1121, equipmentRating: 111.38, stamina: 54, strength: 79 }
            },
            engravingSlots: 0
        },
        materchatyeperchatkismotritelyataynyharhivov: {
            id: 21,
            name: "Матерчатые перчатки смотрителя тайных архивов",
            type: "gloves",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 237, resistance: 712, equipmentRating: 47.58, stamina: 22, spirit: 33 },
                uncommon: { defense: 249, resistance: 748, equipmentRating: 49.96, stamina: 24, spirit: 35 },
                rare: { defense: 261, resistance: 783, equipmentRating: 52.34, stamina: 26, spirit: 39 },
                unique: { defense: 273, resistance: 819, equipmentRating: 54.72, stamina: 27, spirit: 41 },
                epic: { defense: 284, resistance: 854, equipmentRating: 57.10, stamina: 29, spirit: 44 },
                legendary: { defense: 296, resistance: 890, equipmentRating: 59.47, stamina: 31, spirit: 47 },
                relic: { defense: 320, resistance: 961, equipmentRating: 64.23, stamina: 33, spirit: 50 },
                wonders: { defense: 356, resistance: 1068, equipmentRating: 71.37, stamina: 36, spirit: 53 },
                tales: { defense: 403, resistance: 1210, equipmentRating: 80.89, stamina: 38, spirit: 57 },
                legends: { defense: 450, resistance: 1353, equipmentRating: 90.40, stamina: 41, spirit: 61 },
                myths: { defense: 474, resistance: 1424, equipmentRating: 95.16, stamina: 45, spirit: 67 },
                twelve: { defense: 498, resistance: 1495, equipmentRating: 99.92, stamina: 47, spirit: 71 }
            },
            engravingSlots: 0
        },


    },
    
    // Наручи
    bracers: {
        ramianPlateBracers: {
            id: 1,
            name: "Рамианские латные наручи",
            type: "bracers",
            image: "arm/plate/plate_arm1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 397, resistance: 36, equipmentRating: 21.84 },
                uncommon: { defense: 417, resistance: 38, equipmentRating: 22.9 },
                rare: { defense: 437, resistance: 40, equipmentRating: 24 },
                unique: { defense: 457, resistance: 41, equipmentRating: 25.1 },
                epic: { defense: 477, resistance: 43, equipmentRating: 26.2 },
                legendary: { defense: 496, resistance: 45, equipmentRating: 27.3 },
                relic: { defense: 536, resistance: 49, equipmentRating: 29.45 },
                wonders: { defense: 596, resistance: 54, equipmentRating: 32.75 },
                tales: { defense: 675, resistance: 61, equipmentRating: 37.1 },
                legends: { defense: 754, resistance: 68, equipmentRating: 41.45 },
                myths: { defense: 794, resistance: 72, equipmentRating: 43.65 },
                twelve: { defense: 834, resistance: 76, equipmentRating: 45.85 }
            },
            engravingSlots: 0
        },
        ramianLeatherBracers: {
            id: 2,
            name: "Рамианские кожаные наручи",
            type: "bracers",
            image: "arm/leather/leather_arm1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 216, resistance: 216, equipmentRating: 21.84 },
                uncommon: { defense: 227, resistance: 227, equipmentRating: 22.9 },
                rare: { defense: 238, resistance: 238, equipmentRating: 24 },
                unique: { defense: 249, resistance: 249, equipmentRating: 25.1 },
                epic: { defense: 260, resistance: 260, equipmentRating: 26.2 },
                legendary: { defense: 271, resistance: 271, equipmentRating: 27.3 },
                relic: { defense: 293, resistance: 293, equipmentRating: 29.45 },
                wonders: { defense: 325, resistance: 325, equipmentRating: 32.75 },
                tales: { defense: 368, resistance: 368, equipmentRating: 37.1 },
                legends: { defense: 411, resistance: 411, equipmentRating: 41.45 },
                myths: { defense: 433, resistance: 433, equipmentRating: 43.65 },
                twelve: { defense: 454, resistance: 454, equipmentRating: 45.85 }
            },
            engravingSlots: 0
        },
        ramianClothBracers: {
            id: 3,
            name: "Рамианские матерчатые наручи",
            type: "bracers",
            image: "arm/cloth/cloth_arm1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 108, resistance: 324, equipmentRating: 21.84 },
                uncommon: { defense: 113, resistance: 340, equipmentRating: 22.9 },
                rare: { defense: 119, resistance: 357, equipmentRating: 24 },
                unique: { defense: 124, resistance: 373, equipmentRating: 25.1 },
                epic: { defense: 130, resistance: 390, equipmentRating: 26.2 },
                legendary: { defense: 135, resistance: 406, equipmentRating: 27.3 },
                relic: { defense: 146, resistance: 439, equipmentRating: 29.45 },
                wonders: { defense: 162, resistance: 487, equipmentRating: 32.75 },
                tales: { defense: 184, resistance: 552, equipmentRating: 37.1 },
                legends: { defense: 205, resistance: 617, equipmentRating: 41.45 },
                myths: { defense: 216, resistance: 649, equipmentRating: 43.65 },
                twelve: { defense: 227, resistance: 681, equipmentRating: 45.85 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateBracers: {
            id: 4,
            name: "Искаженные рамианские латные наручи",
            type: "bracers",
            image: "arm/plate/plate_arm2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 451, resistance: 41, equipmentRating: 24.55 },
                uncommon: { defense: 474, resistance: 43, equipmentRating: 25.8 },
                rare: { defense: 497, resistance: 45, equipmentRating: 27 },
                unique: { defense: 519, resistance: 47, equipmentRating: 28.25 },
                epic: { defense: 542, resistance: 49, equipmentRating: 29.45 },
                legendary: { defense: 564, resistance: 51, equipmentRating: 30.7 },
                relic: { defense: 610, resistance: 55, equipmentRating: 33.15 },
                wonders: { defense: 677, resistance: 61, equipmentRating: 36.85 },
                tales: { defense: 767, resistance: 70, equipmentRating: 41.75 },
                legends: { defense: 857, resistance: 78, equipmentRating: 46.65 },
                myths: { defense: 902, resistance: 82, equipmentRating: 49.1 },
                twelve: { defense: 947, resistance: 86, equipmentRating: 51.55 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherBracers: {
            id: 5,
            name: "Искаженные рамианские кожаные наручи",
            type: "bracers",
            image: "arm/leather/leather_arm2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 246, resistance: 246, equipmentRating: 24.55 },
                uncommon: { defense: 258, resistance: 258, equipmentRating: 25.8 },
                rare: { defense: 271, resistance: 271, equipmentRating: 27 },
                unique: { defense: 283, resistance: 283, equipmentRating: 28.25 },
                epic: { defense: 295, resistance: 295, equipmentRating: 29.45 },
                legendary: { defense: 308, resistance: 308, equipmentRating: 30.7 },
                relic: { defense: 333, resistance: 333, equipmentRating: 33.15 },
                wonders: { defense: 369, resistance: 369, equipmentRating: 36.85 },
                tales: { defense: 418, resistance: 418, equipmentRating: 41.75 },
                legends: { defense: 467, resistance: 467, equipmentRating: 46.65 },
                myths: { defense: 492, resistance: 492, equipmentRating: 49.1 },
                twelve: { defense: 516, resistance: 516, equipmentRating: 51.55 }
            },
            engravingSlots: 0
        },
        distortedRamianClothBracers: {
            id: 6,
            name: "Искаженные рамианские матерчатые наручи",
            type: "bracers",
            image: "arm/cloth/cloth_arm2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 123, resistance: 369, equipmentRating: 24.55 },
                uncommon: { defense: 129, resistance: 387, equipmentRating: 25.8 },
                rare: { defense: 135, resistance: 406, equipmentRating: 27 },
                unique: { defense: 141, resistance: 424, equipmentRating: 28.25 },
                epic: { defense: 148, resistance: 443, equipmentRating: 29.45 },
                legendary: { defense: 154, resistance: 461, equipmentRating: 30.7 },
                relic: { defense: 166, resistance: 499, equipmentRating: 33.15 },
                wonders: { defense: 185, resistance: 554, equipmentRating: 36.85 },
                tales: { defense: 209, resistance: 628, equipmentRating: 41.75 },
                legends: { defense: 234, resistance: 701, equipmentRating: 46.65 },
                myths: { defense: 246, resistance: 738, equipmentRating: 49.1 },
                twelve: { defense: 258, resistance: 775, equipmentRating: 51.55 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateBracers: {
            id: 7,
            name: "Проклятые рамианские латные наручи",
            type: "bracers",
            image: "arm/plate/plate_arm3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 490, resistance: 44, equipmentRating: 26.5 },
                uncommon: { defense: 515, resistance: 47, equipmentRating: 27.8 },
                rare: { defense: 540, resistance: 49, equipmentRating: 29.15 },
                unique: { defense: 564, resistance: 51, equipmentRating: 30.5 },
                epic: { defense: 589, resistance: 53, equipmentRating: 31.8 },
                legendary: { defense: 613, resistance: 56, equipmentRating: 33.15 },
                relic: { defense: 662, resistance: 60, equipmentRating: 35.8 },
                wonders: { defense: 736, resistance: 67, equipmentRating: 39.75 },
                tales: { defense: 833, resistance: 76, equipmentRating: 45.05 },
                legends: { defense: 931, resistance: 84, equipmentRating: 50.35 },
                myths: { defense: 980, resistance: 89, equipmentRating: 53 },
                twelve: { defense: 1029, resistance: 93, equipmentRating: 55.65 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherBracers: {
            id: 8,
            name: "Проклятые рамианские кожаные наручи",
            type: "bracers",
            image: "arm/leather/leather_arm3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 267, resistance: 267, equipmentRating: 26.5 },
                uncommon: { defense: 280, resistance: 280, equipmentRating: 27.8 },
                rare: { defense: 294, resistance: 294, equipmentRating: 29.15 },
                unique: { defense: 307, resistance: 307, equipmentRating: 30.5 },
                epic: { defense: 321, resistance: 321, equipmentRating: 31.8 },
                legendary: { defense: 334, resistance: 334, equipmentRating: 33.15 },
                relic: { defense: 361, resistance: 361, equipmentRating: 35.8 },
                wonders: { defense: 401, resistance: 401, equipmentRating: 39.75 },
                tales: { defense: 454, resistance: 454, equipmentRating: 45.05 },
                legends: { defense: 507, resistance: 507, equipmentRating: 50.35 },
                myths: { defense: 534, resistance: 534, equipmentRating: 53 },
                twelve: { defense: 561, resistance: 561, equipmentRating: 55.65 }
            },
            engravingSlots: 0
        },
        cursedRamianClothBracers: {
            id: 9,
            name: "Проклятые рамианские матерчатые наручи",
            type: "bracers",
            image: "arm/cloth/cloth_arm3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 133, resistance: 401, equipmentRating: 26.5 },
                uncommon: { defense: 140, resistance: 421, equipmentRating: 27.8 },
                rare: { defense: 147, resistance: 441, equipmentRating: 29.15 },
                unique: { defense: 153, resistance: 461, equipmentRating: 30.5 },
                epic: { defense: 160, resistance: 481, equipmentRating: 31.8 },
                legendary: { defense: 167, resistance: 501, equipmentRating: 33.15 },
                relic: { defense: 180, resistance: 541, equipmentRating: 35.8 },
                wonders: { defense: 200, resistance: 601, equipmentRating: 39.75 },
                tales: { defense: 227, resistance: 681, equipmentRating: 45.05 },
                legends: { defense: 253, resistance: 761, equipmentRating: 50.35 },
                myths: { defense: 267, resistance: 802, equipmentRating: 53 },
                twelve: { defense: 280, resistance: 842, equipmentRating: 55.65 }
            },
            engravingSlots: 0
        },
        primalRamianPlateBracers: {
            id: 10,
            name: "Изначальные рамианские латные наручи",
            type: "bracers",
            image: "arm/plate/plate_arm4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 507, resistance: 46, equipmentRating: 26.9 },
                uncommon: { defense: 532, resistance: 48, equipmentRating: 28.25 },
                rare: { defense: 558, resistance: 51, equipmentRating: 29.6 },
                unique: { defense: 583, resistance: 53, equipmentRating: 30.9 },
                epic: { defense: 609, resistance: 55, equipmentRating: 32.25 },
                legendary: { defense: 634, resistance: 57, equipmentRating: 33.6 },
                relic: { defense: 685, resistance: 62, equipmentRating: 36.3 },
                wonders: { defense: 761, resistance: 69, equipmentRating: 40.35 },
                tales: { defense: 862, resistance: 78, equipmentRating: 45.7 },
                legends: { defense: 963, resistance: 87, equipmentRating: 51.1 },
                myths: { defense: 1014, resistance: 92, equipmentRating: 53.8 },
                twelve: { defense: 1065, resistance: 97, equipmentRating: 56.5 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherBracers: {
            id: 11,
            name: "Изначальные рамианские кожаные наручи",
            type: "bracers",
            image: "arm/leather/leather_arm4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 271, resistance: 271, equipmentRating: 26.9 },
                uncommon: { defense: 285, resistance: 285, equipmentRating: 28.25 },
                rare: { defense: 298, resistance: 298, equipmentRating: 29.6 },
                unique: { defense: 312, resistance: 312, equipmentRating: 30.9 },
                epic: { defense: 326, resistance: 326, equipmentRating: 32.25 },
                legendary: { defense: 339, resistance: 339, equipmentRating: 33.6 },
                relic: { defense: 366, resistance: 366, equipmentRating: 36.3 },
                wonders: { defense: 407, resistance: 407, equipmentRating: 40.35 },
                tales: { defense: 461, resistance: 461, equipmentRating: 45.7 },
                legends: { defense: 516, resistance: 516, equipmentRating: 51.1 },
                myths: { defense: 543, resistance: 543, equipmentRating: 53.8 },
                twelve: { defense: 570, resistance: 570, equipmentRating: 56.5 }
            },
            engravingSlots: 0
        },
        primalRamianClothBracers: {
            id: 12,
            name: "Изначальные рамианские матерчатые наручи",
            type: "bracers",
            image: "arm/cloth/cloth_arm4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 135, resistance: 406, equipmentRating: 26.9 },
                uncommon: { defense: 142, resistance: 427, equipmentRating: 28.25 },
                rare: { defense: 149, resistance: 447, equipmentRating: 29.6 },
                unique: { defense: 156, resistance: 468, equipmentRating: 30.9 },
                epic: { defense: 163, resistance: 488, equipmentRating: 32.25 },
                legendary: { defense: 169, resistance: 509, equipmentRating: 33.6 },
                relic: { defense: 183, resistance: 549, equipmentRating: 36.3 },
                wonders: { defense: 203, resistance: 610, equipmentRating: 40.35 },
                tales: { defense: 230, resistance: 692, equipmentRating: 45.7 },
                legends: { defense: 258, resistance: 774, equipmentRating: 51.1 },
                myths: { defense: 271, resistance: 815, equipmentRating: 53.8 },
                twelve: { defense: 285, resistance: 855, equipmentRating: 56.5 }
            },
            engravingSlots: 0
        },
        upgradedRamianPlateBracers: {
            id: 13,
            name: "Обновленные рамианские латные наручи",
            type: "bracers",
            image: "arm/plate/plate_arm5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 515, resistance: 47, equipmentRating: 27.3 },
                uncommon: { defense: 541, resistance: 49, equipmentRating: 28.65 },
                rare: { defense: 567, resistance: 51, equipmentRating: 30 },
                unique: { defense: 592, resistance: 54, equipmentRating: 31.35 },
                epic: { defense: 618, resistance: 56, equipmentRating: 32.75 },
                legendary: { defense: 644, resistance: 58, equipmentRating: 34.1 },
                relic: { defense: 696, resistance: 63, equipmentRating: 36.85 },
                wonders: { defense: 773, resistance: 70, equipmentRating: 40.95 },
                tales: { defense: 876, resistance: 79, equipmentRating: 46.4 },
                legends: { defense: 978, resistance: 89, equipmentRating: 51.85 },
                myths: { defense: 1030, resistance: 93, equipmentRating: 54.6 },
                twelve: { defense: 1081, resistance: 98, equipmentRating: 57.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherBracers: {
            id: 14,
            name: "Обновленные рамианские кожаные наручи",
            type: "bracers",
            image: "arm/leather/leather_arm5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 275, resistance: 275, equipmentRating: 27.3 },
                uncommon: { defense: 289, resistance: 289, equipmentRating: 28.65 },
                rare: { defense: 303, resistance: 303, equipmentRating: 30 },
                unique: { defense: 317, resistance: 317, equipmentRating: 31.35 },
                epic: { defense: 331, resistance: 331, equipmentRating: 32.75 },
                legendary: { defense: 344, resistance: 344, equipmentRating: 34.1 },
                relic: { defense: 372, resistance: 372, equipmentRating: 36.85 },
                wonders: { defense: 413, resistance: 413, equipmentRating: 40.95 },
                tales: { defense: 469, resistance: 469, equipmentRating: 46.4 },
                legends: { defense: 524, resistance: 524, equipmentRating: 51.85 },
                myths: { defense: 551, resistance: 551, equipmentRating: 54.6 },
                twelve: { defense: 579, resistance: 579, equipmentRating: 57.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianClothBracers: {
            id: 15,
            name: "Обновленные рамианские матерчатые наручи",
            type: "bracers",
            image: "arm/cloth/cloth_arm5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 137, resistance: 413, equipmentRating: 27.3 },
                uncommon: { defense: 144, resistance: 434, equipmentRating: 28.65 },
                rare: { defense: 151, resistance: 455, equipmentRating: 30 },
                unique: { defense: 158, resistance: 476, equipmentRating: 31.35 },
                epic: { defense: 165, resistance: 496, equipmentRating: 32.75 },
                legendary: { defense: 172, resistance: 517, equipmentRating: 34.1 },
                relic: { defense: 186, resistance: 558, equipmentRating: 36.85 },
                wonders: { defense: 206, resistance: 620, equipmentRating: 40.95 },
                tales: { defense: 234, resistance: 703, equipmentRating: 46.4 },
                legends: { defense: 262, resistance: 786, equipmentRating: 51.85 },
                myths: { defense: 275, resistance: 827, equipmentRating: 54.6 },
                twelve: { defense: 289, resistance: 869, equipmentRating: 57.3 }
            },
            engravingSlots: 0
        },

        masterPlateBracers: {
            id: 16,
            name: "Магистерские латные наручи эрнардского архивариуса",
            type: "bracers",
            image: "arm/plate/master_plate_bracers.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 490, resistance: 44, equipmentRating: 26.5, stamina: 29 },
                uncommon: { defense: 514, resistance: 47, equipmentRating: 27.8, stamina: 31 },
                rare: { defense: 539, resistance: 49, equipmentRating: 29.1, stamina: 34},
                unique: { defense: 563, resistance: 51, equipmentRating: 30.5, stamina: 36 },
                epic: { defense: 588, resistance: 53, equipmentRating: 31.8, stamina: 39 },
                legendary: { defense: 612, resistance: 55, equipmentRating: 33.1, stamina: 41 },
                relic: { defense: 661, resistance: 60, equipmentRating: 35.8, stamina: 44 },
                wonders: { defense: 735, resistance: 66, equipmentRating: 49.7, stamina: 47 },
                tales: { defense: 833, resistance: 75, equipmentRating: 45, stamina: 50 },
                legends: { defense: 931, resistance: 84, equipmentRating: 50.3, stamina: 54 },
                myths: { defense: 980, resistance: 89, equipmentRating: 53, stamina: 59 },
                twelve: { defense: 1029, resistance: 93, equipmentRating: 55.6, stamina: 62 }
            },
            engravingSlots: 0
        },
        masterClothBracers1: {
            id: 17,
            name: "Магистерские матерчатые наручи эрнардского мнемоника",
            type: "bracers",
            image: "arm/cloth/master_cloth_bracers1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 133, resistance: 401, equipmentRating: 26.52, stamina: 29 },
                uncommon: { defense: 140, resistance: 421, equipmentRating: 27.8, stamina: 31 },
                rare: { defense: 147, resistance: 441, equipmentRating: 29.1, stamina: 34 },
                unique: { defense: 153, resistance: 461, equipmentRating: 30.5, stamina: 36 },
                epic: { defense: 160, resistance: 481, equipmentRating: 31.8, stamina: 39 },
                legendary: { defense: 167, resistance: 501, equipmentRating: 33.1, stamina: 41 },
                relic: { defense: 180, resistance: 541, equipmentRating: 35.8, stamina: 44 },
                wonders: { defense: 200, resistance: 601, equipmentRating: 39.7, stamina: 47 },
                tales: { defense: 227, resistance: 681, equipmentRating: 45, stamina: 50 },
                legends: { defense: 253, resistance: 761, equipmentRating: 50.3, stamina: 54 },
                myths: { defense: 267, resistance: 802, equipmentRating: 53, stamina: 59 },
                twelve: { defense: 280, resistance: 842, equipmentRating: 55.6, stamina: 62 }
            },
            engravingSlots: 0
        },
        masterClothBracers2: {
            id: 18,
            name: "Магистерские матерчатые наручи смотрителя тайных архивов",
            type: "bracers",
            image: "arm/cloth/master_cloth_bracers2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 133, resistance: 401, equipmentRating: 26.52, spirit: 29 },
                uncommon: { defense: 140, resistance: 421, equipmentRating: 27.8, spirit: 31 },
                rare: { defense: 147, resistance: 441, equipmentRating: 29.1, spirit: 34 },
                unique: { defense: 153, resistance: 461, equipmentRating: 30.5, spirit: 36 },
                epic: { defense: 160, resistance: 481, equipmentRating: 31.8, spirit: 39 },
                legendary: { defense: 167, resistance: 501, equipmentRating: 33.1, spirit: 41 },
                relic: { defense: 180, resistance: 541, equipmentRating: 35.8, spirit: 44 },
                wonders: { defense: 200, resistance: 601, equipmentRating: 39.7, spirit: 47 },
                tales: { defense: 227, resistance: 681, equipmentRating: 45, spirit: 50 },
                legends: { defense: 253, resistance: 761, equipmentRating: 50.3, spirit: 54 },
                myths: { defense: 267, resistance: 802, equipmentRating: 53, spirit: 59 },
                twelve: { defense: 280, resistance: 842, equipmentRating: 55.6, spirit: 62 }
            },
            engravingSlots: 0
        },
        masterLeatherBracers1: {
            id: 19,
            name: "Магистерские кожаные наручи укротителя гримуаров",
            type: "bracers",
            image: "arm/leather/master_leather_bracers1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 267, resistance: 267, equipmentRating: 26.52, agility: 29 },
                uncommon: { defense: 280, resistance: 280, equipmentRating: 27.8, agility: 31 },
                rare: { defense: 294, resistance: 294, equipmentRating: 29.1, agility: 34 },
                unique: { defense: 307, resistance: 307, equipmentRating: 30.5, agility: 36 },
                epic: { defense: 321, resistance: 321, equipmentRating: 31.8, agility: 39 },
                legendary: { defense: 334, resistance: 334, equipmentRating: 33.1, agility: 41 },
                relic: { defense: 361, resistance: 361, equipmentRating: 35.8, agility: 44 },
                wonders: { defense: 401, resistance: 401, equipmentRating: 39.7, agility: 47 },
                tales: { defense: 454, resistance: 454, equipmentRating: 45, agility: 50 },
                legends: { defense: 508, resistance: 508, equipmentRating: 50.3, agility: 54 },
                myths: { defense: 535, resistance: 535, equipmentRating: 53, agility: 59 },
                twelve: { defense: 561, resistance: 561, equipmentRating: 55.6, agility: 62 }
            },
            engravingSlots: 0
        },
        masterLeatherBracers2: {
            id: 20,
            name: "Магистерские кожаные наручи заклинателя гримуаров",
            type: "bracers",
            image: "arm/leather/master_leather_bracers2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 267, resistance: 267, equipmentRating: 26.52, strength: 29 },
                uncommon: { defense: 280, resistance: 280, equipmentRating: 27.8, strength: 31 },
                rare: { defense: 294, resistance: 294, equipmentRating: 29.1, strength: 34 },
                unique: { defense: 307, resistance: 307, equipmentRating: 30.5, strength: 36 },
                epic: { defense: 321, resistance: 321, equipmentRating: 31.8, strength: 39 },
                legendary: { defense: 334, resistance: 334, equipmentRating: 33.1, strength: 41 },
                relic: { defense: 361, resistance: 361, equipmentRating: 35.8, strength: 44 },
                wonders: { defense: 401, resistance: 401, equipmentRating: 39.7, strength: 47 },
                tales: { defense: 454, resistance: 454, equipmentRating: 45, strength: 50 },
                legends: { defense: 508, resistance: 508, equipmentRating: 50.3, strength: 54 },
                myths: { defense: 535, resistance: 535, equipmentRating: 53, strength: 59 },
                twelve: { defense: 561, resistance: 561, equipmentRating: 55.6, strength: 62 }
            },
            engravingSlots: 0
        },
        materchatyenaruchismotritelyataynyharhivov: {
            id: 21,
            name: "Матерчатые наручи смотрителя тайных архивов",
            type: "bracers",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 118, resistance: 356, equipmentRating: 23.79, spirit: 26 },
                uncommon: { defense: 124, resistance: 374, equipmentRating: 24.98, spirit: 28 },
                rare: { defense: 130, resistance: 392, equipmentRating: 26.17, spirit: 30 },
                unique: { defense: 136, resistance: 409, equipmentRating: 27.36, spirit: 32 },
                epic: { defense: 142, resistance: 427, equipmentRating: 28.55, spirit: 35 },
                legendary: { defense: 148, resistance: 445, equipmentRating: 29.74, spirit: 37 },
                relic: { defense: 159, resistance: 481, equipmentRating: 32.12, spirit: 40 },
                wonders: { defense: 177, resistance: 534, equipmentRating: 35.69, spirit: 42 },
                tales: { defense: 201, resistance: 605, equipmentRating: 40.44, spirit: 45 },
                legends: { defense: 224, resistance: 676, equipmentRating: 45.20, spirit: 48 },
                myths: { defense: 236, resistance: 712, equipmentRating: 47.58, spirit: 53 },
                twelve: { defense: 248, resistance: 748, equipmentRating: 49.96, spirit: 56 }
            },
            engravingSlots: 0
        }
    },
    
    // Шлемы
    helmets: {
        ramianPlateHelmet: {
            id: 1,
            name: "Рамианский латный шлем",
            type: "helmets",
            image: "head/plate/plate_head1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1191, resistance: 108, equipmentRating: 65.52 },
                uncommon: { defense: 1251, resistance: 113, equipmentRating: 68.7 },
                rare: { defense: 1310, resistance: 119, equipmentRating: 72 },
                unique: { defense: 1370, resistance: 124, equipmentRating: 75.3 },
                epic: { defense: 1429, resistance: 130, equipmentRating: 78.6 },
                legendary: { defense: 1488, resistance: 135, equipmentRating: 81.9 },
                relic: { defense: 1608, resistance: 146, equipmentRating: 88.35 },
                wonders: { defense: 1786, resistance: 162, equipmentRating: 98.25 },
                tales: { defense: 2024, resistance: 184, equipmentRating: 111.3 },
                legends: { defense: 2262, resistance: 205, equipmentRating: 124.35 },
                myths: { defense: 2381, resistance: 216, equipmentRating: 130.95 },
                twelve: { defense: 2500, resistance: 227, equipmentRating: 137.55 }
            },
            engravingSlots: 0
        },
        ramianLeatherHood: {
            id: 2,
            name: "Рамианский кожаный капюшон",
            type: "helmets",
            image: "head/leather/leather_head1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 649, resistance: 649, equipmentRating: 65.52 },
                uncommon: { defense: 681, resistance: 681, equipmentRating: 68.7 },
                rare: { defense: 714, resistance: 714, equipmentRating: 72 },
                unique: { defense: 747, resistance: 747, equipmentRating: 75.3 },
                epic: { defense: 779, resistance: 779, equipmentRating: 78.6 },
                legendary: { defense: 812, resistance: 812, equipmentRating: 81.9 },
                relic: { defense: 877, resistance: 877, equipmentRating: 88.35 },
                wonders: { defense: 974, resistance: 974, equipmentRating: 98.25 },
                tales: { defense: 1104, resistance: 1104, equipmentRating: 111.3 },
                legends: { defense: 1234, resistance: 1234, equipmentRating: 124.35 },
                myths: { defense: 1299, resistance: 1299, equipmentRating: 130.95 },
                twelve: { defense: 1364, resistance: 1364, equipmentRating: 137.55 }
            },
            engravingSlots: 0
        },
        ramianDiadem: {
            id: 3,
            name: "Рамианская диадема",
            type: "helmets",
            image: "head/cloth/cloth_head1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 324, resistance: 974, equipmentRating: 65.52 },
                uncommon: { defense: 340, resistance: 1023, equipmentRating: 68.7 },
                rare: { defense: 357, resistance: 1071, equipmentRating: 72 },
                unique: { defense: 373, resistance: 1120, equipmentRating: 75.3 },
                epic: { defense: 390, resistance: 1169, equipmentRating: 78.6 },
                legendary: { defense: 406, resistance: 1218, equipmentRating: 81.9 },
                relic: { defense: 439, resistance: 1316, equipmentRating: 88.35 },
                wonders: { defense: 487, resistance: 1462, equipmentRating: 98.25 },
                tales: { defense: 552, resistance: 1656, equipmentRating: 111.3 },
                legends: { defense: 617, resistance: 1851, equipmentRating: 124.35 },
                myths: { defense: 649, resistance: 1948, equipmentRating: 130.95 },
                twelve: { defense: 682, resistance: 2046, equipmentRating: 137.55 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateHelmet: {
            id: 4,
            name: "Искаженный рамианский латный шлем",
            type: "helmets",
            image: "head/plate/plate_head2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1353, resistance: 123, equipmentRating: 73.65 },
                uncommon: { defense: 1421, resistance: 129, equipmentRating: 77.4 },
                rare: { defense: 1488, resistance: 135, equipmentRating: 81 },
                unique: { defense: 1556, resistance: 141, equipmentRating: 84.75 },
                epic: { defense: 1624, resistance: 147, equipmentRating: 88.35 },
                legendary: { defense: 1691, resistance: 154, equipmentRating: 92.1 },
                relic: { defense: 1827, resistance: 166, equipmentRating: 99.45 },
                wonders: { defense: 2030, resistance: 184, equipmentRating: 110.55 },
                tales: { defense: 2300, resistance: 209, equipmentRating: 125.25 },
                legends: { defense: 2571, resistance: 233, equipmentRating: 139.95 },
                myths: { defense: 2706, resistance: 246, equipmentRating: 147.3 },
                twelve: { defense: 2841, resistance: 258, equipmentRating: 154.65 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherHood: {
            id: 5,
            name: "Искаженный рамианский кожаный капюшон",
            type: "helmets",
            image: "head/leather/leather_head2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 738, resistance: 738, equipmentRating: 73.65 },
                uncommon: { defense: 775, resistance: 775, equipmentRating: 77.4 },
                rare: { defense: 812, resistance: 812, equipmentRating: 81 },
                unique: { defense: 849, resistance: 849, equipmentRating: 84.75 },
                epic: { defense: 885, resistance: 885, equipmentRating: 88.35 },
                legendary: { defense: 922, resistance: 922, equipmentRating: 92.1 },
                relic: { defense: 996, resistance: 996, equipmentRating: 99.45 },
                wonders: { defense: 1107, resistance: 1107, equipmentRating: 110.55 },
                tales: { defense: 1255, resistance: 1255, equipmentRating: 125.25 },
                legends: { defense: 1402, resistance: 1402, equipmentRating: 139.95 },
                myths: { defense: 1476, resistance: 1476, equipmentRating: 147.3 },
                twelve: { defense: 1550, resistance: 1550, equipmentRating: 154.65 }
            },
            engravingSlots: 0
        },
        distortedRamianDiadem: {
            id: 6,
            name: "Искаженная рамианская диадема",
            type: "helmets",
            image: "head/cloth/cloth_head2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 369, resistance: 1107, equipmentRating: 73.65 },
                uncommon: { defense: 387, resistance: 1162, equipmentRating: 77.4 },
                rare: { defense: 406, resistance: 1218, equipmentRating: 81 },
                unique: { defense: 424, resistance: 1274, equipmentRating: 84.75 },
                epic: { defense: 443, resistance: 1329, equipmentRating: 88.35 },
                legendary: { defense: 461, resistance: 1385, equipmentRating: 92.1 },
                relic: { defense: 498, resistance: 1496, equipmentRating: 99.45 },
                wonders: { defense: 554, resistance: 1662, equipmentRating: 110.55 },
                tales: { defense: 628, resistance: 1884, equipmentRating: 125.25 },
                legends: { defense: 701, resistance: 2105, equipmentRating: 139.95 },
                myths: { defense: 738, resistance: 2216, equipmentRating: 147.3 },
                twelve: { defense: 775, resistance: 2327, equipmentRating: 154.65 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateHelmet: {
            id: 7,
            name: "Проклятый рамианский латный шлем",
            type: "helmets",
            image: "head/plate/plate_head3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1470, resistance: 133, equipmentRating: 79.5 },
                uncommon: { defense: 1544, resistance: 140, equipmentRating: 83.4 },
                rare: { defense: 1617, resistance: 147, equipmentRating: 87.45 },
                unique: { defense: 1691, resistance: 154, equipmentRating: 91.5 },
                epic: { defense: 1764, resistance: 160, equipmentRating: 95.4 },
                legendary: { defense: 1838, resistance: 167, equipmentRating: 99.45 },
                relic: { defense: 1985, resistance: 180, equipmentRating: 107.4 },
                wonders: { defense: 2205, resistance: 200, equipmentRating: 119.25 },
                tales: { defense: 2499, resistance: 227, equipmentRating: 135.15 },
                legends: { defense: 2793, resistance: 254, equipmentRating: 151.05 },
                myths: { defense: 2940, resistance: 267, equipmentRating: 159 },
                twelve: { defense: 3087, resistance: 280, equipmentRating: 166.95 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherHood: {
            id: 8,
            name: "Проклятый рамианский кожаный капюшон",
            type: "helmets",
            image: "head/leather/leather_head3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 802, resistance: 802, equipmentRating: 79.5 },
                uncommon: { defense: 842, resistance: 842, equipmentRating: 83.4 },
                rare: { defense: 882, resistance: 882, equipmentRating: 87.45 },
                unique: { defense: 922, resistance: 922, equipmentRating: 91.5 },
                epic: { defense: 962, resistance: 962, equipmentRating: 95.4 },
                legendary: { defense: 1002, resistance: 1002, equipmentRating: 99.45 },
                relic: { defense: 1083, resistance: 1083, equipmentRating: 107.4 },
                wonders: { defense: 1203, resistance: 1203, equipmentRating: 119.25 },
                tales: { defense: 1363, resistance: 1363, equipmentRating: 135.15 },
                legends: { defense: 1524, resistance: 1524, equipmentRating: 151.05 },
                myths: { defense: 1604, resistance: 1604, equipmentRating: 159 },
                twelve: { defense: 1684, resistance: 1684, equipmentRating: 166.95 }
            },
            engravingSlots: 0
        },
        cursedRamianDiadem: {
            id: 9,
            name: "Проклятая рамианская диадема",
            type: "helmets",
            image: "head/cloth/cloth_head3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 401, resistance: 1203, equipmentRating: 79.5 },
                uncommon: { defense: 421, resistance: 1263, equipmentRating: 83.4 },
                rare: { defense: 441, resistance: 1323, equipmentRating: 87.45 },
                unique: { defense: 461, resistance: 1384, equipmentRating: 91.5 },
                epic: { defense: 481, resistance: 1444, equipmentRating: 95.4 },
                legendary: { defense: 501, resistance: 1504, equipmentRating: 99.45 },
                relic: { defense: 541, resistance: 1625, equipmentRating: 107.4 },
                wonders: { defense: 601, resistance: 1805, equipmentRating: 119.25 },
                tales: { defense: 681, resistance: 2045, equipmentRating: 135.15 },
                legends: { defense: 762, resistance: 2286, equipmentRating: 151.05 },
                myths: { defense: 802, resistance: 2407, equipmentRating: 159 },
                twelve: { defense: 842, resistance: 2527, equipmentRating: 166.95 }
            },
            engravingSlots: 0
        },
        primalRamianPlateHelmet: {
            id: 10,
            name: "Изначальный рамианский латный шлем",
            type: "helmets",
            image: "head/plate/plate_head4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1494, resistance: 135, equipmentRating: 80.7 },
                uncommon: { defense: 1569, resistance: 142, equipmentRating: 84.75 },
                rare: { defense: 1644, resistance: 149, equipmentRating: 88.8 },
                unique: { defense: 1719, resistance: 156, equipmentRating: 92.7 },
                epic: { defense: 1794, resistance: 163, equipmentRating: 96.75 },
                legendary: { defense: 1869, resistance: 170, equipmentRating: 100.8 },
                relic: { defense: 2019, resistance: 183, equipmentRating: 108.9 },
                wonders: { defense: 2244, resistance: 204, equipmentRating: 121.05 },
                tales: { defense: 2543, resistance: 231, equipmentRating: 137.1 },
                legends: { defense: 2842, resistance: 258, equipmentRating: 153.3 },
                myths: { defense: 2992, resistance: 272, equipmentRating: 161.4 },
                twelve: { defense: 3141, resistance: 285, equipmentRating: 169.5 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherHood: {
            id: 11,
            name: "Изначальный рамианский кожаный капюшон",
            type: "helmets",
            image: "head/leather/leather_head4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 815, resistance: 815, equipmentRating: 80.7 },
                uncommon: { defense: 855, resistance: 855, equipmentRating: 84.75 },
                rare: { defense: 896, resistance: 896, equipmentRating: 88.8 },
                unique: { defense: 937, resistance: 937, equipmentRating: 92.7 },
                epic: { defense: 978, resistance: 978, equipmentRating: 96.75 },
                legendary: { defense: 1018, resistance: 1018, equipmentRating: 100.8 },
                relic: { defense: 1100, resistance: 1100, equipmentRating: 108.9 },
                wonders: { defense: 1222, resistance: 1222, equipmentRating: 121.05 },
                tales: { defense: 1385, resistance: 1385, equipmentRating: 137.1 },
                legends: { defense: 1548, resistance: 1548, equipmentRating: 153.3 },
                myths: { defense: 1630, resistance: 1630, equipmentRating: 161.4 },
                twelve: { defense: 1711, resistance: 1711, equipmentRating: 169.5 }
            },
            engravingSlots: 0
        },
        primalRamianDiadem: {
            id: 12,
            name: "Изначальная рамианская диадема",
            type: "helmets",
            image: "head/cloth/cloth_head4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 407, resistance: 1222, equipmentRating: 80.7 },
                uncommon: { defense: 427, resistance: 1283, equipmentRating: 84.75 },
                rare: { defense: 448, resistance: 1344, equipmentRating: 88.8 },
                unique: { defense: 468, resistance: 1406, equipmentRating: 92.7 },
                epic: { defense: 489, resistance: 1467, equipmentRating: 96.75 },
                legendary: { defense: 509, resistance: 1528, equipmentRating: 100.8 },
                relic: { defense: 550, resistance: 1650, equipmentRating: 108.9 },
                wonders: { defense: 611, resistance: 1833, equipmentRating: 121.05 },
                tales: { defense: 692, resistance: 2078, equipmentRating: 137.1 },
                legends: { defense: 774, resistance: 2322, equipmentRating: 153.3 },
                myths: { defense: 815, resistance: 2444, equipmentRating: 161.4 },
                twelve: { defense: 855, resistance: 2567, equipmentRating: 169.5 }
            },
            engravingSlots: 0
        },
        upgradedRamianPlateHelmet: {
            id: 13,
            name: "Обновленный рамианский латный шлем",
            type: "helmets",
            image: "head/plate/plate_head5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1517, resistance: 137, equipmentRating: 81.9 },
                uncommon: { defense: 1593, resistance: 144, equipmentRating: 85.95 },
                rare: { defense: 1669, resistance: 152, equipmentRating: 90 },
                unique: { defense: 1745, resistance: 158, equipmentRating: 94.05 },
                epic: { defense: 1822, resistance: 165, equipmentRating: 98.25 },
                legendary: { defense: 1898, resistance: 172, equipmentRating: 102.3 },
                relic: { defense: 2051, resistance: 186, equipmentRating: 110.55 },
                wonders: { defense: 2279, resistance: 207, equipmentRating: 122.85 },
                tales: { defense: 2583, resistance: 234, equipmentRating: 139.2 },
                legends: { defense: 2887, resistance: 262, equipmentRating: 155.55 },
                myths: { defense: 3039, resistance: 276, equipmentRating: 163.8 },
                twelve: { defense: 3191, resistance: 290, equipmentRating: 171.9 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherHood: {
            id: 14,
            name: "Обновленный рамианский кожаный капюшон",
            type: "helmets",
            image: "head/leather/leather_head5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 827, resistance: 827, equipmentRating: 81.9 },
                uncommon: { defense: 869, resistance: 869, equipmentRating: 85.95 },
                rare: { defense: 910, resistance: 910, equipmentRating: 90 },
                unique: { defense: 952, resistance: 952, equipmentRating: 94.05 },
                epic: { defense: 993, resistance: 993, equipmentRating: 98.25 },
                legendary: { defense: 1034, resistance: 1034, equipmentRating: 102.3 },
                relic: { defense: 1117, resistance: 1117, equipmentRating: 110.55 },
                wonders: { defense: 1241, resistance: 1241, equipmentRating: 122.85 },
                tales: { defense: 1407, resistance: 1407, equipmentRating: 139.2 },
                legends: { defense: 1573, resistance: 1573, equipmentRating: 155.55 },
                myths: { defense: 1655, resistance: 1655, equipmentRating: 163.8 },
                twelve: { defense: 1738, resistance: 1738, equipmentRating: 171.9 }
            },
            engravingSlots: 0
        },
        upgradedRamianDiadem: {
            id: 15,
            name: "Обновленная рамианская диадема",
            type: "helmets",
            image: "head/cloth/cloth_head5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 413, resistance: 1241, equipmentRating: 81.9 },
                uncommon: { defense: 434, resistance: 1303, equipmentRating: 85.95 },
                rare: { defense: 455, resistance: 1365, equipmentRating: 90 },
                unique: { defense: 476, resistance: 1427, equipmentRating: 94.05 },
                epic: { defense: 496, resistance: 1489, equipmentRating: 98.25 },
                legendary: { defense: 517, resistance: 1551, equipmentRating: 102.3 },
                relic: { defense: 558, resistance: 1675, equipmentRating: 110.55 },
                wonders: { defense: 620, resistance: 1861, equipmentRating: 122.85 },
                tales: { defense: 703, resistance: 2111, equipmentRating: 139.2 },
                legends: { defense: 786, resistance: 2360, equipmentRating: 155.55 },
                myths: { defense: 827, resistance: 2483, equipmentRating: 163.8 },
                twelve: { defense: 869, resistance: 2607, equipmentRating: 171.9 }
            },
            engravingSlots: 0
        },
        masterPlateHelmet: {
            id: 16,
            name: "Магистерский латный шлем эрнадского архивариуса",
            type: "helmets",
            image: "head/plate/master_plate_head.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 1517, resistance: 137, equipmentRating: 81.9, stamina: 15, strength: 12, agility: 8, intellect: 5 },
                uncommon: { defense: 1593, resistance: 144, equipmentRating: 85.95, stamina: 18, strength: 14, agility: 10, intellect: 6 },
                rare: { defense: 1669, resistance: 152, equipmentRating: 90, stamina: 21, strength: 16, agility: 12, intellect: 7 },
                unique: { defense: 1745, resistance: 158, equipmentRating: 94.05, stamina: 24, strength: 18, agility: 14, intellect: 8 },
                epic: { defense: 1822, resistance: 165, equipmentRating: 98.25, stamina: 27, strength: 20, agility: 16, intellect: 9 },
                legendary: { defense: 1898, resistance: 172, equipmentRating: 102.3, stamina: 30, strength: 22, agility: 18, intellect: 10 },
                relic: { defense: 2051, resistance: 186, equipmentRating: 110.55, stamina: 36, strength: 26, agility: 22, intellect: 12 },
                wonders: { defense: 2279, resistance: 207, equipmentRating: 122.85, stamina: 42, strength: 30, agility: 26, intellect: 14 },
                tales: { defense: 2583, resistance: 234, equipmentRating: 139.2, stamina: 48, strength: 34, agility: 30, intellect: 16 },
                legends: { defense: 2887, resistance: 262, equipmentRating: 155.55, stamina: 54, strength: 38, agility: 34, intellect: 18 },
                myths: { defense: 3039, resistance: 276, equipmentRating: 163.8, stamina: 57, strength: 40, agility: 36, intellect: 19 },
                twelve: { defense: 3191, resistance: 290, equipmentRating: 171.9, stamina: 60, strength: 42, agility: 38, intellect: 20 }
            },
            engravingSlots: 0
        },
        masterClothDiadem1: {
            id: 17,
            name: "Магистерская диадема эрнадского мнемоника",
            type: "helmets",
            image: "head/cloth/master_cloth_head1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 413, resistance: 1241, equipmentRating: 81.9, stamina: 8, strength: 5, agility: 12, intellect: 25 },
                uncommon: { defense: 434, resistance: 1303, equipmentRating: 85.95, stamina: 10, strength: 6, agility: 14, intellect: 28 },
                rare: { defense: 455, resistance: 1365, equipmentRating: 90, stamina: 12, strength: 7, agility: 16, intellect: 31 },
                unique: { defense: 476, resistance: 1427, equipmentRating: 94.05, stamina: 14, strength: 8, agility: 18, intellect: 34 },
                epic: { defense: 496, resistance: 1489, equipmentRating: 98.25, stamina: 16, strength: 9, agility: 20, intellect: 37 },
                legendary: { defense: 517, resistance: 1551, equipmentRating: 102.3, stamina: 18, strength: 10, agility: 22, intellect: 40 },
                relic: { defense: 558, resistance: 1675, equipmentRating: 110.55, stamina: 22, strength: 12, agility: 26, intellect: 46 },
                wonders: { defense: 620, resistance: 1861, equipmentRating: 122.85, stamina: 26, strength: 14, agility: 30, intellect: 52 },
                tales: { defense: 703, resistance: 2111, equipmentRating: 139.2, stamina: 30, strength: 16, agility: 34, intellect: 58 },
                legends: { defense: 786, resistance: 2360, equipmentRating: 155.55, stamina: 34, strength: 18, agility: 38, intellect: 64 },
                myths: { defense: 827, resistance: 2483, equipmentRating: 163.8, stamina: 36, strength: 19, agility: 40, intellect: 67 },
                twelve: { defense: 869, resistance: 2607, equipmentRating: 171.9, stamina: 38, strength: 20, agility: 42, intellect: 70 }
            },
            engravingSlots: 0
        },
        masterClothDiadem2: {
            id: 18,
            name: "Магистерская диадема смотрителя тайных архивов",
            type: "helmets",
            image: "head/cloth/master_cloth_head2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 413, resistance: 1241, equipmentRating: 81.9, stamina: 10, strength: 6, agility: 14, intellect: 22 },
                uncommon: { defense: 434, resistance: 1303, equipmentRating: 85.95, stamina: 12, strength: 7, agility: 16, intellect: 25 },
                rare: { defense: 455, resistance: 1365, equipmentRating: 90, stamina: 14, strength: 8, agility: 18, intellect: 28 },
                unique: { defense: 476, resistance: 1427, equipmentRating: 94.05, stamina: 16, strength: 9, agility: 20, intellect: 31 },
                epic: { defense: 496, resistance: 1489, equipmentRating: 98.25, stamina: 18, strength: 10, agility: 22, intellect: 34 },
                legendary: { defense: 517, resistance: 1551, equipmentRating: 102.3, stamina: 20, strength: 11, agility: 24, intellect: 37 },
                relic: { defense: 558, resistance: 1675, equipmentRating: 110.55, stamina: 24, strength: 13, agility: 28, intellect: 43 },
                wonders: { defense: 620, resistance: 1861, equipmentRating: 122.85, stamina: 28, strength: 15, agility: 32, intellect: 49 },
                tales: { defense: 703, resistance: 2111, equipmentRating: 139.2, stamina: 32, strength: 17, agility: 36, intellect: 55 },
                legends: { defense: 786, resistance: 2360, equipmentRating: 155.55, stamina: 36, strength: 19, agility: 40, intellect: 61 },
                myths: { defense: 827, resistance: 2483, equipmentRating: 163.8, stamina: 38, strength: 20, agility: 42, intellect: 64 },
                twelve: { defense: 869, resistance: 2607, equipmentRating: 171.9, stamina: 40, strength: 21, agility: 44, intellect: 67 }
            },
            engravingSlots: 0
        },
        masterLeatherHood1: {
            id: 19,
            name: "Магистерский фибула укротителя гримуаров",
            type: "helmets",
            image: "head/leather/master_leather_head1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 827, resistance: 827, equipmentRating: 81.9, stamina: 12, strength: 8, agility: 20, intellect: 12 },
                uncommon: { defense: 869, resistance: 869, equipmentRating: 85.95, stamina: 14, strength: 10, agility: 22, intellect: 14 },
                rare: { defense: 910, resistance: 910, equipmentRating: 90, stamina: 16, strength: 12, agility: 24, intellect: 16 },
                unique: { defense: 952, resistance: 952, equipmentRating: 94.05, stamina: 18, strength: 14, agility: 26, intellect: 18 },
                epic: { defense: 993, resistance: 993, equipmentRating: 98.25, stamina: 20, strength: 16, agility: 28, intellect: 20 },
                legendary: { defense: 1034, resistance: 1034, equipmentRating: 102.3, stamina: 22, strength: 18, agility: 30, intellect: 22 },
                relic: { defense: 1117, resistance: 1117, equipmentRating: 110.55, stamina: 26, strength: 22, agility: 34, intellect: 26 },
                wonders: { defense: 1241, resistance: 1241, equipmentRating: 122.85, stamina: 30, strength: 26, agility: 38, intellect: 30 },
                tales: { defense: 1407, resistance: 1407, equipmentRating: 139.2, stamina: 34, strength: 30, agility: 42, intellect: 34 },
                legends: { defense: 1573, resistance: 1573, equipmentRating: 155.55, stamina: 38, strength: 34, agility: 46, intellect: 38 },
                myths: { defense: 1655, resistance: 1655, equipmentRating: 163.8, stamina: 40, strength: 36, agility: 48, intellect: 40 },
                twelve: { defense: 1738, resistance: 1738, equipmentRating: 171.9, stamina: 42, strength: 38, agility: 50, intellect: 42 }
            },
            engravingSlots: 0
        },
        masterLeatherHood2: {
            id: 20,
            name: "Магистерский фибула заклинателя гримуаров",
            type: "helmets",
            image: "head/leather/master_leather_head2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 827, resistance: 827, equipmentRating: 81.9, stamina: 10, strength: 12, agility: 18, intellect: 14 },
                uncommon: { defense: 869, resistance: 869, equipmentRating: 85.95, stamina: 12, strength: 14, agility: 20, intellect: 16 },
                rare: { defense: 910, resistance: 910, equipmentRating: 90, stamina: 14, strength: 16, agility: 22, intellect: 18 },
                unique: { defense: 952, resistance: 952, equipmentRating: 94.05, stamina: 16, strength: 18, agility: 24, intellect: 20 },
                epic: { defense: 993, resistance: 993, equipmentRating: 98.25, stamina: 18, strength: 20, agility: 26, intellect: 22 },
                legendary: { defense: 1034, resistance: 1034, equipmentRating: 102.3, stamina: 20, strength: 22, agility: 28, intellect: 24 },
                relic: { defense: 1117, resistance: 1117, equipmentRating: 110.55, stamina: 24, strength: 26, agility: 32, intellect: 28 },
                wonders: { defense: 1241, resistance: 1241, equipmentRating: 122.85, stamina: 28, strength: 30, agility: 36, intellect: 32 },
                tales: { defense: 1407, resistance: 1407, equipmentRating: 139.2, stamina: 32, strength: 34, agility: 40, intellect: 36 },
                legends: { defense: 1573, resistance: 1573, equipmentRating: 155.55, stamina: 36, strength: 38, agility: 44, intellect: 40 },
                myths: { defense: 1655, resistance: 1655, equipmentRating: 163.8, stamina: 38, strength: 40, agility: 46, intellect: 42 },
                twelve: { defense: 1738, resistance: 1738, equipmentRating: 171.9, stamina: 40, strength: 42, agility: 48, intellect: 44 }
            },
            engravingSlots: 0
        },
        diademasmotritelyataynyharhivov: {
            id: 21,
            name: "Диадема смотрителя тайных архивов",
            type: "helmets",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 356, resistance: 1069, equipmentRating: 71.37, stamina: 33, spirit: 50 },
                uncommon: { defense: 374, resistance: 1122, equipmentRating: 74.94, stamina: 35, spirit: 54 },
                rare: { defense: 392, resistance: 1176, equipmentRating: 78.51, stamina: 39, spirit: 59 },
                unique: { defense: 409, resistance: 1229, equipmentRating: 82.08, stamina: 41, spirit: 62 },
                epic: { defense: 427, resistance: 1283, equipmentRating: 85.64, stamina: 44, spirit: 67 },
                legendary: { defense: 445, resistance: 1336, equipmentRating: 89.21, stamina: 47, spirit: 71 },
                relic: { defense: 481, resistance: 1443, equipmentRating: 96.35, stamina: 50, spirit: 76 },
                wonders: { defense: 534, resistance: 1604, equipmentRating: 107.06, stamina: 53, spirit: 81 },
                tales: { defense: 605, resistance: 1817, equipmentRating: 121.33, stamina: 57, spirit: 86 },
                legends: { defense: 676, resistance: 2031, equipmentRating: 135.60, stamina: 61, spirit: 93 },
                myths: { defense: 712, resistance: 2138, equipmentRating: 142.74, stamina: 67, spirit: 101 },
                twelve: { defense: 748, resistance: 2245, equipmentRating: 149.88, stamina: 71, spirit: 107 }
            },
            engravingSlots: 0
        }
    },
    
    // Нагрудники
    bodyArmor: {
        ramianPlateChestplate: {
            id: 1,
            name: "Рамианский латный нагрудник",
            type: "bodyArmor",
            image: "body_armor/plate/plate_body1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1985, resistance: 180, equipmentRating: 109.2 },
                uncommon: { defense: 2084, resistance: 189, equipmentRating: 114.5 },
                rare: { defense: 2184, resistance: 198, equipmentRating: 120 },
                unique: { defense: 2283, resistance: 207, equipmentRating: 125.5 },
                epic: { defense: 2383, resistance: 216, equipmentRating: 131 },
                legendary: { defense: 2482, resistance: 225, equipmentRating: 136.5 },
                relic: { defense: 2681, resistance: 243, equipmentRating: 147.25 },
                wonders: { defense: 2979, resistance: 270, equipmentRating: 163.75 },
                tales: { defense: 3374, resistance: 306, equipmentRating: 185.5 },
                legends: { defense: 3770, resistance: 342, equipmentRating: 207.25 },
                myths: { defense: 3968, resistance: 360, equipmentRating: 218.25 },
                twelve: { defense: 4166, resistance: 378, equipmentRating: 229.25 }
            },
            engravingSlots: 0
        },
        ramianLeatherJacket: {
            id: 2,
            name: "Рамианская кожаная куртка",
            type: "bodyArmor",
            image: "body_armor/leather/leather_body1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1082, resistance: 1082, equipmentRating: 109.2 },
                uncommon: { defense: 1136, resistance: 1136, equipmentRating: 114.5 },
                rare: { defense: 1191, resistance: 1191, equipmentRating: 120 },
                unique: { defense: 1245, resistance: 1245, equipmentRating: 125.5 },
                epic: { defense: 1300, resistance: 1300, equipmentRating: 131 },
                legendary: { defense: 1354, resistance: 1354, equipmentRating: 136.5 },
                relic: { defense: 1463, resistance: 1463, equipmentRating: 147.25 },
                wonders: { defense: 1625, resistance: 1625, equipmentRating: 163.75 },
                tales: { defense: 1841, resistance: 1841, equipmentRating: 185.5 },
                legends: { defense: 2057, resistance: 2057, equipmentRating: 207.25 },
                myths: { defense: 2165, resistance: 2165, equipmentRating: 218.25 },
                twelve: { defense: 2273, resistance: 2273, equipmentRating: 229.25 }
            },
            engravingSlots: 0
        },
        ramianClothVest: {
            id: 3,
            name: "Рамианский матерчатый камзол",
            type: "bodyArmor",
            image: "body_armor/cloth/cloth_body1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 541, resistance: 1624, equipmentRating: 109.2 },
                uncommon: { defense: 568, resistance: 1705, equipmentRating: 114.5 },
                rare: { defense: 595, resistance: 1786, equipmentRating: 120 },
                unique: { defense: 622, resistance: 1867, equipmentRating: 125.5 },
                epic: { defense: 650, resistance: 1949, equipmentRating: 131 },
                legendary: { defense: 677, resistance: 2030, equipmentRating: 136.5 },
                relic: { defense: 731, resistance: 2194, equipmentRating: 147.25 },
                wonders: { defense: 812, resistance: 2437, equipmentRating: 163.75 },
                tales: { defense: 920, resistance: 2761, equipmentRating: 185.5 },
                legends: { defense: 1028, resistance: 3085, equipmentRating: 207.25 },
                myths: { defense: 1082, resistance: 3247, equipmentRating: 218.25 },
                twelve: { defense: 1136, resistance: 3409, equipmentRating: 229.25 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateChestplate: {
            id: 4,
            name: "Искаженный рамианский латный нагрудник",
            type: "bodyArmor",
            image: "body_armor/plate/plate_body2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 2255, resistance: 205, equipmentRating: 122.85 },
                uncommon: { defense: 2368, resistance: 215, equipmentRating: 128.75 },
                rare: { defense: 2481, resistance: 225, equipmentRating: 135 },
                unique: { defense: 2594, resistance: 235, equipmentRating: 141.25 },
                epic: { defense: 2707, resistance: 246, equipmentRating: 147.5 },
                legendary: { defense: 2820, resistance: 256, equipmentRating: 153.75 },
                relic: { defense: 3046, resistance: 277, equipmentRating: 165.9 },
                wonders: { defense: 3385, resistance: 307, equipmentRating: 184.25 },
                tales: { defense: 3836, resistance: 348, equipmentRating: 209 },
                legends: { defense: 4287, resistance: 389, equipmentRating: 233.75 },
                myths: { defense: 4513, resistance: 410, equipmentRating: 246.25 },
                twelve: { defense: 4738, resistance: 430, equipmentRating: 258.75 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherJacket: {
            id: 5,
            name: "Искаженная рамианская кожаная куртка",
            type: "bodyArmor",
            image: "body_armor/leather/leather_body2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1230, resistance: 1230, equipmentRating: 122.85 },
                uncommon: { defense: 1291, resistance: 1291, equipmentRating: 128.75 },
                rare: { defense: 1353, resistance: 1353, equipmentRating: 135 },
                unique: { defense: 1414, resistance: 1414, equipmentRating: 141.25 },
                epic: { defense: 1476, resistance: 1476, equipmentRating: 147.5 },
                legendary: { defense: 1537, resistance: 1537, equipmentRating: 153.75 },
                relic: { defense: 1660, resistance: 1660, equipmentRating: 165.9 },
                wonders: { defense: 1845, resistance: 1845, equipmentRating: 184.25 },
                tales: { defense: 2091, resistance: 2091, equipmentRating: 209 },
                legends: { defense: 2337, resistance: 2337, equipmentRating: 233.75 },
                myths: { defense: 2460, resistance: 2460, equipmentRating: 246.25 },
                twelve: { defense: 2583, resistance: 2583, equipmentRating: 258.75 }
            },
            engravingSlots: 0
        },
        distortedRamianClothVest: {
            id: 6,
            name: "Искаженный рамианский матерчатый камзол",
            type: "bodyArmor",
            image: "body_armor/cloth/cloth_body2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 615, resistance: 1845, equipmentRating: 122.85 },
                uncommon: { defense: 646, resistance: 1937, equipmentRating: 128.75 },
                rare: { defense: 676, resistance: 2030, equipmentRating: 135 },
                unique: { defense: 707, resistance: 2122, equipmentRating: 141.25 },
                epic: { defense: 738, resistance: 2214, equipmentRating: 147.5 },
                legendary: { defense: 768, resistance: 2307, equipmentRating: 153.75 },
                relic: { defense: 830, resistance: 2491, equipmentRating: 165.9 },
                wonders: { defense: 922, resistance: 2768, equipmentRating: 184.25 },
                tales: { defense: 1045, resistance: 3136, equipmentRating: 209 },
                legends: { defense: 1168, resistance: 3505, equipmentRating: 233.75 },
                myths: { defense: 1230, resistance: 3690, equipmentRating: 246.25 },
                twelve: { defense: 1291, resistance: 3874, equipmentRating: 258.75 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateChestplate: {
            id: 7,
            name: "Проклятый рамианский латный нагрудник",
            type: "bodyArmor",
            image: "body_armor/plate/plate_body3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 2451, resistance: 222, equipmentRating: 132.6 },
                uncommon: { defense: 2574, resistance: 233, equipmentRating: 139 },
                rare: { defense: 2696, resistance: 245, equipmentRating: 145.75 },
                unique: { defense: 2819, resistance: 256, equipmentRating: 152.5 },
                epic: { defense: 2941, resistance: 267, equipmentRating: 159 },
                legendary: { defense: 3064, resistance: 278, equipmentRating: 165.75 },
                relic: { defense: 3309, resistance: 300, equipmentRating: 179 },
                wonders: { defense: 3677, resistance: 334, equipmentRating: 198.75 },
                tales: { defense: 4166, resistance: 378, equipmentRating: 225.25 },
                legends: { defense: 4655, resistance: 423, equipmentRating: 251.75 },
                myths: { defense: 4900, resistance: 445, equipmentRating: 265 },
                twelve: { defense: 5145, resistance: 467, equipmentRating: 278.25 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherJacket: {
            id: 8,
            name: "Проклятая рамианская кожаная куртка",
            type: "bodyArmor",
            image: "body_armor/leather/leather_body3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1337, resistance: 1337, equipmentRating: 132.6 },
                uncommon: { defense: 1404, resistance: 1404, equipmentRating: 139 },
                rare: { defense: 1470, resistance: 1470, equipmentRating: 145.75 },
                unique: { defense: 1537, resistance: 1537, equipmentRating: 152.5 },
                epic: { defense: 1603, resistance: 1603, equipmentRating: 159 },
                legendary: { defense: 1670, resistance: 1670, equipmentRating: 165.75 },
                relic: { defense: 1804, resistance: 1804, equipmentRating: 179 },
                wonders: { defense: 2004, resistance: 2004, equipmentRating: 198.75 },
                tales: { defense: 2271, resistance: 2271, equipmentRating: 225.25 },
                legends: { defense: 2538, resistance: 2538, equipmentRating: 251.75 },
                myths: { defense: 2672, resistance: 2672, equipmentRating: 265 },
                twelve: { defense: 2805, resistance: 2805, equipmentRating: 278.25 }
            },
            engravingSlots: 0
        },
        cursedRamianClothVest: {
            id: 9,
            name: "Проклятый рамианский матерчатый камзол",
            type: "bodyArmor",
            image: "body_armor/cloth/cloth_body3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 668, resistance: 2005, equipmentRating: 132.6 },
                uncommon: { defense: 702, resistance: 2105, equipmentRating: 139 },
                rare: { defense: 735, resistance: 2206, equipmentRating: 145.75 },
                unique: { defense: 769, resistance: 2306, equipmentRating: 152.5 },
                epic: { defense: 802, resistance: 2407, equipmentRating: 159 },
                legendary: { defense: 835, resistance: 2507, equipmentRating: 165.75 },
                relic: { defense: 902, resistance: 2708, equipmentRating: 179 },
                wonders: { defense: 1002, resistance: 3008, equipmentRating: 198.75 },
                tales: { defense: 1136, resistance: 3409, equipmentRating: 225.25 },
                legends: { defense: 1269, resistance: 3809, equipmentRating: 251.75 },
                myths: { defense: 1336, resistance: 4010, equipmentRating: 265 },
                twelve: { defense: 1402, resistance: 4210, equipmentRating: 278.25 }
            },
            engravingSlots: 0
        },
        primalRamianPlateChestplate: {
            id: 10,
            name: "Изначальный рамианский латный нагрудник",
            type: "bodyArmor",
            image: "body_armor/plate/plate_body4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 2491, resistance: 226, equipmentRating: 134.55 },
                uncommon: { defense: 2616, resistance: 237, equipmentRating: 141.25 },
                rare: { defense: 2741, resistance: 249, equipmentRating: 148 },
                unique: { defense: 2866, resistance: 260, equipmentRating: 154.5 },
                epic: { defense: 2991, resistance: 272, equipmentRating: 161.25 },
                legendary: { defense: 3116, resistance: 283, equipmentRating: 168 },
                relic: { defense: 3366, resistance: 306, equipmentRating: 181.5 },
                wonders: { defense: 3741, resistance: 340, equipmentRating: 201.75 },
                tales: { defense: 4241, resistance: 385, equipmentRating: 228.5 },
                legends: { defense: 4741, resistance: 431, equipmentRating: 255.5 },
                myths: { defense: 4991, resistance: 453, equipmentRating: 269 },
                twelve: { defense: 5241, resistance: 476, equipmentRating: 282.5 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherJacket: {
            id: 11,
            name: "Изначальная рамианская кожаная куртка",
            type: "bodyArmor",
            image: "body_armor/leather/leather_body4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1358, resistance: 1358, equipmentRating: 134.55 },
                uncommon: { defense: 1426, resistance: 1426, equipmentRating: 141.25 },
                rare: { defense: 1494, resistance: 1494, equipmentRating: 148 },
                unique: { defense: 1562, resistance: 1562, equipmentRating: 154.5 },
                epic: { defense: 1630, resistance: 1630, equipmentRating: 161.25 },
                legendary: { defense: 1698, resistance: 1698, equipmentRating: 168 },
                relic: { defense: 1834, resistance: 1834, equipmentRating: 181.5 },
                wonders: { defense: 2038, resistance: 2038, equipmentRating: 201.75 },
                tales: { defense: 2309, resistance: 2309, equipmentRating: 228.5 },
                legends: { defense: 2580, resistance: 2580, equipmentRating: 255.5 },
                myths: { defense: 2716, resistance: 2716, equipmentRating: 269 },
                twelve: { defense: 2851, resistance: 2851, equipmentRating: 282.5 }
            },
            engravingSlots: 0
        },
        primalRamianClothVest: {
            id: 12,
            name: "Изначальный рамианский камзол",
            type: "bodyArmor",
            image: "body_armor/cloth/cloth_body4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 679, resistance: 2038, equipmentRating: 134.55 },
                uncommon: { defense: 713, resistance: 2140, equipmentRating: 141.25 },
                rare: { defense: 747, resistance: 2242, equipmentRating: 148 },
                unique: { defense: 781, resistance: 2344, equipmentRating: 154.5 },
                epic: { defense: 815, resistance: 2446, equipmentRating: 161.25 },
                legendary: { defense: 849, resistance: 2548, equipmentRating: 168 },
                relic: { defense: 917, resistance: 2752, equipmentRating: 181.5 },
                wonders: { defense: 1019, resistance: 3058, equipmentRating: 201.75 },
                tales: { defense: 1154, resistance: 3463, equipmentRating: 228.5 },
                legends: { defense: 1290, resistance: 3871, equipmentRating: 255.5 },
                myths: { defense: 1358, resistance: 4075, equipmentRating: 269 },
                twelve: { defense: 1426, resistance: 4279, equipmentRating: 282.5 }
            },
            engravingSlots: 0
        },
        upgradedRamianPlateChestplate: {
            id: 13,
            name: "Обновленный рамианский латный нагрудник",
            type: "bodyArmor",
            image: "body_armor/plate/plate_body5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 2530, resistance: 230, equipmentRating: 136.5 },
                uncommon: { defense: 2657, resistance: 241, equipmentRating: 143.25 },
                rare: { defense: 2783, resistance: 253, equipmentRating: 150 },
                unique: { defense: 2910, resistance: 264, equipmentRating: 156.75 },
                epic: { defense: 3037, resistance: 276, equipmentRating: 163.75 },
                legendary: { defense: 3163, resistance: 287, equipmentRating: 170.75 },
                relic: { defense: 3417, resistance: 310, equipmentRating: 184.25 },
                wonders: { defense: 3798, resistance: 345, equipmentRating: 204.75 },
                tales: { defense: 4305, resistance: 391, equipmentRating: 232 },
                legends: { defense: 4812, resistance: 437, equipmentRating: 259.25 },
                myths: { defense: 5066, resistance: 460, equipmentRating: 273 },
                twelve: { defense: 5319, resistance: 483, equipmentRating: 286.75 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherJacket: {
            id: 14,
            name: "Обновленная рамианская кожаная куртка",
            type: "bodyArmor",
            image: "body_armor/leather/leather_body5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1379, resistance: 1379, equipmentRating: 136.5 },
                uncommon: { defense: 1448, resistance: 1448, equipmentRating: 143.25 },
                rare: { defense: 1517, resistance: 1517, equipmentRating: 150 },
                unique: { defense: 1586, resistance: 1586, equipmentRating: 156.75 },
                epic: { defense: 1655, resistance: 1655, equipmentRating: 163.75 },
                legendary: { defense: 1724, resistance: 1724, equipmentRating: 170.75 },
                relic: { defense: 1862, resistance: 1862, equipmentRating: 184.25 },
                wonders: { defense: 2069, resistance: 2069, equipmentRating: 204.75 },
                tales: { defense: 2345, resistance: 2345, equipmentRating: 232 },
                legends: { defense: 2621, resistance: 2621, equipmentRating: 259.25 },
                myths: { defense: 2759, resistance: 2759, equipmentRating: 273 },
                twelve: { defense: 2897, resistance: 2897, equipmentRating: 286.75 }
            },
            engravingSlots: 0
        },
        upgradedRamianClothVest: {
            id: 15,
            name: "Обновленный рамианский камзол",
            type: "bodyArmor",
            image: "body_armor/cloth/cloth_body5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 689, resistance: 2069, equipmentRating: 136.5 },
                uncommon: { defense: 724, resistance: 2172, equipmentRating: 143.25 },
                rare: { defense: 759, resistance: 2276, equipmentRating: 150 },
                unique: { defense: 793, resistance: 2379, equipmentRating: 156.75 },
                epic: { defense: 828, resistance: 2483, equipmentRating: 163.75 },
                legendary: { defense: 862, resistance: 2586, equipmentRating: 170.75 },
                relic: { defense: 931, resistance: 2793, equipmentRating: 184.25 },
                wonders: { defense: 1034, resistance: 3103, equipmentRating: 204.75 },
                tales: { defense: 1172, resistance: 3518, equipmentRating: 232 },
                legends: { defense: 1310, resistance: 3932, equipmentRating: 259.25 },
                myths: { defense: 1379, resistance: 4139, equipmentRating: 273 },
                twelve: { defense: 1448, resistance: 4345, equipmentRating: 286.75 }
            },
            engravingSlots: 0
        },
        masterPlateChestplate: {
            id: 16,
            name: "Магистерский латный нагрудник эрнардского архивариуса",
            type: "bodyArmor",
            image: "body_armor/plate/master_plate_body.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 2451, resistance: 222, equipmentRating: 132.6, stamina: 93, strength: 62},
                uncommon: { defense: 2573, resistance: 233, equipmentRating: 139.2, stamina: 100, strength: 67 },
                rare: { defense: 2696, resistance: 245, equipmentRating: 150, stamina: 108, strength: 72 },
                unique: { defense: 2819, resistance: 256, equipmentRating: 152.4, stamina: 115, strength: 77 },
                epic: { defense: 2941, resistance: 267, equipmentRating:  159.1, stamina: 123, strength: 82 },
                legendary: { defense: 3064, resistance: 278, equipmentRating: 165.7, stamina: 130, strength: 87 },
                relic: { defense: 3309, resistance: 300, equipmentRating: 179, stamina: 140, strength: 93 },
                wonders: { defense: 3677, resistance: 334, equipmentRating: 198.9, stamina: 149, strength: 99 },
                tales: { defense: 4167, resistance: 378, equipmentRating: 225.4, stamina: 158, strength: 106 },
                legends: { defense: 4657, resistance: 423, equipmentRating: 251.9, stamina: 172, strength: 115 },
                myths: { defense: 4902, resistance: 445, equipmentRating: 265.2, stamina: 186, strength: 124 },
                twelve: { defense: 5147, resistance: 467, equipmentRating: 278.4, stamina: 196, strength: 131 }
            },
            engravingSlots: 0
        },
        masterClothVest1: {
            id: 17,
            name: "Магистерский матерчатый камзол эрнардского мнемоника",
            type: "bodyArmor",
            image: "body_armor/cloth/master_cloth_body1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 668, resistance: 2005, equipmentRating: 132.6, stamina: 62, intellect: 93 },
                uncommon: { defense: 701, resistance: 2105, equipmentRating: 139.2, stamina: 67, intellect: 100 },
                rare: { defense: 735, resistance: 2206, equipmentRating: 145.8, stamina: 72, intellect: 108 },
                unique: { defense: 769, resistance: 2306, equipmentRating: 152.4, stamina: 77, intellect: 115 },
                epic: { defense: 802, resistance: 2407, equipmentRating: 159.1, stamina: 82, intellect: 123 },
                legendary: { defense: 835, resistance: 2507, equipmentRating: 165.7, stamina: 87, intellect: 130 },
                relic: { defense: 902, resistance: 2708, equipmentRating: 179, stamina: 93, intellect: 140 },
                wonders: { defense: 1002, resistance: 3008, equipmentRating: 198.9, stamina: 99, intellect: 149 },
                tales: { defense: 1136, resistance: 3409, equipmentRating: 225.4, stamina: 106, intellect: 158 },
                legends: { defense: 1269, resistance: 3809, equipmentRating: 251.9, stamina: 115, intellect: 172 },
                myths: { defense: 1336, resistance: 4010, equipmentRating: 265.2, stamina: 124, intellect: 186 },
                twelve: { defense: 1402, resistance: 4210, equipmentRating: 278.4, stamina: 131, intellect: 196 }
            },
            engravingSlots: 0
        },
        masterClothVest2: {
            id: 18,
            name: "Магистерский матерчатый камзол смотрителя тайных архивов",
            type: "bodyArmor",
            image: "body_armor/cloth/master_cloth_body2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 668, resistance: 2005, equipmentRating: 132.6, stamina: 62, spirit: 93 },
                uncommon: { defense: 701, resistance: 2105, equipmentRating: 139.2, stamina: 67, spirit: 100 },
                rare: { defense: 735, resistance: 2206, equipmentRating: 145.8, stamina: 72, spirit: 108 },
                unique: { defense: 769, resistance: 2306, equipmentRating: 152.4, stamina: 77, spirit: 115 },
                epic: { defense: 802, resistance: 2407, equipmentRating: 159.1, stamina: 82, spirit: 123 },
                legendary: { defense: 835, resistance: 2507, equipmentRating: 165.7, stamina: 87, spirit: 130 },
                relic: { defense: 902, resistance: 2708, equipmentRating: 179, stamina: 93, spirit: 140 },
                wonders: { defense: 1002, resistance: 3008, equipmentRating: 198.9, stamina: 99, spirit: 149 },
                tales: { defense: 1136, resistance: 3409, equipmentRating: 225.4, stamina: 106, spirit: 158 },
                legends: { defense: 1269, resistance: 3809, equipmentRating: 251.9, stamina: 115, spirit: 172 },
                myths: { defense: 1336, resistance: 4010, equipmentRating: 265.2, stamina: 124, spirit: 186 },
                twelve: { defense: 1402, resistance: 4210, equipmentRating: 278.4, stamina: 131, spirit: 196 }
            },
            engravingSlots: 0
        },
        masterLeatherJacket1: {
            id: 19,
            name: "Магистерская кожаная куртка укротителя гримуаров",
            type: "bodyArmor",
            image: "body_armor/leather/master_leather_body1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 1337, resistance: 1337, equipmentRating: 132.6, stamina: 62, agility: 93 },
                uncommon: { defense: 1404, resistance: 1404, equipmentRating: 139, stamina: 67, agility: 100 },
                rare: { defense: 1470, resistance: 1470, equipmentRating: 145.75, stamina: 72, agility: 108 },
                unique: { defense: 1537, resistance: 1537, equipmentRating: 152.5, stamina: 77, agility: 115 },
                epic: { defense: 1603, resistance: 1603, equipmentRating: 159, stamina: 82, agility: 123 },
                legendary: { defense: 1670, resistance: 1670, equipmentRating: 165.75, stamina: 87, agility: 130 },
                relic: { defense: 1804, resistance: 1804, equipmentRating: 179, stamina: 93, agility: 140 },
                wonders: { defense: 2004, resistance: 2004, equipmentRating: 198.75, stamina: 99, agility: 149 },
                tales: { defense: 2271, resistance: 2271, equipmentRating: 225.25, stamina: 106, agility: 158 },
                legends: { defense: 2538, resistance: 2538, equipmentRating: 251.75, stamina: 115, agility: 172 },
                myths: { defense: 2672, resistance: 2672, equipmentRating: 265, stamina: 124, agility: 186 },
                twelve: { defense: 2805, resistance: 2805, equipmentRating: 278.25, stamina: 131, agility: 196 }
            },
            engravingSlots: 0
        },
        masterLeatherJacket2: {
            id: 20,
            name: "Магистерская кожаная куртка заклинателя гримуаров",
            type: "bodyArmor",
            image: "body_armor/leather/master_leather_body2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 1337, resistance: 1337, equipmentRating: 132.6, stamina: 62, strength: 93 },
                uncommon: { defense: 1404, resistance: 1404, equipmentRating: 139, stamina: 67, strength: 100 },
                rare: { defense: 1470, resistance: 1470, equipmentRating: 145.75, stamina: 72, strength: 108 },
                unique: { defense: 1537, resistance: 1537, equipmentRating: 152.5, stamina: 77, strength: 115 },
                epic: { defense: 1603, resistance: 1603, equipmentRating: 159, stamina: 82, strength: 123 },
                legendary: { defense: 1670, resistance: 1670, equipmentRating: 165.75, stamina: 87, strength: 130 },
                relic: { defense: 1804, resistance: 1804, equipmentRating: 179, stamina: 93, strength: 140 },
                wonders: { defense: 2004, resistance: 2004, equipmentRating: 198.75, stamina: 99, strength: 149 },
                tales: { defense: 2271, resistance: 2271, equipmentRating: 225.25, stamina: 106, strength: 158 },
                legends: { defense: 2538, resistance: 2538, equipmentRating: 251.75, stamina: 115, strength: 172 },
                myths: { defense: 2672, resistance: 2672, equipmentRating: 265, stamina: 124, strength: 186 },
                twelve: { defense: 2805, resistance: 2805, equipmentRating: 278.25, stamina: 131, strength: 196 }
            },
            engravingSlots: 0
        },
        materchatyykamzolsmotritelyataynyharhivov: {
            id: 21,
            name: "Матерчатый камзол смотрителя тайных архивов",
            type: "bodyArmor",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 594, resistance: 1782, equipmentRating: 118.95, stamina: 56, spirit: 83 },
                uncommon: { defense: 624, resistance: 1871, equipmentRating: 124.90, stamina: 60, spirit: 89 },
                rare: { defense: 653, resistance: 1960, equipmentRating: 130.85, stamina: 66, spirit: 97 },
                unique: { defense: 683, resistance: 2049, equipmentRating: 136.79, stamina: 69, spirit: 103 },
                epic: { defense: 713, resistance: 2138, equipmentRating: 142.74, stamina: 75, spirit: 111 },
                legendary: { defense: 743, resistance: 2228, equipmentRating: 148.69, stamina: 79, spirit: 117 },
                relic: { defense: 802, resistance: 2406, equipmentRating: 160.58, stamina: 85, spirit: 126 },
                wonders: { defense: 891, resistance: 2673, equipmentRating: 178.43, stamina: 91, spirit: 134 },
                tales: { defense: 1010, resistance: 3029, equipmentRating: 202.22, stamina: 96, spirit: 143 },
                legends: { defense: 1129, resistance: 3386, equipmentRating: 226.00, stamina: 104, spirit: 154 },
                myths: { defense: 1188, resistance: 3564, equipmentRating: 237.90, stamina: 114, spirit: 168 },
                twelve: { defense: 1247, resistance: 3742, equipmentRating: 249.80, stamina: 120, spirit: 178 }
            },
            engravingSlots: 0
        }
    },
    
    // Пояса
    belts: {
        ramianPlateBelt: {
            id: 1,
            name: "Рамианский латный пояс",
            type: "belts",
            image: "belt/plate/plate_belt1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 397, resistance: 36, equipmentRating: 21.84 },
                uncommon: { defense: 417, resistance: 38, equipmentRating: 22.9 },
                rare: { defense: 437, resistance: 40, equipmentRating: 24 },
                unique: { defense: 457, resistance: 41, equipmentRating: 25.1 },
                epic: { defense: 477, resistance: 43, equipmentRating: 26.2 },
                legendary: { defense: 496, resistance: 45, equipmentRating: 27.3 },
                relic: { defense: 536, resistance: 49, equipmentRating: 29.45 },
                wonders: { defense: 596, resistance: 54, equipmentRating: 32.75 },
                tales: { defense: 675, resistance: 61, equipmentRating: 37.1 },
                legends: { defense: 754, resistance: 68, equipmentRating: 41.45 },
                myths: { defense: 794, resistance: 72, equipmentRating: 43.65 },
                twelve: { defense: 834, resistance: 76, equipmentRating: 45.85 }
            },
            engravingSlots: 0
        },
        ramianLeatherBelt: {
            id: 2,
            name: "Рамианский кожаный пояс",
            type: "belts",
            image: "belt/leather/leather_belt1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 216, resistance: 216, equipmentRating: 21.84 },
                uncommon: { defense: 227, resistance: 227, equipmentRating: 22.9 },
                rare: { defense: 238, resistance: 238, equipmentRating: 24 },
                unique: { defense: 249, resistance: 249, equipmentRating: 25.1 },
                epic: { defense: 260, resistance: 260, equipmentRating: 26.2 },
                legendary: { defense: 271, resistance: 271, equipmentRating: 27.3 },
                relic: { defense: 293, resistance: 293, equipmentRating: 29.45 },
                wonders: { defense: 325, resistance: 325, equipmentRating: 32.75 },
                tales: { defense: 368, resistance: 368, equipmentRating: 37.1 },
                legends: { defense: 411, resistance: 411, equipmentRating: 41.45 },
                myths: { defense: 433, resistance: 433, equipmentRating: 43.65 },
                twelve: { defense: 454, resistance: 454, equipmentRating: 45.85 }
            },
            engravingSlots: 0
        },
        ramianClothBelt: {
            id: 3,
            name: "Рамианский матерчатый пояс",
            type: "belts",
            image: "belt/cloth/cloth_belt1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 108, resistance: 324, equipmentRating: 21.84 },
                uncommon: { defense: 113, resistance: 340, equipmentRating: 22.9 },
                rare: { defense: 119, resistance: 357, equipmentRating: 24 },
                unique: { defense: 124, resistance: 373, equipmentRating: 25.1 },
                epic: { defense: 130, resistance: 390, equipmentRating: 26.2 },
                legendary: { defense: 135, resistance: 406, equipmentRating: 27.3 },
                relic: { defense: 146, resistance: 439, equipmentRating: 29.45 },
                wonders: { defense: 162, resistance: 487, equipmentRating: 32.75 },
                tales: { defense: 184, resistance: 552, equipmentRating: 37.1 },
                legends: { defense: 205, resistance: 617, equipmentRating: 41.45 },
                myths: { defense: 216, resistance: 649, equipmentRating: 43.65 },
                twelve: { defense: 227, resistance: 681, equipmentRating: 45.85 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateBelt: {
            id: 4,
            name: "Искаженный рамианский латный пояс",
            type: "belts",
            image: "belt/plate/plate_belt2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 451, resistance: 41, equipmentRating: 24.55 },
                uncommon: { defense: 474, resistance: 43, equipmentRating: 25.8 },
                rare: { defense: 497, resistance: 45, equipmentRating: 27 },
                unique: { defense: 519, resistance: 47, equipmentRating: 28.25 },
                epic: { defense: 542, resistance: 49, equipmentRating: 29.45 },
                legendary: { defense: 564, resistance: 51, equipmentRating: 30.7 },
                relic: { defense: 610, resistance: 55, equipmentRating: 33.15 },
                wonders: { defense: 677, resistance: 61, equipmentRating: 36.85 },
                tales: { defense: 767, resistance: 70, equipmentRating: 41.75 },
                legends: { defense: 857, resistance: 78, equipmentRating: 46.65 },
                myths: { defense: 902, resistance: 82, equipmentRating: 49.1 },
                twelve: { defense: 947, resistance: 86, equipmentRating: 51.55 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherBelt: {
            id: 5,
            name: "Искаженный рамианский кожаный пояс",
            type: "belts",
            image: "belt/leather/leather_belt2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 246, resistance: 246, equipmentRating: 24.55 },
                uncommon: { defense: 258, resistance: 258, equipmentRating: 25.8 },
                rare: { defense: 271, resistance: 271, equipmentRating: 27 },
                unique: { defense: 283, resistance: 283, equipmentRating: 28.25 },
                epic: { defense: 295, resistance: 295, equipmentRating: 29.45 },
                legendary: { defense: 308, resistance: 308, equipmentRating: 30.7 },
                relic: { defense: 333, resistance: 333, equipmentRating: 33.15 },
                wonders: { defense: 369, resistance: 369, equipmentRating: 36.85 },
                tales: { defense: 418, resistance: 418, equipmentRating: 41.75 },
                legends: { defense: 467, resistance: 467, equipmentRating: 46.65 },
                myths: { defense: 492, resistance: 492, equipmentRating: 49.1 },
                twelve: { defense: 516, resistance: 516, equipmentRating: 51.55 }
            },
            engravingSlots: 0
        },
        distortedRamianClothBelt: {
            id: 6,
            name: "Искаженный рамианский матерчатый пояс",
            type: "belts",
            image: "belt/cloth/cloth_belt2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 123, resistance: 369, equipmentRating: 24.55 },
                uncommon: { defense: 129, resistance: 387, equipmentRating: 25.8 },
                rare: { defense: 135, resistance: 406, equipmentRating: 27 },
                unique: { defense: 141, resistance: 424, equipmentRating: 28.25 },
                epic: { defense: 148, resistance: 443, equipmentRating: 29.45 },
                legendary: { defense: 154, resistance: 461, equipmentRating: 30.7 },
                relic: { defense: 166, resistance: 499, equipmentRating: 33.15 },
                wonders: { defense: 185, resistance: 554, equipmentRating: 36.85 },
                tales: { defense: 209, resistance: 628, equipmentRating: 41.75 },
                legends: { defense: 234, resistance: 701, equipmentRating: 46.65 },
                myths: { defense: 246, resistance: 738, equipmentRating: 49.1 },
                twelve: { defense: 258, resistance: 775, equipmentRating: 51.55 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateBelt: {
            id: 7,
            name: "Проклятый рамианский латный пояс",
            type: "belts",
            image: "belt/plate/plate_belt3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 490, resistance: 44, equipmentRating: 26.5 },
                uncommon: { defense: 515, resistance: 47, equipmentRating: 27.8 },
                rare: { defense: 540, resistance: 49, equipmentRating: 29.15 },
                unique: { defense: 564, resistance: 51, equipmentRating: 30.5 },
                epic: { defense: 589, resistance: 53, equipmentRating: 31.8 },
                legendary: { defense: 613, resistance: 56, equipmentRating: 33.15 },
                relic: { defense: 662, resistance: 60, equipmentRating: 35.8 },
                wonders: { defense: 736, resistance: 67, equipmentRating: 39.75 },
                tales: { defense: 833, resistance: 76, equipmentRating: 45.05 },
                legends: { defense: 931, resistance: 84, equipmentRating: 50.35 },
                myths: { defense: 980, resistance: 89, equipmentRating: 53 },
                twelve: { defense: 1029, resistance: 93, equipmentRating: 55.65 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherBelt: {
            id: 8,
            name: "Проклятый рамианский кожаный пояс",
            type: "belts",
            image: "belt/leather/leather_belt3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 267, resistance: 267, equipmentRating: 26.5 },
                uncommon: { defense: 280, resistance: 280, equipmentRating: 27.8 },
                rare: { defense: 294, resistance: 294, equipmentRating: 29.15 },
                unique: { defense: 307, resistance: 307, equipmentRating: 30.5 },
                epic: { defense: 321, resistance: 321, equipmentRating: 31.8 },
                legendary: { defense: 334, resistance: 334, equipmentRating: 33.15 },
                relic: { defense: 361, resistance: 361, equipmentRating: 35.8 },
                wonders: { defense: 401, resistance: 401, equipmentRating: 39.75 },
                tales: { defense: 454, resistance: 454, equipmentRating: 45.05 },
                legends: { defense: 507, resistance: 507, equipmentRating: 50.35 },
                myths: { defense: 534, resistance: 534, equipmentRating: 53 },
                twelve: { defense: 561, resistance: 561, equipmentRating: 55.65 }
            },
            engravingSlots: 0
        },
        cursedRamianClothBelt: {
            id: 9,
            name: "Проклятый рамианский матерчатый пояс",
            type: "belts",
            image: "belt/cloth/cloth_belt3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 133, resistance: 401, equipmentRating: 26.5 },
                uncommon: { defense: 140, resistance: 421, equipmentRating: 27.8 },
                rare: { defense: 147, resistance: 441, equipmentRating: 29.15 },
                unique: { defense: 153, resistance: 461, equipmentRating: 30.5 },
                epic: { defense: 160, resistance: 481, equipmentRating: 31.8 },
                legendary: { defense: 167, resistance: 501, equipmentRating: 33.15 },
                relic: { defense: 180, resistance: 541, equipmentRating: 35.8 },
                wonders: { defense: 200, resistance: 601, equipmentRating: 39.75 },
                tales: { defense: 227, resistance: 681, equipmentRating: 45.05 },
                legends: { defense: 253, resistance: 761, equipmentRating: 50.35 },
                myths: { defense: 267, resistance: 802, equipmentRating: 53 },
                twelve: { defense: 280, resistance: 842, equipmentRating: 55.65 }
            },
            engravingSlots: 0
        },
        primalRamianPlateBelt: {
            id: 10,
            name: "Изначальный рамианский латный пояс",
            type: "belts",
            image: "belt/plate/plate_belt4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 507, resistance: 46, equipmentRating: 26.9 },
                uncommon: { defense: 532, resistance: 48, equipmentRating: 28.25 },
                rare: { defense: 558, resistance: 51, equipmentRating: 29.6 },
                unique: { defense: 583, resistance: 53, equipmentRating: 30.9 },
                epic: { defense: 609, resistance: 55, equipmentRating: 32.25 },
                legendary: { defense: 634, resistance: 57, equipmentRating: 33.6 },
                relic: { defense: 685, resistance: 62, equipmentRating: 36.3 },
                wonders: { defense: 761, resistance: 69, equipmentRating: 40.35 },
                tales: { defense: 862, resistance: 78, equipmentRating: 45.7 },
                legends: { defense: 963, resistance: 87, equipmentRating: 51.1 },
                myths: { defense: 1014, resistance: 92, equipmentRating: 53.8 },
                twelve: { defense: 1065, resistance: 97, equipmentRating: 56.5 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherBelt: {
            id: 11,
            name: "Изначальный рамианский кожаный пояс",
            type: "belts",
            image: "belt/leather/leather_belt4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 271, resistance: 271, equipmentRating: 26.9 },
                uncommon: { defense: 285, resistance: 285, equipmentRating: 28.25 },
                rare: { defense: 298, resistance: 298, equipmentRating: 29.6 },
                unique: { defense: 312, resistance: 312, equipmentRating: 30.9 },
                epic: { defense: 326, resistance: 326, equipmentRating: 32.25 },
                legendary: { defense: 339, resistance: 339, equipmentRating: 33.6 },
                relic: { defense: 366, resistance: 366, equipmentRating: 36.3 },
                wonders: { defense: 407, resistance: 407, equipmentRating: 40.35 },
                tales: { defense: 461, resistance: 461, equipmentRating: 45.7 },
                legends: { defense: 516, resistance: 516, equipmentRating: 51.1 },
                myths: { defense: 543, resistance: 543, equipmentRating: 53.8 },
                twelve: { defense: 570, resistance: 570, equipmentRating: 56.5 }
            },
            engravingSlots: 0
        },
        primalRamianClothBelt: {
            id: 12,
            name: "Изначальный рамианский матерчатый пояс",
            type: "belts",
            image: "belt/cloth/cloth_belt4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 135, resistance: 406, equipmentRating: 26.9 },
                uncommon: { defense: 142, resistance: 427, equipmentRating: 28.25 },
                rare: { defense: 149, resistance: 447, equipmentRating: 29.6 },
                unique: { defense: 156, resistance: 468, equipmentRating: 30.9 },
                epic: { defense: 163, resistance: 488, equipmentRating: 32.25 },
                legendary: { defense: 169, resistance: 509, equipmentRating: 33.6 },
                relic: { defense: 183, resistance: 549, equipmentRating: 36.3 },
                wonders: { defense: 203, resistance: 610, equipmentRating: 40.35 },
                tales: { defense: 230, resistance: 692, equipmentRating: 45.7 },
                legends: { defense: 258, resistance: 774, equipmentRating: 51.1 },
                myths: { defense: 271, resistance: 815, equipmentRating: 53.8 },
                twelve: { defense: 285, resistance: 855, equipmentRating: 56.5 }
            },
            engravingSlots: 0
        },
        upgradedRamianPlateBelt: {
            id: 13,
            name: "Обновленный рамианский латный пояс",
            type: "belts",
            image: "belt/plate/plate_belt5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 515, resistance: 47, equipmentRating: 27.3 },
                uncommon: { defense: 541, resistance: 49, equipmentRating: 28.65 },
                rare: { defense: 567, resistance: 51, equipmentRating: 30 },
                unique: { defense: 592, resistance: 54, equipmentRating: 31.35 },
                epic: { defense: 618, resistance: 56, equipmentRating: 32.75 },
                legendary: { defense: 644, resistance: 58, equipmentRating: 34.1 },
                relic: { defense: 696, resistance: 63, equipmentRating: 36.85 },
                wonders: { defense: 773, resistance: 70, equipmentRating: 40.95 },
                tales: { defense: 876, resistance: 79, equipmentRating: 46.4 },
                legends: { defense: 978, resistance: 89, equipmentRating: 51.85 },
                myths: { defense: 1030, resistance: 93, equipmentRating: 54.6 },
                twelve: { defense: 1081, resistance: 98, equipmentRating: 57.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherBelt: {
            id: 14,
            name: "Обновленный рамианский кожаный пояс",
            type: "belts",
            image: "belt/leather/leather_belt5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 275, resistance: 275, equipmentRating: 27.3 },
                uncommon: { defense: 289, resistance: 289, equipmentRating: 28.65 },
                rare: { defense: 303, resistance: 303, equipmentRating: 30 },
                unique: { defense: 317, resistance: 317, equipmentRating: 31.35 },
                epic: { defense: 331, resistance: 331, equipmentRating: 32.75 },
                legendary: { defense: 344, resistance: 344, equipmentRating: 34.1 },
                relic: { defense: 372, resistance: 372, equipmentRating: 36.85 },
                wonders: { defense: 413, resistance: 413, equipmentRating: 40.95 },
                tales: { defense: 469, resistance: 469, equipmentRating: 46.4 },
                legends: { defense: 524, resistance: 524, equipmentRating: 51.85 },
                myths: { defense: 551, resistance: 551, equipmentRating: 54.6 },
                twelve: { defense: 579, resistance: 579, equipmentRating: 57.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianClothBelt: {
            id: 15,
            name: "Обновленный рамианский матерчатый пояс",
            type: "belts",
            image: "belt/cloth/cloth_belt5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 137, resistance: 413, equipmentRating: 27.3 },
                uncommon: { defense: 144, resistance: 434, equipmentRating: 28.65 },
                rare: { defense: 151, resistance: 455, equipmentRating: 30 },
                unique: { defense: 158, resistance: 476, equipmentRating: 31.35 },
                epic: { defense: 165, resistance: 496, equipmentRating: 32.75 },
                legendary: { defense: 172, resistance: 517, equipmentRating: 34.1 },
                relic: { defense: 186, resistance: 558, equipmentRating: 36.85 },
                wonders: { defense: 206, resistance: 620, equipmentRating: 40.95 },
                tales: { defense: 234, resistance: 703, equipmentRating: 46.4 },
                legends: { defense: 262, resistance: 786, equipmentRating: 51.85 },
                myths: { defense: 275, resistance: 827, equipmentRating: 54.6 },
                twelve: { defense: 289, resistance: 869, equipmentRating: 57.3 }
            },
            engravingSlots: 0
        },
        masterPlateBelt: {
            id: 16,
            name: "Магистерский латный пояс эрнадского архивариуса",
            type: "belts",
            image: "belt/plate/master_plate_belt.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 490, resistance: 44, equipmentRating: 26.5, stamina: 29 },
                uncommon: { defense: 515, resistance: 47, equipmentRating: 27.8, stamina: 31 },
                rare: { defense: 540, resistance: 49, equipmentRating: 29.15, stamina: 34 },
                unique: { defense: 564, resistance: 51, equipmentRating: 30.5, stamina: 36 },
                epic: { defense: 589, resistance: 53, equipmentRating: 31.8, stamina: 39 },
                legendary: { defense: 613, resistance: 56, equipmentRating: 33.15, stamina: 41 },
                relic: { defense: 662, resistance: 60, equipmentRating: 35.8, stamina: 44 },
                wonders: { defense: 736, resistance: 67, equipmentRating: 39.75, stamina: 47 },
                tales: { defense: 833, resistance: 76, equipmentRating: 45.05, stamina: 50 },
                legends: { defense: 931, resistance: 84, equipmentRating: 50.35, stamina: 54 },
                myths: { defense: 980, resistance: 89, equipmentRating: 53, stamina: 59 },
                twelve: { defense: 1029, resistance: 93, equipmentRating: 55.65, stamina: 62 }
            },
            engravingSlots: 0
        },
        masterClothBelt1: {
            id: 17,
            name: "Магистерский матерчатый пояс эрнардского мнемоника",
            type: "belts",
            image: "belt/cloth/master_cloth_belt1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 133, resistance: 401, equipmentRating: 26.52, stamina: 29 },
                uncommon: { defense: 140, resistance: 421, equipmentRating: 27.8, stamina: 31 },
                rare: { defense: 147, resistance: 441, equipmentRating: 29.1, stamina: 34 },
                unique: { defense: 153, resistance: 461, equipmentRating: 30.5, stamina: 36 },
                epic: { defense: 160, resistance: 481, equipmentRating: 31.8, stamina: 39 },
                legendary: { defense: 167, resistance: 501, equipmentRating: 33.1, stamina: 41 },
                relic: { defense: 180, resistance: 541, equipmentRating: 35.8, stamina: 44 },
                wonders: { defense: 200, resistance: 601, equipmentRating: 39.7, stamina: 471 },
                tales: { defense: 227, resistance: 681, equipmentRating: 45, stamina: 50 },
                legends: { defense: 253, resistance: 761, equipmentRating: 50.3, stamina: 54 },
                myths: { defense: 267, resistance: 802, equipmentRating: 53, stamina: 59 },
                twelve: { defense: 280, resistance: 842, equipmentRating: 55.6, stamina: 62 }
            },
            engravingSlots: 0
        },
        masterClothBelt2: {
            id: 18,
            name: "Магистерский матерчатый пояс смотрителя тайных архивов",
            type: "belts",
            image: "belt/cloth/master_cloth_belt2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 133, resistance: 401, equipmentRating: 26.52, spirit: 29 },
                uncommon: { defense: 140, resistance: 421, equipmentRating: 27.8, spirit: 31 },
                rare: { defense: 147, resistance: 441, equipmentRating: 29.1, spirit: 34},
                unique: { defense: 153, resistance: 461, equipmentRating: 30.5, spirit: 36 },
                epic: { defense: 160, resistance: 481, equipmentRating: 31.8, spirit: 39 },
                legendary: { defense: 167, resistance: 501, equipmentRating: 33.1, spirit: 41 },
                relic: { defense: 180, resistance: 541, equipmentRating: 35.8, spirit: 44 },
                wonders: { defense: 200, resistance: 601, equipmentRating: 39.7, spirit: 47 },
                tales: { defense: 227, resistance: 681, equipmentRating: 45, spirit: 50 },
                legends: { defense: 253, resistance: 761, equipmentRating: 50.3, spirit: 54 },
                myths: { defense: 267, resistance: 802, equipmentRating: 53, spirit: 59 },
                twelve: { defense: 280, resistance: 842, equipmentRating: 55.6, spirit: 62 }
            },
            engravingSlots: 0
        },
        masterLeatherBelt1: {
            id: 19,
            name: "Магистерский кожаный пояс укротителя гримуаров",
            type: "belts",
            image: "belt/leather/master_leather_belt1.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 213, resistance: 213, equipmentRating: 21.2, agility: 29 },
                uncommon: { defense: 280, resistance: 280, equipmentRating: 27.8, agility: 31 },
                rare: { defense: 294, resistance: 294, equipmentRating: 29.1, agility: 34 },
                unique: { defense: 307, resistance: 307, equipmentRating: 30.5, agility: 36 },
                epic: { defense: 321, resistance: 321, equipmentRating: 31.8, agility: 39 },
                legendary: { defense: 334, resistance: 334, equipmentRating: 33.1, agility: 41 },
                relic: { defense: 361, resistance: 361, equipmentRating: 35.8, agility: 44 },
                wonders: { defense: 401, resistance: 401, equipmentRating: 39.7, agility: 47 },
                tales: { defense: 454, resistance: 454, equipmentRating: 45, agility: 50 },
                legends: { defense: 508, resistance: 508, equipmentRating: 50.3, agility: 54 },
                myths: { defense: 535, resistance: 535, equipmentRating: 53, agility: 59 },
                twelve: { defense: 561, resistance: 561, equipmentRating: 55.6, agility: 62 }
            },
            engravingSlots: 0
        },
        masterLeatherBelt2: {
            id: 20,
            name: "Магистерский кожаный пояс заклинателя гримуаров",
            type: "belts",
            image: "belt/leather/master_leather_belt2.png",
            grade: "legendary",
            gradeStats: {
                common: { defense: 267, resistance: 267, equipmentRating: 26.52, strength: 29 },
                uncommon: { defense: 280, resistance: 280, equipmentRating: 27.8, strength: 31 },
                rare: { defense: 294, resistance: 294, equipmentRating: 29.1, strength: 34 },
                unique: { defense: 307, resistance: 307, equipmentRating: 30.5, strength: 36 },
                epic: { defense: 321, resistance: 321, equipmentRating: 31.8, strength: 39 },
                legendary: { defense: 334, resistance: 334, equipmentRating: 33.1, strength: 41 },
                relic: { defense: 361, resistance: 361, equipmentRating: 35.8, strength: 44 },
                wonders: { defense: 401, resistance: 401, equipmentRating: 39.7, strength: 47 },
                tales: { defense: 454, resistance: 454, equipmentRating: 45, strength: 50 },
                legends: { defense: 508, resistance: 508, equipmentRating: 50.3, strength: 54 },
                myths: { defense: 535, resistance: 535, equipmentRating: 53, strength: 59 },
                twelve: { defense: 561, resistance: 561, equipmentRating: 55.6, strength: 62}
            },
            engravingSlots: 0
        }


    },
    
    // Одноручное оружие
    oneHandWeapons: {
        ramianSword1h: {
            id: 1,
            name: "Рамианский одноручный меч",
            type: "oneHandWeapons",
            image: "weapon/sword_1h.png",
            grade: "common",
            gradeStats: {
                common: { attack: 680, equipmentRating: 87.36 },
                uncommon: { attack: 714, equipmentRating: 91.6 },
                rare: { attack: 748, equipmentRating: 96 },
                unique: { attack: 782, equipmentRating: 100.4 },
                epic: { attack: 816, equipmentRating: 104.8 },
                legendary: { attack: 850, equipmentRating: 109.2 },
                relic: { attack: 918, equipmentRating: 117.8 },
                wonders: { attack: 1020, equipmentRating: 131 },
                tales: { attack: 1156, equipmentRating: 148.4 },
                legends: { attack: 1292, equipmentRating: 165.8 },
                myths: { attack: 1360, equipmentRating: 174.6 },
                twelve: { attack: 1428, equipmentRating: 183.4 }
            },
            engravingSlots: 0
        }
    },
    
    // Двуручное оружие
    twoHandWeapons: {
        ramianSword2h: {
            id: 1,
            name: "Рамианский клеймор",
            type: "twoHandWeapons",
            image: "weapon/blaid_2h_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 425.6, equipmentRating: 184.8, haste: 1.1 },
                uncommon: { attack: 446.9, equipmentRating: 194.0, haste: 1.1 },
                rare: { attack: 468.1, equipmentRating: 203.3, haste: 1.1 },
                unique: { attack: 489.4, equipmentRating: 212.5, haste: 1.1 },
                epic: { attack: 510.7, equipmentRating: 221.8, haste: 1.1 },
                legendary: { attack: 532.0, equipmentRating: 231.0, haste: 1.1 },
                relic: { attack: 574.6, equipmentRating: 249.5, haste: 1.1 },
                wonders: { attack: 638.4, equipmentRating: 277.2, haste: 1.1 },
                tales: { attack: 723.0, equipmentRating: 314.0, haste: 1.1 },
                legends: { attack: 807.6, equipmentRating: 350.7, haste: 1.1 },
                myths: { attack: 850.0, equipmentRating: 369.1, haste: 1.1 },
                twelve: { attack: 892.3, equipmentRating: 387.5, haste: 1.1 }
            },
            engravingSlots: 0
        },
        cursedRamianSword2h: {
            id: 2,
            name: "Проклятый рамианский клеймор",
            type: "twoHandWeapons",
            image: "weapon/blaid_2h_2.png",
            grade: "common",
            gradeStats: {
                common: { attack: 629.8, equipmentRating: 224.4, haste: 1.1 },
                uncommon: { attack: 661.3, equipmentRating: 235.6, haste: 1.1 },
                rare: { attack: 692.8, equipmentRating: 246.8, haste: 1.1 },
                unique: { attack: 724.3, equipmentRating: 258.1, haste: 1.1 },
                epic: { attack: 755.8, equipmentRating: 269.3, haste: 1.1 },
                legendary: { attack: 787.3, equipmentRating: 280.5, haste: 1.1 },
                relic: { attack: 850.2, equipmentRating: 302.9, haste: 1.1 },
                wonders: { attack: 944.7, equipmentRating: 336.6, haste: 1.1 },
                tales: { attack: 1070.7, equipmentRating: 381.5, haste: 1.1 },
                legends: { attack: 1196.6, equipmentRating: 426.4, haste: 1.1 },
                myths: { attack: 1259.6, equipmentRating: 448.8, haste: 1.1 },
                twelve: { attack: 1322.6, equipmentRating: 471.2, haste: 1.1 }
            },
            engravingSlots: 0
        },
        distortedRamianSword2h: {
            id: 3,
            name: "Искаженный рамианский клеймор",
            type: "twoHandWeapons",
            image: "weapon/blaid_2h_3.png",
            grade: "common",
            gradeStats: {
                common: { attack: 535.9, equipmentRating: 207.9, haste: 1.1 },
                uncommon: { attack: 562.7, equipmentRating: 218.3, haste: 1.1 },
                rare: { attack: 589.5, equipmentRating: 228.7, haste: 1.1 },
                unique: { attack: 616.3, equipmentRating: 239.1, haste: 1.1 },
                epic: { attack: 643.1, equipmentRating: 249.5, haste: 1.1 },
                legendary: { attack: 669.9, equipmentRating: 259.9, haste: 1.1 },
                relic: { attack: 723.5, equipmentRating: 280.7, haste: 1.1 },
                wonders: { attack: 803.9, equipmentRating: 311.9, haste: 1.1 },
                tales: { attack: 911.0, equipmentRating: 353.4, haste: 1.1 },
                legends: { attack: 1018.2, equipmentRating: 395.0, haste: 1.1 },
                myths: { attack: 1071.8, equipmentRating: 415.8, haste: 1.1 },
                twelve: { attack: 1125.4, equipmentRating: 436.6, haste: 1.1 }
            },
            engravingSlots: 0
        },
        primalRamianSword2h: {
            id: 4,
            name: "Изначальный рамианский клеймор",
            type: "twoHandWeapons",
            image: "weapon/blaid_2h_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 650.3, equipmentRating: 227.7, haste: 1.1 },
                uncommon: { attack: 682.8, equipmentRating: 239.1, haste: 1.1 },
                rare: { attack: 715.3, equipmentRating: 250.5, haste: 1.1 },
                unique: { attack: 747.8, equipmentRating: 261.9, haste: 1.1 },
                epic: { attack: 780.4, equipmentRating: 273.2, haste: 1.1 },
                legendary: { attack: 812.9, equipmentRating: 284.6, haste: 1.1 },
                relic: { attack: 877.9, equipmentRating: 307.4, haste: 1.1 },
                wonders: { attack: 975.5, equipmentRating: 341.6, haste: 1.1 },
                tales: { attack: 1105.5, equipmentRating: 387.1, haste: 1.1 },
                legends: { attack: 1235.6, equipmentRating: 432.6, haste: 1.1 },
                myths: { attack: 1300.6, equipmentRating: 455.4, haste: 1.1 },
                twelve: { attack: 1365.6, equipmentRating: 478.2, haste: 1.1 }
            },
            engravingSlots: 0
        },
        upgradedRamianSword2h: {
            id: 5,
            name: "Обновленный рамианский клеймор",
            type: "twoHandWeapons",
            image: "weapon/blaid_2h_5.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 671.4, equipmentRating: 231.0, haste: 1.1 },
                uncommon: { attack: 705.0, equipmentRating: 242.6, haste: 1.1 },
                rare: { attack: 738.5, equipmentRating: 254.1, haste: 1.1 },
                unique: { attack: 772.1, equipmentRating: 265.7, haste: 1.1 },
                epic: { attack: 805.7, equipmentRating: 277.2, haste: 1.1 },
                legendary: { attack: 839.3, equipmentRating: 288.8, haste: 1.1 },
                relic: { attack: 906.4, equipmentRating: 311.9, haste: 1.1 },
                wonders: { attack: 1007.1, equipmentRating: 346.5, haste: 1.1 },
                tales: { attack: 1141.4, equipmentRating: 392.7, haste: 1.1 },
                legends: { attack: 1275.7, equipmentRating: 438.9, haste: 1.1 },
                myths: { attack: 1342.8, equipmentRating: 462.0, haste: 1.1 },
                twelve: { attack: 1409.9, equipmentRating: 485.1, haste: 1.1 }
            },
            engravingSlots: 0
        },
        perfectRamianSword2h: {
            id: 6,
            name: "Совершенный рамианский клеймор",
            type: "twoHandWeapons",
            image: "weapon/blaid_2h_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 693.2, equipmentRating: 234.3, haste: 1.1 },
                uncommon: { attack: 727.9, equipmentRating: 246.0, haste: 1.1 },
                rare: { attack: 762.5, equipmentRating: 257.7, haste: 1.1 },
                unique: { attack: 797.2, equipmentRating: 269.4, haste: 1.1 },
                epic: { attack: 831.8, equipmentRating: 281.2, haste: 1.1 },
                legendary: { attack: 866.5, equipmentRating: 292.9, haste: 1.1 },
                relic: { attack: 935.8, equipmentRating: 316.3, haste: 1.1 },
                wonders: { attack: 1039.8, equipmentRating: 351.5, haste: 1.1 },
                tales: { attack: 1178.4, equipmentRating: 398.3, haste: 1.1 },
                legends: { attack: 1317.1, equipmentRating: 445.2, haste: 1.1 },
                myths: { attack: 1386.4, equipmentRating: 468.6, haste: 1.1 },
                twelve: { attack: 1455.7, equipmentRating: 492.0, haste: 1.1 }
            },
            engravingSlots: 0
        },
        ramianSabre: {
            id: 7,
            name: "Рамианский палаш",
            type: "twoHandWeapons",
            image: "weapon/sabre_2h_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 425.6, equipmentRating: 184.8, haste: 1.1 },
                uncommon: { attack: 446.9, equipmentRating: 194.0, haste: 1.1 },
                rare: { attack: 468.1, equipmentRating: 203.3, haste: 1.1 },
                unique: { attack: 489.4, equipmentRating: 212.5, haste: 1.1 },
                epic: { attack: 510.7, equipmentRating: 221.8, haste: 1.1 },
                legendary: { attack: 532.0, equipmentRating: 231.0, haste: 1.1 },
                relic: { attack: 574.6, equipmentRating: 249.5, haste: 1.1 },
                wonders: { attack: 638.4, equipmentRating: 277.2, haste: 1.1 },
                tales: { attack: 723.0, equipmentRating: 314.0, haste: 1.1 },
                legends: { attack: 807.6, equipmentRating: 350.7, haste: 1.1 },
                myths: { attack: 850.0, equipmentRating: 369.1, haste: 1.1 },
                twelve: { attack: 892.3, equipmentRating: 387.5, haste: 1.1 }
            },
            engravingSlots: 0
        },
        distortedRamianSabre: {
            id: 8,
            name: "Искаженный рамианский палаш",
            type: "twoHandWeapons",
            image: "weapon/sabre_2h_2.png",
            grade: "common",
            gradeStats: {
                common: { attack: 535.9, equipmentRating: 207.9, haste: 1.1 },
                uncommon: { attack: 562.7, equipmentRating: 218.3, haste: 1.1 },
                rare: { attack: 589.5, equipmentRating: 228.7, haste: 1.1 },
                unique: { attack: 616.3, equipmentRating: 239.1, haste: 1.1 },
                epic: { attack: 643.1, equipmentRating: 249.5, haste: 1.1 },
                legendary: { attack: 669.9, equipmentRating: 259.9, haste: 1.1 },
                relic: { attack: 723.5, equipmentRating: 280.7, haste: 1.1 },
                wonders: { attack: 803.9, equipmentRating: 311.9, haste: 1.1 },
                tales: { attack: 911.0, equipmentRating: 353.4, haste: 1.1 },
                legends: { attack: 1018.2, equipmentRating: 395.0, haste: 1.1 },
                myths: { attack: 1071.8, equipmentRating: 415.8, haste: 1.1 },
                twelve: { attack: 1125.4, equipmentRating: 436.6, haste: 1.1 }
            },
            engravingSlots: 0
        },
        primalRamianSabre: {
            id: 9,
            name: "Изначальный рамианский палаш",
            type: "twoHandWeapons",
            image: "weapon/sabre_2h_3.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 650.3, equipmentRating: 227.7, haste: 1.1 },
                uncommon: { attack: 682.8, equipmentRating: 239.1, haste: 1.1 },
                rare: { attack: 715.3, equipmentRating: 250.5, haste: 1.1 },
                unique: { attack: 747.8, equipmentRating: 261.9, haste: 1.1 },
                epic: { attack: 780.4, equipmentRating: 273.2, haste: 1.1 },
                legendary: { attack: 812.9, equipmentRating: 284.6, haste: 1.1 },
                relic: { attack: 877.9, equipmentRating: 307.4, haste: 1.1 },
                wonders: { attack: 975.5, equipmentRating: 341.6, haste: 1.1 },
                tales: { attack: 1105.5, equipmentRating: 387.1, haste: 1.1 },
                legends: { attack: 1235.6, equipmentRating: 432.6, haste: 1.1 },
                myths: { attack: 1300.6, equipmentRating: 455.4, haste: 1.1 },
                twelve: { attack: 1365.6, equipmentRating: 478.2, haste: 1.1 }
            },
            engravingSlots: 0
        },
        upgradedRamianSabre: {
            id: 10,
            name: "Обновленный рамианский палаш",
            type: "twoHandWeapons",
            image: "weapon/sabre_2h_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 671.4, equipmentRating: 231.0, haste: 1.1 },
                uncommon: { attack: 705.0, equipmentRating: 242.6, haste: 1.1 },
                rare: { attack: 738.5, equipmentRating: 254.1, haste: 1.1 },
                unique: { attack: 772.1, equipmentRating: 265.7, haste: 1.1 },
                epic: { attack: 805.7, equipmentRating: 277.2, haste: 1.1 },
                legendary: { attack: 839.3, equipmentRating: 288.8, haste: 1.1 },
                relic: { attack: 906.4, equipmentRating: 311.9, haste: 1.1 },
                wonders: { attack: 1007.1, equipmentRating: 346.5, haste: 1.1 },
                tales: { attack: 1141.4, equipmentRating: 392.7, haste: 1.1 },
                legends: { attack: 1275.7, equipmentRating: 438.9, haste: 1.1 },
                myths: { attack: 1342.8, equipmentRating: 462.0, haste: 1.1 },
                twelve: { attack: 1409.9, equipmentRating: 485.1, haste: 1.1 }
            },
            engravingSlots: 0
        },
        cursedRamianSabre: {
            id: 11,
            name: "Проклятый рамианский палаш",
            type: "twoHandWeapons",
            image: "weapon/sabre_2h_5.png",
            grade: "common",
            gradeStats: {
                common: { attack: 629.8, equipmentRating: 224.4, haste: 1.1 },
                uncommon: { attack: 661.3, equipmentRating: 235.6, haste: 1.1 },
                rare: { attack: 692.8, equipmentRating: 246.8, haste: 1.1 },
                unique: { attack: 724.3, equipmentRating: 258.1, haste: 1.1 },
                epic: { attack: 755.8, equipmentRating: 269.3, haste: 1.1 },
                legendary: { attack: 787.3, equipmentRating: 280.5, haste: 1.1 },
                relic: { attack: 850.2, equipmentRating: 302.9, haste: 1.1 },
                wonders: { attack: 944.7, equipmentRating: 336.6, haste: 1.1 },
                tales: { attack: 1070.7, equipmentRating: 381.5, haste: 1.1 },
                legends: { attack: 1196.6, equipmentRating: 426.4, haste: 1.1 },
                myths: { attack: 1259.6, equipmentRating: 448.8, haste: 1.1 },
                twelve: { attack: 1322.6, equipmentRating: 471.2, haste: 1.1 }
            },
            engravingSlots: 0
        },
        perfectRamianSabre: {
            id: 12,
            name: "Совершенный рамианский палаш",
            type: "twoHandWeapons",
            image: "weapon/sabre_2h_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 693.2, equipmentRating: 234.3, haste: 1.1 },
                uncommon: { attack: 727.9, equipmentRating: 246.0, haste: 1.1 },
                rare: { attack: 762.5, equipmentRating: 257.7, haste: 1.1 },
                unique: { attack: 797.2, equipmentRating: 269.4, haste: 1.1 },
                epic: { attack: 831.8, equipmentRating: 281.2, haste: 1.1 },
                legendary: { attack: 866.5, equipmentRating: 292.9, haste: 1.1 },
                relic: { attack: 935.8, equipmentRating: 316.3, haste: 1.1 },
                wonders: { attack: 1039.8, equipmentRating: 351.5, haste: 1.1 },
                tales: { attack: 1178.4, equipmentRating: 398.3, haste: 1.1 },
                legends: { attack: 1317.1, equipmentRating: 445.2, haste: 1.1 },
                myths: { attack: 1386.4, equipmentRating: 468.6, haste: 1.1 },
                twelve: { attack: 1455.7, equipmentRating: 492.0, haste: 1.1 }
            },
            engravingSlots: 0
        },
        ramianLabrys: {
            id: 13,
            name: "Рамианский лабрис",
            type: "twoHandWeapons",
            image: "weapon/labrys_2h_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 425.6, equipmentRating: 184.8, haste: 1.2 },
                uncommon: { attack: 446.9, equipmentRating: 194.0, haste: 1.2 },
                rare: { attack: 468.1, equipmentRating: 203.3, haste: 1.2 },
                unique: { attack: 489.4, equipmentRating: 212.5, haste: 1.2 },
                epic: { attack: 510.7, equipmentRating: 221.8, haste: 1.2 },
                legendary: { attack: 532.0, equipmentRating: 231.0, haste: 1.2 },
                relic: { attack: 574.6, equipmentRating: 249.5, haste: 1.2 },
                wonders: { attack: 638.4, equipmentRating: 277.2, haste: 1.2 },
                tales: { attack: 723.0, equipmentRating: 314.0, haste: 1.2 },
                legends: { attack: 807.6, equipmentRating: 350.7, haste: 1.2 },
                myths: { attack: 850.0, equipmentRating: 369.1, haste: 1.2 },
                twelve: { attack: 892.3, equipmentRating: 387.5, haste: 1.2 }
            },
            engravingSlots: 0
        },
        perfectRamianLabrys: {
            id: 14,
            name: "Совершенный рамианский лабрис",
            type: "twoHandWeapons",
            image: "weapon/labrys_2h_2.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 693.2, equipmentRating: 234.3, haste: 1.2 },
                uncommon: { attack: 727.9, equipmentRating: 246.0, haste: 1.2 },
                rare: { attack: 762.5, equipmentRating: 257.7, haste: 1.2 },
                unique: { attack: 797.2, equipmentRating: 269.4, haste: 1.2 },
                epic: { attack: 831.8, equipmentRating: 281.2, haste: 1.2 },
                legendary: { attack: 866.5, equipmentRating: 292.9, haste: 1.2 },
                relic: { attack: 935.8, equipmentRating: 316.3, haste: 1.2 },
                wonders: { attack: 1039.8, equipmentRating: 351.5, haste: 1.2 },
                tales: { attack: 1178.4, equipmentRating: 398.3, haste: 1.2 },
                legends: { attack: 1317.1, equipmentRating: 445.2, haste: 1.2 },
                myths: { attack: 1386.4, equipmentRating: 468.6, haste: 1.2 },
                twelve: { attack: 1455.7, equipmentRating: 492.0, haste: 1.2 }
            },
            engravingSlots: 0
        },
        cursedRamianLabrys: {
            id: 15,
            name: "Проклятый рамианский лабрис",
            type: "twoHandWeapons",
            image: "weapon/labrys_2h_3.png",
            grade: "common",
            gradeStats: {
                common: { attack: 629.8, equipmentRating: 224.4, haste: 1.2 },
                uncommon: { attack: 661.3, equipmentRating: 235.6, haste: 1.2 },
                rare: { attack: 692.8, equipmentRating: 246.8, haste: 1.2 },
                unique: { attack: 724.3, equipmentRating: 258.1, haste: 1.2 },
                epic: { attack: 755.8, equipmentRating: 269.3, haste: 1.2 },
                legendary: { attack: 787.3, equipmentRating: 280.5, haste: 1.2 },
                relic: { attack: 850.2, equipmentRating: 302.9, haste: 1.2 },
                wonders: { attack: 944.7, equipmentRating: 336.6, haste: 1.2 },
                tales: { attack: 1070.7, equipmentRating: 381.5, haste: 1.2 },
                legends: { attack: 1196.6, equipmentRating: 426.4, haste: 1.2 },
                myths: { attack: 1259.6, equipmentRating: 448.8, haste: 1.2 },
                twelve: { attack: 1322.6, equipmentRating: 471.2, haste: 1.2 }
            },
            engravingSlots: 0
        },
        upgradedRamianLabrys: {
            id: 16,
            name: "Обновленный рамианский лабрис",
            type: "twoHandWeapons",
            image: "weapon/labrys_2h_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 671.4, equipmentRating: 231.0, haste: 1.2 },
                uncommon: { attack: 705.0, equipmentRating: 242.6, haste: 1.2 },
                rare: { attack: 738.5, equipmentRating: 254.1, haste: 1.2 },
                unique: { attack: 772.1, equipmentRating: 265.7, haste: 1.2 },
                epic: { attack: 805.7, equipmentRating: 277.2, haste: 1.2 },
                legendary: { attack: 839.3, equipmentRating: 288.8, haste: 1.2 },
                relic: { attack: 906.4, equipmentRating: 311.9, haste: 1.2 },
                wonders: { attack: 1007.1, equipmentRating: 346.5, haste: 1.2 },
                tales: { attack: 1141.4, equipmentRating: 392.7, haste: 1.2 },
                legends: { attack: 1275.7, equipmentRating: 438.9, haste: 1.2 },
                myths: { attack: 1342.8, equipmentRating: 462.0, haste: 1.2 },
                twelve: { attack: 1409.9, equipmentRating: 485.1, haste: 1.2 }
            },
            engravingSlots: 0
        },
        distortedRamianLabrys: {
            id: 17,
            name: "Искаженный рамианский лабрис",
            type: "twoHandWeapons",
            image: "weapon/labrys_2h_5.png",
            grade: "common",
            gradeStats: {
                common: { attack: 535.9, equipmentRating: 207.9, haste: 1.2 },
                uncommon: { attack: 562.7, equipmentRating: 218.3, haste: 1.2 },
                rare: { attack: 589.5, equipmentRating: 228.7, haste: 1.2 },
                unique: { attack: 616.3, equipmentRating: 239.1, haste: 1.2 },
                epic: { attack: 643.1, equipmentRating: 249.5, haste: 1.2 },
                legendary: { attack: 669.9, equipmentRating: 259.9, haste: 1.2 },
                relic: { attack: 723.5, equipmentRating: 280.7, haste: 1.2 },
                wonders: { attack: 803.9, equipmentRating: 311.9, haste: 1.2 },
                tales: { attack: 911.0, equipmentRating: 353.4, haste: 1.2 },
                legends: { attack: 1018.2, equipmentRating: 395.0, haste: 1.2 },
                myths: { attack: 1071.8, equipmentRating: 415.8, haste: 1.2 },
                twelve: { attack: 1125.4, equipmentRating: 436.6, haste: 1.2 }
            },
            engravingSlots: 0
        },
        primalRamianLabrys: {
            id: 18,
            name: "Изначальный рамианский лабрис",
            type: "twoHandWeapons",
            image: "weapon/labrys_2h_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 650.3, equipmentRating: 227.7, haste: 1.2 },
                uncommon: { attack: 682.8, equipmentRating: 239.1, haste: 1.2 },
                rare: { attack: 715.3, equipmentRating: 250.5, haste: 1.2 },
                unique: { attack: 747.8, equipmentRating: 261.9, haste: 1.2 },
                epic: { attack: 780.4, equipmentRating: 273.2, haste: 1.2 },
                legendary: { attack: 812.9, equipmentRating: 284.6, haste: 1.2 },
                relic: { attack: 877.9, equipmentRating: 307.4, haste: 1.2 },
                wonders: { attack: 975.5, equipmentRating: 341.6, haste: 1.2 },
                tales: { attack: 1105.5, equipmentRating: 387.1, haste: 1.2 },
                legends: { attack: 1235.6, equipmentRating: 432.6, haste: 1.2 },
                myths: { attack: 1300.6, equipmentRating: 455.4, haste: 1.2 },
                twelve: { attack: 1365.6, equipmentRating: 478.2, haste: 1.2 }
            },
            engravingSlots: 0
        },
        ramianHammer: {
            id: 19,
            name: "Рамианский молот",
            type: "twoHandWeapons",
            image: "weapon/hammer_2h_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 349.6, healingPower: 410, equipmentRating: 184.8, haste: 1.3 },
                uncommon: { attack: 367.1, healingPower: 430.5, equipmentRating: 194.0, haste: 1.3 },
                rare: { attack: 384.6, healingPower: 451.0, equipmentRating: 203.3, haste: 1.3 },
                unique: { attack: 402.0, healingPower: 471.5, equipmentRating: 212.5, haste: 1.3 },
                epic: { attack: 419.5, healingPower: 492.0, equipmentRating: 221.8, haste: 1.3 },
                legendary: { attack: 437.0, healingPower: 512.5, equipmentRating: 231.0, haste: 1.3 },
                relic: { attack: 472.0, healingPower: 553.5, equipmentRating: 249.5, haste: 1.3 },
                wonders: { attack: 524.4, healingPower: 615.0, equipmentRating: 277.2, haste: 1.3 },
                tales: { attack: 594.5, healingPower: 697.5, equipmentRating: 314.0, haste: 1.3 },
                legends: { attack: 664.6, healingPower: 780.0, equipmentRating: 350.7, haste: 1.3 },
                myths: { attack: 699.7, healingPower: 821.3, equipmentRating: 369.1, haste: 1.3 },
                twelve: { attack: 734.7, healingPower: 862.5, equipmentRating: 387.5, haste: 1.3 }
            },
            engravingSlots: 0
        },
        perfectRamianBattleHammer: {
            id: 20,
            name: "Совершенный рамианский боевой молот",
            type: "twoHandWeapons",
            image: "weapon/hammer_2h_2.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 569.4, healingPower: 668, equipmentRating: 234.3, haste: 1.3 },
                uncommon: { attack: 597.9, healingPower: 701.4, equipmentRating: 246.0, haste: 1.3 },
                rare: { attack: 626.3, healingPower: 734.8, equipmentRating: 257.7, haste: 1.3 },
                unique: { attack: 654.8, healingPower: 768.2, equipmentRating: 269.4, haste: 1.3 },
                epic: { attack: 683.3, healingPower: 801.6, equipmentRating: 281.2, haste: 1.3 },
                legendary: { attack: 711.8, healingPower: 835.0, equipmentRating: 292.9, haste: 1.3 },
                relic: { attack: 768.7, healingPower: 901.8, equipmentRating: 316.3, haste: 1.3 },
                wonders: { attack: 854.6, healingPower: 1002.2, equipmentRating: 351.5, haste: 1.3 },
                tales: { attack: 968.0, healingPower: 1135.5, equipmentRating: 398.3, haste: 1.3 },
                legends: { attack: 1081.4, healingPower: 1268.8, equipmentRating: 445.2, haste: 1.3 },
                myths: { attack: 1138.1, healingPower: 1335.4, equipmentRating: 468.6, haste: 1.3 },
                twelve: { attack: 1194.8, healingPower: 1402.0, equipmentRating: 492.0, haste: 1.3 }
            },
            engravingSlots: 0
        },
        cursedRamianHammer: {
            id: 21,
            name: "Проклятый рамианский молот",
            type: "twoHandWeapons",
            image: "weapon/hammer_2h_3.png",
            grade: "common",
            gradeStats: {
                common: { attack: 517.3, healingPower: 607, equipmentRating: 224.4, haste: 1.3 },
                uncommon: { attack: 543.2, healingPower: 637.4, equipmentRating: 235.6, haste: 1.3 },
                rare: { attack: 569.0, healingPower: 667.7, equipmentRating: 246.8, haste: 1.3 },
                unique: { attack: 594.9, healingPower: 698.1, equipmentRating: 258.1, haste: 1.3 },
                epic: { attack: 620.8, healingPower: 728.4, equipmentRating: 269.3, haste: 1.3 },
                legendary: { attack: 646.6, healingPower: 758.8, equipmentRating: 280.5, haste: 1.3 },
                relic: { attack: 698.3, healingPower: 819.5, equipmentRating: 302.9, haste: 1.3 },
                wonders: { attack: 775.8, healingPower: 910.5, equipmentRating: 336.6, haste: 1.3 },
                tales: { attack: 879.8, healingPower: 1032.2, equipmentRating: 381.5, haste: 1.3 },
                legends: { attack: 983.7, healingPower: 1154.0, equipmentRating: 426.4, haste: 1.3 },
                myths: { attack: 1035.7, healingPower: 1214.8, equipmentRating: 448.8, haste: 1.3 },
                twelve: { attack: 1087.6, healingPower: 1275.7, equipmentRating: 471.2, haste: 1.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianBattleHammer: {
            id: 22,
            name: "Обновленный рамианский боевой молот",
            type: "twoHandWeapons",
            image: "weapon/hammer_2h_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 551.5, healingPower: 647, equipmentRating: 231.0, haste: 1.3 },
                uncommon: { attack: 579.1, healingPower: 679.4, equipmentRating: 242.6, haste: 1.3 },
                rare: { attack: 606.6, healingPower: 711.7, equipmentRating: 254.1, haste: 1.3 },
                unique: { attack: 634.2, healingPower: 744.1, equipmentRating: 265.7, haste: 1.3 },
                epic: { attack: 661.8, healingPower: 776.4, equipmentRating: 277.2, haste: 1.3 },
                legendary: { attack: 689.4, healingPower: 808.8, equipmentRating: 288.8, haste: 1.3 },
                relic: { attack: 744.5, healingPower: 873.5, equipmentRating: 311.9, haste: 1.3 },
                wonders: { attack: 827.8, healingPower: 971.1, equipmentRating: 346.5, haste: 1.3 },
                tales: { attack: 938.0, healingPower: 1100.6, equipmentRating: 392.7, haste: 1.3 },
                legends: { attack: 1048.2, healingPower: 1230.1, equipmentRating: 438.9, haste: 1.3 },
                myths: { attack: 1103.3, healingPower: 1294.9, equipmentRating: 462.0, haste: 1.3 },
                twelve: { attack: 1158.4, healingPower: 1359.6, equipmentRating: 485.1, haste: 1.3 }
            },
            engravingSlots: 0
        },
        distortedRamianHammer: {
            id: 23,
            name: "Искаженный рамианский молот",
            type: "twoHandWeapons",
            image: "weapon/hammer_2h_5.png",
            grade: "common",
            gradeStats: {
                common: { attack: 440.2, healingPower: 517, equipmentRating: 207.9, haste: 1.3 },
                uncommon: { attack: 462.2, healingPower: 542.9, equipmentRating: 218.3, haste: 1.3 },
                rare: { attack: 484.2, healingPower: 568.7, equipmentRating: 228.7, haste: 1.3 },
                unique: { attack: 506.2, healingPower: 594.6, equipmentRating: 239.1, haste: 1.3 },
                epic: { attack: 528.3, healingPower: 620.4, equipmentRating: 249.5, haste: 1.3 },
                legendary: { attack: 550.3, healingPower: 646.3, equipmentRating: 259.9, haste: 1.3 },
                relic: { attack: 594.3, healingPower: 698.0, equipmentRating: 280.7, haste: 1.3 },
                wonders: { attack: 660.3, healingPower: 775.5, equipmentRating: 311.9, haste: 1.3 },
                tales: { attack: 748.4, healingPower: 879.0, equipmentRating: 353.4, haste: 1.3 },
                legends: { attack: 836.4, healingPower: 982.4, equipmentRating: 395.0, haste: 1.3 },
                myths: { attack: 880.4, healingPower: 1034.1, equipmentRating: 415.8, haste: 1.3 },
                twelve: { attack: 924.4, healingPower: 1085.9, equipmentRating: 436.6, haste: 1.3 }
            },
            engravingSlots: 0
        },
        primalRamianHammer: {
            id: 24,
            name: "Изначальный рамианский молот",
            type: "twoHandWeapons",
            image: "weapon/hammer_2h_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 534.2, healingPower: 627, equipmentRating: 227.7, haste: 1.3 },
                uncommon: { attack: 560.9, healingPower: 658.4, equipmentRating: 239.1, haste: 1.3 },
                rare: { attack: 587.6, healingPower: 689.7, equipmentRating: 250.5, haste: 1.3 },
                unique: { attack: 614.4, healingPower: 721.1, equipmentRating: 261.9, haste: 1.3 },
                epic: { attack: 641.1, healingPower: 752.4, equipmentRating: 273.2, haste: 1.3 },
                legendary: { attack: 667.9, healingPower: 783.8, equipmentRating: 284.6, haste: 1.3 },
                relic: { attack: 721.3, healingPower: 846.5, equipmentRating: 307.4, haste: 1.3 },
                wonders: { attack: 801.5, healingPower: 940.6, equipmentRating: 341.6, haste: 1.3 },
                tales: { attack: 908.5, healingPower: 1066.2, equipmentRating: 387.1, haste: 1.3 },
                legends: { attack: 1015.4, healingPower: 1191.8, equipmentRating: 432.6, haste: 1.3 },
                myths: { attack: 1068.9, healingPower: 1254.6, equipmentRating: 455.4, haste: 1.3 },
                twelve: { attack: 1122.4, healingPower: 1317.4, equipmentRating: 478.2, haste: 1.3 }
            },
            engravingSlots: 0
        },
        ramianBattleStaff: {
            id: 25,
            name: "Рамианский боевой посох",
            type: "twoHandWeapons",
            image: "weapon/staff_2h_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 349.6, spellPower: 410, equipmentRating: 184.8, haste: 1.3 },
                uncommon: { attack: 367.1, spellPower: 430.5, equipmentRating: 194.0, haste: 1.3 },
                rare: { attack: 384.6, spellPower: 451.0, equipmentRating: 203.3, haste: 1.3 },
                unique: { attack: 402.0, spellPower: 471.5, equipmentRating: 212.5, haste: 1.3 },
                epic: { attack: 419.5, spellPower: 492.0, equipmentRating: 221.8, haste: 1.3 },
                legendary: { attack: 437.0, spellPower: 512.5, equipmentRating: 231.0, haste: 1.3 },
                relic: { attack: 472.0, spellPower: 553.5, equipmentRating: 249.5, haste: 1.3 },
                wonders: { attack: 524.4, spellPower: 615.0, equipmentRating: 277.2, haste: 1.3 },
                tales: { attack: 594.5, spellPower: 697.5, equipmentRating: 314.0, haste: 1.3 },
                legends: { attack: 664.6, spellPower: 780.0, equipmentRating: 350.7, haste: 1.3 },
                myths: { attack: 699.7, spellPower: 821.3, equipmentRating: 369.1, haste: 1.3 },
                twelve: { attack: 734.7, spellPower: 862.5, equipmentRating: 387.5, haste: 1.3 }
            },
            engravingSlots: 0
        },
        perfectRamianBattleStaff: {
            id: 26,
            name: "Совершенный рамианский боевой посох",
            type: "twoHandWeapons",
            image: "weapon/staff_2h_2.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 569.4, spellPower: 668, equipmentRating: 234.3, haste: 1.3 },
                uncommon: { attack: 597.9, spellPower: 701.4, equipmentRating: 246.0, haste: 1.3 },
                rare: { attack: 626.3, spellPower: 734.8, equipmentRating: 257.7, haste: 1.3 },
                unique: { attack: 654.8, spellPower: 768.2, equipmentRating: 269.4, haste: 1.3 },
                epic: { attack: 683.3, spellPower: 801.6, equipmentRating: 281.2, haste: 1.3 },
                legendary: { attack: 711.8, spellPower: 835.0, equipmentRating: 292.9, haste: 1.3 },
                relic: { attack: 768.7, spellPower: 901.8, equipmentRating: 316.3, haste: 1.3 },
                wonders: { attack: 854.6, spellPower: 1002.2, equipmentRating: 351.5, haste: 1.3 },
                tales: { attack: 968.0, spellPower: 1135.5, equipmentRating: 398.3, haste: 1.3 },
                legends: { attack: 1081.4, spellPower: 1268.8, equipmentRating: 445.2, haste: 1.3 },
                myths: { attack: 1138.1, spellPower: 1335.4, equipmentRating: 468.6, haste: 1.3 },
                twelve: { attack: 1194.8, spellPower: 1402.0, equipmentRating: 492.0, haste: 1.3 }
            },
            engravingSlots: 0
        },
        cursedRamianBattleStaff: {
            id: 27,
            name: "Проклятый рамианский боевой посох",
            type: "twoHandWeapons",
            image: "weapon/staff_2h_3.png",
            grade: "common",
            gradeStats: {
                common: { attack: 517.3, spellPower: 607, equipmentRating: 224.4, haste: 1.3 },
                uncommon: { attack: 543.2, spellPower: 637.4, equipmentRating: 235.6, haste: 1.3 },
                rare: { attack: 569.0, spellPower: 667.7, equipmentRating: 246.8, haste: 1.3 },
                unique: { attack: 594.9, spellPower: 698.1, equipmentRating: 258.1, haste: 1.3 },
                epic: { attack: 620.8, spellPower: 728.4, equipmentRating: 269.3, haste: 1.3 },
                legendary: { attack: 646.6, spellPower: 758.8, equipmentRating: 280.5, haste: 1.3 },
                relic: { attack: 698.3, spellPower: 819.5, equipmentRating: 302.9, haste: 1.3 },
                wonders: { attack: 775.8, spellPower: 910.5, equipmentRating: 336.6, haste: 1.3 },
                tales: { attack: 879.8, spellPower: 1032.2, equipmentRating: 381.5, haste: 1.3 },
                legends: { attack: 983.7, spellPower: 1154.0, equipmentRating: 426.4, haste: 1.3 },
                myths: { attack: 1035.7, spellPower: 1214.8, equipmentRating: 448.8, haste: 1.3 },
                twelve: { attack: 1087.6, spellPower: 1275.7, equipmentRating: 471.2, haste: 1.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianBattleStaff: {
            id: 28,
            name: "Обновленный рамианский боевой посох",
            type: "twoHandWeapons",
            image: "weapon/staff_2h_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 551.5, spellPower: 648, equipmentRating: 231.0, haste: 1.3 },
                uncommon: { attack: 579.1, spellPower: 680.4, equipmentRating: 242.6, haste: 1.3 },
                rare: { attack: 606.6, spellPower: 712.8, equipmentRating: 254.1, haste: 1.3 },
                unique: { attack: 634.2, spellPower: 745.2, equipmentRating: 265.7, haste: 1.3 },
                epic: { attack: 661.8, spellPower: 777.6, equipmentRating: 277.2, haste: 1.3 },
                legendary: { attack: 689.4, spellPower: 810.0, equipmentRating: 288.8, haste: 1.3 },
                relic: { attack: 744.5, spellPower: 874.8, equipmentRating: 311.9, haste: 1.3 },
                wonders: { attack: 827.8, spellPower: 972.0, equipmentRating: 346.5, haste: 1.3 },
                tales: { attack: 938.0, spellPower: 1101.6, equipmentRating: 392.7, haste: 1.3 },
                legends: { attack: 1048.2, spellPower: 1231.2, equipmentRating: 438.9, haste: 1.3 },
                myths: { attack: 1103.3, spellPower: 1296.0, equipmentRating: 462.0, haste: 1.3 },
                twelve: { attack: 1158.4, spellPower: 1360.8, equipmentRating: 485.1, haste: 1.3 }
            },
            engravingSlots: 0
        },
        distortedRamianBattleStaff: {
            id: 29,
            name: "Искаженный рамианский боевой посох",
            type: "twoHandWeapons",
            image: "weapon/staff_2h_5.png",
            grade: "common",
            gradeStats: {
                common: { attack: 440.2, spellPower: 517, equipmentRating: 207.9, haste: 1.3 },
                uncommon: { attack: 462.2, spellPower: 542.9, equipmentRating: 218.3, haste: 1.3 },
                rare: { attack: 484.2, spellPower: 568.7, equipmentRating: 228.7, haste: 1.3 },
                unique: { attack: 506.2, spellPower: 594.6, equipmentRating: 239.1, haste: 1.3 },
                epic: { attack: 528.3, spellPower: 620.4, equipmentRating: 249.5, haste: 1.3 },
                legendary: { attack: 550.3, spellPower: 646.3, equipmentRating: 259.9, haste: 1.3 },
                relic: { attack: 594.3, spellPower: 698.0, equipmentRating: 280.7, haste: 1.3 },
                wonders: { attack: 660.3, spellPower: 775.5, equipmentRating: 311.9, haste: 1.3 },
                tales: { attack: 748.4, spellPower: 879.0, equipmentRating: 353.4, haste: 1.3 },
                legends: { attack: 836.4, spellPower: 982.4, equipmentRating: 395.0, haste: 1.3 },
                myths: { attack: 880.4, spellPower: 1034.1, equipmentRating: 415.8, haste: 1.3 },
                twelve: { attack: 924.4, spellPower: 1085.9, equipmentRating: 436.6, haste: 1.3 }
            },
            engravingSlots: 0
        },
        primalRamianBattleStaff: {
            id: 30,
            name: "Изначальный рамианский боевой посох",
            type: "twoHandWeapons",
            image: "weapon/staff_2h_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 534.2, spellPower: 627, equipmentRating: 227.7, haste: 1.3 },
                uncommon: { attack: 560.9, spellPower: 658.4, equipmentRating: 239.1, haste: 1.3 },
                rare: { attack: 587.6, spellPower: 689.7, equipmentRating: 250.5, haste: 1.3 },
                unique: { attack: 614.4, spellPower: 721.1, equipmentRating: 261.9, haste: 1.3 },
                epic: { attack: 641.1, spellPower: 752.4, equipmentRating: 273.2, haste: 1.3 },
                legendary: { attack: 667.9, spellPower: 783.8, equipmentRating: 284.6, haste: 1.3 },
                relic: { attack: 721.3, spellPower: 846.5, equipmentRating: 307.4, haste: 1.3 },
                wonders: { attack: 801.5, spellPower: 940.6, equipmentRating: 341.6, haste: 1.3 },
                tales: { attack: 908.5, spellPower: 1066.2, equipmentRating: 387.1, haste: 1.3 },
                legends: { attack: 1015.4, spellPower: 1191.8, equipmentRating: 432.6, haste: 1.3 },
                myths: { attack: 1068.9, spellPower: 1254.6, equipmentRating: 455.4, haste: 1.3 },
                twelve: { attack: 1122.4, spellPower: 1317.4, equipmentRating: 478.2, haste: 1.3 }
            },
            engravingSlots: 0
        },
        ramianHalberd: {
            id: 31,
            name: "Рамианская алебарда",
            type: "twoHandWeapons",
            image: "weapon/halberd_2h_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 425.6, equipmentRating: 184.8, haste: 1.2 },
                uncommon: { attack: 446.9, equipmentRating: 194.0, haste: 1.2 },
                rare: { attack: 468.1, equipmentRating: 203.3, haste: 1.2 },
                unique: { attack: 489.4, equipmentRating: 212.5, haste: 1.2 },
                epic: { attack: 510.7, equipmentRating: 221.8, haste: 1.2 },
                legendary: { attack: 532.0, equipmentRating: 231.0, haste: 1.2 },
                relic: { attack: 574.6, equipmentRating: 249.5, haste: 1.2 },
                wonders: { attack: 638.4, equipmentRating: 277.2, haste: 1.2 },
                tales: { attack: 723.0, equipmentRating: 314.0, haste: 1.2 },
                legends: { attack: 807.6, equipmentRating: 350.7, haste: 1.2 },
                myths: { attack: 850.0, equipmentRating: 369.1, haste: 1.2 },
                twelve: { attack: 892.3, equipmentRating: 387.5, haste: 1.2 }
            },
            engravingSlots: 0
        },
        perfectRamianHalberd: {
            id: 32,
            name: "Совершенная рамианская алебарда",
            type: "twoHandWeapons",
            image: "weapon/halberd_2h_2.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 693.2, equipmentRating: 234.3, haste: 1.2 },
                uncommon: { attack: 727.9, equipmentRating: 246.0, haste: 1.2 },
                rare: { attack: 762.5, equipmentRating: 257.7, haste: 1.2 },
                unique: { attack: 797.2, equipmentRating: 269.4, haste: 1.2 },
                epic: { attack: 831.8, equipmentRating: 281.2, haste: 1.2 },
                legendary: { attack: 866.5, equipmentRating: 292.9, haste: 1.2 },
                relic: { attack: 935.8, equipmentRating: 316.3, haste: 1.2 },
                wonders: { attack: 1039.8, equipmentRating: 351.5, haste: 1.2 },
                tales: { attack: 1178.4, equipmentRating: 398.3, haste: 1.2 },
                legends: { attack: 1317.1, equipmentRating: 445.2, haste: 1.2 },
                myths: { attack: 1386.4, equipmentRating: 468.6, haste: 1.2 },
                twelve: { attack: 1455.7, equipmentRating: 492.0, haste: 1.2 }
            },
            engravingSlots: 0
        },
        cursedRamianHalberd: {
            id: 33,
            name: "Проклятая рамианская алебарда",
            type: "twoHandWeapons",
            image: "weapon/halberd_2h_3.png",
            grade: "common",
            gradeStats: {
                common: { attack: 629.8, equipmentRating: 224.4, haste: 1.2 },
                uncommon: { attack: 661.3, equipmentRating: 235.6, haste: 1.2 },
                rare: { attack: 692.8, equipmentRating: 246.8, haste: 1.2 },
                unique: { attack: 724.3, equipmentRating: 258.1, haste: 1.2 },
                epic: { attack: 755.8, equipmentRating: 269.3, haste: 1.2 },
                legendary: { attack: 787.3, equipmentRating: 280.5, haste: 1.2 },
                relic: { attack: 850.2, equipmentRating: 302.9, haste: 1.2 },
                wonders: { attack: 944.7, equipmentRating: 336.6, haste: 1.2 },
                tales: { attack: 1070.7, equipmentRating: 381.5, haste: 1.2 },
                legends: { attack: 1196.6, equipmentRating: 426.4, haste: 1.2 },
                myths: { attack: 1259.6, equipmentRating: 448.8, haste: 1.2 },
                twelve: { attack: 1322.6, equipmentRating: 471.2, haste: 1.2 }
            },
            engravingSlots: 0
        },
        upgradedRamianHalberd: {
            id: 34,
            name: "Обновленная рамианская алебарда",
            type: "twoHandWeapons",
            image: "weapon/halberd_2h_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 671.4, equipmentRating: 231.0, haste: 1.2 },
                uncommon: { attack: 705.0, equipmentRating: 242.6, haste: 1.2 },
                rare: { attack: 738.5, equipmentRating: 254.1, haste: 1.2 },
                unique: { attack: 772.1, equipmentRating: 265.7, haste: 1.2 },
                epic: { attack: 805.7, equipmentRating: 277.2, haste: 1.2 },
                legendary: { attack: 839.3, equipmentRating: 288.8, haste: 1.2 },
                relic: { attack: 906.4, equipmentRating: 311.9, haste: 1.2 },
                wonders: { attack: 1007.1, equipmentRating: 346.5, haste: 1.2 },
                tales: { attack: 1141.4, equipmentRating: 392.7, haste: 1.2 },
                legends: { attack: 1275.7, equipmentRating: 438.9, haste: 1.2 },
                myths: { attack: 1342.8, equipmentRating: 462.0, haste: 1.2 },
                twelve: { attack: 1409.9, equipmentRating: 485.1, haste: 1.2 }
            },
            engravingSlots: 0
        },
        distortedRamianHalberd: {
            id: 35,
            name: "Искаженная рамианская алебарда",
            type: "twoHandWeapons",
            image: "weapon/halberd_2h_5.png",
            grade: "common",
            gradeStats: {
                common: { attack: 535.9, equipmentRating: 207.9, haste: 1.2 },
                uncommon: { attack: 562.7, equipmentRating: 218.3, haste: 1.2 },
                rare: { attack: 589.5, equipmentRating: 228.7, haste: 1.2 },
                unique: { attack: 616.3, equipmentRating: 239.1, haste: 1.2 },
                epic: { attack: 643.1, equipmentRating: 249.5, haste: 1.2 },
                legendary: { attack: 669.9, equipmentRating: 259.9, haste: 1.2 },
                relic: { attack: 723.5, equipmentRating: 280.7, haste: 1.2 },
                wonders: { attack: 803.9, equipmentRating: 311.9, haste: 1.2 },
                tales: { attack: 911.0, equipmentRating: 353.4, haste: 1.2 },
                legends: { attack: 1018.2, equipmentRating: 395.0, haste: 1.2 },
                myths: { attack: 1071.8, equipmentRating: 415.8, haste: 1.2 },
                twelve: { attack: 1125.4, equipmentRating: 436.6, haste: 1.2 }
            },
            engravingSlots: 0
        },
        primalRamianHalberd: {
            id: 36,
            name: "Изначальная рамианская алебарда",
            type: "twoHandWeapons",
            image: "weapon/halberd_2h_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 650.3, equipmentRating: 227.7, haste: 1.2 },
                uncommon: { attack: 682.8, equipmentRating: 239.1, haste: 1.2 },
                rare: { attack: 715.3, equipmentRating: 250.5, haste: 1.2 },
                unique: { attack: 747.8, equipmentRating: 261.9, haste: 1.2 },
                epic: { attack: 780.4, equipmentRating: 273.2, haste: 1.2 },
                legendary: { attack: 812.9, equipmentRating: 284.6, haste: 1.2 },
                relic: { attack: 877.9, equipmentRating: 307.4, haste: 1.2 },
                wonders: { attack: 975.5, equipmentRating: 341.6, haste: 1.2 },
                tales: { attack: 1105.5, equipmentRating: 387.1, haste: 1.2 },
                legends: { attack: 1235.6, equipmentRating: 432.6, haste: 1.2 },
                myths: { attack: 1300.6, equipmentRating: 455.4, haste: 1.2 },
                twelve: { attack: 1365.6, equipmentRating: 478.2, haste: 1.2 }
            },
            engravingSlots: 0
        }

    },
    
    // Дальний бой
    rangedWeapons: {
        ramianBow: {
            id: 1,
            name: "Рамианский лук",
            type: "rangedWeapons",
            image: "weapon/bow_1.png",
            grade: "common",
            gradeStats: {
                common: { attack: 258.4, equipmentRating: 123.2, haste: 1.0 },
                uncommon: { attack: 271.3, equipmentRating: 129.4, haste: 1.0 },
                rare: { attack: 284.2, equipmentRating: 135.5, haste: 1.0 },
                unique: { attack: 297.2, equipmentRating: 141.7, haste: 1.0 },
                epic: { attack: 310.1, equipmentRating: 147.8, haste: 1.0 },
                legendary: { attack: 323.0, equipmentRating: 154.0, haste: 1.0 },
                relic: { attack: 348.9, equipmentRating: 166.3, haste: 1.0 },
                wonders: { attack: 387.6, equipmentRating: 184.8, haste: 1.0 },
                tales: { attack: 439.3, equipmentRating: 209.4, haste: 1.0 },
                legends: { attack: 490.9, equipmentRating: 234.1, haste: 1.0 },
                myths: { attack: 516.7, equipmentRating: 246.4, haste: 1.0 },
                twelve: { attack: 542.6, equipmentRating: 258.7, haste: 1.0 }
            },
            engravingSlots: 0
        },
        perfectRamianBow: {
            id: 2,
            name: "Совершенный рамианский лук",
            type: "rangedWeapons",
            image: "weapon/bow_2.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 420.9, equipmentRating: 156.2, haste: 1.0 },
                uncommon: { attack: 441.9, equipmentRating: 164.0, haste: 1.0 },
                rare: { attack: 463.0, equipmentRating: 171.8, haste: 1.0 },
                unique: { attack: 484.0, equipmentRating: 179.7, haste: 1.0 },
                epic: { attack: 505.1, equipmentRating: 187.5, haste: 1.0 },
                legendary: { attack: 526.1, equipmentRating: 195.3, haste: 1.0 },
                relic: { attack: 568.2, equipmentRating: 210.9, haste: 1.0 },
                wonders: { attack: 631.4, equipmentRating: 234.3, haste: 1.0 },
                tales: { attack: 715.5, equipmentRating: 265.5, haste: 1.0 },
                legends: { attack: 799.7, equipmentRating: 296.8, haste: 1.0 },
                myths: { attack: 841.7, equipmentRating: 312.4, haste: 1.0 },
                twelve: { attack: 883.8, equipmentRating: 328.1, haste: 1.0 }
            },
            engravingSlots: 0
        },
        cursedRamianBow: {
            id: 3,
            name: "Проклятый рамианский лук",
            type: "rangedWeapons",
            image: "weapon/bow_3.png",
            grade: "common",
            gradeStats: {
                common: { attack: 382.4, equipmentRating: 149.6, haste: 1.0 },
                uncommon: { attack: 401.5, equipmentRating: 157.1, haste: 1.0 },
                rare: { attack: 420.6, equipmentRating: 164.6, haste: 1.0 },
                unique: { attack: 439.8, equipmentRating: 172.1, haste: 1.0 },
                epic: { attack: 458.9, equipmentRating: 179.6, haste: 1.0 },
                legendary: { attack: 478.0, equipmentRating: 187.0, haste: 1.0 },
                relic: { attack: 516.2, equipmentRating: 202.0, haste: 1.0 },
                wonders: { attack: 573.6, equipmentRating: 224.4, haste: 1.0 },
                tales: { attack: 650.1, equipmentRating: 254.3, haste: 1.0 },
                legends: { attack: 726.5, equipmentRating: 284.2, haste: 1.0 },
                myths: { attack: 764.7, equipmentRating: 299.2, haste: 1.0 },
                twelve: { attack: 802.9, equipmentRating: 314.1, haste: 1.0 }
            },
            engravingSlots: 0
        },
        upgradedRamianBow: {
            id: 4,
            name: "Обновленный рамианский лук",
            type: "rangedWeapons",
            image: "weapon/bow_4.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 407.7, equipmentRating: 154.0, haste: 1.0 },
                uncommon: { attack: 428.1, equipmentRating: 161.7, haste: 1.0 },
                rare: { attack: 448.5, equipmentRating: 169.4, haste: 1.0 },
                unique: { attack: 468.8, equipmentRating: 177.1, haste: 1.0 },
                epic: { attack: 489.2, equipmentRating: 184.8, haste: 1.0 },
                legendary: { attack: 509.6, equipmentRating: 192.5, haste: 1.0 },
                relic: { attack: 550.4, equipmentRating: 207.9, haste: 1.0 },
                wonders: { attack: 611.6, equipmentRating: 231.0, haste: 1.0 },
                tales: { attack: 693.1, equipmentRating: 261.8, haste: 1.0 },
                legends: { attack: 774.6, equipmentRating: 292.6, haste: 1.0 },
                myths: { attack: 815.4, equipmentRating: 308.0, haste: 1.0 },
                twelve: { attack: 856.2, equipmentRating: 323.4, haste: 1.0 }
            },
            engravingSlots: 0
        },
        distortedRamianBow: {
            id: 5,
            name: "Искаженный рамианский лук",
            type: "rangedWeapons",
            image: "weapon/bow_5.png",
            grade: "common",
            gradeStats: {
                common: { attack: 325.4, equipmentRating: 138.6, haste: 1.0 },
                uncommon: { attack: 341.7, equipmentRating: 145.5, haste: 1.0 },
                rare: { attack: 357.9, equipmentRating: 152.5, haste: 1.0 },
                unique: { attack: 374.2, equipmentRating: 159.4, haste: 1.0 },
                epic: { attack: 390.5, equipmentRating: 166.3, haste: 1.0 },
                legendary: { attack: 406.7, equipmentRating: 173.2, haste: 1.0 },
                relic: { attack: 439.3, equipmentRating: 187.1, haste: 1.0 },
                wonders: { attack: 488.1, equipmentRating: 208.0, haste: 1.0 },
                tales: { attack: 553.2, equipmentRating: 235.6, haste: 1.0 },
                legends: { attack: 618.2, equipmentRating: 263.3, haste: 1.0 },
                myths: { attack: 650.8, equipmentRating: 277.1, haste: 1.0 },
                twelve: { attack: 683.3, equipmentRating: 291.0, haste: 1.0 }
            },
            engravingSlots: 0
        },
        primalRamianBow: {
            id: 6,
            name: "Изначальный рамианский лук",
            type: "rangedWeapons",
            image: "weapon/bow_6.png",
            grade: "tales",
            gradeStats: {
                common: { attack: 394.8, equipmentRating: 151.8, haste: 1.0 },
                uncommon: { attack: 414.5, equipmentRating: 159.4, haste: 1.0 },
                rare: { attack: 434.3, equipmentRating: 167.0, haste: 1.0 },
                unique: { attack: 454.0, equipmentRating: 174.6, haste: 1.0 },
                epic: { attack: 473.8, equipmentRating: 182.2, haste: 1.0 },
                legendary: { attack: 493.5, equipmentRating: 189.8, haste: 1.0 },
                relic: { attack: 533.0, equipmentRating: 205.0, haste: 1.0 },
                wonders: { attack: 592.2, equipmentRating: 227.7, haste: 1.0 },
                tales: { attack: 671.6, equipmentRating: 258.1, haste: 1.0 },
                legends: { attack: 751.0, equipmentRating: 288.4, haste: 1.0 },
                myths: { attack: 790.7, equipmentRating: 303.6, haste: 1.0 },
                twelve: { attack: 830.4, equipmentRating: 318.8, haste: 1.0 }
            },
            engravingSlots: 0
        }
    },
    
    // Щиты
    shields: {
        ramianShield: {
            id: 1,
            name: "Рамианский щит",
            type: "shields",
            image: "weapon/shield1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 540, resistance: 540, equipmentRating: 54.6 },
                uncommon: { defense: 567, resistance: 567, equipmentRating: 57.3 },
                rare: { defense: 594, resistance: 594, equipmentRating: 60 },
                unique: { defense: 621, resistance: 621, equipmentRating: 62.7 },
                epic: { defense: 648, resistance: 648, equipmentRating: 65.5 },
                legendary: { defense: 675, resistance: 675, equipmentRating: 68.2 },
                relic: { defense: 729, resistance: 729, equipmentRating: 73.7 },
                wonders: { defense: 810, resistance: 810, equipmentRating: 81.9 },
                tales: { defense: 918, resistance: 918, equipmentRating: 92.8 },
                legends: { defense: 1026, resistance: 1026, equipmentRating: 103.7 },
                myths: { defense: 1080, resistance: 1080, equipmentRating: 109.2 },
                twelve: { defense: 1134, resistance: 1134, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        }
    },
    
    // Серьги
    earrings: {
        noryettHouseEarring: {
            id: 1,
            name: "Серьга Дома Норьетт",
            type: "earrings",
            image: "earrings/noryett_1.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 18.4 },
                uncommon: { equipmentRating: 19.3 },
                rare: { equipmentRating: 20.2 },
                unique: { equipmentRating: 21.2 },
                epic: { equipmentRating: 22.1 },
                legendary: { equipmentRating: 23.0 },
                relic: { equipmentRating: 24.8 },
                wonders: { equipmentRating: 27.6 },
                tales: { equipmentRating: 31.3 },
                legends: { equipmentRating: 35.0 },
                myths: { equipmentRating: 36.8 },
                twelve: { equipmentRating: 38.6 }
            },
            engravingSlots: 0
        },
        noryettHouseFavoriteEarring: {
            id: 2,
            name: "Серьга фаворита Дома Норьет",
            type: "earrings",
            image: "earrings/noryett_2.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 20.79 },
                uncommon: { equipmentRating: 21.8 },
                rare: { equipmentRating: 22.9 },
                unique: { equipmentRating: 23.9 },
                epic: { equipmentRating: 24.9 },
                legendary: { equipmentRating: 26.0 },
                relic: { equipmentRating: 28.1 },
                wonders: { equipmentRating: 31.2 },
                tales: { equipmentRating: 35.3 },
                legends: { equipmentRating: 39.5 },
                myths: { equipmentRating: 41.6 },
                twelve: { equipmentRating: 43.7 }
            },
            engravingSlots: 0
        },
        noryettHouseChampionEarring: {
            id: 3,
            name: "Серьга чемпиона Дома Норьетт",
            type: "earrings",
            image: "earrings/noryett_3.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 23.1 },
                uncommon: { equipmentRating: 24.3 },
                rare: { equipmentRating: 25.4 },
                unique: { equipmentRating: 26.6 },
                epic: { equipmentRating: 27.7 },
                legendary: { equipmentRating: 28.9 },
                relic: { equipmentRating: 31.2 },
                wonders: { equipmentRating: 34.7 },
                tales: { equipmentRating: 39.3 },
                legends: { equipmentRating: 43.9 },
                myths: { equipmentRating: 46.2 },
                twelve: { equipmentRating: 48.5 }
            },
            engravingSlots: 0
        }
    },
    
    // Кольца
    rings: {
        noryettHouseRing: {
            id: 1,
            name: "Перстень Дома Норьетт",
            type: "rings",
            image: "rings/noryett_1.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 18.48 },
                uncommon: { equipmentRating: 19.4 },
                rare: { equipmentRating: 20.3 },
                unique: { equipmentRating: 21.2 },
                epic: { equipmentRating: 22.2 },
                legendary: { equipmentRating: 23.1 },
                relic: { equipmentRating: 24.9 },
                wonders: { equipmentRating: 27.7 },
                tales: { equipmentRating: 31.4 },
                legends: { equipmentRating: 35.1 },
                myths: { equipmentRating: 37.0 },
                twelve: { equipmentRating: 38.8 }
            },
            engravingSlots: 0
        },
        noryettHouseFavoriteRing: {
            id: 2,
            name: "Перстень фаворита Дома Норьетт",
            type: "rings",
            image: "rings/noryett_2.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 20.79 },
                uncommon: { equipmentRating: 21.8 },
                rare: { equipmentRating: 22.9 },
                unique: { equipmentRating: 23.9 },
                epic: { equipmentRating: 24.9 },
                legendary: { equipmentRating: 26.0 },
                relic: { equipmentRating: 28.1 },
                wonders: { equipmentRating: 31.2 },
                tales: { equipmentRating: 35.3 },
                legends: { equipmentRating: 39.5 },
                myths: { equipmentRating: 41.6 },
                twelve: { equipmentRating: 43.7 }
            },
            engravingSlots: 0
        },
        noryettHouseChampionRing: {
            id: 3,
            name: "Перстень чемпиона Дома Норьетт",
            type: "rings",
            image: "rings/noryett_3.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 23.1 },
                uncommon: { equipmentRating: 24.3 },
                rare: { equipmentRating: 25.4 },
                unique: { equipmentRating: 26.6 },
                epic: { equipmentRating: 27.7 },
                legendary: { equipmentRating: 28.9 },
                relic: { equipmentRating: 31.2 },
                wonders: { equipmentRating: 34.7 },
                tales: { equipmentRating: 39.3 },
                legends: { equipmentRating: 43.9 },
                myths: { equipmentRating: 46.2 },
                twelve: { equipmentRating: 48.5 }
            },
            engravingSlots: 0
        }
    },
    
    // Ожерелья
    necklaces: {
        guideNecklace: {
            id: 1,
            name: "Ожерелье проводника",
            type: "necklaces",
            image: "necklaces/guide_1.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 29.61 },
                uncommon: { equipmentRating: 31.1 },
                rare: { equipmentRating: 32.6 },
                unique: { equipmentRating: 34.0 },
                epic: { equipmentRating: 35.5 },
                legendary: { equipmentRating: 37.0 },
                relic: { equipmentRating: 40.0 },
                wonders: { equipmentRating: 44.4 },
                tales: { equipmentRating: 50.3 },
                legends: { equipmentRating: 56.2 },
                myths: { equipmentRating: 59.2 },
                twelve: { equipmentRating: 62.1 }
            },
            engravingSlots: 0
        },
        lastStandNecklace: {
            id: 2,
            name: "Ожерелье последнего рубежа",
            type: "necklaces",
            image: "necklaces/last_stand_1.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 34.78 },
                uncommon: { equipmentRating: 36.5 },
                rare: { equipmentRating: 38.3 },
                unique: { equipmentRating: 40.0 },
                epic: { equipmentRating: 41.7 },
                legendary: { equipmentRating: 43.5 },
                relic: { equipmentRating: 47.0 },
                wonders: { equipmentRating: 52.2 },
                tales: { equipmentRating: 59.1 },
                legends: { equipmentRating: 66.1 },
                myths: { equipmentRating: 69.6 },
                twelve: { equipmentRating: 73.0 }
            },
            engravingSlots: 0
        }
    },
    
    // Музыкальные инструменты
    musicalInstruments: {
        ramianLute: {
            id: 1,
            name: "Рамианская лютня",
            type: "musicalInstruments",
            image: "instruments/lute_1.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 43.68 },
                uncommon: { equipmentRating: 45.8 },
                rare: { equipmentRating: 48 },
                unique: { equipmentRating: 50.2 },
                epic: { equipmentRating: 52.4 },
                legendary: { equipmentRating: 54.6 },
                relic: { equipmentRating: 58.9 },
                wonders: { equipmentRating: 65.5 },
                tales: { equipmentRating: 74.2 },
                legends: { equipmentRating: 82.9 },
                myths: { equipmentRating: 87.3 },
                twelve: { equipmentRating: 91.7 }
            },
            engravingSlots: 0
        },
        perfectRamianLute: {
            id: 2,
            name: "Совершенная рамианская лютня",
            type: "musicalInstruments",
            image: "instruments/lute_2.png",
            grade: "tales",
            gradeStats: {
                common: { equipmentRating: 55.38 },
                uncommon: { equipmentRating: 58.15 },
                rare: { equipmentRating: 60.9 },
                unique: { equipmentRating: 63.7 },
                epic: { equipmentRating: 66.5 },
                legendary: { equipmentRating: 69.2 },
                relic: { equipmentRating: 74.7 },
                wonders: { equipmentRating: 83.1 },
                tales: { equipmentRating: 94.1 },
                legends: { equipmentRating: 105.2 },
                myths: { equipmentRating: 110.7 },
                twelve: { equipmentRating: 116.3 }
            },
            engravingSlots: 0
        },
        cursedRamianLute: {
            id: 3,
            name: "Проклятая рамианская лютня",
            type: "musicalInstruments",
            image: "instruments/lute_3.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 53.04 },
                uncommon: { equipmentRating: 55.7 },
                rare: { equipmentRating: 58.3 },
                unique: { equipmentRating: 61.0 },
                epic: { equipmentRating: 63.6 },
                legendary: { equipmentRating: 66.3 },
                relic: { equipmentRating: 71.6 },
                wonders: { equipmentRating: 79.5 },
                tales: { equipmentRating: 90.1 },
                legends: { equipmentRating: 100.7 },
                myths: { equipmentRating: 106.0 },
                twelve: { equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        upgradedRamianLute: {
            id: 4,
            name: "Обновленная рамианская лютня",
            type: "musicalInstruments",
            image: "instruments/lute_4.png",
            grade: "tales",
            gradeStats: {
                common: { equipmentRating: 54.6 },
                uncommon: { equipmentRating: 57.3 },
                rare: { equipmentRating: 60.0 },
                unique: { equipmentRating: 62.7 },
                epic: { equipmentRating: 65.5 },
                legendary: { equipmentRating: 68.2 },
                relic: { equipmentRating: 73.7 },
                wonders: { equipmentRating: 81.9 },
                tales: { equipmentRating: 92.8 },
                legends: { equipmentRating: 103.7 },
                myths: { equipmentRating: 109.2 },
                twelve: { equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        distortedRamianLute: {
            id: 5,
            name: "Искаженная рамианская лютня",
            type: "musicalInstruments",
            image: "instruments/lute_5.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 49.14 },
                uncommon: { equipmentRating: 51.6 },
                rare: { equipmentRating: 54.0 },
                unique: { equipmentRating: 56.5 },
                epic: { equipmentRating: 58.9 },
                legendary: { equipmentRating: 61.4 },
                relic: { equipmentRating: 66.3 },
                wonders: { equipmentRating: 73.7 },
                tales: { equipmentRating: 83.5 },
                legends: { equipmentRating: 93.3 },
                myths: { equipmentRating: 98.2 },
                twelve: { equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        primalRamianLute: {
            id: 6,
            name: "Изначальная рамианская лютня",
            type: "musicalInstruments",
            image: "instruments/lute_6.png",
            grade: "tales",
            gradeStats: {
                common: { equipmentRating: 53.82 },
                uncommon: { equipmentRating: 56.5 },
                rare: { equipmentRating: 59.2 },
                unique: { equipmentRating: 61.8 },
                epic: { equipmentRating: 64.5 },
                legendary: { equipmentRating: 67.2 },
                relic: { equipmentRating: 72.6 },
                wonders: { equipmentRating: 80.7 },
                tales: { equipmentRating: 91.4 },
                legends: { equipmentRating: 102.2 },
                myths: { equipmentRating: 107.6 },
                twelve: { equipmentRating: 113.0 }
            },
            engravingSlots: 0
        }
    },
    
    // Плащи
    cloaks: {
        goldenRedCommanderCloak: {
            id: 1,
            name: "Золотисто-алая атласная накидка командира",
            type: "cloaks",
            image: "cloaks/commander_cloak.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 49.6, movementSpeed: 12 },
                uncommon: { equipmentRating: 52.1, movementSpeed: 12 },
                rare: { equipmentRating: 54.6, movementSpeed: 12 },
                unique: { equipmentRating: 57.1, movementSpeed: 12 },
                epic: { equipmentRating: 59.5, movementSpeed: 12 },
                legendary: { equipmentRating: 62.0, movementSpeed: 12 },
                relic: { equipmentRating: 67.0, movementSpeed: 12 },
                wonders: { equipmentRating: 74.4, movementSpeed: 12 },
                tales: { equipmentRating: 84.3, movementSpeed: 12 },
                legends: { equipmentRating: 94.2, movementSpeed: 12 },
                myths: { equipmentRating: 99.2, movementSpeed: 12 },
                twelve: { equipmentRating: 104.1, movementSpeed: 12 }
            },
            engravingSlots: 0
        }
    },
    
    // Костюмы
    costumes: {
        invisibleArcherCostume: {
            id: 1,
            name: "Невидимый костюм лучника",
            type: "costumes",
            image: "costumes/invisible_archer.png",
            grade: "common",
            gradeStats: {
                common: { equipmentRating: 10 },
                uncommon: { equipmentRating: 10.5 },
                rare: { equipmentRating: 11.0 },
                unique: { equipmentRating: 11.5 },
                epic: { equipmentRating: 12.0 },
                legendary: { equipmentRating: 12.5 },
                relic: { equipmentRating: 13.5 },
                wonders: { equipmentRating: 15.0 },
                tales: { equipmentRating: 17.0 },
                legends: { equipmentRating: 19.0 },
                myths: { equipmentRating: 20.0 },
                twelve: { equipmentRating: 21.0 }
            },
            engravingSlots: 0
        }
    },
    
    // Сапоги
    boots: {
        ramianPlateBoots: {
            id: 1,
            name: "Рамианские латные сапоги",
            type: "boots",
            image: "boots/plate/plate_boots1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 794, resistance: 72, equipmentRating: 43.68 },
                uncommon: { defense: 833, resistance: 75, equipmentRating: 45.8 },
                rare: { defense: 873, resistance: 79, equipmentRating: 48 },
                unique: { defense: 913, resistance: 83, equipmentRating: 50.2 },
                epic: { defense: 952, resistance: 86, equipmentRating: 52.4 },
                legendary: { defense: 992, resistance: 90, equipmentRating: 54.6 },
                relic: { defense: 1072, resistance: 97, equipmentRating: 58.9 },
                wonders: { defense: 1191, resistance: 108, equipmentRating: 65.5 },
                tales: { defense: 1349, resistance: 122, equipmentRating: 74.2 },
                legends: { defense: 1508, resistance: 137, equipmentRating: 82.9 },
                myths: { defense: 1588, resistance: 144, equipmentRating: 87.3 },
                twelve: { defense: 1667, resistance: 151, equipmentRating: 91.7 }
            },
            engravingSlots: 0
        },
        ramianLeatherBoots: {
            id: 2,
            name: "Рамианские кожаные сапоги",
            type: "boots",
            image: "boots/leather/leather_boots1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 433, resistance: 433, equipmentRating: 43.68 },
                uncommon: { defense: 454, resistance: 454, equipmentRating: 45.8 },
                rare: { defense: 476, resistance: 476, equipmentRating: 48 },
                unique: { defense: 498, resistance: 498, equipmentRating: 50.2 },
                epic: { defense: 519, resistance: 519, equipmentRating: 52.4 },
                legendary: { defense: 541, resistance: 541, equipmentRating: 54.6 },
                relic: { defense: 584, resistance: 584, equipmentRating: 58.9 },
                wonders: { defense: 649, resistance: 649, equipmentRating: 65.5 },
                tales: { defense: 736, resistance: 736, equipmentRating: 74.2 },
                legends: { defense: 822, resistance: 822, equipmentRating: 82.9 },
                myths: { defense: 866, resistance: 866, equipmentRating: 87.3 },
                twelve: { defense: 909, resistance: 909, equipmentRating: 91.7 }
            },
            engravingSlots: 0
        },
        ramianClothBoots: {
            id: 3,
            name: "Рамианские матерчатые сапоги",
            type: "boots",
            image: "boots/cloth/cloth_boots1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 216, resistance: 649, equipmentRating: 43.68 },
                uncommon: { defense: 227, resistance: 682, equipmentRating: 45.8 },
                rare: { defense: 238, resistance: 714, equipmentRating: 48 },
                unique: { defense: 249, resistance: 747, equipmentRating: 50.2 },
                epic: { defense: 259, resistance: 779, equipmentRating: 52.4 },
                legendary: { defense: 270, resistance: 812, equipmentRating: 54.6 },
                relic: { defense: 292, resistance: 877, equipmentRating: 58.9 },
                wonders: { defense: 324, resistance: 974, equipmentRating: 65.5 },
                tales: { defense: 368, resistance: 1104, equipmentRating: 74.2 },
                legends: { defense: 411, resistance: 1234, equipmentRating: 82.9 },
                myths: { defense: 433, resistance: 1299, equipmentRating: 87.3 },
                twelve: { defense: 454, resistance: 1364, equipmentRating: 91.7 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateBoots: {
            id: 4,
            name: "Искаженные рамианские латные сапоги",
            type: "boots",
            image: "boots/plate/plate_boots2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 902, resistance: 82, equipmentRating: 49.1 },
                uncommon: { defense: 947, resistance: 86, equipmentRating: 51.6 },
                rare: { defense: 992, resistance: 90, equipmentRating: 54 },
                unique: { defense: 1037, resistance: 94, equipmentRating: 56.5 },
                epic: { defense: 1082, resistance: 98, equipmentRating: 58.9 },
                legendary: { defense: 1127, resistance: 102, equipmentRating: 61.4 },
                relic: { defense: 1218, resistance: 110, equipmentRating: 66.3 },
                wonders: { defense: 1353, resistance: 123, equipmentRating: 73.7 },
                tales: { defense: 1533, resistance: 139, equipmentRating: 83.5 },
                legends: { defense: 1714, resistance: 155, equipmentRating: 93.3 },
                myths: { defense: 1804, resistance: 164, equipmentRating: 98.2 },
                twelve: { defense: 1894, resistance: 172, equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherBoots: {
            id: 5,
            name: "Искаженные рамианские кожаные сапоги",
            type: "boots",
            image: "boots/leather/leather_boots2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 492, resistance: 492, equipmentRating: 49.1 },
                uncommon: { defense: 516, resistance: 516, equipmentRating: 51.6 },
                rare: { defense: 541, resistance: 541, equipmentRating: 54 },
                unique: { defense: 566, resistance: 566, equipmentRating: 56.5 },
                epic: { defense: 590, resistance: 590, equipmentRating: 58.9 },
                legendary: { defense: 615, resistance: 615, equipmentRating: 61.4 },
                relic: { defense: 664, resistance: 664, equipmentRating: 66.3 },
                wonders: { defense: 738, resistance: 738, equipmentRating: 73.7 },
                tales: { defense: 836, resistance: 836, equipmentRating: 83.5 },
                legends: { defense: 935, resistance: 935, equipmentRating: 93.3 },
                myths: { defense: 984, resistance: 984, equipmentRating: 98.2 },
                twelve: { defense: 1033, resistance: 1033, equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        distortedRamianClothBoots: {
            id: 6,
            name: "Искаженные рамианские матерчатые сапоги",
            type: "boots",
            image: "boots/cloth/cloth_boots2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 246, resistance: 738, equipmentRating: 49.1 },
                uncommon: { defense: 258, resistance: 775, equipmentRating: 51.6 },
                rare: { defense: 270, resistance: 812, equipmentRating: 54 },
                unique: { defense: 283, resistance: 849, equipmentRating: 56.5 },
                epic: { defense: 295, resistance: 885, equipmentRating: 58.9 },
                legendary: { defense: 307, resistance: 922, equipmentRating: 61.4 },
                relic: { defense: 332, resistance: 996, equipmentRating: 66.3 },
                wonders: { defense: 369, resistance: 1107, equipmentRating: 73.7 },
                tales: { defense: 418, resistance: 1255, equipmentRating: 83.5 },
                legends: { defense: 467, resistance: 1402, equipmentRating: 93.3 },
                myths: { defense: 492, resistance: 1476, equipmentRating: 98.2 },
                twelve: { defense: 516, resistance: 1550, equipmentRating: 103.1 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateBoots: {
            id: 7,
            name: "Проклятые рамианские латные сапоги",
            type: "boots",
            image: "boots/plate/plate_boots3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 980, resistance: 89, equipmentRating: 53 },
                uncommon: { defense: 1029, resistance: 93, equipmentRating: 55.6 },
                rare: { defense: 1078, resistance: 98, equipmentRating: 58.3 },
                unique: { defense: 1127, resistance: 102, equipmentRating: 61 },
                epic: { defense: 1176, resistance: 106, equipmentRating: 63.6 },
                legendary: { defense: 1225, resistance: 111, equipmentRating: 66.3 },
                relic: { defense: 1323, resistance: 120, equipmentRating: 71.6 },
                wonders: { defense: 1470, resistance: 133, equipmentRating: 79.5 },
                tales: { defense: 1666, resistance: 151, equipmentRating: 90.1 },
                legends: { defense: 1863, resistance: 169, equipmentRating: 100.7 },
                myths: { defense: 1961, resistance: 178, equipmentRating: 106 },
                twelve: { defense: 2059, resistance: 187, equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherBoots: {
            id: 8,
            name: "Проклятые рамианские кожаные сапоги",
            type: "boots",
            image: "boots/leather/leather_boots3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 534, resistance: 534, equipmentRating: 53 },
                uncommon: { defense: 561, resistance: 561, equipmentRating: 55.6 },
                rare: { defense: 588, resistance: 588, equipmentRating: 58.3 },
                unique: { defense: 615, resistance: 615, equipmentRating: 61 },
                epic: { defense: 641, resistance: 641, equipmentRating: 63.6 },
                legendary: { defense: 668, resistance: 668, equipmentRating: 66.3 },
                relic: { defense: 722, resistance: 722, equipmentRating: 71.6 },
                wonders: { defense: 802, resistance: 802, equipmentRating: 79.5 },
                tales: { defense: 909, resistance: 909, equipmentRating: 90.1 },
                legends: { defense: 1016, resistance: 1016, equipmentRating: 100.7 },
                myths: { defense: 1069, resistance: 1069, equipmentRating: 106 },
                twelve: { defense: 1123, resistance: 1123, equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        cursedRamianClothBoots: {
            id: 9,
            name: "Проклятые рамианские матерчатые сапоги",
            type: "boots",
            image: "boots/cloth/cloth_boots3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 267, resistance: 802, equipmentRating: 53 },
                uncommon: { defense: 280, resistance: 842, equipmentRating: 55.6 },
                rare: { defense: 294, resistance: 882, equipmentRating: 58.3 },
                unique: { defense: 307, resistance: 922, equipmentRating: 61 },
                epic: { defense: 320, resistance: 962, equipmentRating: 63.6 },
                legendary: { defense: 334, resistance: 1002, equipmentRating: 66.3 },
                relic: { defense: 361, resistance: 1083, equipmentRating: 71.6 },
                wonders: { defense: 401, resistance: 1203, equipmentRating: 79.5 },
                tales: { defense: 454, resistance: 1363, equipmentRating: 90.1 },
                legends: { defense: 508, resistance: 1524, equipmentRating: 100.7 },
                myths: { defense: 534, resistance: 1604, equipmentRating: 106 },
                twelve: { defense: 561, resistance: 1684, equipmentRating: 111.3 }
            },
            engravingSlots: 0
        },
        primalRamianPlateBoots: {
            id: 10,
            name: "Изначальные рамианские латные сапоги",
            type: "boots",
            image: "boots/plate/plate_boots4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 996, resistance: 90, equipmentRating: 53.8 },
                uncommon: { defense: 1045, resistance: 95, equipmentRating: 56.5 },
                rare: { defense: 1095, resistance: 99, equipmentRating: 59.2 },
                unique: { defense: 1145, resistance: 104, equipmentRating: 61.8 },
                epic: { defense: 1195, resistance: 108, equipmentRating: 64.5 },
                legendary: { defense: 1245, resistance: 113, equipmentRating: 67.2 },
                relic: { defense: 1344, resistance: 122, equipmentRating: 72.6 },
                wonders: { defense: 1494, resistance: 135, equipmentRating: 80.7 },
                tales: { defense: 1693, resistance: 153, equipmentRating: 91.4 },
                legends: { defense: 1892, resistance: 172, equipmentRating: 102.2 },
                myths: { defense: 1992, resistance: 181, equipmentRating: 107.6 },
                twelve: { defense: 2091, resistance: 190, equipmentRating: 113 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherBoots: {
            id: 11,
            name: "Изначальные рамианские кожаные сапоги",
            type: "boots",
            image: "boots/leather/leather_boots4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 543, resistance: 543, equipmentRating: 53.8 },
                uncommon: { defense: 570, resistance: 570, equipmentRating: 56.5 },
                rare: { defense: 597, resistance: 597, equipmentRating: 59.2 },
                unique: { defense: 624, resistance: 624, equipmentRating: 61.8 },
                epic: { defense: 652, resistance: 652, equipmentRating: 64.5 },
                legendary: { defense: 679, resistance: 679, equipmentRating: 67.2 },
                relic: { defense: 733, resistance: 733, equipmentRating: 72.6 },
                wonders: { defense: 815, resistance: 815, equipmentRating: 80.7 },
                tales: { defense: 923, resistance: 923, equipmentRating: 91.4 },
                legends: { defense: 1032, resistance: 1032, equipmentRating: 102.2 },
                myths: { defense: 1086, resistance: 1086, equipmentRating: 107.6 },
                twelve: { defense: 1141, resistance: 1141, equipmentRating: 113 }
            },
            engravingSlots: 0
        },
        primalRamianClothBoots: {
            id: 12,
            name: "Изначальные рамианские матерчатые сапоги",
            type: "boots",
            image: "boots/cloth/cloth_boots4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 271, resistance: 815, equipmentRating: 53.8 },
                uncommon: { defense: 285, resistance: 855, equipmentRating: 56.5 },
                rare: { defense: 298, resistance: 896, equipmentRating: 59.2 },
                unique: { defense: 312, resistance: 937, equipmentRating: 61.8 },
                epic: { defense: 326, resistance: 978, equipmentRating: 64.5 },
                legendary: { defense: 339, resistance: 1018, equipmentRating: 67.2 },
                relic: { defense: 366, resistance: 1100, equipmentRating: 72.6 },
                wonders: { defense: 407, resistance: 1222, equipmentRating: 80.7 },
                tales: { defense: 461, resistance: 1385, equipmentRating: 91.4 },
                legends: { defense: 516, resistance: 1548, equipmentRating: 102.2 },
                myths: { defense: 543, resistance: 1630, equipmentRating: 107.6 },
                twelve: { defense: 570, resistance: 1711, equipmentRating: 113 }
            },
            engravingSlots: 0
        },
        upgradedRamianPlateBoots: {
            id: 13,
            name: "Обновленные рамианские латные сапоги",
            type: "boots",
            image: "boots/plate/plate_boots5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1011, resistance: 91, equipmentRating: 54.6 },
                uncommon: { defense: 1062, resistance: 96, equipmentRating: 57.3 },
                rare: { defense: 1113, resistance: 101, equipmentRating: 60 },
                unique: { defense: 1163, resistance: 105, equipmentRating: 62.7 },
                epic: { defense: 1214, resistance: 110, equipmentRating: 65.5 },
                legendary: { defense: 1264, resistance: 114, equipmentRating: 68.2 },
                relic: { defense: 1366, resistance: 124, equipmentRating: 73.7 },
                wonders: { defense: 1517, resistance: 137, equipmentRating: 81.9 },
                tales: { defense: 1720, resistance: 156, equipmentRating: 92.8 },
                legends: { defense: 1922, resistance: 174, equipmentRating: 103.7 },
                myths: { defense: 2023, resistance: 183, equipmentRating: 109.2 },
                twelve: { defense: 2124, resistance: 193, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherBoots: {
            id: 14,
            name: "Обновленные рамианские кожаные сапоги",
            type: "boots",
            image: "boots/leather/leather_boots5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 551, resistance: 551, equipmentRating: 54.6 },
                uncommon: { defense: 579, resistance: 579, equipmentRating: 57.3 },
                rare: { defense: 607, resistance: 607, equipmentRating: 60 },
                unique: { defense: 634, resistance: 634, equipmentRating: 62.7 },
                epic: { defense: 662, resistance: 662, equipmentRating: 65.5 },
                legendary: { defense: 689, resistance: 689, equipmentRating: 68.2 },
                relic: { defense: 745, resistance: 745, equipmentRating: 73.7 },
                wonders: { defense: 827, resistance: 827, equipmentRating: 81.9 },
                tales: { defense: 938, resistance: 938, equipmentRating: 92.8 },
                legends: { defense: 1048, resistance: 1048, equipmentRating: 103.7 },
                myths: { defense: 1103, resistance: 1103, equipmentRating: 109.2 },
                twelve: { defense: 1159, resistance: 1159, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        upgradedRamianClothBoots: {
            id: 15,
            name: "Обновленные рамианские матерчатые сапоги",
            type: "boots",
            image: "boots/cloth/cloth_boots5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 275, resistance: 827, equipmentRating: 54.6 },
                uncommon: { defense: 289, resistance: 869, equipmentRating: 57.3 },
                rare: { defense: 303, resistance: 910, equipmentRating: 60 },
                unique: { defense: 317, resistance: 952, equipmentRating: 62.7 },
                epic: { defense: 331, resistance: 993, equipmentRating: 65.5 },
                legendary: { defense: 344, resistance: 1034, equipmentRating: 68.2 },
                relic: { defense: 372, resistance: 1117, equipmentRating: 73.7 },
                wonders: { defense: 413, resistance: 1241, equipmentRating: 81.9 },
                tales: { defense: 469, resistance: 1407, equipmentRating: 92.8 },
                legends: { defense: 524, resistance: 1573, equipmentRating: 103.7 },
                myths: { defense: 551, resistance: 1655, equipmentRating: 109.2 },
                twelve: { defense: 579, resistance: 1738, equipmentRating: 114.6 }
            },
            engravingSlots: 0
        },
        materchatyesapogismotritelyataynyharhivov: {
            id: 16,
            name: "Матерчатые сапоги смотрителя тайных архивов",
            type: "boots",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 237, resistance: 712, equipmentRating: 47.58, stamina: 22, spirit: 33 },
                uncommon: { defense: 249, resistance: 748, equipmentRating: 49.96, stamina: 24, spirit: 35 },
                rare: { defense: 261, resistance: 783, equipmentRating: 52.34, stamina: 26, spirit: 39 },
                unique: { defense: 273, resistance: 819, equipmentRating: 54.72, stamina: 27, spirit: 41 },
                epic: { defense: 284, resistance: 854, equipmentRating: 57.10, stamina: 29, spirit: 44 },
                legendary: { defense: 296, resistance: 890, equipmentRating: 59.47, stamina: 31, spirit: 47 },
                relic: { defense: 320, resistance: 961, equipmentRating: 64.23, stamina: 33, spirit: 50 },
                wonders: { defense: 356, resistance: 1068, equipmentRating: 71.37, stamina: 36, spirit: 53 },
                tales: { defense: 403, resistance: 1210, equipmentRating: 80.89, stamina: 38, spirit: 57 },
                legends: { defense: 450, resistance: 1353, equipmentRating: 90.40, stamina: 41, spirit: 61 },
                myths: { defense: 474, resistance: 1424, equipmentRating: 95.16, stamina: 45, spirit: 67 },
                twelve: { defense: 498, resistance: 1495, equipmentRating: 99.92, stamina: 47, spirit: 71 }
            },
            engravingSlots: 0
        }
    },
    
    // Поножи
    legguards: {
        ramianPlateLegguards: {
            id: 1,
            name: "Рамианские латные поножи",
            type: "legguards",
            image: "pants/plate/plate_pants1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1588, resistance: 144, equipmentRating: 87.36 },
                uncommon: { defense: 1667, resistance: 151, equipmentRating: 91.6 },
                rare: { defense: 1747, resistance: 158, equipmentRating: 96 },
                unique: { defense: 1826, resistance: 166, equipmentRating: 100.4 },
                epic: { defense: 1906, resistance: 173, equipmentRating: 104.8 },
                legendary: { defense: 1985, resistance: 180, equipmentRating: 109.2 },
                relic: { defense: 2065, resistance: 187, equipmentRating: 117.8 },
                wonders: { defense: 2144, resistance: 194, equipmentRating: 131 },
                tales: { defense: 3386, resistance: 307, equipmentRating: 148.4 },
                legends: { defense: 3466, resistance: 314, equipmentRating: 165.8 },
                myths: { defense: 3545, resistance: 321, equipmentRating: 174.6 },
                twelve: { defense: 3625, resistance: 329, equipmentRating: 183.4 }
            },
            engravingSlots: 0
        },
        ramianLeatherLegguards: {
            id: 2,
            name: "Рамианские кожаные поножи",
            type: "legguards",
            image: "pants/leather/leather_pants1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 866, resistance: 866, equipmentRating: 87.36 },
                uncommon: { defense: 909, resistance: 909, equipmentRating: 91.6 },
                rare: { defense: 953, resistance: 953, equipmentRating: 96 },
                unique: { defense: 996, resistance: 996, equipmentRating: 100.4 },
                epic: { defense: 1040, resistance: 1040, equipmentRating: 104.8 },
                legendary: { defense: 1083, resistance: 1083, equipmentRating: 109.2 },
                relic: { defense: 1127, resistance: 1127, equipmentRating: 117.8 },
                wonders: { defense: 1170, resistance: 1170, equipmentRating: 131 },
                tales: { defense: 1847, resistance: 1847, equipmentRating: 148.4 },
                legends: { defense: 1890, resistance: 1890, equipmentRating: 165.8 },
                myths: { defense: 1934, resistance: 1934, equipmentRating: 174.6 },
                twelve: { defense: 1977, resistance: 1977, equipmentRating: 183.4 }
            },
            engravingSlots: 0
        },
        ramianClothLegguards: {
            id: 3,
            name: "Рамианские матерчатые поножи",
            type: "legguards",
            image: "pants/cloth/cloth_pants1.png",
            grade: "common",
            gradeStats: {
                common: { defense: 433, resistance: 1299, equipmentRating: 87.36 },
                uncommon: { defense: 454, resistance: 1364, equipmentRating: 91.6 },
                rare: { defense: 476, resistance: 1430, equipmentRating: 96 },
                unique: { defense: 498, resistance: 1495, equipmentRating: 100.4 },
                epic: { defense: 520, resistance: 1561, equipmentRating: 104.8 },
                legendary: { defense: 542, resistance: 1626, equipmentRating: 109.2 },
                relic: { defense: 564, resistance: 1692, equipmentRating: 117.8 },
                wonders: { defense: 586, resistance: 1757, equipmentRating: 131 },
                tales: { defense: 923, resistance: 2771, equipmentRating: 148.4 },
                legends: { defense: 945, resistance: 2836, equipmentRating: 165.8 },
                myths: { defense: 967, resistance: 2902, equipmentRating: 174.6 },
                twelve: { defense: 989, resistance: 2967, equipmentRating: 183.4 }
            },
            engravingSlots: 0
        },
        distortedRamianPlateLegguards: {
            id: 4,
            name: "Искаженные рамианские латные поножи",
            type: "legguards",
            image: "pants/plate/plate_pants2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1804, resistance: 164, equipmentRating: 98.2 },
                uncommon: { defense: 1894, resistance: 172, equipmentRating: 103.2 },
                rare: { defense: 1985, resistance: 180, equipmentRating: 108 },
                unique: { defense: 2075, resistance: 188, equipmentRating: 113 },
                epic: { defense: 2166, resistance: 196, equipmentRating: 117.8 },
                legendary: { defense: 2256, resistance: 205, equipmentRating: 122.8 },
                relic: { defense: 2347, resistance: 213, equipmentRating: 132.6 },
                wonders: { defense: 2437, resistance: 221, equipmentRating: 147.4 },
                tales: { defense: 3847, resistance: 349, equipmentRating: 167 },
                legends: { defense: 3938, resistance: 357, equipmentRating: 186.6 },
                myths: { defense: 4028, resistance: 365, equipmentRating: 196.4 },
                twelve: { defense: 4119, resistance: 374, equipmentRating: 206.2 }
            },
            engravingSlots: 0
        },
        distortedRamianLeatherLegguards: {
            id: 5,
            name: "Искаженные рамианские кожаные поножи",
            type: "legguards",
            image: "pants/leather/leather_pants2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 984, resistance: 984, equipmentRating: 98.2 },
                uncommon: { defense: 1033, resistance: 1033, equipmentRating: 103.2 },
                rare: { defense: 1083, resistance: 1083, equipmentRating: 108 },
                unique: { defense: 1132, resistance: 1132, equipmentRating: 113 },
                epic: { defense: 1182, resistance: 1182, equipmentRating: 117.8 },
                legendary: { defense: 1231, resistance: 1231, equipmentRating: 122.8 },
                relic: { defense: 1281, resistance: 1281, equipmentRating: 132.6 },
                wonders: { defense: 1330, resistance: 1330, equipmentRating: 147.4 },
                tales: { defense: 2098, resistance: 2098, equipmentRating: 167 },
                legends: { defense: 2148, resistance: 2148, equipmentRating: 186.6 },
                myths: { defense: 2197, resistance: 2197, equipmentRating: 196.4 },
                twelve: { defense: 2247, resistance: 2247, equipmentRating: 206.2 }
            },
            engravingSlots: 0
        },
        distortedRamianClothLegguards: {
            id: 6,
            name: "Искаженные рамианские матерчатые поножи",
            type: "legguards",
            image: "pants/cloth/cloth_pants2.png",
            grade: "common",
            gradeStats: {
                common: { defense: 492, resistance: 1476, equipmentRating: 98.2 },
                uncommon: { defense: 516, resistance: 1550, equipmentRating: 103.2 },
                rare: { defense: 541, resistance: 1624, equipmentRating: 108 },
                unique: { defense: 566, resistance: 1698, equipmentRating: 113 },
                epic: { defense: 591, resistance: 1773, equipmentRating: 117.8 },
                legendary: { defense: 616, resistance: 1847, equipmentRating: 122.8 },
                relic: { defense: 641, resistance: 1921, equipmentRating: 132.6 },
                wonders: { defense: 665, resistance: 1996, equipmentRating: 147.4 },
                tales: { defense: 1049, resistance: 3148, equipmentRating: 167 },
                legends: { defense: 1074, resistance: 3222, equipmentRating: 186.6 },
                myths: { defense: 1098, resistance: 3296, equipmentRating: 196.4 },
                twelve: { defense: 1123, resistance: 3371, equipmentRating: 206.2 }
            },
            engravingSlots: 0
        },
        cursedRamianPlateLegguards: {
            id: 7,
            name: "Проклятые рамианские латные поножи",
            type: "legguards",
            image: "pants/plate/plate_pants3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1961, resistance: 178, equipmentRating: 106 },
                uncommon: { defense: 2059, resistance: 187, equipmentRating: 111.2 },
                rare: { defense: 2157, resistance: 196, equipmentRating: 116.6 },
                unique: { defense: 2255, resistance: 205, equipmentRating: 122 },
                epic: { defense: 2353, resistance: 213, equipmentRating: 127.2 },
                legendary: { defense: 2451, resistance: 222, equipmentRating: 132.6 },
                relic: { defense: 2549, resistance: 231, equipmentRating: 143.2 },
                wonders: { defense: 2647, resistance: 240, equipmentRating: 159 },
                tales: { defense: 4177, resistance: 379, equipmentRating: 180.2 },
                legends: { defense: 4275, resistance: 388, equipmentRating: 201.4 },
                myths: { defense: 4373, resistance: 397, equipmentRating: 212 },
                twelve: { defense: 4471, resistance: 406, equipmentRating: 222.6 }
            },
            engravingSlots: 0
        },
        cursedRamianLeatherLegguards: {
            id: 8,
            name: "Проклятые рамианские кожаные поножи",
            type: "legguards",
            image: "pants/leather/leather_pants3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 1068, resistance: 1068, equipmentRating: 106 },
                uncommon: { defense: 1122, resistance: 1122, equipmentRating: 111.2 },
                rare: { defense: 1176, resistance: 1176, equipmentRating: 116.6 },
                unique: { defense: 1230, resistance: 1230, equipmentRating: 122 },
                epic: { defense: 1284, resistance: 1284, equipmentRating: 127.2 },
                legendary: { defense: 1337, resistance: 1337, equipmentRating: 132.6 },
                relic: { defense: 1391, resistance: 1391, equipmentRating: 143.2 },
                wonders: { defense: 1445, resistance: 1445, equipmentRating: 159 },
                tales: { defense: 2279, resistance: 2279, equipmentRating: 180.2 },
                legends: { defense: 2333, resistance: 2333, equipmentRating: 201.4 },
                myths: { defense: 2386, resistance: 2386, equipmentRating: 212 },
                twelve: { defense: 2440, resistance: 2440, equipmentRating: 222.6 }
            },
            engravingSlots: 0
        },
        cursedRamianClothLegguards: {
            id: 9,
            name: "Проклятые рамианские матерчатые поножи",
            type: "legguards",
            image: "pants/cloth/cloth_pants3.png",
            grade: "common",
            gradeStats: {
                common: { defense: 534, resistance: 1604, equipmentRating: 106 },
                uncommon: { defense: 561, resistance: 1684, equipmentRating: 111.2 },
                rare: { defense: 588, resistance: 1765, equipmentRating: 116.6 },
                unique: { defense: 614, resistance: 1845, equipmentRating: 122 },
                epic: { defense: 641, resistance: 1925, equipmentRating: 127.2 },
                legendary: { defense: 668, resistance: 2005, equipmentRating: 132.6 },
                relic: { defense: 695, resistance: 2086, equipmentRating: 143.2 },
                wonders: { defense: 722, resistance: 2166, equipmentRating: 159 },
                tales: { defense: 1139, resistance: 3419, equipmentRating: 180.2 },
                legends: { defense: 1166, resistance: 3499, equipmentRating: 201.4 },
                myths: { defense: 1193, resistance: 3580, equipmentRating: 212 },
                twelve: { defense: 1220, resistance: 3660, equipmentRating: 222.6 }
            },
            engravingSlots: 0
        },
        primalRamianPlateLegguards: {
            id: 10,
            name: "Изначальные рамианские латные поножи",
            type: "legguards",
            image: "pants/plate/plate_pants4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 3386, resistance: 307, equipmentRating: 107.6 },
                uncommon: { defense: 3555, resistance: 322, equipmentRating: 113 },
                rare: { defense: 3724, resistance: 338, equipmentRating: 118.4 },
                unique: { defense: 3893, resistance: 353, equipmentRating: 123.6 },
                epic: { defense: 4062, resistance: 369, equipmentRating: 129 },
                legendary: { defense: 4231, resistance: 384, equipmentRating: 134.4 },
                relic: { defense: 4400, resistance: 400, equipmentRating: 145.2 },
                wonders: { defense: 4569, resistance: 415, equipmentRating: 161.4 },
                tales: { defense: 7207, resistance: 654, equipmentRating: 182.8 },
                legends: { defense: 7376, resistance: 670, equipmentRating: 204.4 },
                myths: { defense: 7545, resistance: 685, equipmentRating: 215.2 },
                twelve: { defense: 7714, resistance: 700, equipmentRating: 226 }
            },
            engravingSlots: 0
        },
        primalRamianLeatherLegguards: {
            id: 11,
            name: "Изначальные рамианские кожаные поножи",
            type: "legguards",
            image: "pants/leather/leather_pants4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1847, resistance: 1847, equipmentRating: 107.6 },
                uncommon: { defense: 1939, resistance: 1939, equipmentRating: 113 },
                rare: { defense: 2032, resistance: 2032, equipmentRating: 118.4 },
                unique: { defense: 2124, resistance: 2124, equipmentRating: 123.6 },
                epic: { defense: 2217, resistance: 2217, equipmentRating: 129 },
                legendary: { defense: 2309, resistance: 2309, equipmentRating: 134.4 },
                relic: { defense: 2402, resistance: 2402, equipmentRating: 145.2 },
                wonders: { defense: 2494, resistance: 2494, equipmentRating: 161.4 },
                tales: { defense: 3934, resistance: 3934, equipmentRating: 182.8 },
                legends: { defense: 4027, resistance: 4027, equipmentRating: 204.4 },
                myths: { defense: 4119, resistance: 4119, equipmentRating: 215.2 },
                twelve: { defense: 4212, resistance: 4212, equipmentRating: 226 }
            },
            engravingSlots: 0
        },
        primalRamianClothLegguards: {
            id: 12,
            name: "Изначальные рамианские матерчатые поножи",
            type: "legguards",
            image: "pants/cloth/cloth_pants4.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 923, resistance: 2771, equipmentRating: 107.6 },
                uncommon: { defense: 969, resistance: 2909, equipmentRating: 113 },
                rare: { defense: 1016, resistance: 3048, equipmentRating: 118.4 },
                unique: { defense: 1062, resistance: 3186, equipmentRating: 123.6 },
                epic: { defense: 1109, resistance: 3325, equipmentRating: 129 },
                legendary: { defense: 1154, resistance: 3463, equipmentRating: 134.4 },
                relic: { defense: 1201, resistance: 3602, equipmentRating: 145.2 },
                wonders: { defense: 1247, resistance: 3740, equipmentRating: 161.4 },
                tales: { defense: 1967, resistance: 5902, equipmentRating: 182.8 },
                legends: { defense: 2013, resistance: 6041, equipmentRating: 204.4 },
                myths: { defense: 2060, resistance: 6179, equipmentRating: 215.2 },
                twelve: { defense: 2106, resistance: 6318, equipmentRating: 226 }
            },
            engravingSlots: 0
        },
        upgradedRamianPlateLegguards: {
            id: 13,
            name: "Обновленные рамианские латные поножи",
            type: "legguards",
            image: "pants/plate/plate_pants5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 3440, resistance: 312, equipmentRating: 109.2 },
                uncommon: { defense: 3612, resistance: 328, equipmentRating: 114.6 },
                rare: { defense: 3784, resistance: 343, equipmentRating: 120 },
                unique: { defense: 3956, resistance: 359, equipmentRating: 125.4 },
                epic: { defense: 4128, resistance: 374, equipmentRating: 131 },
                legendary: { defense: 4300, resistance: 390, equipmentRating: 136.4 },
                relic: { defense: 4472, resistance: 406, equipmentRating: 147.4 },
                wonders: { defense: 4644, resistance: 421, equipmentRating: 163.8 },
                tales: { defense: 7328, resistance: 665, equipmentRating: 185.6 },
                legends: { defense: 7500, resistance: 681, equipmentRating: 207.4 },
                myths: { defense: 7672, resistance: 696, equipmentRating: 218.4 },
                twelve: { defense: 7844, resistance: 712, equipmentRating: 229.2 }
            },
            engravingSlots: 0
        },
        upgradedRamianLeatherLegguards: {
            id: 14,
            name: "Обновленные рамианские кожаные поножи",
            type: "legguards",
            image: "pants/leather/leather_pants5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 1876, resistance: 1876, equipmentRating: 109.2 },
                uncommon: { defense: 1970, resistance: 1970, equipmentRating: 114.6 },
                rare: { defense: 2064, resistance: 2064, equipmentRating: 120 },
                unique: { defense: 2158, resistance: 2158, equipmentRating: 125.4 },
                epic: { defense: 2252, resistance: 2252, equipmentRating: 131 },
                legendary: { defense: 2345, resistance: 2345, equipmentRating: 136.4 },
                relic: { defense: 2439, resistance: 2439, equipmentRating: 147.4 },
                wonders: { defense: 2533, resistance: 2533, equipmentRating: 163.8 },
                tales: { defense: 3996, resistance: 3996, equipmentRating: 185.6 },
                legends: { defense: 4090, resistance: 4090, equipmentRating: 207.4 },
                myths: { defense: 4184, resistance: 4184, equipmentRating: 218.4 },
                twelve: { defense: 4278, resistance: 4278, equipmentRating: 229.2 }
            },
            engravingSlots: 0
        },
        upgradedRamianClothLegguards: {
            id: 15,
            name: "Обновленные рамианские матерчатые поножи",
            type: "legguards",
            image: "pants/cloth/cloth_pants5.png",
            grade: "tales",
            gradeStats: {
                common: { defense: 938, resistance: 2814, equipmentRating: 109.2 },
                uncommon: { defense: 985, resistance: 2955, equipmentRating: 114.6 },
                rare: { defense: 1032, resistance: 3096, equipmentRating: 120 },
                unique: { defense: 1079, resistance: 3237, equipmentRating: 125.4 },
                epic: { defense: 1126, resistance: 3378, equipmentRating: 131 },
                legendary: { defense: 1172, resistance: 3518, equipmentRating: 136.4 },
                relic: { defense: 1219, resistance: 3659, equipmentRating: 147.4 },
                wonders: { defense: 1266, resistance: 3800, equipmentRating: 163.8 },
                tales: { defense: 1998, resistance: 5996, equipmentRating: 185.6 },
                legends: { defense: 2045, resistance: 6137, equipmentRating: 207.4 },
                myths: { defense: 2092, resistance: 6278, equipmentRating: 218.4 },
                twelve: { defense: 2139, resistance: 6419, equipmentRating: 229.2 }
            },
            engravingSlots: 0
        },
        magisterskielatnyeponozhiernardskogoarhivariusa: {
            id: 16,
            name: "Магистерские латные поножи эрнардского архивариуса",
            type: "legguards",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 1961, resistance: 178, equipmentRating: 106.00, stamina: 74, strength: 50 },
                uncommon: { defense: 2059, resistance: 187, equipmentRating: 111.30, stamina: 79, strength: 54 },
                rare: { defense: 2157, resistance: 196, equipmentRating: 116.60, stamina: 87, strength: 59 },
                unique: { defense: 2255, resistance: 205, equipmentRating: 121.90, stamina: 92, strength: 62 },
                epic: { defense: 2353, resistance: 214, equipmentRating: 127.20, stamina: 99, strength: 67 },
                legendary: { defense: 2451, resistance: 223, equipmentRating: 132.50, stamina: 104, strength: 71 },
                relic: { defense: 2647, resistance: 240, equipmentRating: 143.10, stamina: 112, strength: 76 },
                wonders: { defense: 2942, resistance: 267, equipmentRating: 159.00, stamina: 120, strength: 81 },
                tales: { defense: 3334, resistance: 303, equipmentRating: 180.20, stamina: 127, strength: 86 },
                legends: { defense: 3726, resistance: 338, equipmentRating: 201.40, stamina: 138, strength: 93 },
                myths: { defense: 3922, resistance: 356, equipmentRating: 212.00, stamina: 150, strength: 101 },
                twelve: { defense: 4118, resistance: 374, equipmentRating: 222.60, stamina: 158, strength: 107 }
            },
            engravingSlots: 0
        },
        materchatyeponozhismotritelyataynyharhivov: {
            id: 17,
            name: "Матерчатые поножи смотрителя тайных архивов",
            type: "legguards",
            image: "",
            grade: "common",
            gradeStats: {
                common: { defense: 475, resistance: 1425, equipmentRating: 95.16, stamina: 44, spirit: 67 },
                uncommon: { defense: 499, resistance: 1496, equipmentRating: 99.92, stamina: 47, spirit: 72 },
                rare: { defense: 523, resistance: 1568, equipmentRating: 104.68, stamina: 51, spirit: 78 },
                unique: { defense: 546, resistance: 1639, equipmentRating: 109.43, stamina: 55, spirit: 83 },
                epic: { defense: 570, resistance: 1710, equipmentRating: 114.19, stamina: 59, spirit: 90 },
                legendary: { defense: 594, resistance: 1781, equipmentRating: 118.95, stamina: 62, spirit: 94 },
                relic: { defense: 641, resistance: 1924, equipmentRating: 128.47, stamina: 67, spirit: 102 },
                wonders: { defense: 713, resistance: 2138, equipmentRating: 142.74, stamina: 71, spirit: 109 },
                tales: { defense: 808, resistance: 2423, equipmentRating: 161.77, stamina: 76, spirit: 115 },
                legends: { defense: 903, resistance: 2708, equipmentRating: 180.80, stamina: 82, spirit: 125 },
                myths: { defense: 950, resistance: 2850, equipmentRating: 190.32, stamina: 89, spirit: 136 },
                twelve: { defense: 998, resistance: 2993, equipmentRating: 199.84, stamina: 94, spirit: 143 }
            },
            engravingSlots: 0
        }    
    }
};



// Грейды предметов
const itemGrades = {
    useless: {
        name: "Бесполезный предмет",
        frame: "grades/icon_grade1.png",
        color: "#949293"
    },
    common: {
        name: "Обычный предмет",
        frame: "grades/icon_grade2.png",
        color: "#BA976D"
    },
    uncommon: {
        name: "Необычный предмет",
        frame: "grades/icon_grade3.png",
        color: "#77b064"
    },
    rare: {
        name: "Редкий предмет",
        frame: "grades/icon_grade4.png",
        color: "#558fd7"
    },
    unique: {
        name: "Уникальный предмет",
        frame: "grades/icon_grade5.png",
        color: "#cb72d8"
    },
    epic: {
        name: "Эпический предмет",
        frame: "grades/icon_grade6.png",
        color: "#d78b06"
    },
    legendary: {
        name: "Легендарный предмет",
        frame: "grades/icon_grade7.png",
        color: "#e17853"
    },
    relic: {
        name: "Реликвия",
        frame: "grades/icon_grade8.png",
        color: "#f95252"
    },
    wonders: {
        name: "Предмет эпохи чудес",
        frame: "grades/icon_grade9.png",
        color: "#cf7d5d"
    },
    tales: {
        name: "Предмет эпохи сказаний",
        frame: "grades/icon_grade10.png",
        color: "#8fa5ca"
    },
    legends: {
        name: "Предмет эпохи легенд",
        frame: "grades/icon_grade11.png",
        color: "#bf7900"
    },
    myths: {
        name: "Предмет эпохи мифов",
        frame: "grades/icon_grade12.png",
        color: "#c90b0b"
    },
    twelve: {
        name: "Предмет эпохи Двенадцати",
        frame: "grades/icon_grade13.png",
        color: "#ae98fe"
    }
};

// Функция для получения статистик по грейду
function getStatsByGrade(item, grade) {
    if (item.gradeStats && item.gradeStats[grade]) {
        return item.gradeStats[grade];
    }
    return { defense: item.stats?.defense || 0, resistance: item.stats?.resistance || 0 };
}

// Функция для определения типа брони по названию
function getArmorType(itemName) {
    if (itemName.includes('латн')) return 'plate';
    if (itemName.includes('кожан')) return 'leather';
    if (itemName.includes('матерчат')) return 'cloth';
    return 'plate'; // по умолчанию
}

// Функция для расчета количества слотов гравировок
function getEngravingSlots(itemType, grade) {
    const baseSlots = {
        helmets: 5,
        bodyArmor: 6,
        belts: 3,
        bracers: 3,
        gloves: 4,
        legguards: 5,
        boots: 4,
        oneHandWeapons: 5,
        twoHandWeapons: 6,
        rangedWeapons: 5,
        shields: 4
    };
    
    const gradeOrder = ['common', 'uncommon', 'rare', 'unique', 'epic', 'legendary', 'relic', 'wonders', 'tales', 'legends', 'myths', 'twelve'];
    const gradeIndex = gradeOrder.indexOf(grade);
    
    if (gradeIndex < 1) return 0;
    if (gradeIndex <= 6) return baseSlots[itemType];
    
    let extraSlots = 0;
    if (gradeIndex >= 7) extraSlots++;
    if (gradeIndex >= 10) extraSlots++;
    if (gradeIndex >= 11) extraSlots++;
    
    return baseSlots[itemType] + extraSlots;
}