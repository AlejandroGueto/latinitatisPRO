// ARCHIVO: textos.js
// La Gran Bóveda de la Bibliotheca Magna

const canon = [
    { 
        author: "Homero", 
        works: [
            { 
                title: "Ilíada", 
                meta: "Canto I (Ejemplo)", 
                // AQUÍ ES DONDE PEGARÁS EL TEXTO GRIEGO COMPLETO EN EL FUTURO
                content: "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος οὐλομένην, ἣ μυρί᾽ Ἀχαιοῖς ἄλγε᾽ ἔθηκε, πολλὰς δ᾽ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν οἰωνοῖσί τε πᾶσι, Διὸς δ᾽ ἐτελείετο βουλή.", 
                translations: [
                    { lang: "ES (Gredos)", text: "Canta, oh diosa, la cólera del Pelida Aquiles; cólera funesta...", author: "E. Crespo" },
                    { lang: "ES (Literal)", text: "La cólera canta, diosa, del Pelida Aquiles, destructora...", author: "Anónimo" },
                    { lang: "EN (Oxford)", text: "Sing, goddess, the anger of Peleus' son Achilles...", author: "R. Lattimore" },
                    { lang: "FR (Belles Lettres)", text: "Chante, déesse, la colère d'Achille...", author: "P. Mazon" },
                    { lang: "IT (Mondadori)", text: "Canta, o dea, l'ira d'Achille Pelide...", author: "R. Calzecchi" },
                    { lang: "PT (Cotovia)", text: "Canta, ó deusa, a cólera de Aquiles, o Pelida...", author: "F. Lourenço" }
                ] 
            },
            { 
                title: "Odisea", 
                meta: "Canto I", 
                content: "Ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη...", 
                translations: [] 
            }
        ]
    },
    { 
        author: "Hesíodo", 
        works: [
            { title: "Teogonía", meta: "Proemio", content: "Μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν...", translations: [] },
            { title: "Trabajos y Días", meta: "Proemio", content: "Μοῦσαι Πιερίηθεν ἀοιδῇσι κλείουσαι δεῦτε...", translations: [] }
        ]
    },
    { 
        author: "Safo", 
        works: [
            { title: "Himno a Afrodita", meta: "Fr. 1", content: "Ποικιλόθρον᾽ ἀθάνατ᾽ Ἀφρόδιτα...", translations: [] },
            { title: "Fragmento 31", meta: "Fr. 31", content: "Φαίνεταί μοι κῆνος ἴσος θέοισιν...", translations: [] }
        ]
    },
    { 
        author: "Heródoto", 
        works: [
            { title: "Historias", meta: "Proemio", content: "Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε...", translations: [] },
            { title: "Sobre Egipto", meta: "Libro II", content: "Ἔρχομαι δὲ περὶ Αἰγύπτου μηκυνέων...", translations: [] }
        ]
    },
    { 
        author: "Tucídides", 
        works: [
            { title: "Guerra del Peloponeso", meta: "Libro I", content: "Θουκυδίδης Ἀθηναῖος ξυνέγραψε...", translations: [] },
            { title: "Oración Fúnebre", meta: "Libro II", content: "Χρώμεθα γὰρ πολιτείᾳ οὐ ζηλούσῃ...", translations: [] }
        ]
    },
    { 
        author: "Sófocles", 
        works: [
            { title: "Edipo Rey", meta: "Prólogo", content: "Ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή...", translations: [] },
            { title: "Antígona", meta: "Prólogo", content: "Ὦ κοινὸν αὐτάδελφον Ἰσμήνης κάρα...", translations: [] }
        ]
    },
    { 
        author: "Eurípides", 
        works: [
            { title: "Medea", meta: "Prólogo", content: "Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος...", translations: [] },
            { title: "Bacantes", meta: "Prólogo", content: "Ἥκω Διὸς παῖς τήνδε Θηβαίων χθόνα...", translations: [] }
        ]
    },
    { 
        author: "Aristófanes", 
        works: [
            { title: "Lisístrata", meta: "Prólogo", content: "Ἀλλ᾽ εἴ τις ἐς Βακχεῖον αὐτὰς ἐκάλεσεν...", translations: [] },
            { title: "Las Nubes", meta: "Prólogo", content: "Ἰοὺ ἰού· ὦ Ζεῦ βασιλεῦ...", translations: [] }
        ]
    },
    { 
        author: "Platón", 
        works: [
            { title: "Apología de Sócrates", meta: "Exordio", content: "Ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε...", translations: [] },
            { title: "El Banquete", meta: "Prólogo", content: "Δοκῶ μοι περὶ ὧν πυνθάνεσθε οὐκ ἀμελέτητος εἶναι...", translations: [] }
        ]
    },
    { 
        author: "Aristóteles", 
        works: [
            { title: "Metafísica", meta: "Libro I", content: "Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει...", translations: [] },
            { title: "Ética a Nicómaco", meta: "Libro I", content: "Πᾶσα τέχνη καὶ πᾶσα μέθοδος...", translations: [] }
        ]
    },
    { 
        author: "Demóstenes", 
        works: [
            { title: "Sobre la Corona", meta: "Exordio", content: "Πρῶτον μέν, ὦ ἄνδρες Ἀθηναῖοι, τοῖς θεοῖς εὔχομαι...", translations: [] },
            { title: "Filípica I", meta: "Exordio", content: "Εἰ μὲν περὶ καινοῦ τινὸς πράγματος προυτίθετ...", translations: [] }
        ]
    },
    { 
        author: "Píndaro", 
        works: [
            { title: "Olímpica I", meta: "Estrofa I", content: "Ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς...", translations: [] },
            { title: "Pítica I", meta: "Estrofa I", content: "Χρυσέα φόρμιγξ, Ἀπόλλωνος καὶ ἰοπλοκάμων...", translations: [] }
        ]
    },
    { 
        author: "Estrabón", 
        works: [
            { title: "Geografía", meta: "Libro I", content: "Τῆς τοῦ φιλοσόφου πραγματείας εἶναι νομίζομεν...", translations: [] },
            { title: "Sobre Iberia", meta: "Libro III", content: "Μετὰ δὲ τὴν προεκτεθεῖσαν χωρογραφίαν...", translations: [] }
        ]
    },
    { 
        author: "Marco Aurelio", 
        works: [
            { title: "Meditaciones", meta: "Libro II", content: "Ἕωθεν προλέγειν ἑαυτῷ· συντεύξομαι περιέργῳ...", translations: [] },
            { title: "Meditaciones", meta: "Libro IV", content: "Εἰ τὸ νοερὸν ἡμῖν κοινόν, καὶ ὁ λόγος...", translations: [] }
        ]
    }
];
