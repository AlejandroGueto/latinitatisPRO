// ARCHIVO: textos.js
// La Gran Bóveda de la Bibliotheca Magna

const canon = [
    { 
        author: "Homero", 
        works: [
            { 
                title: "Ilíada", 
                meta: "Canto I (vv. 1-47)", 
                content: `Μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος
οὐλομένην, ἣ μυρί’ Ἀχαιοῖς ἄλγε’ ἔθηκε,
πολλὰς δ’ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν
ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν
οἰωνοῖσί τε πᾶσι· Διὸς δ’ ἐτελείετο βουλή,
ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε
Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς.
Τίς τ’ ἄρ σφωε θεῶν ἔριδι ξυνέηκε μάχεσθαι;
Λητοῦς καὶ Διὸς υἱός· ὁ γὰρ βασιλῆϊ χολωθεὶς
νοῦσον ἀνὰ στρατὸν ὦρσε κακήν, ὀλέκοντο δὲ λαοί,
οὕνεκα τὸν Χρύσην ἠτίμασεν ἀρητῆρα
Ἀτρεΐδης· ὃ γὰρ ἦλθε θοὰς ἐπὶ νῆας Ἀχαιῶν
λυσόμενός τε θύγατρα φέρων τ’ ἀπερείσι’ ἄποινα,
στέμματ’ ἔχων ἐν χερσὶν ἑκηβόλου Ἀπόλλωνος
χρυσέῳ ἀνὰ σκήπτρῳ, καὶ λίσσετο πάντας Ἀχαιούς,
Ἀτρεΐδα δὲ μάλιστα δύω, κοσμήτορε λαῶν·
«Ἀτρεΐδαι τε καὶ ἄλλοι ἐϋκνήμιδες Ἀχαιοί,
ὑμῖν μὲν θεοὶ δοῖεν Ὀλύμπια δώματ’ ἔχοντες
ἐκπέρσαι Πριάμοιο πόλιν, εὖ δ’ οἴκαδ’ ἱκέσθαι·
παῖδα δ’ ἐμοὶ λύσαιτε φίλην, τὰ δ’ ἄποινα δέχεσθαι,
ἁζόμενοι Διὸς υἱὸν ἑκηβόλον Ἀπόλλωνα.»
Ἔνθ’ ἄλλοι μὲν πάντες ἐπευφήμησαν Ἀχαιοὶ
αἰδεῖσθαί θ’ ἱερῆα καὶ ἀγλαὰ δέχθαι ἄποινα·
ἀλλ’ οὐκ Ἀτρεΐδῃ Ἀγαμέμνονι ἥνδανε θυμῷ,
ἀλλὰ κακῶς ἀφίει, κρατερὸν δ’ ἐπὶ μῦθον ἔτελλε·
«Μή σε, γέρον κοίλῃσιν ἐγὼ παρὰ νηυσὶ κιχείω
ἢ νῦν δηθύνοντ’ ἢ ὕστερον αὖτις ἰόντα,
μή νύ τοι οὐ χραίσμῃ σκῆπτρον καὶ στέμμα θεοῖο·
τὴν δ’ ἐγὼ οὐ λύσω· πρίν μιν καὶ γῆρας ἔπεισιν
ἡμετέρῳ ἐνὶ οἴκῳ ἐν Ἄργεϊ, τηλόθι πάτρης,
ἱστὸν ἐποιχομένην καὶ ἐμὸν λέχος ἀντιόωσαν·
ἀλλ’ ἴθι μή μ’ ἐρέθιζε, σαώτερος ὥς κε νέηαι.»
Ὣς ἔφατ’· ἔδεισεν δ’ ὁ γέρων καὶ ἐπείθετο μύθῳ·
βῆ δ’ ἀκέων παρὰ θῖνα πολυφλοίσβοιο θαλάσσης·
πολλὰ δ’ ἔπειτ’ ἀπάνευθε κιὼν ἠρᾶθ’ ὁ γεραιὸς
Ἀπόλλωνι ἄνακτι, τὸν ἠύκομος τέκε Λητώ·
«Κλῦθί μευ, Ἀργυρότοξ’, ὃς Χρύσην ἀμφιβέβηκας
Κίλλάν τε ζαθέην Τενέδοιό τε ἶφι ἀνάσσεις,
Σμινθεῦ, εἴ ποτέ τοι χαρίεντ’ ἐπὶ νηὸν ἔρεψα,
ἢ εἰ δή ποτέ τοι κατὰ πίονα μηρί’ ἔκηα
ταύρων ἠδ’ αἰγῶν, τὸδε μοι κρήηνον ἐέλδωρ·
τίσειαν Δαναοὶ ἐμὰ δάκρυα σοῖσι βέλεσσιν.»
Ὣς ἔφατ’ εὐχόμενος, τοῦ δ’ ἔκλυε Φοῖβος Ἀπόλλων,
βῆ δὲ κατ’ Οὐλύμποιο καρήνων χωόμενος κῆρ,
τόξ’ ὤμοισιν ἔχων ἀμφηρεφέα τε φαρέτρην·`,
                translations: [
                    {
                        lang: "Español",
                        text: "Canta, oh diosa, la cólera del Pelida Aquiles; cólera funesta que causó infinitos males a los aqueos y precipitó al Hades muchas almas valerosas de héroes...",
                        author: "Ed. Gredos (Emilio Crespo Güemes)"
                    },
                    {
                        lang: "Français",
                        text: "Chante, déesse, la colère d'Achille, le fils de Pélée ; détestable colère, qui aux Achéens valut des souffrances sans nombre et jeta en proie à Hadès tant d'âmes fières de héros...",
                        author: "Les Belles Lettres (Paul Mazon)"
                    },
                    {
                        lang: "English",
                        text: "The wrath sing, goddess, of Peleus' son, Achilles, that destructive wrath which brought countless woes upon the Achaeans...",
                        author: "Oxford Classical Texts (A.T. Murray)"
                    }
                ]
            },
            { 
                title: "Odisea", 
                meta: "Canto I", 
                content: "Ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη...", 
                translations: [
                    { lang: "Español", text: "Cuéntame, Musa, la historia del hombre de muchos senderos...", author: "Ed. Gredos" },
                    { lang: "Français", text: "Ô Muse, conte-moi l'aventure de l'Inventif...", author: "Les Belles Lettres" },
                    { lang: "English", text: "Tell me, O muse, of that ingenious hero...", author: "S. Butler" }
                ] 
            }
        ]
    },
    { 
        author: "Sófocles", 
        works: [
            { 
                title: "Edipo Rey", 
                meta: "Prólogo", 
                content: "Ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή...", 
                translations: [
                    {
                        lang: "Español",
                        text: "Oh hijos, descendencia nueva del antiguo Cadmo, ¿por qué estáis en actitud sedente ante mí, coronados con ramos de suplicantes?",
                        author: "Ed. Gredos (Assela Alamillo)"
                    },
                    {
                        lang: "Français",
                        text: "Mes enfants, jeune postérité de l'antique Cadmos, pourquoi venez-vous vous asseoir sur ces degrés, couronnés de rameaux suppliants ?",
                        author: "Les Belles Lettres (Paul Mazon)"
                    },
                    {
                        lang: "English",
                        text: "My children, latest generation born from Cadmus, why are you sitting here with wreathed branches in supplication to me?",
                        author: "Oxford Classics (F. Storr)"
                    }
                ] 
            },
            { 
                title: "Antígona", 
                meta: "Prólogo", 
                content: "Ὦ κοινὸν αὐτάδελφον Ἰσμήνης κάρα...", 
                translations: [
                    { lang: "Español", text: "", author: "" },
                    { lang: "Français", text: "", author: "" },
                    { lang: "English", text: "", author: "" }
                ] 
            }
        ]
    },
    { 
        author: "Platón", 
        works: [
            { 
                title: "Apología de Sócrates", 
                meta: "Exordio", 
                content: "Ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε...", 
                translations: [
                    {
                        lang: "Español",
                        text: "Qué es lo que vosotros, atenienses, habéis experimentado por obra de mis acusadores, no lo sé. Yo, por mi parte, a causa de ellos, casi me he olvidado de mí mismo...",
                        author: "Ed. Gredos (Julio Calonge)"
                    },
                    {
                        lang: "Français",
                        text: "Quel effet mes accusateurs ont produit sur vous, Athéniens, je l'ignore. Pour moi, en les entendant, j'ai failli m'oublier moi-même...",
                        author: "Les Belles Lettres (Maurice Croiset)"
                    },
                    {
                        lang: "English",
                        text: "How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was...",
                        author: "Oxford University Press (H.N. Fowler)"
                    }
                ] 
            },
            { 
                title: "El Banquete", 
                meta: "Prólogo", 
                content: "Δοκῶ μοι περὶ ὧν πυνθάνεσθε οὐκ ἀμελέτητος εἶναι...", 
                translations: [
                    { lang: "Español", text: "", author: "" },
                    { lang: "Français", text: "", author: "" },
                    { lang: "English", text: "", author: "" }
                ] 
            }
        ]
    },
    { 
        author: "Hesíodo", 
        works: [
            { title: "Teogonía", meta: "Proemio", content: "Μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Trabajos y Días", meta: "Proemio", content: "Μοῦσαι Πιερίηθεν ἀοιδῇσι κλείουσαι δεῦτε...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Safo", 
        works: [
            { title: "Himno a Afrodita", meta: "Fr. 1", content: "Ποικιλόθρον᾽ ἀθάνατ᾽ Ἀφρόδιτα...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Fragmento 31", meta: "Fr. 31", content: "Φαίνεταί μοι κῆνος ἴσος θέοισιν...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Heródoto", 
        works: [
            { title: "Historias", meta: "Proemio", content: "Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Sobre Egipto", meta: "Libro II", content: "Ἔρχομαι δὲ περὶ Αἰγύπτου μηκυνέων...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Tucídides", 
        works: [
            { title: "Guerra del Peloponeso", meta: "Libro I", content: "Θουκυδίδης Ἀθηναῖος ξυνέγραψε...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Oración Fúnebre", meta: "Libro II", content: "Χρώμεθα γὰρ πολιτείᾳ οὐ ζηλούσῃ...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Eurípides", 
        works: [
            { title: "Medea", meta: "Prólogo", content: "Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Bacantes", meta: "Prólogo", content: "Ἥκω Διὸς παῖς τήνδε Θηβαίων χθόνα...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Aristófanes", 
        works: [
            { title: "Lisístrata", meta: "Prólogo", content: "Ἀλλ᾽ εἴ τις ἐς Βακχεῖον αὐτὰς ἐκάλεσεν...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Las Nubes", meta: "Prólogo", content: "Ἰοὺ ἰού· ὦ Ζεῦ βασιλεῦ...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Aristóteles", 
        works: [
            { title: "Metafísica", meta: "Libro I", content: "Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Ética a Nicómaco", meta: "Libro I", content: "Πᾶσα τέχνη καὶ πᾶσα μέθοδος...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Demóstenes", 
        works: [
            { title: "Sobre la Corona", meta: "Exordio", content: "Πρῶτον μέν, ὦ ἄνδρες Ἀθηναῖοι, τοῖς θεοῖς εὔχομαι...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Filípica I", meta: "Exordio", content: "Εἰ μὲν περὶ καινοῦ τινὸς πράγματος προυτίθετ...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Píndaro", 
        works: [
            { title: "Olímpica I", meta: "Estrofa I", content: "Ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Pítica I", meta: "Estrofa I", content: "Χρυσέα φόρμιγξ, Ἀπόλλωνος καὶ ἰοπλοκάμων...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Estrabón", 
        works: [
            { title: "Geografía", meta: "Libro I", content: "Τῆς τοῦ φιλοσόφου πραγματείας εἶναι νομίζομεν...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Sobre Iberia", meta: "Libro III", content: "Μετὰ δὲ τὴν προεκτεθεῖσαν χωρογραφίαν...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    },
    { 
        author: "Marco Aurelio", 
        works: [
            { title: "Meditaciones", meta: "Libro II", content: "Ἕωθεν προλέγειν ἑαυτῷ· συντεύξομαι περιέργῳ...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] },
            { title: "Meditaciones", meta: "Libro IV", content: "Εἰ τὸ νοερὸν ἡμῖν κοινόν, καὶ ὁ λόγος...", translations: [{ lang: "Español", text: "", author: "" }, { lang: "Français", text: "", author: "" }, { lang: "English", text: "", author: "" }] }
        ]
    }
];
