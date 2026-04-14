---
title: Histamine Bible
permalink: /histamine/
description: For internal view only.
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Histamine Bible | Histamínová Biblia</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #fcfcfc;
            padding-top: 80px;
        }
        h1, h2, h3, .serif {
            font-family: 'Playfair Display', serif;
        }
        nav.navbar.navbar-expand-lg.fixed-top.bg-white {
            display:none!important;
        }
        input#searchInput {
            font-size: 12px;
        }
        nav.fixed {
            position:sticky!important;
        }
        
        /* Search Animations */
        .searchable-item, .recipe-card { transition: opacity 0.2s ease-in-out; }
        .hidden-by-search { display: none !important; }
        .food-category { transition: opacity 0.3s ease; }

        /* Language Toggling Logic */
        body.lang-en .sk { display: none !important; }
        body.lang-sk .en { display: none !important; }
    </style>
</head>
<body class="text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 lang-en flex flex-col min-h-screen">

    <nav class="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-xl z-50 border-b-4 border-indigo-500">
        <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div class="font-bold text-xl serif tracking-wide text-indigo-300 flex items-center">
                <span class="mr-2">✦</span> 
                <span class="en">The Histamine Bible</span>
                <span class="sk">Histamínová Biblia</span>
            </div>
            
            <div class="flex flex-wrap items-center justify-center gap-2">
                <div class="flex space-x-1 bg-slate-800 p-1 rounded-lg">
                    <button onclick="switchTab('guide')" id="nav-guide" class="nav-btn px-4 py-2 rounded-md bg-indigo-500 text-white font-medium text-sm transition">
                        <span class="en">The Guide</span><span class="sk">Sprievodca</span>
                    </button>
                    <button onclick="switchTab('sweets')" id="nav-sweets" class="nav-btn px-4 py-2 rounded-md hover:bg-slate-700 text-slate-300 font-medium text-sm transition">
                        <span class="en">Sweet Treats</span><span class="sk">Sladkosti</span>
                    </button>
                    <button onclick="switchTab('recipes')" id="nav-recipes" class="nav-btn px-4 py-2 rounded-md hover:bg-slate-700 text-slate-300 font-medium text-sm transition">
                        <span class="en">Recipes</span><span class="sk">Recepty</span>
                    </button>
                </div>
                
                <button onclick="toggleLanguage()" class="ml-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-md font-bold text-sm text-slate-200 transition border border-slate-500">
                    <span class="en">EN / <span class="text-slate-400 font-normal">SK</span></span>
                    <span class="sk"><span class="text-slate-400 font-normal">EN</span> / SK</span>
                </button>
            </div>

            <div class="relative w-full md:w-64 mt-2 md:mt-0">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" id="searchInput" placeholder="Search / Hľadať..." class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-lg leading-5 bg-slate-800 text-slate-300 placeholder-slate-400 focus:outline-none focus:bg-white focus:text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out">
            </div>
        </div>
    </nav>

    <div id="guide" class="page-section block">
        <header class="bg-slate-900 text-white py-16 px-6 shadow-xl border-b-4 border-indigo-500">
            <div class="max-w-6xl mx-auto">
                <div class="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold tracking-wider uppercase mb-4 border border-indigo-500/30">
                    <span class="en">The Definitive Guide</span><span class="sk">Komplexný Sprievodca</span>
                </div>
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    <span class="en">The Histamine Bible</span><span class="sk">Histamínová Biblia</span>
                </h1>
                <p class="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                    <span class="en">A culinary masterclass in conquering histamine intolerance. From everyday staples to premium gourmet ingredients, this guide breaks down what you can eat, what you must avoid, and the science behind why.</span>
                    <span class="sk">Kulinársky majstrovský kurz v zvládaní histamínovej intolerancie. Tento sprievodca vysvetľuje, čo môžete jesť, čomu sa musíte vyhnúť a vedu, ktorá za tým stojí.</span>
                </p>
            </div>
        </header>

        <main class="max-w-6xl mx-auto px-6 py-12 flex-grow">
            <section class="mb-16">
                <h2 class="text-4xl text-slate-900 mb-8 flex items-center border-b pb-4">
                    <span class="text-indigo-600 mr-4">✦</span> 
                    <span class="en">The Golden Rules of Cooking</span><span class="sk">Zlaté pravidlá varenia</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">❄️</div>
                        <h3 class="font-bold text-xl mb-3 serif"><span class="en">Freshness is Law</span><span class="sk">Čerstvosť je zákon</span></h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <span class="en">Histamine builds up as food ages. Only buy fresh meat and produce. Avoid letting food sit in the fridge. Leftovers are your enemy unless immediately frozen.</span>
                            <span class="sk">Histamín sa hromadí starnutím potravín. Kupujte len čerstvé mäso a zeleninu. Zvyšky jedla (ak nie sú ihneď zmrazené) sú vaším nepriateľom.</span>
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">🦠</div>
                        <h3 class="font-bold text-xl mb-3 serif"><span class="en">Fermentation is Fatal</span><span class="sk">Fermentácia je fatálna</span></h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <span class="en">Fermentation relies on bacteria that produce massive amounts of histamine. Say goodbye to yogurt, aged cheese, vinegar, soy sauce, and pickled anything.</span>
                            <span class="sk">Kvasenie (fermentácia) sa spolieha na baktérie, ktoré produkujú obrovské množstvo histamínu. Zbohom jogurt, zrejúce syry, ocot, sójová omáčka a kyslá zelenina.</span>
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">🔥</div>
                        <h3 class="font-bold text-xl mb-3 serif"><span class="en">Beware Liberators</span><span class="sk">Pozor na uvoľňovače (Liberátory)</span></h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <span class="en">Some foods aren't high in histamine themselves, but they trigger your body's mast cells to dump stored histamine. Citrus, tomatoes, and many spices do this.</span>
                            <span class="sk">Niektoré potraviny neobsahujú veľa histamínu, ale nútia vaše bunky uvoľniť uložený histamín. Citrusy, paradajky a mnohé koreniny robia presne toto.</span>
                        </p>
                    </div>
                </div>
            </section>

            <section class="space-y-16">
                <div class="scroll-mt-10 food-category" id="drinks">
                    <h2 class="text-4xl text-slate-900 mb-6 flex items-center">
                        <span class="text-blue-500 mr-4">💧</span> 
                        <span class="en">Drinks, Teas & Fizzys</span><span class="sk">Nápoje, Čaje a Limonády</span>
                    </h2>
                    <div class="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200 text-blue-900">
                        <h4 class="font-bold text-lg mb-2 serif"><span class="en">The Science: DAO Blockers</span><span class="sk">Veda: Blokátory enzýmu DAO</span></h4>
                        <p class="text-sm">
                            <span class="en">Many drinks (especially alcohol and black/green tea) actively block DAO, the enzyme your body uses to clear out histamine. Even if you eat perfectly, blocking this enzyme will cause symptoms. Hydration should come from pure, unfermented sources.</span>
                            <span class="sk">Mnohé nápoje (najmä alkohol a čierny/zelený čaj) aktívne blokujú DAO – enzým, ktorý vaše telo používa na odbúravanie histamínu. Hydratácia by mala pochádzať z čistých, nefermentovaných zdrojov.</span>
                        </p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
                        <div class="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-emerald-50/30">
                            <h4 class="text-emerald-800 font-bold mb-6 flex items-center text-xl serif">
                                <span class="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> <span class="en">The Safe Glass</span><span class="sk">Povolené nápoje</span>
                            </h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Pure Water / Filtered Water</span><span class="sk">Čistá voda / Filtrovaná voda</span></b></li>
                                <li class="searchable-item"><b><span class="en">Plain Sparkling Water</span><span class="sk">Čistá perlivá voda (bez príchute)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Chamomile Tea</span><span class="sk">Harmančekový čaj</span></b></li>
                                <li class="searchable-item"><b><span class="en">Peppermint Tea</span><span class="sk">Mätový čaj</span></b></li>
                                <li class="searchable-item"><b><span class="en">Rooibos Tea</span><span class="sk">Rooibos čaj</span></b></li>
                                <li class="searchable-item"><b><span class="en">Pure Coconut Water</span><span class="sk">Čistá kokosová voda (bez konzervantov)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Freshly pressed safe fruit juices (Apple)</span><span class="sk">Čerstvo odšťavené ovocie z povolených druhov (Jablko)</span></b></li>
                            </ul>
                        </div>
                        <div class="p-8 bg-rose-50/30">
                            <h4 class="text-rose-800 font-bold mb-6 flex items-center text-xl serif">
                                <span class="bg-rose-200 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> <span class="en">The Danger Zone</span><span class="sk">Zakázané nápoje</span>
                            </h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">ALL Alcohol (Wine, Beer, Spirits)</span><span class="sk">Všetok alkohol (Víno, Pivo, Destiláty)</span></b> - <span class="en">Massive DAO blocker.</span><span class="sk">Silný blokátor DAO.</span></li>
                                <li class="searchable-item"><b><span class="en">Black, Green, and White Tea</span><span class="sk">Čierny, Zelený a Biely čaj</span></b></li>
                                <li class="searchable-item"><b><span class="en">Kombucha & Fermented Drinks</span><span class="sk">Kombucha a fermentované nápoje</span></b></li>
                                <li class="searchable-item"><b><span class="en">Coffee</span><span class="sk">Káva</span></b> - <span class="en">Highly contested, often acts as a liberator. Avoid during strict phases.</span><span class="sk">Často pôsobí ako uvoľňovač. Vyhnite sa v prísnej fáze.</span></li>
                                <li class="searchable-item"><b><span class="en">Energy Drinks</span><span class="sk">Energetické nápoje</span></b></li>
                                <li class="searchable-item"><b><span class="en">Sodas with Citrus/Preservatives (Cola, Lemonades)</span><span class="sk">Ochutené malinovky a koly (s kyselinou citrónovou)</span></b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="scroll-mt-10 food-category" id="spices">
                    <h2 class="text-4xl text-slate-900 mb-6 flex items-center">
                        <span class="text-amber-500 mr-4">🌿</span> 
                        <span class="en">Spices, Herbs & Seasonings</span><span class="sk">Koreniny a Bylinky</span>
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
                        <div class="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-emerald-50/30">
                            <h4 class="text-emerald-800 font-bold mb-6 flex items-center text-xl serif">
                                <span class="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> <span class="en">The Safe Pantry</span><span class="sk">Povolené koreniny</span>
                            </h4>
                            <div class="space-y-4 text-sm text-slate-700">
                                <ul class="list-disc pl-5 space-y-1">
                                    <li class="searchable-item"><b><span class="en">Saffron</span><span class="sk">Šafran</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Salt (Sea, Himalayan Pink)</span><span class="sk">Soľ (Morská, Himalájska ružová)</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Coriander (Fresh cilantro / dried seeds)</span><span class="sk">Koriander (Čerstvá vňať / sušené semená)</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Turmeric (Fresh root or powder)</span><span class="sk">Kurkuma (Čerstvý koreň alebo prášok)</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Cardamom (Green pods)</span><span class="sk">Kardamóm (Zelený)</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Fresh Aromatics: Garlic, Ginger, Shallots, Onions</span><span class="sk">Aromatické: Cesnak, Zázvor, Šalotka, Cibuľa</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Fresh Herbs: Basil, Mint, Parsley, Oregano, Rosemary</span><span class="sk">Čerstvé bylinky: Bazalka, Mäta, Petržlen, Oregáno, Rozmarín</span></b></li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-8 bg-rose-50/30">
                            <h4 class="text-rose-800 font-bold mb-6 flex items-center text-xl serif">
                                <span class="bg-rose-200 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> <span class="en">The Danger Zone</span><span class="sk">Zakázané (Liberátory)</span>
                            </h4>
                            <div class="space-y-4 text-sm text-slate-700">
                                <ul class="list-disc pl-5 space-y-1">
                                    <li class="searchable-item"><b><span class="en">Cinnamon, Cloves, Nutmeg, Mace</span><span class="sk">Škorica, Klinčeky, Muškátový oriešok</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Chili Powder, Cayenne, Paprika, Red Pepper Flakes</span><span class="sk">Chili, Kajenské korenie, Paprika</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Curry Powder / Garam Masala blends</span><span class="sk">Zmesi Kari / Garam Masala</span></b></li>
                                    <li class="searchable-item"><b><span class="en">All Vinegars (Balsamic, Apple Cider, White)</span><span class="sk">Všetky octy (Balsamico, Jablčný, Vínny)</span></b></li>
                                    <li class="searchable-item"><b><span class="en">Soy Sauce, Tamari, Mustard, Ketchup</span><span class="sk">Sójová omáčka, Horčica, Kečup</span></b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="scroll-mt-10 food-category" id="meats">
                    <h2 class="text-4xl text-slate-900 mb-6 flex items-center">
                        <span class="text-red-500 mr-4">🥩</span> 
                        <span class="en">Meats, Poultry & Seafood</span><span class="sk">Mäso, Hydina a Ryby</span>
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
                        <div class="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-emerald-50/30">
                            <h4 class="text-emerald-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> <span class="en">The Safe Plate</span><span class="sk">Povolené (Len Čerstvé!)</span></h4>
                            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Freshly Ground Beef/Pork</span><span class="sk">Čerstvo mleté hovädzie/bravčové mäso</span></b></li>
                                <li class="searchable-item"><b><span class="en">Fresh Chicken / Turkey</span><span class="sk">Čerstvé Kura / Morka</span></b></li>
                                <li class="searchable-item"><b><span class="en">White Fish (Cod, Halibut - Frozen at sea)</span><span class="sk">Biele ryby (Treska - okamžite zmrazené na mori)</span></b></li>
                            </ul>
                        </div>
                        <div class="p-8 bg-rose-50/30">
                            <h4 class="text-rose-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-rose-200 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> <span class="en">The Danger Zone</span><span class="sk">Zakázané</span></h4>
                            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">ALL Leftovers in the fridge</span><span class="sk">VŠETKY zvyšky mäsa z chladničky (nedojedený obed na druhý deň)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Dry-Aged Steaks</span><span class="sk">Zrejúce (Dry-Aged) Steaky</span></b></li>
                                <li class="searchable-item"><b><span class="en">Bacon, Sausages, Salami, Prosciutto</span><span class="sk">Slanina, Klobásy, Salámy, Prosciutto</span></b></li>
                                <li class="searchable-item"><b><span class="en">Canned Tuna / Shellfish (Shrimp)</span><span class="sk">Konzervovaný tuniak / Morské plody (Krevety)</span></b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="scroll-mt-10 food-category" id="dairy">
                    <h2 class="text-4xl text-slate-900 mb-6 flex items-center">
                        <span class="text-yellow-500 mr-4">🧀</span> 
                        <span class="en">Dairy & Eggs</span><span class="sk">Mliečne výrobky a Vajcia</span>
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
                        <div class="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-emerald-50/30">
                            <h4 class="text-emerald-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> <span class="en">The Safe Plate</span><span class="sk">Povolené (Nezrejúce)</span></h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Burrata & Fresh Mozzarella</span><span class="sk">Burrata a Čerstvá Mozzarella</span></b></li>
                                <li class="searchable-item"><b><span class="en">Mascarpone, Ricotta, Cottage Cheese</span><span class="sk">Mascarpone, Ricotta, Cottage syr</span></b></li>
                                <li class="searchable-item"><b><span class="en">Pasteurized Milk & Butter / Ghee</span><span class="sk">Mlieko a Maslo / Ghí</span></b></li>
                                <li class="searchable-item"><b><span class="en">Cooked Eggs (Yolks are very safe)</span><span class="sk">Tepelne upravené vajcia (Žĺtky sú najbezpečnejšie)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Coconut / Macadamia Milk</span><span class="sk">Kokosové / Makadamiové mlieko</span></b></li>
                            </ul>
                        </div>
                        <div class="p-8 bg-rose-50/30">
                            <h4 class="text-rose-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-rose-200 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> <span class="en">The Danger Zone</span><span class="sk">Zakázané (Fermentované)</span></h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Parmesan, Cheddar, Gouda, Swiss</span><span class="sk">Parmezán, Čedar, Gouda, Ementál</span></b></li>
                                <li class="searchable-item"><b><span class="en">Blue Cheese, Brie, Camembert</span><span class="sk">Niva/Modré syry, Brie, Hermelín</span></b></li>
                                <li class="searchable-item"><b><span class="en">Yogurt, Kefir, Sour Cream</span><span class="sk">Jogurt, Kefír, Kyslá smotana, Bryndza</span></b></li>
                                <li class="searchable-item"><b><span class="en">Raw Egg Whites</span><span class="sk">Surové vaječné bielka</span></b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="scroll-mt-10 food-category" id="vegetables">
                    <h2 class="text-4xl text-slate-900 mb-6 flex items-center">
                        <span class="text-green-500 mr-4">🥦</span> 
                        <span class="en">Vegetables</span><span class="sk">Zelenina</span>
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
                        <div class="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-emerald-50/30">
                            <h4 class="text-emerald-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> <span class="en">The Safe Plate</span><span class="sk">Povolené</span></h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Broccoli, Cauliflower, Fresh Cabbage</span><span class="sk">Brokolica, Karfiol, Čerstvá kapusta</span></b></li>
                                <li class="searchable-item"><b><span class="en">Potatoes, Sweet Potatoes, Carrots</span><span class="sk">Zemiaky, Batáty, Mrkva</span></b></li>
                                <li class="searchable-item"><b><span class="en">Asparagus, Zucchini, Cucumber</span><span class="sk">Špargľa, Cuketa, Uhorka</span></b></li>
                                <li class="searchable-item"><b><span class="en">Bell Peppers, Onions</span><span class="sk">Paprika, Cibuľa</span></b></li>
                            </ul>
                        </div>
                        <div class="p-8 bg-rose-50/30">
                            <h4 class="text-rose-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-rose-200 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> <span class="en">The Danger Zone</span><span class="sk">Zakázané (Liberátory)</span></h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Tomatoes (All forms)</span><span class="sk">Paradajky (Všetky formy - surové, pretlak, kečup)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Eggplant / Aubergine</span><span class="sk">Baklažán</span></b></li>
                                <li class="searchable-item"><b><span class="en">Spinach</span><span class="sk">Špenát</span></b></li>
                                <li class="searchable-item"><b><span class="en">Mushrooms</span><span class="sk">Huby / Šampiňóny</span></b></li>
                                <li class="searchable-item"><b><span class="en">Fermented Veg (Sauerkraut, Pickles)</span><span class="sk">Kyslá kapusta, Kyslé uhorky (Všetko kvasené)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Avocado (When ripe)</span><span class="sk">Avokádo (Keď je zrelé)</span></b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="scroll-mt-10 food-category" id="fruits">
                    <h2 class="text-4xl text-slate-900 mb-6 flex items-center">
                        <span class="text-pink-500 mr-4">🍎</span> 
                        <span class="en">Fruits</span><span class="sk">Ovocie</span>
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
                        <div class="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-emerald-50/30">
                            <h4 class="text-emerald-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> <span class="en">The Safe Plate</span><span class="sk">Povolené</span></h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Apples, Pears, Peaches, Plums</span><span class="sk">Jablká, Hrušky, Broskyne, Slivky</span></b></li>
                                <li class="searchable-item"><b><span class="en">Blueberries, Blackberries</span><span class="sk">Čučoriedky, Černice</span></b></li>
                                <li class="searchable-item"><b><span class="en">Melons (Watermelon, Cantaloupe)</span><span class="sk">Melóny (Červený aj žltý)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Fresh Coconut</span><span class="sk">Čerstvý kokos</span></b></li>
                            </ul>
                        </div>
                        <div class="p-8 bg-rose-50/30">
                            <h4 class="text-rose-800 font-bold mb-6 flex items-center text-xl serif"><span class="bg-rose-200 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> <span class="en">The Danger Zone</span><span class="sk">Zakázané</span></h4>
                            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                <li class="searchable-item"><b><span class="en">Citrus (Lemons, Oranges, Grapefruit)</span><span class="sk">Citrusy (Citrón, Pomaranč, Grep) - Silné liberátory!</span></b></li>
                                <li class="searchable-item"><b><span class="en">Strawberries & Raspberries</span><span class="sk">Jahody a Maliny</span></b></li>
                                <li class="searchable-item"><b><span class="en">Bananas (Ripe/Brown)</span><span class="sk">Banány (Zrelé s hnedými bodkami)</span></b></li>
                                <li class="searchable-item"><b><span class="en">Pineapple, Kiwi</span><span class="sk">Ananás, Kiwi</span></b></li>
                                <li class="searchable-item"><b><span class="en">ALL Dried Fruits (Raisins, Dates)</span><span class="sk">VŠETKO sušené ovocie (Hrozienka, Ďatle, Figy)</span></b></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    </div>

    <div id="sweets" class="page-section hidden max-w-6xl mx-auto px-6 py-12 flex-grow">
        <header class="mb-12 border-b border-slate-200 pb-8">
            <h1 class="text-5xl md:text-6xl font-bold mb-4 serif text-slate-900">
                <span class="en">Sweet Treats & Baking</span><span class="sk">Sladkosti a Pečenie</span>
            </h1>
            <p class="text-lg text-slate-600 max-w-3xl">
                <span class="en">Baking on a low-histamine diet requires swapping out traditional flavorings (like chocolate and cinnamon) for safe alternatives.</span>
                <span class="sk">Pečenie pri nízkohistamínovej diéte vyžaduje zámenu tradičných chutí (ako čokoláda a škorica) za bezpečné alternatívy.</span>
            </p>
        </header>

        <section class="mb-16 food-category">
            <div class="bg-fuchsia-50 rounded-xl p-6 mb-8 border border-fuchsia-200 text-fuchsia-900">
                <h4 class="font-bold text-lg mb-2 serif"><span class="en">The Science: The Chocolate Problem</span><span class="sk">Veda: Problém s čokoládou</span></h4>
                <p class="text-sm">
                    <span class="en">Cocoa beans undergo a fermentation process before they are roasted. This makes chocolate natively high in histamine. You must rely on vanilla, safe fruits, or carob powder.</span>
                    <span class="sk">Kakaové bôby prechádzajú pred pražením fermentáciou. Preto má čokoláda prirodzene vysoký obsah histamínu a slúži aj ako uvoľňovač. Namiesto nej použite vanilku, bezpečné ovocie alebo karobový prášok.</span>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="p-6 bg-emerald-50/30 border-b md:border-b-0 md:border-r border-slate-200">
                    <h4 class="text-emerald-800 font-bold mb-4 flex items-center text-lg serif"><span class="bg-emerald-200 text-emerald-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">✓</span> <span class="en">Safe Baking</span><span class="sk">Bezpečné pečenie</span></h4>
                    <ul class="list-none space-y-2 text-sm text-slate-700">
                        <li class="searchable-item"><b><span class="en">Flours:</span><span class="sk">Múky:</span></b> <span class="en">Oat, Rice, Coconut, Cornmeal, Tapioca</span><span class="sk">Ovsená, Ryžová, Kokosová, Kukuričná, Tapioková</span></li>
                        <li class="searchable-item"><b><span class="en">Sweeteners:</span><span class="sk">Sladidlás:</span></b> <span class="en">Maple Syrup, Honey, Agave, Stevia</span><span class="sk">Javorový sirup, Med, Agáve, Stévia</span></li>
                        <li class="searchable-item"><b><span class="en">Fats:</span><span class="sk">Tuky:</span></b> <span class="en">Grass-fed Butter, Coconut Oil</span><span class="sk">Kvalitné Maslo, Kokosový olej</span></li>
                        <li class="searchable-item"><b><span class="en">Flavorings:</span><span class="sk">Dochucovadlá:</span></b> <span class="en">Alcohol-Free Vanilla, Carob Powder</span><span class="sk">Nealkoholická vanilka, Karobový prášok (náhrada kakaa)</span></li>
                        <li class="searchable-item"><b><span class="en">Leavening:</span><span class="sk">Kyprenie:</span></b> <span class="en">Baking Soda, Baking Powder</span><span class="sk">Sóda bikarbóna, Prášok do pečiva</span></li>
                    </ul>
                </div>
                <div class="p-6 bg-rose-50/30">
                    <h4 class="text-rose-800 font-bold mb-4 flex items-center text-lg serif"><span class="bg-rose-200 text-rose-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">✕</span> <span class="en">Avoid Completely</span><span class="sk">Úplne sa vyhnite</span></h4>
                    <ul class="list-none space-y-2 text-sm text-slate-700">
                        <li class="searchable-item"><b><span class="en">Chocolate / Cocoa Powder</span><span class="sk">Čokoláda / Kakao</span></b></li>
                        <li class="searchable-item"><b><span class="en">Spices:</span><span class="sk">Koreniny:</span></b> <span class="en">Cinnamon, Nutmeg, Cloves</span><span class="sk">Škorica, Muškátový oriešok, Klinčeky</span></li>
                        <li class="searchable-item"><b><span class="en">Citrus Zest:</span><span class="sk">Citrusová kôra:</span></b> <span class="en">Lemon/Orange peel</span><span class="sk">Citrónová/Pomarančová kôra (do koláčov)</span></li>
                        <li class="searchable-item"><b><span class="en">Yeast:</span><span class="sk">Droždie / Kvasnice:</span></b> <span class="en">Especially sourdough</span><span class="sk">Najmä kváskové pečivo</span></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <div id="recipes" class="page-section hidden max-w-6xl mx-auto px-6 py-12 flex-grow">
        <header class="mb-12 border-b border-slate-200 pb-8">
            <h1 class="text-5xl md:text-6xl font-bold mb-4 serif text-slate-900">
                <span class="en">The Cookbook</span><span class="sk">Kuchárka</span>
            </h1>
            <p class="text-lg text-slate-600 max-w-3xl">
                <span class="en">A massive collection of safe meals. Categorized by meal type and flavor profile. <b>Rule of thumb:</b> Cook fresh, eat immediately.</span>
                <span class="sk">Veľká zbierka bezpečných jedál. Rozdelené podľa typu jedla a chuti. <b>Zlaté pravidlo:</b> Varte čerstvé, zjedzte ihneď.</span>
            </p>
        </header>

        <h2 class="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-2 flex justify-between items-end">
            <span>🌅 <span class="en">Breakfast</span><span class="sk">Raňajky</span></span>
        </h2>
        
        <h3 class="text-xl font-bold text-indigo-500 mb-4 ml-2"><span class="en">Sweet (Sladké)</span><span class="sk">Sladké Raňajky</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 food-category">
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Apple & Coconut Oatmeal</span><span class="sk">Jablkovo-kokosová ovsená kaša</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Oats, coconut milk, fresh apples, maple syrup.</span><span class="sk">Ovsené vločky, kokosové mlieko, čerstvé jablká, javorový sirup.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Blueberry Rice Porridge</span><span class="sk">Čučoriedková ryžová kaša</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Rice flakes, water, fresh blueberries, butter.</span><span class="sk">Ryžové vločky, voda, čerstvé čučoriedky, maslo.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Fresh Fruit Crepes</span><span class="sk">Palacinky s čerstvým ovocím</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Oat flour, milk, egg yolks, fresh peaches.</span><span class="sk">Ovsená múka, mlieko, žĺtky, čerstvé broskyne.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Peach & Macadamia Smoothie</span><span class="sk">Broskyňové makadamiové smoothie</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh peaches, macadamia milk, ice, chia seeds.</span><span class="sk">Čerstvé broskyne, makadamiové mlieko, ľad, chia semienka.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Carob Oat Pancakes</span><span class="sk">Karobové ovsené lievance</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Oat flour, carob powder, egg yolks, milk, maple syrup.</span><span class="sk">Ovsená múka, karobový prášok, žĺtky, mlieko, javorový sirup.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Coconut Chia Pudding</span><span class="sk">Kokosový chia puding</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Chia seeds, pure coconut milk, fresh blackberries.</span><span class="sk">Chia semienka, čisté kokosové mlieko, čerstvé černice.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Apple Rice Bake</span><span class="sk">Jablkový ryžový nákyp</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">White rice, apples, butter, eggs, honey.</span><span class="sk">Biela ryža, jablká, maslo, vajcia, med.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Melon & Coconut Bowl</span><span class="sk">Melónovo-kokosová miska</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Cantaloupe, fresh coconut meat, fresh mint.</span><span class="sk">Žltý melón, čerstvé kokosové mäso, čerstvá mäta.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Sweet Cornmeal Mush</span><span class="sk">Sladká kukuričná kaša</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Polenta/cornmeal, water/milk, butter, maple syrup.</span><span class="sk">Polenta/kukuričná krupica, voda/mlieko, maslo, javorový sirup.</span></div>
            </div>
        </div>

        <h3 class="text-xl font-bold text-emerald-600 mb-4 ml-2"><span class="en">Savory (Slané)</span><span class="sk">Slané Raňajky</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 food-category">
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Zucchini & Basil Scramble</span><span class="sk">Praženica s cuketou a bazalkou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Eggs (yolks), zucchini, fresh basil, olive oil.</span><span class="sk">Vajcia (hlavne žĺtka), cuketa, bazalka, olivový olej.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Sweet Potato Hash</span><span class="sk">Batátové "Hash" z panvice</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Sweet potatoes, onions, fresh beef (optional), rosemary.</span><span class="sk">Batáty, cibuľa, čerstvé mleté mäso (voliteľné), rozmarín.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Asparagus & Egg Skillet</span><span class="sk">Špargľa so žĺtkami na panvici</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh asparagus, butter, 3 egg yolks, sea salt.</span><span class="sk">Čerstvá špargľa, maslo, 3 vaječné žĺtky, morská soľ.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Chicken & Carrot Patties</span><span class="sk">Kuracie a mrkvové placky</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh ground chicken, grated carrots, garlic, oat flour.</span><span class="sk">Čerstvé mleté kuracie, strúhaná mrkva, cesnak, ovsená múka.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Herbed Potato Röstis</span><span class="sk">Bylinkové zemiakové placky</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Grated potatoes, parsley, egg yolk (to bind), olive oil.</span><span class="sk">Strúhané zemiaky, petržlen, žĺtok (na spojenie), olivový olej.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Cauliflower Hash Browns</span><span class="sk">Karfiolové placky</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Riced cauliflower, rice flour, garlic powder, salt.</span><span class="sk">Nastrúhaný karfiol, ryžová múka, sušený cesnak, soľ.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Savory Oat Muffins</span><span class="sk">Slané ovsené muffiny s cuketou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Oat flour, grated zucchini, olive oil, baking powder.</span><span class="sk">Ovsená múka, strúhaná cuketa, olivový olej, kypriaci prášok.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Mozzarella & Basil Toast</span><span class="sk">Toast s mozzarellou a bazalkou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Yeast-free flatbread, fresh mozzarella, fresh basil, olive oil.</span><span class="sk">Nekváskový chlieb, čerstvá mozzarella, bazalka, olivový olej.</span></div>
            </div>
        </div>

        <h2 class="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-2 flex justify-between items-end">
            <span>☀️ <span class="en">Lunch</span><span class="sk">Obed</span></span>
        </h2>

        <h3 class="text-xl font-bold text-emerald-600 mb-4 ml-2"><span class="en">Savory (Slané)</span><span class="sk">Slané (Hlavný chod)</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 food-category">
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Chicken Asparagus Salad</span><span class="sk">Šalát s kuracím a špargľou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh chicken, romaine, asparagus, olive oil & basil dressing.</span><span class="sk">Čerstvé kura, rímsky šalát, špargľa, dresing z olivového oleja.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Garlic Butter Fish</span><span class="sk">Ryba na cesnakovom masle</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Flash-frozen Cod, butter, garlic, parsley, white rice.</span><span class="sk">Rýchlozmrazená treska, maslo, cesnak, petržlen, biela ryža.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Zucchini Noodles & Ricotta</span><span class="sk">Cuketové rezance s Ricottou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Zucchini, olive oil, fresh garlic, ricotta cheese.</span><span class="sk">Cuketa, olivový olej, cesnak, čerstvý syr ricotta.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Roasted Veggie & Quinoa Bowl</span><span class="sk">Pečená zelenina s quinoou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Quinoa, roasted sweet potatoes, broccoli, olive oil.</span><span class="sk">Quinoa, pečené batáty, brokolica, olivový olej.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Fresh Turkey Wrap</span><span class="sk">Čerstvý morčací wrap</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh cooked turkey breast, lettuce, cucumber, flatbread.</span><span class="sk">Čerstvo uvarené morčacie, šalát, uhorka, nekváskový chlieb.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Potato & Leek Soup</span><span class="sk">Zemiakovo-pórová polievka</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Potatoes, fresh leeks, water/fresh chicken broth, salt.</span><span class="sk">Zemiaky, čerstvý pór, voda/čerstvý kurací vývar, soľ.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Cucumber Mozzarella Salad</span><span class="sk">Uhorkovo-mozzarellový šalát</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh cucumber, fresh mozzarella, mint, olive oil.</span><span class="sk">Čerstvá uhorka, čerstvá mozzarella, mäta, olivový olej.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Chicken & Broccoli Stir-Fry</span><span class="sk">Kuracie s brokolicou (Panvica)</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Chicken, broccoli, garlic, ginger, coconut oil (no soy sauce).</span><span class="sk">Kuracie, brokolica, cesnak, zázvor, kokosový olej (bez sójovky).</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Halibut with Sweet Potato</span><span class="sk">Halibut s pyré zo sladkých zemiakov</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">FAS Halibut, mashed sweet potatoes, butter.</span><span class="sk">Mrazený Halibut, pyré z batátov, maslo.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Pan-Seared White Rabbit</span><span class="sk">Restovaný králik na panvici</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh rabbit meat, rosemary, garlic, olive oil.</span><span class="sk">Čerstvé králičie mäso, rozmarín, cesnak, olivový olej.</span></div>
            </div>
        </div>
        
        <h3 class="text-xl font-bold text-indigo-500 mb-4 ml-2"><span class="en">Sweet Light Option</span><span class="sk">Sladká / Ľahká alternatíva</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 food-category">
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Macadamia Apple Rice Cakes</span><span class="sk">Ryžové chlebíčky s jablkom</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Rice cakes, macadamia butter, apple slices, honey.</span><span class="sk">Ryžové chlebíčky, makadamiové maslo, jablko, med.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Blueberry Ricotta Toast</span><span class="sk">Toast s ricottou a čučoriedkami</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Yeast-free bread, fresh ricotta, fresh blueberries.</span><span class="sk">Nekváskový chlieb, čerstvá ricotta, čerstvé čučoriedky.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Coconut Milk Fruit Salad</span><span class="sk">Ovocný šalát s kokosovým mliekom</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Melon, blueberries, peaches, poured with coconut milk.</span><span class="sk">Melón, čučoriedky, broskyne, zaliate kokosovým mliekom.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-indigo-700"><span class="en">Sweet Rice Noodles</span><span class="sk">Sladké ryžové rezance</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Rice noodles, butter, maple syrup, grated apple.</span><span class="sk">Ryžové rezance, maslo, javorový sirup, nastrúhané jablko.</span></div>
            </div>
        </div>

        <h2 class="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-2 flex justify-between items-end">
            <span>🌙 <span class="en">Dinner</span><span class="sk">Večera</span></span>
        </h2>
        
        <h3 class="text-xl font-bold text-emerald-600 mb-4 ml-2"><span class="en">Savory (Slané)</span><span class="sk">Slané (Hlavné jedlo)</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 food-category">
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">"No-Mato" Fresh Meatballs</span><span class="sk">Čerstvé fašírky "Bez-paradajok"</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh beef, onions, oregano, mashed potatoes.</span><span class="sk">Čerstvé hovädzie, cibuľa, oregáno, zemiakové pyré.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Turmeric Coconut Chicken</span><span class="sk">Kurkuma-Kokosové Kura</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Chicken, coconut milk, ginger, turmeric, broccoli.</span><span class="sk">Kura, kokosové mlieko, zázvor, kurkuma, brokolica.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Herb-Roasted Pork Tenderloin</span><span class="sk">Bylinková bravčová panenka</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh pork, olive oil, fresh sage, parsnips.</span><span class="sk">Čerstvá bravčová panenka, olivový olej, šalvia, paštrnák.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Cauliflower "Alfredo" Pasta</span><span class="sk">Karfiolové "Alfredo" cestoviny</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Rice pasta, blended boiled cauliflower, garlic, olive oil.</span><span class="sk">Ryžové cestoviny, rozmixovaný varený karfiol, cesnak, olivový olej.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Crispy Baked Cod</span><span class="sk">Chrumkavá pečená treska</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">FAS Cod, crushed cornflakes, butter, roasted carrots.</span><span class="sk">Mrazená treska, drvené kukuričné lupienky, maslo, pečená mrkva.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Fresh Beef & Sage Burgers</span><span class="sk">Čerstvé hovädzie burgre so šalviou</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh ground beef, sage, salt. Serve with sweet potato fries.</span><span class="sk">Čerstvé hovädzie mleté, šalvia, soľ. Podávajte s batátovými hranolkami.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Chicken & Gnocchi Soup</span><span class="sk">Kuracia polievka s ňokmi</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Fresh chicken broth, chicken breast, potato gnocchi, carrots.</span><span class="sk">Čerstvý kurací vývar, kuracie prsia, zemiakové ňoky, mrkva.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Roast Chicken with Parsnips</span><span class="sk">Pečené kura s paštrnákom</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Whole fresh chicken, parsnips, onions, olive oil, rosemary.</span><span class="sk">Celé čerstvé kura, paštrnák, cibuľa, olivový olej, rozmarín.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Bell Pepper "Nomato" Stew</span><span class="sk">Guláš z papriky "Bez paradajok"</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Pork chunks, blended roasted bell peppers (as sauce base), onions.</span><span class="sk">Bravčové kúsky, rozmixovaná pečená paprika (namiesto pretlaku), cibuľa.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Butternut Squash Pork Bake</span><span class="sk">Zapekaná tekvica s bravčovým</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Cubed squash, ground pork, onions, fresh mozzarella topping.</span><span class="sk">Kúsky maslovej tekvice, mleté bravčové, cibuľa, mozzarella na vrch.</span></div>
            </div>
            <div class="recipe-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h4 class="font-bold text-lg mb-2 text-emerald-700"><span class="en">Turkey & Zucchini Boats</span><span class="sk">Morčacie a cuketové lodičky</span></h4>
                <div class="text-xs text-slate-500"><b><span class="en">Ingredients:</span><span class="sk">Ingrediencie:</span></b> <span class="en">Hollowed zucchini, fresh ground turkey, garlic, fresh basil.</span><span class="sk">Vydlabaná cuketa, čerstvé mleté morčacie, cesnak, bazalka.</span></div>
            </div>
        </div>
    </div>

    <footer class="bg-slate-900 text-slate-400 py-12 border-t-4 border-indigo-500 mt-auto">
        <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            
            <div>
                <p class="mb-4 text-xl serif text-white">
                    <span class="en">"Let food be thy medicine, but let it be fresh."</span>
                    <span class="sk">"Nech je jedlo tvojím liekom, ale nech je čerstvé."</span>
                </p>
                <p class="text-sm max-w-sm mx-auto md:mx-0">
                    <span class="en">Keep a journal, cook with love, and freeze those leftovers! Always listen to your body first.</span>
                    <span class="sk">Píšte si denník, varte s láskou a okamžite zmrazujte zvyšky jedla! Vždy počúvajte predovšetkým svoje telo.</span>
                </p>
            </div>

            <div>
                <h4 class="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                    <span class="en">Reputable Sources & Research</span>
                    <span class="sk">Dôveryhodné Zdroje a Výskum (UK/EU)</span>
                </h4>
                <ul class="space-y-3 text-sm">
                    <li>
                        <a href="https://www.allergyuk.org/" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-300 transition flex items-center justify-center md:justify-start">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            Allergy UK - Histamine Intolerance Guidelines
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mastzellaktivierung.info/en/intro.html" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-300 transition flex items-center justify-center md:justify-start">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            SIGHI (Swiss Interest Group) - European Gold Standard Food List
                        </a>
                    </li>
                    <li>
                        <a href="https://www.bda.uk.com/" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-300 transition flex items-center justify-center md:justify-start">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            The Association of UK Dietitians (BDA)
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </footer>

    <script>
        // --- Tab Switching Logic ---
        function switchTab(targetId) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('block');
                section.classList.add('hidden');
            });
            
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-indigo-500', 'text-white');
                btn.classList.add('text-slate-300', 'hover:bg-slate-700');
            });

            document.getElementById(targetId).classList.remove('hidden');
            document.getElementById(targetId).classList.add('block');

            const activeBtn = document.getElementById('nav-' + targetId);
            activeBtn.classList.remove('text-slate-300', 'hover:bg-slate-700');
            activeBtn.classList.add('bg-indigo-500', 'text-white');

            document.getElementById('searchInput').value = '';
            runSearch('');
            window.scrollTo(0, 0); // Scroll to top when changing tabs
        }

        // --- Language Toggling Logic ---
        function toggleLanguage() {
            const body = document.body;
            if (body.classList.contains('lang-en')) {
                body.classList.remove('lang-en');
                body.classList.add('lang-sk');
            } else {
                body.classList.remove('lang-sk');
                body.classList.add('lang-en');
            }
        }

        // --- Real-time Search Logic ---
        document.getElementById('searchInput').addEventListener('input', function(e) {
            runSearch(e.target.value.toLowerCase());
        });

        function runSearch(query) {
            // Search logic runs against text in both languages
            document.querySelectorAll('.searchable-item, .recipe-card').forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.classList.remove('hidden-by-search');
                } else {
                    item.classList.add('hidden-by-search');
                }
            });
            
            // Clean up empty categories
            document.querySelectorAll('.food-category').forEach(category => {
                if(query.length > 0) {
                    const visibleItems = category.querySelectorAll('.searchable-item:not(.hidden-by-search), .recipe-card:not(.hidden-by-search)');
                    if(visibleItems.length === 0) {
                        category.style.display = 'none';
                    } else {
                        category.style.display = 'block';
                    }
                } else {
                    category.style.display = 'block'; 
                }
            });
        }
    </script>
</body>
</html>