// ARCHIVO: textos.js - Corpus Graecum OMNIA
// Configuración compatible con v6.8 (Subbloques y Nombres Académicos)

const canon = [
    { 
        author: "Ὅμηρος (Homero)", 
        works: [
            { 
                title: "Ἰλιάς", 
                meta: "Canto I (vv. 1-611)", 
                content: `Μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος οὐλομένην, ἣ μυρί’ Ἀχαιοῖς ἄλγε’ ἔθηκε, πολλὰς δ’ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν οἰωνοῖσί τε πᾶσι· Διὸς δ’ ἐτελείετο βουλή, ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς...`, 
                translations: [
                    { lang: "Español", text: "Canta, oh diosa, la cólera del Pelida Aquiles...", author: "Segalá y Estalella" }
                ]
            },
            { 
                title: "Ὀδύσσεια", 
                meta: "Canto I (vv. 1-444)", 
                content: `Ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε· πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω, πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν...`, 
                translations: [
                    { lang: "Español", text: "Háblame, Musa, de aquel varón de multiforme ingenio...", author: "Pabón" }
                ]
            }
        ]
    },
    { 
        author: "Ἡσίοδος (Hesíodo)", 
        works: [
            { 
                title: "Θεογονία", 
                meta: "Proemio (vv. 1-10)", 
                content: "Μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν, αἵ θ᾽ Ἑλικῶνος ἔχουσιν ὄρος μέγα τε ζάθεόν τε, καί τε περὶ κρήνην ἰοειδέα πόσσ᾽ ἁπαλοῖσιν ὀρχεῦνται καὶ βωμὸν ἐρισθενέος Κρονίωνος...", 
                translations: [{ lang: "Español", text: "Comencemos nuestro canto por las Musas Heliconíadas...", author: "Gredos" }]
            }
        ]
    },
    { 
        author: "Σαπφώ (Safo)", 
        works: [
            { 
                title: "Ποιήματα", // Agrupado como Fragmento I
                meta: "Fr. 1 (Oda a Afrodita)", 
                content: "Ποικιλόθρον᾽ ἀθάνατ᾽ Ἀφρόδιτα, παῖ Δίος δολόπλοκε, λίσσομαί σε, μή μ᾽ ἄσαισι μηδ᾽ ὀνίαισι δάμνα, πότνια, θῦμον...", 
                translations: [{ lang: "Español", text: "Inmortal Afrodita de trono brillante...", author: "Ferraté" }]
            },
            { 
                title: "Ποιήματα", // Agrupado como Fragmento II
                meta: "Fr. 31 (Igual a los Dioses)", 
                content: "Φαίνεταί μοι κῆνος ἴσος θέοισιν ἔμμεν᾽ ὤνηρ, ὄττις ἐνάντιός τοι ἰσδάνει καὶ πλάσιον ἆδυ φωνείσας ὑπακούει...", 
                translations: [{ lang: "Español", text: "Me parece que es igual a los dioses...", author: "García Gual" }]
            }
        ]
    },
    { 
        author: "Σοφοκλῆς (Sófocles)", 
        works: [
            { 
                title: "Οἰδίπους Τύραννος", 
                meta: "vv. 1-13", 
                content: "Ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή, τίνας ποθ’ ἕδρας τάσδε μοι θοάζετε ἱκτηρίοις κλάδοισιν ἐξεστεμμένοι; πόλις δ’ ὁμοῦ μὲν θυμιαμάτων γέμει...", 
                translations: [{ lang: "Español", text: "¡Oh hijos, nueva prole del antiguo Cadmo!...", author: "Alamillo" }]
            }
        ]
    },
    { 
        author: "Εὐριπίδης (Eurípides)", 
        works: [
            { 
                title: "Μήδεια", 
                meta: "vv. 1-10", 
                content: "Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος Κόλχων ἐς αἶαν κυανέας Συμπληγάδας...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Ἀριστοφάνης (Aristófanes)", 
        works: [
            { 
                title: "Λυσιστράτη", 
                meta: "v. 1", 
                content: "Ἀλλ᾽ εἴ τις ἐς Βακχεῖον αὐτὰς ἐκάλεσεν, ἢ 'ς Πανὸς ἢ 'πὶ Κωλιάδ᾽ ἢ 'ς Γενετυλλίδα...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Ἡρόδοτος (Heródoto)", 
        works: [
            { 
                title: "Ἱστορίαι", 
                meta: "Proemio", 
                content: "Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε, ὡς μήτε τὰ γενόμενα ἐξ ἀνθρώπων τῷ χρόνῳ ἐξίτηλα γένηται...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Θουκυδίδης (Tucídides)", 
        works: [
            { 
                title: "Ἱστορία τοῦ Πελοποννησιακοῦ Πολέμου", 
                meta: "I, 1", 
                content: "Θουκυδίδης Ἀθηναῖος ξυνέγραψε τὸν πόλεμον τῶν Πελοποννησίων καὶ Ἀθηναίων...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Πλάτων (Platón)", 
        works: [
            { 
                title: "Ἀπολογία Σωκράτους", 
                meta: "17a", 
                content: "Ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε ὑπὸ τῶν ἐμῶν κατηγόρων, οὐκ οἶδα· ἐγὼ δ᾽ οὖν καὶ αὐτὸς ὑπ᾽ αὐτῶν ὀλίγου ἐμαυτοῦ ἐπελαθόμην...", 
                translations: [{ lang: "Español", text: "No sé, atenienses, la impresión que habrán sentido...", author: "Gredos" }]
            }
        ]
    },
    { 
        author: "Ἀριστοτέλης (Aristóteles)", 
        works: [
            { 
                title: "Τὰ μετὰ τὰ φυσικά", 
                meta: "980a", 
                content: "Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει. σημεῖον δ᾽ ἡ τῶν αἰσθήσεων ἀγάπησις...", 
                translations: [{ lang: "Español", text: "Todos los hombres desean por naturaleza saber...", author: "Gredos" }]
            }
        ]
    },
    { 
        author: "Δημοσθένης (Demóstenes)", 
        works: [
            { 
                title: "Ὑπὲρ Κτησιφῶντος περὶ τοῦ Στεφάνου", 
                meta: "v. 1", 
                content: "Πρῶτον μέν, ὦ ἄνδρες Ἀθηναῖοι, τοῖς θεοῖς εὔχομαι πᾶσι καὶ πάσαις, ὅσην εὔνοιαν διατελῶ ἔχων ἐγώ...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Πίνδαρος (Píndaro)", 
        works: [
            { 
                title: "Ὀλυμπιόνικοι", 
                meta: "Olímpica I, v. 1", 
                content: "Ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς αἰθόμενον πῦρ ἅτε διαπρέπει νυκτὶ μεγάνορος ἔξοχα πλούτου...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Στράβων (Estrabón)", 
        works: [
            { 
                title: "Γεωγραφικά", 
                meta: "I, 1", 
                content: "Τῆς τοῦ φιλοσόφου πραγματείας εἶναι νομίζομεν, εἴπερ τινὰ ἄλλην, καὶ τὴν γεωγραφικήν...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Marcus Aurelius", // Nombre exclusivamente en Latín
        works: [
            { 
                title: "Τὰ εἰς ἑαυτόν", // Agrupado como Fragmento I
                meta: "Libro II, 1", 
                content: "Ἕωθεν προλέγειν ἑαυτῷ· συντεύξομαι περιέργῳ, ἀχαρίστῳ, ὑβριστῇ, δολερῷ, βασκάνῳ, ἀκοινωνήτῳ...", 
                translations: [{ lang: "Español", text: "Al amanecer, dite a ti mismo...", author: "Gredos" }]
            },
            { 
                title: "Τὰ εἰς ἑαυτόν", // Agrupado como Fragmento II
                meta: "Libro IV, 4", 
                content: "Εἰ τὸ νοερὸν ἡμῖν κοινόν, καὶ ὁ λόγος, καθ᾽ ὃν λογικοί ἐσμεν, κοινός· εἰ τοῦτο, καὶ ὁ προστακτικός...", 
                translations: [] 
            }
        ]
    }
];
