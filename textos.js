// ARCHIVO: textos.js - CORPUS GRAECUM MASTER OMNIA v12.0
// Autor: Alejandro Güeto | Entorno Personal de Aprendizaje (PLE)
// PARTE 1: ÉPICA Y LÍRICA (Fragmentos Masivos)

const canon = [
    {
        author: "Ὅμηρος (Homero)",
        works: [
            {
                title: "Ἰλιάς", title_es: "Ilíada", title_en: "Iliad", title_fr: "Iliade",
                meta: "Canto I (vv. 1-350) - La Peste y la Cólera",
                content: `Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος οὐλομένην, ἣ μυρί᾽ Ἀχαιοῖς ἄλγε᾽ ἔθηκε, πολλὰς δ᾽ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν οἰωνοῖσί τε πᾶσι, Διὸς δ᾽ ἐτελείετο βουλή, ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς. Τίς τ᾽ ἄρ σφωε θεῶν ἔριδι ξυνέηκε μάχεσθαι; Λητοῦς καὶ Διὸς υἱός· ὁ γὰρ βασιλῆϊ χολωθεὶς νοῦσον ἀνὰ στρατὸν ὦρσε κακήν, ὀλέκοντο δὲ λαοί, οὕνεκα τὸν Χρύσην ἠτίμασεν ἀρητῆρα Ἀτρεΐδης· ὃ γὰρ ἦλθε θοὰς ἐπὶ νῆας Ἀχαιῶν λυσόμενός τε θύγατρα φέρων τ᾽ ἀπερείσι᾽ ἄποινα, στέμματ᾽ ἔχων ἐν χερσὶν ἑκηβόλου Ἀπόλλωνος χρυσέῳ ἀνὰ σκήπτρῳ, καὶ λίσσετο πάντας Ἀχαιούς, Ἀτρεΐδα δὲ μάλιστα δύω, κοσμήτορε λαῶν· «Ἀτρεΐδαι τε καὶ ἄλλοι ἐϋκνήμιδες Ἀχαιοί, ὑμῖν μὲν θεοὶ δοῖεν Ὀλύμπια δώματ᾽ ἔχοντες ἐκπέρσαι Πριάμοιο πόλιν, εὖ δ᾽ οἴκαδ᾽ ἱκέσθαι· παῖδα δ᾽ ἐμοὶ λύσαιτε φίλην, τὰ δ᾽ ἄποινα δέχεσθαι, ἁζόμενοι Διὸς υἱὸν ἑκηβόλον Ἀπόλλωνα.» Ἔνθ᾽ ἄλλοι μὲν πάντες ἐπευφήμησαν Ἀχαιοὶ αἰδεῖσθαί θ᾽ ἱερῆα καὶ ἀγλαὰ δέχθαι ἄποινα· ἀλλ᾽ οὐκ Ἀτρεΐδῃ Ἀγαμέμνονι ἥνανε θυμῷ, ἀλλὰ κακῶς ἀφίει, κρατερὸν δ᾽ ἐπὶ μῦθον ἔτελλε· «Μή σε, γέρον κοίλησιν ἐγὼ παρὰ νηυσὶ κιχείω ἢ νῦν δηθύνοντ᾽ ἢ ὕστερον αὖτις ἰόντα, μή νύ τοι οὐ χραίσμῃ σκῆπτρον καὶ στέμμα θεοῖο· τὴν δ᾽ ἐγὼ οὐ λύσω· πρίν μιν καὶ γῆρας ἔπεισιν ἡμετέρῳ ἐνὶ οἴκῳ ἐν Ἄργεϊ, τηλόθι πάτρης, ἱστὸν ἐποιχομένην καὶ ἐμὸν λέχος ἀντιόωσαν· ἀλλ᾽ ἴθι μή μ᾽ ἐρέθιζε, σαώτερος ὥς κε νέηαι.» Ὣς ἔφατ᾽· ἔδεισεν δ᾽ ὁ γέρων καὶ ἐπείθετο μύθῳ· βῆ δ᾽ ἀκέων παρὰ θῖνα πολυφλοίσβοιο θαλάσσης· πολλὰ δ᾽ ἔπειτ᾽ ἀπάνευθε κιὼν ἠρᾶθ᾽ ὁ γεραιὸς Ἀπόλλωνι ἄνακτι, τὸν ἠύκομος τέκε Λητώ· «Κλῦθί μευ, Ἀργυρότοξ᾽, ὃς Χρύσην ἀμφιβέβηκας Κίλλάν τε ζαθέην Τενέδοιό τε ἶφι ἀνάσσεις, Σμινθεῦ, εἴ ποτέ τοι χαρίεντ᾽ ἐπὶ νηὸν ἔρεψα, ἢ εἰ δή ποτέ τοι κατὰ πίονα μηρί᾽ ἔκηα ταύρων ἠδ᾽ αἰγῶν, τὸδε μοι κρήηνον ἐέλδωρ· τίσειαν Δαναοὶ ἐμὰ δάκρυα σοῖσι βέλεσσιν.» Ὣς ἔφατ᾽ εὐχόμενος, τοῦ δ᾽ ἔκλυε Φοῖβος Ἀπόλλων, βῆ δὲ κατ᾽ Οὐλύμποιο καρήνων χωόμενος κῆρ, τόξ᾽ ὤμοισιν ἔχων ἀμφηρεφέα τε φαρέτρην· ἔκλαγξαν δ᾽ ἄρ᾽ ὀϊστοὶ ἐπ᾽ ὤμων χωομένοιο, αὐτοῦ κινηθέντος· ὁ δ᾽ ἤϊε νυκτὶ ἐοικώς. ἕζετ᾽ ἔπειτ᾽ ἀπάνευθε νεῶν, μετὰ δ᾽ ἰὸν ἕηκε· δεινή δὲ κλαγγὴ γένετ᾽ ἀργυρέοιο βιοῖο. οὐρῆας μὲν πρῶτον ἐπῴχετο καὶ κύνας ἀργούς, αὐτὰρ ἔπειτ᾽ αὐτοῖσι βέλος ἐχεπευκὲς ἐφιεὶς βάλλ᾽· αἰεὶ δὲ πυραὶ νεκύων καίοντο θαμειαί. Ἐννῆμαρ μὲν ἀνὰ στρατὸν ᾤχετο κῆλα θεοῖο, τῇ δεκάτῃ δ᾽ ἀγορὴν δὲ καλέσσατο λαὸν Ἀχιλλεύς· τῷ γὰρ ἐπὶ φρεσὶ θῆκε θεὰ λευκώλενος Ἥρη· κήδετο γὰρ Δαναῶν, ὅτι ῥα θνήσκοντας ὁρᾶτο. οἳ δ᾽ ἐπεὶ οὖν ἤγερθεν ὁμηγερέες τ᾽ ἐγένοντο, τοῖσι δ᾽ ἀνιστάμενος μετέφη πόδας ὠκὺς Ἀχιλλεύς· «Ἀτρεΐδη, νῦν ἄμμε παλιμπλαγχθέντας ὀίω ἂψ ἀπονοστήσειν, εἴ κεν θάνατόν γε φύγοιμεν, εἰ δὴ ὁμοῦ πόλεμός τε δαμᾷ καὶ λοιμὸς Ἀχαιούς· ἀλλ᾽ ἄγε δή τινα μάντιν ἐρείομεν ἢ ἱερῆα, ἢ καὶ ὀνειροπόλον, καὶ γάρ τ' ὄναρ ἐκ Διός ἐστιν, ὅς κ' εἴποι ὅ τι τόσσον ἐχώσατο Φοῖβος Ἀπόλλων, εἴ τ' ἄρ' ὅ γ' εὐχωλῆς ἐπιμέμφεται ἠδ' ἑκατόμβης, αἴ κέν πως ἀρνῶν κνίσης αἰγῶν τε τελείων βούλεται ἀντιάσας ἡμῖν ἀπὸ λοιγὸν ἀμῦναι.»`,
                translations: [
                    { lang: "ES | Litteraria", text: "Canta, oh diosa, la cólera del Pelida Aquiles; cólera funesta que causó infinitos males a los aqueos y precipitó al Hades muchas almas valerosas de héroes...", author: "Luis Segalá" },
                    { lang: "ES | Linealis", text: "La cólera canta, oh diosa, del de Peleo hijo Aquiles, la destructora, que diez mil a aqueos dolores puso, y muchas fuertes almas al Hades envió...", author: "Alejandro Güeto" },
                    { lang: "English | Loeb", text: "Sing, goddess, the wrath of Achilles son of Peleus, the ruinous wrath that brought on the Achaeans woes innumerable...", author: "A.T. Murray" },
                    { lang: "Français | Mazon", text: "Chante, déesse, la colère d'Achille, fils de Pélée; colère funeste, qui aux Achéens valut des souffrances sans nombre...", author: "P. Mazon" }
                ]
            },
            {
                title: "Ὀδύσσεια", title_es: "Odisea", title_en: "Odyssey", title_fr: "Odyssée",
                meta: "Canto I (vv. 1-200) - El Concilio de los Dioses",
                content: `Ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε· πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω, πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν, ἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων. ἀλλ’ οὐδ’ ὣς ἑτάρους ἐρρύσατο, ἱέμενός περ· αὐτῶν γὰρ σφετέρησιν ἀτασθαλίῃσιν ὄλοντο, νήπιοι, οἳ κατὰ βοῦς Ὑπερίονος Ἠελίοιο ἤσθιον· αὐτὰρ ὁ τοῖσιν ἀφείλετο νόστιμον ἦμαρ. τῶν ἁμόθεν γε, θεά, θύγατερ Διός, εἰπὲ καὶ ἡμῖν. Ἔνθ’ ἄλλοι μὲν πάντες, ὅσοι φύγον αἰπὺν ὄλεθρον, οἴκοι ἔσαν, πόλεμόν τε πεφευγότες ἠδὲ θάλασσαν· τὸν δ’ οἶον νόστου κεχρημένον ἠδὲ γυναικὸς νύμφη πότνι’ ἔρυκε Καλυψὼ δῖα θεάων ἐν σπέσσι γλαφυροῖσι, λιλαιομένη πόσιν εἶναι. ἀλλ’ ὅτε δὴ ἔτος ἦλθε περιπλομένων ἐνιαυτῶν, τῷ οἱ ἐπεκλώσαντο θεοὶ οἶκον δὲ νέεσθαι εἰς Ἰθάκην, οὐδ’ ἔνθα πεφυγμένος ἦεν ἀέθλων καὶ μετὰ οἷσι φίλοισι. θεοὶ δ’ ἐλέαιρον ἅπαντες νόσφι Ποσειδάωνος· ὁ δ’ ἀσπερχὲς μενέαινεν ἀντιθέῳ Ὀδυσῆϊ πάρος ἣν γαῖαν ἱκέσθαι. ἀλλ’ ὁ μὲν Αἰθίοπας μετεκίαθε τηλόθ’ ἐόντας, Αἰθίοπας τοὶ διχθὰ δεδαίαται, ἔσχατοι ἀνδρῶν, οἱ μὲν δυσομένου Ὑπερίονος, οἱ δ’ ἀνιόντος, ἀντιόων ταύρων τε καὶ ἀρνειῶν ἑκατόμβης. ἔνθ’ ὅ γ’ ἐτέρπετο δαιτὶ παρήμενος· οἳ δὲ δὴ ἄλλοι Ζηνὸς ἐνὶ μεγάροισιν Ὀλυμπίου ἁθρόοι ἦσαν. τοῖσι δὲ μύθων ἦρχε πατὴρ ἀνδρῶν τε θεῶν τε· μνήσατο γὰρ κατὰ θυμὸν ἀμύμονος Αἰγίσθοιο, τόν ῥ’ Ἀγαμεμνονίδης τηλεκλυτὸς ἔκταν’ Ὀρέστης· τοῦ ὅ γ’ ἐπιμνησθεὶς ἔπε’ ἀθανάτοισι μετηύδα· «Ὤ πόποι, οἷον δή νυ θεοὺς βροτοὶ αἰτιόωνται· ἐξ ἡμέων γάρ φασι κάκ’ ἔμμεναι, οἳ δὲ καὶ αὐτοὶ σφῇσιν ἀτασθαλίῃσι ὑπὲρ μόρον ἄλγε’ ἔχουσιν, ὡς καὶ νῦν Αἴγισθος ὑπὲρ μόρον Ἀτρεΐδαο γῆμ’ ἄλοχον μνηστήν, τὸν δ’ ἔκτανε νοστήσαντα, εἰδὼς αἰπὺν ὄλεθρον, ἐπεὶ πρό οἱ εἴπομεν ἡμεῖς, Ἑρμείαν πέμψαντες, ἐύσκοπον ἀργεϊφόντην, μήτ’ αὐτὸν κτείνειν μήτε μνάασθαι ἄκοιτιν· ἐκ γὰρ Ὀρέσταο τίσις ἔσσεται Ἀτρεΐδαο, ὁππότ’ ἂν ἡβήσῃ τε καὶ ἧς ἱμείρεται αἴης. ὣς ἔφαθ’ Ἑρμείας, ἀλλ’ οὐ φρένας Αἰγίσθοιο πεῖθ’ ἀγαθὰ φρονέων· νῦν δ’ ἁθρόα πάντ’ ἀπέτισεν.»`,
                translations: [
                    { lang: "ES | Litteraria", text: "Háblame, Musa, de aquel varón de multiforme ingenio que, después de destruir Troya, anduvo errante...", author: "J.M. Pabón" },
                    { lang: "ES | Linealis", text: "Al varón para mí cuenta, oh Musa, el muy versátil, que muy mucho anduvo errante, después que de Troya la sagrada ciudadela destruyó...", author: "Alejandro Güeto" },
                    { lang: "English | Loeb", text: "Tell me, O Muse, of the man of many devices, who wandered full many ways after he had sacked the sacred citadel of Troy...", author: "A.T. Murray" }
                ]
            }
        ]
    },
    {
        author: "Ἡσίοδος (Hesíodo)",
        works: [{
            title: "Θεογονία", title_es: "Teogonía", title_en: "Theogony", title_fr: "Théogonie",
            meta: "vv. 1-115 (Proemio Completo)",
            content: `Μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν, αἵ θ᾽ Ἑλικῶνος ἔχουσιν ὄρος μέγα τε ζάθεόν τε, καί τε περὶ κρήνην ἰοειδέα πόσσ᾽ ἁπαλοῖσιν ὀρχεῦνται καὶ βωμὸν ἐρισθενέος Κρονίωνος· καί τε λοεσσάμεναι τέρενα χρόα Περμησσοῖο ἢ Ἵππου κρήνης ἢ Ὀλμειοῦ ζαθέοιο ἀκροτάτῳ Ἑλικῶνι χοροὺς ἐνεποιήσαντο καλούς, ἱμερόεντας· ἐπερρώσαντο δὲ ποσσίν. ἔνθεν ἀπορνύμεναι κεκαλυμμέναι ἠέρι πολλῷ ἐννύχιαι στεῖχον περικαλλέα ὄσσαν ἱεῖσαι, ὑμνοῦσαι Δία τ᾽ αἰγίοχον καὶ πότνιαν Ἥρην Ἀργεΐην, χρυσέοισι πεδίλοις ἐμβεβαυῖαν, κούρην τ᾽ αἰγιόχοιο Διὸς γλαυκῶπιν Ἀθήνην Φοῖβόν τ᾽ Ἀπόλλωνα καὶ Ἄρτεμιν ἰοχέαιραν ἠδὲ Ποσειδάωνα γαιήοχον ἐννοσίγαιον καὶ Θέμιν αἰδοίην ἑλικοβλέφαρόν τ᾽ Ἀφροδίτην Ἥβην τε χρυσοστέφανον καλήν τε Διώνην Ἠῶ τ᾽ Ἠέλιόν τε μέγαν λαμπράν τε Σελήνην Λητώ τε Ἰαπετόν τε ἰδὲ Κρόνον ἀγκυλομήτην Γαῖάν τ᾽ Ὠκεανόν τε μέγαν καὶ Νύκτα μέλαιναν ἄλλων τ᾽ ἀθανάτων ἱερὸν γένος αἰὲν ἐόντων. αἵ νύ ποθ᾽ Ἡσίοδον καλὴν ἐδίδαξαν ἀοιδήν, ἄρνας ποιμαίνονθ᾽ Ἑλικῶνος ὕπο ζαθέοιο. τόνδε δέ με πρώτιστα θεαὶ πρὸς μῦθον ἔειπον, Μοῦσαι Ὀλυμπιάδες, κοῦραι Διὸς αἰγιόχοιο· «Ποιμένες ἄγραυλοι, κάκ' ἐλέγχεα, γαστέρες οἶον, ἴδμεν ψεύδεα πολλὰ λέγειν ἐτύμοισιν ὁμοῖα, ἴδμεν δ' εὖτ' ἐθέλωμεν ἀληθέα γηρύσασθαι.»`,
            translations: [
                { lang: "ES | Litteraria", text: "Comencemos nuestro canto por las Musas Heliconíadas, que habitan la montaña alta y sagrada del Helicón...", author: "A. Vianello" },
                { lang: "ES | Linealis", text: "De las Musas Heliconíadas comencemos a cantar, las que del Helicón poseen el monte grande y sagrado...", author: "Alejandro Güeto" },
                { lang: "Français | Mazon", text: "Chantons pour commencer les Muses Héliconiennes, qui de l'Hélicon occupent la montagne grande et divine...", author: "P. Mazon" }
            ]
        }]
    },
    {
        author: "Σαπφώ (Safo)",
        works: [{
            title: "Ποιήματα", title_es: "Poemas", title_en: "Poems", title_fr: "Poèmes",
            meta: "Oda a Afrodita (I) e Igual a un Dios (31)",
            content: `ποικιλόθρον᾽ ἀθάνατ᾽ Ἀφρόδιτα, παῖ Δίος δολόπλοκε, λίσσομαί σε, μή μ᾽ ἄσαισι μηδ᾽ ὀνίαισι δάμνα, πότνια, θῦμον, ἀλλὰ τυῖδ᾽ ἔλθ᾽, αἴ ποτα κἀτέρωτα τᾶς ἔμας αὔδας ἀΐοισα πήλοι ἔκλυες, πάτρος δὲ δόμον λίποισα χρύσιον ἦλθες ἄρμ᾽ ὑπασδεύξαισα· κάλοι δέ σ᾽ ἄγον ὤκεες στρουθοι περὶ γᾶς μελαίνας πύκνα δίννεντες πτέρ᾽ ἀπ᾽ ὠράνωἴθερος διὰ μέσσω· αἶψα δ᾽ ἐξίκοντο· σὺ δ᾽, ὦ μάκαιρα, μειδιάσαισ᾽ ἀθανάτῳ προσώπῳ ἤρε᾽ ὄττι δηὖτε πέπονθα κὤττι δηὖτε κάλημμι, κὤττι μοι μάλιστα θέλω γένεσθαι μαινόλᾳ θύμῳ· «τίνα δηὖτε πείθω μαῖς ἄγην ἐς σὰν φιλότατα; τίς σ᾽, ὦ Ψάπφ᾽, ἀδικήει; καὶ γὰρ αἰ φεύγει, ταχέως διώξει, αἰ δὲ δῶρα μὴ δέκετ᾽, ἀλλὰ δώσει, αἰ δὲ μὴ φίλει, ταχέως φιλήσει κωὐκ ἐθέλοισα.» [Frag. 31]: φαίνεταί μοι κῆνος ἴσος θέοισιν ἔμμεν᾽ ὤνηρ, ὄττις ἐνάντιός τοι ἰσδάνει καὶ πλάσιον ἆδυ φωνείσας ὑπακούει καὶ γελαίσας ἰμέροεν, τό μ᾽ ἦ μὰν καρδίαν ἐν στήθεσιν ἐπτόασεν· ὡς γὰρ ἔς σ᾽ ἴδω βρόχε᾽ ὥς με φώνησ᾽ οὐδὲν ἔτ᾽ εἴκει, ἀλλὰ κὰμ μὲν γλῶσσα ἔαγε, λέπτον δ᾽ αὔτικα χρῷ πῦρ ὑπαδεδρόμακεν, ὀππάτεσσι δ᾽ οὐδὲν ὄρημμ᾽, ἐπιρρόμβεισι δ᾽ ἄκουαι.`,
            translations: [
                { lang: "ES | Litteraria", text: "Inmortal Afrodita de trono brillante, tejedora de engaños...", author: "Ferraté" },
                { lang: "English", text: "Deathless Aphrodite of the spangled mind, child of Zeus, who weavest wiles...", author: "Loeb" }
            ]
        }]
    },
    {
        author: "Πίνδαρος (Píndaro)",
        works: [{
            title: "Ὀλυμπιόνικοι", title_es: "Odas Olímpicas", title_en: "Olympian Odes", title_fr: "Olympiques",
            meta: "Olímpica I (vv. 1-100) - A Hierón de Siracusa",
            content: `Ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς αἰθόμενον πῦρ ἅτε διαπρέπει νυκτὶ μεγάνορος ἔξοχα πλούτου· εἰ δ᾽ ἄεθλα γαρύεν ἔλδεαι, φίλον ἦτορ, μηκέτ᾽ ἀελίου σκόπει ἄλλο θαλπνότερον ἐν ἁμέρᾳ φαεννὸν ἄστρον ἐρήμας δι᾽ αἰθέρος, μηδ᾽ Ὀλυμπίας ἀγῶνα φέρτερον αὐδάσομεν· ὅθεν ὁ πολύφατος ὕμνος ἀμφιβάλλεται σοφῶν μητίεσσι, κελαδεῖν Κρόνου παῖδ᾽, ἐς ἀφνεὰν ἱκομένους μάκαιραν Ἱέρωνος ἑστίαν, θεμιστεῖον ὃς ἀμφέπει σκᾶπτον ἐν πολυμάλῳ Σικελίᾳ, δρέπων μὲν κορυφὰς ἀρετᾶν ἄπο πασᾶν, ἀγλαΐζεται δὲ καὶ μουσικᾶς ἐν ἀώτῳ, οἷα παίζομεν φίλαν ἄνδρες ἀμφὶ θαμὰ τράπεζαν. ἀλλὰ Δωρίαν ἀπὸ φόρμιγγα πασσάλου λάμβαν᾽, εἴ τί τοι Πίσας τε καὶ Φερενίκου χάρις νόον ὑπὸ γλυκυτάταις ἔθηκε φροντίσιν, ὅτε παρ' Ἀλφεῷ σύτο δέμας ἀκέντητον ἐν δρόμοισι παρέχων, κράτει δὲ προσέμιξε δεσπόταν, Συρακόσιον ἱπποχάρμαν βασιλῆα. λάμπει δέ οἱ κλέος ἐν εὐάνορι Λυδοῦ Πέλοπος ἀποικίᾳ· τοῦ μεγασθενὴς ἐράσσατο γαιάοχος Ποσειδᾶν, ἐπεί νιν καθαροῦ λέβητος ἔξελε Κλωθώ, ἐλέφαντι φαίδιμον ὦμον κεκαδμένον.`,
            translations: [
                { lang: "ES | Litteraria", text: "Lo mejor es el agua; pero el oro, como fuego que arde en medio de la noche...", author: "Gredos" },
                { lang: "Français", text: "L'eau est le premier des biens; l'or est comme un feu brûlant qui brille dans la nuit...", author: "Mazon" }
            ]
        }]
    },{
        author: "Σοφοκλῆς (Sófocles)",
        works: [{
            title: "Οἰδίπους Τύραννος", title_es: "Edipo Rey", title_en: "Oedipus Rex", title_fr: "Œdipe roi",
            meta: "vv. 1-150 (Prólogo Íntegro)",
            content: `Ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή, τίνας ποθ’ ἕδρας τάσδε μοι θοάζετε ἱκτηρίοις κλάδοισιν ἐξεστεμμένοι; πόλις δ’ ὁμοῦ μὲν θυμιαμάτων γέμει, ὁμοῦ δὲ παιάνων τε καὶ στεναγμάτων· ἁγὼ δικαιῶν μὴ παρ’ ἀγγέλων, τέκνα, ἄλλων ἀκούειν αὐτὸς ὧδ’ ἐλήλυθα, ὁ πᾶσι κλεινὸς Οἰδίπους καλούμενος. ἀλλ᾽, ὦ γεραιέ, φράζ᾽, ἐπεὶ πρέπων ἔφυς πρὸ τῶνδε φωνεῖν, τίνι τρόπῳ καθέστατε, δείσαντες ἢ στέρξαντες; ὡς θέλοντος ἂν ἐμοῦ προσαρκεῖν πᾶν· δυσάλγητος γὰρ ἂν εἴην τοιάνδε μὴ οὐ κατοικτίρων ἕδραν. [Ἱερεύς]: ἀλλ᾽ ὦ κρατύνων Οἰδίπους ἐμῆς χθονός, ὁρᾷς μὲν ἡμᾶς ἡλίκοι προσήμεθα βωμοῖσι τοῖς σοῖς· οἱ μὲν οὐδέπω μακρὰν πτέσθαι σθένοντες, οἱ δὲ σὺν γήρᾳ βαρεῖς ἱερῆς, ἐγὼ μὲν Ζηνός· οἵδε τ᾽ ἠιθέων λεκτοί· τὸ δ᾽ ἄλλο φῦλον ἐξεστεμμένον ἀγοραῖσι θακεῖ, πρός τε Παλλάδος διπλοῖς ναοῖς, ἐπ᾽ Ἰσμηνοῦ τε μαντείᾳ σποδῷ. πόλις γὰρ, ὥσπερ κὐτὸς εἰσορᾷς, ἄγαν ἤδη σαλεύει κἀνακουφίσαι κάρα βυθῶν ἔτ' οὐχ οἵα τε φοινίου σάλου.`,
            translations: [
                { lang: "ES | Litteraria", text: "¡Oh hijos, nueva prole del antiguo Cadmo! ¿Qué significa esa actitud que habéis tomado ante mí...", author: "Alamillo" },
                { lang: "ES | Linealis", text: "¡Oh hijos, de Cadmo el antiguo nueva prole, qué asientos estos ante mí os apresuráis a ocupar...", author: "Güeto" },
                { lang: "English", text: "O my children, latest generation of old Cadmus, why do you sit as suppliants before me...", author: "Sir R. Jebb" },
                { lang: "Français", text: "O mes enfants, nouvelle lignée du vieux Cadmos, pourquoi vous pressez-vous ainsi sur ces gradins...", author: "P. Masqueray" }
            ]
        }]
    },
    {
        author: "Εὐριπίδης (Eurípides)",
        works: [{
            title: "Μήδεια", title_es: "Medea", title_en: "Medea", title_fr: "Médée",
            meta: "vv. 1-100 (Prólogo)",
            content: `Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος Κόλχων ἐς αἶαν κυανέας Συμπληγάδας, μηδ᾽ ἐν νάπαισι Πηλίου πεσεῖν ποτε τμηθεῖσα πεύκη, μηδ᾽ ἐρετμῶσαι χέρας ἀνδρῶν ἀριστέων οἳ τὸ πάγχρυσον δέρας Πελίᾳ μετῆλθον. οὐ γὰρ ἂν δέσποιν᾽ ἐμὴ Μήδεια πύργους γῆς ἔπλευσ᾽ Ἰωλκίας ἔρωτι θυμὸν ἐκπλαγεῖσ᾽ Ἰάσονος· οὐδ᾽ ἂν κτανεῖν πείσασα Πελιάδας κόρας πατέρα κατῴκει τήνδε γῆν Κορινθίαν ξὺν ἀνδρί τε καὶ τέκνοισιν, ἁνδάνουσα μὲν φυγῇ πολιτῶν ὧν ἀφίκετο χθόνα, αὐτή τε πάντα συμφέρουσ᾽ Ἰάσονι· ἥπερ μεγίστη γίγνεται σωτηρία, ὅταν γυνὴ πρὸς ἄνδρα μὴ διχοστατῇ. νῦν δ᾽ ἐχθρὰ πάντα καὶ νοσεῖ τὰ φίλτατα. προδοὺς γὰρ αὑτοῦ τέκνα δεσπότιν τ' ἐμὴν Ἰάσων οἰκεῖ βασιλικοῖς λέκτροις γάμους, γήμας Κρέοντος παῖδ' ὃς αἰσυμνᾷ χθονός.`,
            translations: [
                { lang: "ES | Litteraria", text: "¡Ojalá la nave Argo no hubiera volado a través de las azules Sinplégades hacia la tierra de la Cólquide!", author: "Gredos" },
                { lang: "ES | Linealis", text: "Ojalá debiera de la Argo no haber volado la nave de los Colcos hacia la tierra a través de las azules Simplégades...", author: "Güeto" },
                { lang: "English", text: "Would that the ship Argo had never winged her way to the land of Colchis through the blue Symplegades...", author: "E. Coleridge" },
                { lang: "Français", text: "Plût aux dieux que le navire Argo n'eût pas d'un vol d'aile franchi les Symplégades bleues vers la Colchide...", author: "H. Berguin" }
            ]
        }]
    },
    {
        author: "Ἡρόδοτος (Heródoto)",
        works: [{
            title: "Ἱστορίαι", title_es: "Historias", title_en: "Histories", title_fr: "Enquêtes",
            meta: "Libro I (Clío) - Proemio y Cap. 1-5",
            content: `Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε, ὡς μήτε τὰ γενόμενα ἐξ ἀνθρώπων τῷ χρόνῳ ἐξίτηλα γένηται, μήτε ἔργα μεγάλα τε καὶ θωμαστά, τὰ μὲν Ἕλλησι τὰ δὲ βαρβάροισι ἀποδεχθέντα, ἀκλεᾶ γένηται, τά τε ἄλλα καὶ δι᾽ ἣν αἰτίην ἐπολέμησαν ἀλλήλοισι. Περσέων μέν νυν οἱ λόγιοι Φοίνικας αἰτίους φασὶ γενέσθαι τῆς διαφορῆς· τούτους γὰρ ἀπὸ τῆς Ἐρυθρῆς καλεομένης θαλάσσης ἀπικομένους ἐπὶ τήνδε τὴν θάλασσαν, καὶ οἰκήσαντας τοῦτον τὸν χῶρον τὸν καὶ νῦν οἰκέουσι, αὐτίκα ναυτιλίῃσι μακρῇσι ἐπιθέσθαι, ἀπαγινέοντας δὲ φορτία Αἰγύπτιά τε καὶ Ἀσσύρια τῇ τε ἄλλῃ ἐσαπικνέεσθαι καὶ δὴ καὶ ἐς Ἄργος. τὸ δὲ Ἄργος τοῦτον τὸν χρόνον προεῖχε ἅπασι τῶν ἐν τῇ νῦν Ἑλλάδι καλεομένῃ χώρῃ. ἀπικομένους δὲ τοὺς Φοίνικας ἐς δὴ τὸ Ἄργος τοῦτο ἐπικέεσθαι διάθεσιν τῶν φορτίων. πέμπτῃ δὲ ἢ ἕκτῃ ἡμέρῃ ἀπ’ ἧς ἀπίκοντο, ἐξεμπολημένων σφι σχεδὸν πάντων, ἐλθεῖν ἐπὶ τὴν θάλασσαν γυναῖκας ἄλλας τε πολλὰς καὶ δὴ καὶ τοῦ βασιλέος θυγατέρα.`,
            translations: [
                { lang: "ES | Litteraria", text: "Esta es la exposición del resultado de las investigaciones de Heródoto de Halicarnaso...", author: "C. Schrader" },
                { lang: "ES | Linealis", text: "De Heródoto de Halicarnaso de su historia la exposición es esta, para que ni lo sucedido por los hombres con el tiempo se borre...", author: "Güeto" },
                { lang: "English", text: "This is the display of the inquiry of Herodotus of Halicarnassus, so that neither the deeds of men may fade with time...", author: "A. Godley" },
                { lang: "Français", text: "Hérodote d'Halicarnasse présente ici le résultat de ses recherches, pour que le temps n'abolisse pas le souvenir des actions des hommes...", author: "Ph. Larcher" }
            ]
        }]
    },{
        author: "Πλάτων (Platón)",
        works: [{
            title: "Ἀπολογία Σωκράτους", title_es: "Apología de Sócrates", title_en: "Apology", title_fr: "Apologie",
            meta: "vv. 17a-20c (Exordio)",
            content: `Ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε ὑπὸ τῶν ἐμῶν κατηγόρων, οὐκ οἶδα· ἐγὼ δ᾽ οὖν καὶ αὐτὸς ὑπ᾽ αὐτῶν ὀλίγου ἐμαυτοῦ ἐπελαθόμην, οὕτω πιθανῶς ἔλεγον. καίτοι ἀληθές γε ὡς ἔπος εἰπεῖν οὐδὲν εἰρήκασιν. μάλιστα δὲ αὐτῶν ἓν ἐθαύμασα τῶν πολλῶν ὧν ἐψεύσαντο, τοῦτο ἐν ᾧ ἔλεγον ὡς χρὴ ὑμᾶς εὐλαβεῖσθαι μὴ ὑπ᾽ ἐμοῦ ἐξαπατηθῆτε ὡς δεινοῦ ὄντος λέγειν. τὸ γὰρ μὴ αἰσχυνθῆναι ὅτι αὐτίκα ὑπ᾽ ἐμοῦ ἐξελεγχθήσονται ἔργῳ, ἐπειδὰν μηδ᾽ ὁπωστιοῦν φαίνωμαι δεινὸς λέγειν, τοῦτό μοι ἔδοξεν αὐτῶν ἀναισχυντότατον εἶναι, εἰ μὴ ἄρα δεινὸν καλοῦσιν οὗτοι λέγειν τὸν τἀληθῆ λέγοντα· εἰ μὲν γὰρ τοῦτο λέγουσιν, ὁμολογοίην ἂν ἔγωγε οὐ κατὰ τούτους εἶναι ῥήτωρ. οὗτοι μὲν οὖν, ὥσπερ ἐγὼ λέγω, ἤ τι ἢ οὐδὲν ἀληθὲς εἰρήκασιν, ὑμεῖς δέ μου ἀκούσεσθε πᾶσαν τὴν ἀλήθειαν. οὐ μέντοι μὰ Δία, ὦ ἄνδρες Ἀθηναῖοι, κεκαλλιεπημένους γε λόγους, ὥσπερ οἱ τούτων, ῥήμασί τε καὶ ὀνόμασιν οὐδὲ κεκοσμημένους, ἀλλ᾽ ἀκούσεσθε εἰκῇ λεγόμενα τοῖς ἐπιτυχοῦσιν ὀνόμασιν.`,
            translations: [
                { lang: "ES | Litteraria", text: "No sé, atenienses, la impresión que habrán sentido por causa de mis acusadores...", author: "J. Calonge" },
                { lang: "ES | Linealis", text: "Qué ciertamente vosotros, oh varones atenienses, habéis sentido por mis acusadores, no sé; yo ciertamente casi de mí mismo me olvidé...", author: "Güeto" },
                { lang: "English", text: "How you have been affected by my accusers, men of Athens, I do not know; I was almost carried away by them...", author: "H. Fowler" },
                { lang: "Français", text: "Quelle impression mes accusateurs ont faite sur vous, Athéniens, je l'ignore; pour moi, j'en ai presque oublié qui je suis...", author: "M. Croiset" }
            ]
        }]
    },
    {
        author: "Ἀριστοτέλης (Aristóteles)",
        works: [{
            title: "Τὰ μετὰ τὰ φυσικά", title_es: "Metafísica", title_en: "Metaphysics", title_fr: "Métaphysique",
            meta: "Libro I (980a-981b)",
            content: `Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει. σημεῖον δ᾽ ἡ τῶν αἰσθήσεων ἀγάπησις· καὶ γὰρ χωρὶς τῆς χρείας ἀγαπῶνται δι᾽ αὑτάς, καὶ μάλιστα τῶν ἄλλων ἡ διὰ τῶν ὀμμάτων. οὐ γὰρ μόνον ἵνα πράττωμεν ἀλλὰ καὶ μηδὲν μέλλοντες πράττειν τὸ ὁρᾶν αἱρούμεθα ἀντὶ πάντων ὡς εἰπεῖν τῶν ἄλλων. αἴτιον δ᾽ ὅτι μάλιστα ποιεῖ γνωρίζειν ἡμᾶς αὕτη τῶν αἰσθήσεων καὶ πολλὰς δηλοῖ διαφοράς. φύσει μὲν οὖν αἴσθησιν ἔχοντα γίγνεται τὰ ζῷα, ἐκ δὲ ταύτης τοῖς μὲν αὐτῶν οὐκ ἐγγίγνεται μνήμη, τοῖς δ᾽ ἐγγίγνεται. καὶ διὰ τοῦτο ταῦτα φρονιμώτερα καὶ μαθητικώτερα τῶν μὴ δυναμένων μνημονεύειν ἐστί, φρόνιμα μὲν ἄνευ τοῦ μανθάνειν ὅσα μὴ δύναται τῶν ψόφων ἀκούειν, οἷον μέλιττα καὶ εἴ τι άλλο τοιοῦτον γένος ζῴων ἐστί. μανθάνει δὲ ὅσα πρὸς τῇ μνήμῃ καὶ ταύτην ἔχει τὴν αἴσθησιν. τὰ μὲν οὖν ἄλλα ταῖς φαντασίαις ζῇ καὶ ταῖς μνήμαις, ἐμπειρίας δὲ μετέχει μικρόν· τὸ δὲ τῶν ἀνθρώπων γένος καὶ τέχνῃ καὶ λογισμοῖς.`,
            translations: [
                { lang: "ES | Litteraria", text: "Todos los hombres por naturaleza desean saber. Prueba de ello es el amor a las sensaciones...", author: "Gredos" },
                { lang: "ES | Linealis", text: "Todos los hombres del saber desean por naturaleza. Señal la de las sensaciones apreciación...", author: "Güeto" },
                { lang: "English", text: "All men by nature desire to know. An indication of this is the delight we take in our senses...", author: "W.D. Ross" },
                { lang: "Français", text: "Tous les hommes désirent naturellement savoir; le plaisir que nous prennent nos sens en est une preuve...", author: "J. Barthélemy" }
            ]
        }]
    },
    {
        author: "Marcus Aurelius",
        works: [{
            title: "Τὰ εἰς ἑαυτόν", title_es: "Meditaciones", title_en: "Meditations", title_fr: "Pensées",
            meta: "Libro II completo (Carnunto)",
            content: `Ἕωθεν προλέγειν ἑαυτῷ· συντεύξομαι περιέργῳ, ἀχαρίστῳ, ὑβριστῇ, δολερῷ, βασκάνῳ, ἀκοινωνήτῳ· πάντα ταῦτα συμβέβηκεν ἐκείνοις παρὰ τὴν ἄγνοιαν τῶν ἀγαθῶν καὶ κακῶν. ἐγὼ δὲ τεθεωρηκὼς τὴν φύσιν τοῦ ἀγαθοῦ ὅτι καλόν, καὶ τοῦ κακοῦ ὅτι αἰσχρόν, καὶ τὴν αὐτοῦ τοῦ ἁμαρτάνοντος φύσιν ὅτι μοι συγγενής, οὐχὶ αἵματος ἢ σπέρματος τοῦ αὐτοῦ, ἀλλὰ νοῦ καὶ θείας ἀπομοίρας μέτοχος, οὔτε βλαβῆναι ὑπό τινος αὐτῶν δύναμαι· αἰσχρῷ γάρ με οὐδεὶς περιβαλεῖ· οὔτε ὀργίζεσθαι τῷ συγγενεῖ δύναμαι οὔτε ἀπέχθεσθαι αὐτῷ. γεγόναμεν γὰρ πρὸς συνεργίαν ὡς πόδες, ὡς χεῖρες, ὡς βλέφαρα, ὡς οἱ στοῖχοι τῶν άνω καὶ κάτω ὀδόντων. τὸ οὖν ἀντιπράσσειν ἀλλήλοις παρὰ φύσιν· ἀντιπρακτικὸν δὲ τὸ ἀγανακτεῖν καὶ ἀποστρέφεσθαι. Ὅ,τι ποτὲ τοῦτό εἰμι, σαρκία ἐστὶ καὶ πνευμάτιον καὶ τὸ ἡγεμονικόν. ἄφες τὰ βιβλία· μηκέτι σπῶ· οὐ δέδοται. ἀλλ' ὡς ἤδη ἀποθνήσκων τῶν μὲν σαρκίων καταφρόνησον.`,
            translations: [
                { lang: "ES | Litteraria", text: "Al amanecer, dite a ti mismo: hoy me encontraré con un indiscreto, un ingrato, un insolente...", author: "R. Bach" },
                { lang: "ES | Linealis", text: "Desde el alba predecir a sí mismo: me encontraré con un entrometido, un malagradecido, un injuriador...", author: "Güeto" },
                { lang: "English", text: "Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant...", author: "G. Long" },
                { lang: "Français", text: "Dès l'aurore, dis-toi par avance : Je vais rencontrer un indiscret, un ingrat, un insolent, un trompeur...", author: "A. Couat" }
            ]
        }]
    }
];
