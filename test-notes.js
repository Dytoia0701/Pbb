const NOTES = {
 Chemistry: [
  {title:"Exam Technique — Calculations, Rates & Practical Methods", group:"OCR A H432 · PMT question/mark-scheme patterns", sections:[
   {heading:"Quantitative answers", points:[
    "For rate-equation questions, compare experiments where only one reactant concentration changes. If doubling concentration doubles rate, the reaction is first order in that reactant; if rate is unchanged, it is zero order; if rate quadruples, it is second order.",
    "After finding the orders, write the complete rate equation, substitute values with units, and rearrange to calculate k. Derive the units of k from rate units divided by the concentration terms; do not assume k always has the same units.",
    "For pH, [H⁺] = 10⁻ᵖᴴ and pH = −log₁₀[H⁺]. For a weak monoprotic acid, Ka = [H⁺][A⁻]/[HA]; if dissociation is small, [H⁺] ≈ √(Ka × initial acid concentration), then calculate pH. State the approximation used.",
    "For percentage error/uncertainty questions, identify which readings contribute to the total uncertainty. For a burette titre, the delivered volume comes from two readings, so account for both readings according to the apparatus uncertainty specified.",
    "For an equilibrium calculation, write the balanced equation first, use equilibrium amounts/concentrations and the correct powers in Kc or Kp, and omit pure solids and liquids from the equilibrium expression."
   ]},
   {heading:"Kinetics and graph questions", points:[
    "A higher-temperature Maxwell–Boltzmann curve has a lower, broader peak shifted towards higher energy; the total area (same number of molecules) stays the same. The fraction with energy ≥ activation energy increases, so more collisions are successful per unit time.",
    "To determine an initial rate from a concentration–time or volume–time graph, draw a tangent at t = 0, calculate its gradient using two well-separated points on the tangent, and include the appropriate units.",
    "For an Arrhenius plot of ln k against 1/T, gradient = −Ea/R and intercept = ln A. Convert temperature to kelvin and use the graph's axis scale before calculating Ea.",
    "A catalyst provides an alternative pathway with lower activation energy. It increases the rates of forward and reverse reactions and does not change Kc or the equilibrium position."
   ]},
   {heading:"Practical and explanation mark points", points:[
    "For a rate experiment, name the measurement method and how it changes over time (e.g. gas syringe for gas volume, colorimeter for a coloured species, balance for mass loss). Explain why the measurement tracks reaction progress.",
    "For titration methods, identify the pipette, burette and suitable indicator where appropriate; rinse each item with the correct solution; add solution dropwise near the end point; repeat until concordant titres are obtained.",
    "For organic mechanisms, show curly arrows starting at an electron pair or bond, include relevant charges, and show the correct intermediate. State conditions/reagents separately from the mechanism when asked.",
    "For spectroscopy, assign peaks and use more than one item of evidence to identify a compound. State the bond or proton environment linked to a feature; do not merely list a peak value.",
    "For benzene nitration, concentrated sulfuric acid protonates nitric acid, followed by loss of water to generate NO₂⁺. In electrophilic substitution, the ring's π-electron system attacks the electrophile; loss of H⁺ restores the delocalised π system. Show the intermediate and curly arrows clearly."
   ]},
   {heading:"Question patterns reviewed", points:[
    "PMT OCR A topic sets for 'How Fast?' and 'Acids, Bases and Buffers' mix multiple-choice recall with multi-step calculations, graph interpretation, experimental measurement and explanation of assumptions.",
    "Mark schemes distinguish method marks from accuracy marks: show substitutions and intermediate working, retain units, and make the conclusion consistent with the calculated value.",
    "The practice questions in Bridge Protocol are original questions modelled on these patterns; they are not copied PMT questions."
   ]}
  ]},

  {title:"Moles & Titrations", group:"Module 2: Foundations in Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "Avogadro's constant NA = 6.02×10²³ mol⁻¹ — the number of particles in one mole of any substance",
    "n = mass ÷ Mr (solids); n = concentration (mol dm⁻³) × volume (dm³) (solutions); n = gas volume (dm³ at rtp) ÷ 24, or ÷22.4 at stp",
    "Concentration can be given in mol dm⁻³ or g dm⁻³ (g dm⁻³ = mol dm⁻³ × Mr) — always check which units a question wants",
    "Dilution: C₁V₁ = C₂V₂ (moles are conserved when you add water)",
    "Percentage yield = (actual yield ÷ theoretical yield) × 100; atom economy = (Mr of desired product ÷ Σ Mr of all products) × 100 — atom economy is about the reaction's design, yield is about how well you carried it out"
   ]},
   {heading:"Method — titrations & formula calculations", points:[
    "Empirical formula: convert masses/percentages to moles, divide all by the smallest value, convert to a whole-number ratio (×2 or ×3 if needed for values like 1.5)",
    "Molecular formula = empirical formula × n, where n = Mr(molecular) ÷ Mr(empirical)",
    "Standard titration method: pipette a fixed volume of one solution into a conical flask, add indicator, run the other solution from a burette until the end point (colour change) is reached, repeat until concordant results (within 0.10 cm³ of each other)",
    "At the equivalence point, moles of acid : moles of base match the ratio in the balanced equation — use this to calculate the unknown concentration or volume",
    "Back titration: used when a reaction is too slow, has no clear end point, or involves an insoluble solid — react the unknown with a known excess of reagent, then titrate the leftover excess"
   ]},
   {heading:"Common exam question types", points:[
    "Calculate the concentration of X from titration data — always write the balanced equation first and work in moles",
    "Calculate the empirical/molecular formula from percentage composition or combustion data",
    "Suggest a source of error and how to reduce it — rinsing apparatus, parallax when reading the meniscus, air bubbles in the burette tap",
    "Percentage error calculations combining apparatus uncertainties (e.g. burette ±0.05 cm³ per reading)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Since the 2019 SI redefinition the mole is defined by fixing the Avogadro constant exactly at 6.02214076×10²³ mol⁻¹, not by the mass of ¹²C. A mole is therefore simply a fixed count of entities, and the molar mass of ¹²C is now 12 g mol⁻¹ only to about one part in 10⁹. A-level 'the number of atoms in 12 g of carbon-12' is the historical definition.",
    "Primary standards (anhydrous Na₂CO₃, potassium hydrogenphthalate, KIO₃) are pure, stable, non-hygroscopic and have a high Mr, so a weighing error is a tiny fraction of the sample. NaOH is not one: it absorbs CO₂ and water from the air, so its solution must be standardised against a primary standard before it is used to find anything else.",
    "Uncertainty at degree level: for independent random errors, percentage uncertainties in a product or quotient combine in quadrature, δc/c = √[(δV₁/V₁)² + (δV₂/V₂)² + …], rather than simply adding. A-level adds them linearly, which gives the worst case. Quadrature gives a smaller, more realistic figure and is what you would use in a university practical report.",
    "Repeat titres are treated statistically: sample standard deviation s = √[Σ(xi − mean)² ÷ (n − 1)], standard error = s ÷ √n, and a 95% confidence interval is mean ± t·s ÷ √n, where t comes from Student's t-distribution with n − 1 degrees of freedom (t = 4.30 for n = 3, so three titres give a wide interval).",
    "Indicator choice depends on the titration curve. An indicator changes colour over about pK(In) ± 1 and must change inside the vertical section of the curve. Strong acid with strong base: pH jumps roughly 3 to 11, so almost any indicator works. Weak acid with strong base: equivalence pH > 7, so phenolphthalein (about 8.3–10). Strong acid with weak base: equivalence pH < 7, so methyl orange (about 3.1–4.4). Weak acid with weak base has no sharp jump.",
    "Instrumental end points remove the human eye: a pH meter gives the equivalence volume where dpH/dV is a maximum (or d²pH/dV² crosses zero), and conductometric titrations show a change of slope because H⁺ and OH⁻ conduct far better than the ions that replace them. Both are more precise than a colour change, especially for coloured or cloudy solutions.",
    "The 24 dm³ mol⁻¹ molar volume comes from the ideal gas equation pV = nRT with R = 8.314 J mol⁻¹ K⁻¹. At 293 K and 101.325 kPa it is 24.0 dm³; at 273.15 K and 101.325 kPa it is 22.4 dm³; IUPAC's current standard pressure of 100 kPa gives 22.7 dm³ at 273.15 K. Real gases deviate from ideality at high pressure and low temperature."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: 25.00 cm³ of NaOH (pipette uncertainty ±0.06 cm³) is neutralised by 24.50 cm³ of 0.1000 mol dm⁻³ HCl (burette read twice, each ±0.05 cm³, so ±0.10 cm³ on the titre). Find c(NaOH) and its percentage uncertainty. → n(HCl) = 0.1000 × 0.02450 = 2.450×10⁻³ mol; 1:1 ratio so n(NaOH) = 2.450×10⁻³ mol; c = 2.450×10⁻³ ÷ 0.02500 = 0.0980 mol dm⁻³. Burette: 0.10 ÷ 24.50 = 0.41%; pipette: 0.06 ÷ 25.00 = 0.24%. A-level (linear) total = 0.65%; degree-level (quadrature) total = √(0.41² + 0.24²) = 0.47%. So c = 0.0980 ± 0.0005 mol dm⁻³.",
    "Worked example: three titres are 24.50, 24.45 and 24.55 cm³. Give the mean and a 95% confidence interval. → Mean = 24.50 cm³. Deviations are 0, −0.05, +0.05, so s = √[(0 + 0.0025 + 0.0025) ÷ 2] = 0.050 cm³. Standard error = 0.050 ÷ √3 = 0.029 cm³. With t = 4.303 (2 degrees of freedom), the interval is 24.50 ± 0.12 cm³."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Match your final answer's significant figures to the least precise piece of data given — over-precise answers lose marks just as much as under-precise ones",
    "Always double the burette uncertainty (±0.05 cm³ per reading → ±0.10 cm³ per titre, since two readings are taken) when asked for a percentage error",
    "For back titration, be extremely careful about which substance is in excess — draw out the two equations separately before combining the numbers",
    "Convert cm³ → dm³ (÷1000) before using the 24 dm³ mol⁻¹ figure, or use 24000 cm³ mol⁻¹ directly and stay consistent — mixing the two is a very common slip"
   ]}
  ]},
  {title:"Atomic Structure & Electron Configuration", group:"Module 2: Foundations in Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "Isotopes: atoms of the same element with different numbers of neutrons and different masses; relative isotopic mass compares to 1/12th the mass of ¹²C",
    "Relative atomic mass (Ar): the weighted mean mass of an element's isotopes compared to 1/12th the mass of ¹²C, calculated from isotopic abundances (interpreted from mass spectrum data — you don't need to know how the instrument itself works)",
    "Atomic structure: protons (+1, nucleus), neutrons (0, nucleus), electrons (−1, shells); atomic number = number of protons; mass number = protons + neutrons",
    "The first four shells hold a maximum of 2, 8, 18 and 32 electrons"
   ]},
   {heading:"Method — orbitals & filling order", points:[
    "An atomic orbital is a region that can hold up to 2 electrons with opposite spins; s-orbitals are spherical, p-orbitals are dumbbell-shaped (3 per sub-shell)",
    "Sub-shell electron capacity: s holds 2, p holds 6, d holds 10",
    "Orbitals fill in order of increasing energy (1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...) — 4s fills before 3d, but empties first when a transition metal ion forms",
    "Orbitals of equal energy are occupied singly before pairing (Hund's rule)",
    "Write configurations using sub-shell notation, e.g. oxygen: 1s²2s²2p⁴; for ions, remove/add electrons from the outermost shell (transition metal ions lose 4s electrons before 3d)"
   ]},
   {heading:"Common exam question types", points:[
    "Deducing electron configuration of an atom or ion given atomic number and charge (up to Z=36)",
    "Explaining why 4s fills before 3d but empties first when a transition metal forms an ion",
    "Using successive ionisation energy data to deduce which group an element is in",
    "Calculating relative atomic mass from isotopic abundance data"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Orbitals are solutions of the Schrödinger equation, Hψ = Eψ (H is the Hamiltonian operator). ψ itself has no direct physical meaning; ψ² is the probability density of finding the electron, and an orbital is the region holding about 90% of that probability. The quantum numbers n, l and ml come out of the mathematics (boundary conditions), and mₛ = ±½ is electron spin. Each orbital has n − l − 1 radial nodes and l angular nodes.",
    "For hydrogen the energy levels are Eₙ = −13.6 eV ÷ n² = −2.18×10⁻¹⁸ J ÷ n². Emission lines follow the Rydberg equation 1 ÷ λ = RH(1 ÷ n₁² − 1 ÷ n₂²) with RH = 1.097×10⁷ m⁻¹. Transitions down to n = 1 (Lyman) are ultraviolet; down to n = 2 (Balmer) are visible, e.g. n = 3 → 2 gives 656 nm (red). Converging lines are why ionisation energy can be read from a spectrum: 2.18×10⁻¹⁸ J × 6.022×10²³ = 1312 kJ mol⁻¹.",
    "In many-electron atoms inner electrons shield the nucleus, so an outer electron feels an effective nuclear charge Zeff = Z − S (Slater's rules estimate S). Orbitals of the same shell split in energy (s < p < d < f) because s electrons penetrate closer to the nucleus. This is why 4s fills before 3d in a neutral atom, yet 4s electrons are lost first on ionisation: once 3d is occupied it drops below 4s in energy.",
    "Cr is [Ar]3d⁵4s¹ and Cu is [Ar]3d¹⁰4s¹ because of exchange energy: electrons with parallel spins in different orbitals of the same subshell avoid each other (the same quantum effect behind Hund's rule), lowering repulsion, and the small 3d–4s gap makes promoting one 4s electron worthwhile. The 'half-filled and full subshells are stable' rule is a convenient summary, not a fundamental law.",
    "Photoelectron spectroscopy (PES) fires photons of known energy hν at atoms, and the ejected electrons have kinetic energy E(kinetic) = hν − Ebinding. Each peak is a subshell, its position gives the binding (ionisation) energy and its area is proportional to the number of electrons. PES is direct experimental evidence for subshells and for the 2, 2, 6, 2, 6… pattern.",
    "Time-of-flight mass spectrometry accelerates ions through a voltage V, so each gains kinetic energy zeV = ½mv². Flight time over distance d is t = d√(m ÷ 2zeV): heavier ions arrive later. High-resolution instruments separate masses to 4+ decimal places because nuclear binding energy gives each isotope a slightly different 'mass defect', which allows molecular formulae to be identified from exact mass alone."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: calculate the wavelength of the Balmer n = 3 → n = 2 line. → 1 ÷ λ = 1.097×10⁷ × (1 ÷ 2² − 1 ÷ 3²) = 1.097×10⁷ × (0.25 − 0.1111) = 1.524×10⁶ m⁻¹, so λ = 6.563×10⁻⁷ m = 656 nm (red visible light). The Lyman n = 2 → 1 line is 1 ÷ λ = 1.097×10⁷ × 0.75, giving λ = 121.5 nm (ultraviolet)."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always write configurations using full sub-shell notation (1s²2s²2p⁴), not GCSE-style shell numbers, at A-level",
    "For transition metal ions (e.g. Fe²⁺, Fe³⁺), remove electrons from 4s BEFORE 3d, even though 4s filled first — this catches almost everyone at first",
    "Successive ionisation energy graphs show a big jump between shells — the number of electrons before the jump reveals the group number",
    "Don't confuse mass number (a whole number: protons+neutrons) with relative atomic mass (a weighted average, rarely a whole number)"
   ]}
  ]},
  {title:"Ionic & Covalent Bonding, Shapes", group:"Module 2: Foundations in Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "Ionic bonding: electrostatic attraction between oppositely charged ions, strong in all directions in a giant ionic lattice (e.g. NaCl)",
    "Covalent bond: strong electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms",
    "Dative (coordinate) covalent bond: both shared electrons come from the same atom (e.g. NH₄⁺ formation)",
    "Metallic bonding: strong electrostatic attraction between cations and delocalised electrons in a giant metallic lattice"
   ]},
   {heading:"Method — shapes and properties", points:[
    "Electron pair repulsion (VSEPR): bonding and lone pairs around a central atom repel and spread as far apart as possible; lone pairs repel more than bonded pairs (lone-lone > lone-bond > bond-bond)",
    "Key shapes/angles: linear 180° (CO₂), trigonal planar 120° (BF₃), tetrahedral 109.5° (CH₄), pyramidal 107° (NH₃, one lone pair), non-linear/bent 104.5° (H₂O, two lone pairs), octahedral 90°",
    "Giant ionic lattices: high melting points (strong forces in all directions), conduct only when molten/dissolved (ions must be free to move)",
    "Giant covalent lattices (diamond, graphite, silicon): very high melting points; graphite conducts (delocalised electrons between layers), diamond doesn't (none)",
    "Giant metallic lattices: conduct electricity (delocalised electrons move), malleable/ductile (layers of ions slide without breaking bonds)",
    "Simple molecular lattices (I₂, ice): low melting points — only weak intermolecular forces break on melting, not the strong covalent bonds within each molecule"
   ]},
   {heading:"Common exam question types", points:[
    "Drawing dot-and-cross diagrams for ionic and covalent (including dative) bonding",
    "Predicting shape and bond angle from the number of bonding and lone pairs",
    "Explaining physical properties (melting point, conductivity, solubility) from structure and bonding",
    "Explaining the trend in melting point across Period 3 (giant metallic → giant covalent → simple molecular)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "VSEPR ranks repulsions lone pair–lone pair > lone pair–bonding pair > bonding pair–bonding pair. It extends past A-level to five and six electron pairs: PCl₅ is trigonal bipyramidal (axial 90°, equatorial 120°), SF₆ is octahedral, ClF₃ is T-shaped and XeF₄ is square planar. Lone pairs sit in equatorial positions in a trigonal bipyramid (more space, only two 90° neighbours) and opposite each other in an octahedron (XeF₄).",
    "Valence bond theory describes a covalent bond as overlap of atomic orbitals: head-on overlap makes a σ bond, sideways p–p overlap makes a π bond (so a double bond is one σ plus one π, and rotation about it is blocked, giving E/Z isomerism). Hybridisation (sp³ 109.5°, sp² 120°, sp 180°) is a mathematical mixing of s and p orbitals used to explain observed geometry; real molecules such as NH₃ have intermediate character.",
    "Molecular orbital (MO) theory combines atomic orbitals (LCAO) into bonding and antibonding molecular orbitals spread over the whole molecule. Bond order = ½(bonding electrons − antibonding electrons): N₂ = 3, O₂ = 2, F₂ = 1, Ne₂ = 0 (so no bond forms). Its great success is O₂: two electrons occupy separate degenerate π* orbitals with parallel spins, so oxygen is paramagnetic (liquid O₂ sticks to a magnet), which Lewis structures cannot predict.",
    "Hypervalent molecules (PCl₅, SF₆) were once explained by sp³d and sp³d² hybridisation using d orbitals. Modern calculations show d-orbital involvement is small; the better description uses three-centre four-electron bonds on the central atom. Either way, the A-level 'expanded octet' is a model of the observed geometry, and it only applies to period 3 and below because those atoms are large enough to host the extra ligands.",
    "Ionic bonding is never 100% ionic. Fajans' rules say covalent character increases with a small, highly charged cation (high polarising power) and a large, highly polarisable anion. This is why AgI is far less soluble and has a measured lattice enthalpy that disagrees with the purely ionic model, while NaF fits it well. It links directly to Born–Haber cycles.",
    "Metals and semiconductors are explained by band theory: a huge number of atomic orbitals overlap to form bands of closely spaced energy levels. A metal has a partly filled band (electrons move freely under a small field); an insulator has a full valence band separated from the conduction band by a large gap; a semiconductor has a small gap (silicon about 1.1 eV) that heat or light can bridge. Resistivity of metals rises with temperature because lattice vibrations scatter electrons, but falls for semiconductors."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always count BOTH bonding and lone pairs before predicting shape — forgetting lone pairs is the most common shape-question error",
    "State explicitly that lone pairs repel more than bonding pairs — this is WHY NH₃ (107°) and H₂O (104.5°) are smaller than the tetrahedral 109.5°",
    "Don't say 'ionic compounds conduct electricity' without qualifying molten/aqueous — solid ionic lattices do NOT conduct",
    "For graphite vs diamond, name delocalised electrons specifically as the reason graphite conducts — diamond has none"
   ]}
  ]},
  {title:"Electronegativity, Polarity & Intermolecular Forces", group:"Module 2: Foundations in Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "Electronegativity: the ability of an atom to attract the bonding electrons in a covalent bond; increases across a period and up a group (highest towards fluorine)",
    "A polar bond forms when bonded atoms have different electronegativities, creating a permanent dipole (δ+ and δ−)",
    "A polar molecule needs polar bonds AND an asymmetric shape so dipoles don't cancel — CO₂ has polar bonds but is linear/symmetric (non-polar overall), while bent H₂O's dipoles don't cancel (polar)"
   ]},
   {heading:"Method — types of intermolecular force", points:[
    "Van der Waals' forces is the umbrella term covering both permanent dipole-dipole forces and induced dipole-dipole forces (London/dispersion forces)",
    "London (dispersion) forces exist between ALL molecules, even non-polar ones, from temporary shifting dipoles — strength increases with more electrons/larger molecules",
    "Permanent dipole-dipole forces exist between polar molecules, in addition to London forces",
    "Hydrogen bonding: a stronger intermolecular force between a lone pair on N, O or F on one molecule and an H atom attached to N, O or F on another",
    "Anomalous properties of water from hydrogen bonding: ice is less dense than liquid water (hydrogen bonds hold molecules in a more open lattice when frozen); relatively high melting/boiling points for its small size"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining boiling point trends between molecules using the correct intermolecular force",
    "Explaining why a molecule is or isn't polar despite having polar bonds",
    "Drawing hydrogen bonds correctly (lone pair to H, correct geometry)",
    "Explaining the anomalous density of ice"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Pauling electronegativity comes from bond energies: the extra stability of a polar bond A–B over the mean of A–A and B–B is Δ = E(A–B) − ½[E(A–A) + E(B–B)], and |χA − χB| = 0.102√Δ with Δ in kJ mol⁻¹. For HCl, Δ = 431 − ½(436 + 242) = 92 kJ mol⁻¹, so |Δχ| = 0.98, close to the tabulated 3.16 − 2.20 = 0.96. Mulliken's alternative defines χ as the average of ionisation energy and electron affinity.",
    "A dipole moment is μ = Q × d, measured in debye (1 D = 3.336×10⁻³⁰ C m). For a molecule the bond dipoles add as vectors, so CO₂ and CCl₄ have μ = 0 while H₂O (1.85 D) is strongly polar. HCl has μ = 1.08 D and a bond length of 127 pm, implying a partial charge of only about 0.18e: even highly polar covalent bonds are far from fully ionic.",
    "London (dispersion) forces arise from correlated instantaneous dipoles. Their strength scales with polarisability α (how easily the electron cloud distorts), and the interaction energy between two neutral molecules falls as 1 ÷ r⁶. The Lennard-Jones potential V(r) = 4ε[(σ ÷ r)¹² − (σ ÷ r)⁶] models this: the r⁻⁶ term is the attraction and the r⁻¹² term is the short-range repulsion; the energy minimum sits at r = σ × ⁶√2 ≈ 1.12σ.",
    "A hydrogen bond is mostly electrostatic with some partial covalent (charge-transfer) character, with strength about 10–40 kJ mol⁻¹ compared with about 350 kJ mol⁻¹ for a typical covalent bond. Ice is less dense than water because each molecule makes four hydrogen bonds (donating two, accepting two) in an open hexagonal lattice; on melting some bonds break and molecules pack closer, with maximum density at 4 °C.",
    "'Like dissolves like' is really thermodynamics: dissolving occurs when ΔG = ΔH − TΔS < 0. The hydrophobic effect is largely entropy-driven: a non-polar solute forces water into an ordered cage, lowering entropy, so non-polar groups cluster together to release the water. The same effect drives soap micelle formation, lipid bilayer assembly and the folding of proteins with a hydrophobic core.",
    "Trouton's rule says ΔSvap = ΔHvap ÷ Tb is about 85–88 J K⁻¹ mol⁻¹ for many non-associated liquids because the entropy gain on vaporising is similar. Water (about 109 J K⁻¹ mol⁻¹) and other hydrogen-bonded liquids exceed it, because the liquid is unusually ordered before it boils. This gives a quantitative way to spot strong hydrogen bonding from boiling data."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "London forces exist between ALL molecules, including non-polar ones — don't say non-polar molecules have no intermolecular forces at all",
    "A molecule can have polar bonds but be non-polar overall if its shape is symmetrical enough for dipoles to cancel (CO₂, CCl₄) — always check shape, not just bond polarity",
    "Both permanent and induced dipole-dipole forces can be called 'van der Waals forces' — London/dispersion forces specifically means the induced type",
    "When drawing hydrogen bonds, the dotted line goes from the LONE PAIR on N/O/F to the H atom, not just between the two electronegative atoms"
   ]}
  ]},
  {title:"Redox & Oxidation Numbers", group:"Module 2: Foundations in Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "Oxidation = loss of electrons OR increase in oxidation number; reduction = gain of electrons OR decrease in oxidation number (OIL RIG)",
    "Oxidation number rules: uncombined elements = 0; simple ions = the ion's charge; H = +1 (except −1 in metal hydrides); O = −2 (except −1 in peroxides); numbers sum to 0 for a neutral compound, or to the overall charge for an ion",
    "Roman numerals show oxidation number magnitude when an element has multiple states, e.g. iron(II) = Fe²⁺, iron(III) = Fe³⁺; chlorate(I) = ClO⁻, chlorate(V) = ClO₃⁻"
   ]},
   {heading:"Method — redox equations & reactions", points:[
    "Oxidising agent: causes another species to be oxidised (itself reduced); reducing agent: causes another species to be reduced (itself oxidised)",
    "Metals react with acids (redox) to form a salt and hydrogen: metal loses electrons (oxidised), H⁺ gains electrons (reduced)",
    "Constructing redox equations: write two half-equations (balance atoms and charge with electrons), then combine so electrons lost = electrons gained",
    "Disproportionation: a single species is simultaneously oxidised and reduced in the same reaction (e.g. Cu⁺ → Cu²⁺ and Cu; chlorine + water/NaOH)"
   ]},
   {heading:"Common exam question types", points:[
    "Assigning oxidation numbers to atoms in compounds and ions, including unfamiliar species",
    "Writing formulae from Roman-numeral names and vice versa",
    "Constructing and balancing redox equations from half-equations",
    "Identifying disproportionation reactions and explaining why they qualify"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Oxidation states are a bookkeeping device: they assign all bonding electrons to the more electronegative atom, as if every bond were ionic. Real charges are much smaller (in HCl the partial charge on Cl is only about −0.18e while its oxidation state is −1). Averages can be fractional: Fe in Fe₃O₄ is +8/3 on average (really Fe²⁺ and 2Fe³⁺), and S in S₄O₆²⁻ averages +2.5.",
    "In basic solution, balance half-equations by first balancing as if acidic, then adding OH⁻ to both sides to neutralise every H⁺ (forming water). Example: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻. Checking: charge is −4 on both sides, 6 O and 4 H on both sides. This is the reaction when permanganate is used under alkaline or neutral conditions, giving brown MnO₂ rather than colourless Mn²⁺.",
    "Disproportionation is a species being simultaneously oxidised and reduced; comproportionation is the reverse. Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O in cold alkali (bleach), while hot alkali gives chlorate: 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O. Cu⁺ disproportionates in water (2Cu⁺ → Cu²⁺ + Cu), which is why Cu(I) compounds are only stable if insoluble or complexed.",
    "Redox links straight to thermodynamics: ΔG° = −nFE°, where n is moles of electrons and F = 96 485 C mol⁻¹. A positive cell potential means a spontaneous reaction. Latimer and Frost diagrams plot or tabulate E° (or nE°) between oxidation states, so you can read off which states are stable and which will disproportionate: a species lying above the line joining its neighbours on a Frost diagram disproportionates.",
    "Electron-transfer rates are explained by Marcus theory (Nobel Prize, 1992): the activation barrier depends on the reorganisation energy needed to rearrange the solvent and ligands around the ions before the electron can jump, together with the driving force ΔG°. It explains why some thermodynamically favourable redox reactions are slow and how electron transfer works through the chain of cytochromes in respiration and photosynthesis.",
    "Winkler titration measures dissolved oxygen in water: Mn²⁺ is oxidised by dissolved O₂ in alkali to a Mn(III)/Mn(IV) hydroxide; acidifying with iodide gives iodine in an amount stoichiometrically equal to the oxygen, and the iodine is titrated with sodium thiosulfate (S₂O₃²⁻ → S₄O₆²⁻). Each mole of O₂ ultimately consumes four moles of thiosulfate, a classic example of a multi-step redox back-calculation."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Oxidation number rules have a priority order — apply the exceptions (H is −1 in metal hydrides; O is −1 in peroxides) before the general pattern",
    "To identify oxidation vs reduction, track the SAME element's oxidation number change across the equation, not different elements",
    "For disproportionation, both products must come from the SAME starting element — check this explicitly before naming a reaction disproportionation",
    "When combining half-equations, you may need to multiply one or both first so the number of electrons matches exactly before adding them"
   ]}
  ]},
  {title:"Enthalpy & Hess's Law", group:"Module 3: Periodic Table and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Enthalpy change ΔH: heat energy transferred at constant pressure; exothermic = negative ΔH (releases heat), endothermic = positive ΔH",
    "Standard conditions: 100 kPa, a stated temperature (usually 298 K), all substances in standard states",
    "Key standard enthalpies: formation ΔH_f° (elements → 1 mol compound), combustion ΔH_c° (1 mol substance + excess O₂ → products), neutralisation ΔH_neut° (per mole of water formed), atomisation ΔH_at° (1 mol of gaseous atoms from an element)",
    "q = mcΔT (heat transferred, c ≈ 4.18 J g⁻¹ K⁻¹ for water/dilute aqueous solutions); ΔH = −q ÷ n (in kJ mol⁻¹, negative if exothermic)"
   ]},
   {heading:"Method — Hess cycles & bond enthalpies", points:[
    "Hess's Law: total enthalpy change is independent of the route taken — draw a direct arrow and an indirect route via elements (formation data) or via combustion products (combustion data), then equate the two routes",
    "Formation-data cycle: ΔH(reaction) = ΣΔH_f°(products) − ΣΔH_f°(reactants)",
    "Combustion-data cycle: ΔH(reaction) = ΣΔH_c°(reactants) − ΣΔH_c°(products) — the opposite way round from the formation version",
    "Bond enthalpy method: ΔH = Σ(bonds broken in reactants) − Σ(bonds formed in products); breaking bonds costs energy, forming bonds releases energy",
    "Calorimetry practical: measure the temperature rise of a known mass/volume of water or solution as a reaction occurs in an insulated container; correct for heat loss by extrapolating the cooling curve back to the moment of mixing"
   ]},
   {heading:"Common exam question types", points:[
    "Constructing and labelling a full Hess cycle diagram from given data",
    "Calculating ΔH from bond enthalpies for an organic reaction",
    "Calorimetry calculations combining q = mcΔT with ΔH = −q ÷ n",
    "Explaining why a calculated (bond enthalpy) value differs from an experimental (calorimetry) value"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Enthalpy is defined as H = U + pV, so at constant pressure the heat transferred equals ΔH (qp = ΔH). Internal energy change ΔU = q + w comes from the first law. The two differ by the work done on or by gases: ΔH = ΔU + Δn(gas)RT. Hess's law holds because H is a state function: it depends only on the initial and final states, not on the route.",
    "A bomb calorimeter burns a sample at constant volume, so it measures ΔU directly, not ΔH. Convert with ΔH = ΔU + Δn(gas)RT. The calorimeter's heat capacity is calibrated by electrical heating or by burning a standard such as benzoic acid. This is how most accurate enthalpies of combustion in data books were obtained.",
    "Enthalpy changes vary with temperature through the heat capacity: Kirchhoff's law gives ΔH(T₂) = ΔH(T₁) + ∫ΔCp dT between T₁ and T₂, where ΔCp = ΣCp(products) − ΣCp(reactants). For an ideal gas Cp − Cv = R. Standard values are quoted at 298 K but real reactions run elsewhere, so industrial thermodynamics always needs this correction.",
    "Mean bond enthalpies are averages taken over many different molecules, so calculations from them are only approximate (the C–H bond in CH₄ is about 435 kJ mol⁻¹ for the first bond broken, versus the 413 kJ mol⁻¹ average). Bond enthalpy calculations assume gaseous species, so they fail without correction for liquids and solids; ΔfH° cycles using tabulated data are more reliable.",
    "ΔrH° = ΣνΔfH°(products) − ΣνΔfH°(reactants), where ν are stoichiometric coefficients and ΔfH° of an element in its standard state is zero. Absolute enthalpies cannot be measured, only changes, which is why a formation convention is needed. Values for ions in solution are defined relative to ΔfH°(H⁺, aq) = 0.",
    "Enthalpy alone does not decide whether a change happens: ammonium nitrate dissolves in water endothermically (ΔH ≈ +26 kJ mol⁻¹) and an ice pack gets cold, yet the process is spontaneous because the entropy increase makes ΔG = ΔH − TΔS negative. Enthalpy of solution links to lattice and hydration enthalpies: ΔHsol = −ΔHlatt + ΣΔHhyd (ions)."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: calculate ΔcH° of propane, C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l), using ΔfH°: C₃H₈ −104.7, CO₂ −393.5, H₂O(l) −285.8 kJ mol⁻¹. → ΔcH° = [3(−393.5) + 4(−285.8)] − [−104.7 + 0] = (−1180.5 − 1143.2) + 104.7 = −2219.0 kJ mol⁻¹ (data-book value about −2220).",
    "Worked example: a bomb calorimeter gives ΔU = −1364.2 kJ mol⁻¹ for C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l). Find ΔcH at 298 K. → Δn(gas) = 2 − 3 = −1. ΔH = ΔU + Δn·RT = −1364.2 + (−1)(8.314×10⁻³)(298) = −1364.2 − 2.5 = −1366.7 kJ mol⁻¹. The correction is small for reactions with little change in gas moles but cannot be ignored if gases are made or consumed in quantity."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Mean bond enthalpies are averaged across many different molecules, so bond-enthalpy answers are only estimates — say this explicitly when asked to explain a discrepancy with an experimental value",
    "Don't forget to convert the mass of water in cm³ to grams (1 cm³ ≈ 1 g), and check whether n in ΔH = q ÷ n refers to moles of the limiting reagent, not the solution as a whole",
    "In a Hess cycle, arrows for formation data point FROM elements, but for combustion data they point TO combustion products — mixing these up is the most common Hess cycle error",
    "Always give the final ΔH answer with the correct sign and unit (kJ mol⁻¹) — a numerically correct answer with the wrong sign scores zero"
   ]}
  ]},
  {title:"Periodicity & Ionisation Energy", group:"Module 3: Periodic Table and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "The periodic table arranges elements by increasing atomic (proton) number, in periods (repeating trends) and groups (similar properties)",
    "First ionisation energy: the energy to remove 1 mole of electrons from 1 mole of gaseous atoms, forming 1 mole of gaseous 1+ ions",
    "General trend: ionisation energy increases across a period (more protons, similar shielding, stronger attraction) and decreases down a group (extra shells increase shielding/distance, outweighing extra nuclear charge)"
   ]},
   {heading:"Method — anomalies and successive ionisation energies", points:[
    "Small drops in the across-period trend: Be→B (outer electron enters a higher-energy p-orbital, easier to remove); N→O (extra repulsion from pairing electrons in the same p-orbital in O)",
    "Successive ionisation energies always increase (removing electrons from an increasingly positive ion is harder), with a big jump when starting a shell closer to the nucleus — the jump position reveals the group",
    "s-, p- and d-block classification comes from which sub-shell holds the highest-energy electron"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining the ionisation energy trend across a period or down a group using attraction, nuclear charge, shielding and radius",
    "Explaining anomalous drops (Be→B, N→O) with the correct orbital-based reason",
    "Using successive ionisation energy data to deduce the group of an unknown element",
    "Classifying elements as s-, p- or d-block from electron configuration"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Ionisation energy trends are explained by effective nuclear charge Zeff = Z − S (S = shielding constant, estimated by Slater's rules). Across a period Zeff rises because new electrons enter the same shell and shield each other poorly, so radius falls and IE rises. Down a group the outer electron is in a larger shell, further out and better shielded, so IE falls despite the greater nuclear charge.",
    "The dips in the period 2 and 3 IE graphs have clear causes. Be → B: the 2p electron is higher in energy and is shielded by the 2s electrons (and 2s penetrates closer to the nucleus). N → O: the 2p⁴ electron is in an orbital already containing another electron, and electron–electron repulsion within that orbital makes it easier to remove (no change in shielding is needed to explain it).",
    "Ionic radii in an isoelectronic series (the same number of electrons) fall as nuclear charge rises: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺, all with 10 electrons. Cations are smaller than their atoms (fewer electrons, less repulsion, possibly one fewer shell) and anions larger. Charge density (charge ÷ radius) of a cation governs its polarising power and its hydration enthalpy.",
    "Electron affinity does not simply follow electronegativity: chlorine has a more exothermic first electron affinity (−349 kJ mol⁻¹) than fluorine (−328 kJ mol⁻¹), because the incoming electron in the very compact 2p subshell of fluorine suffers extra electron–electron repulsion. Diagonal relationships (Li–Mg, Be–Al, B–Si) arise because moving right and down changes the charge/radius ratio in compensating ways, giving similar polarising power.",
    "The inert pair effect: in heavy p-block elements the lower oxidation state (two less than the group number) is more stable, such as Tl⁺ over Tl³⁺, Pb²⁺ over Pb⁴⁺ and Bi³⁺ over Bi⁵⁺. Relativistic contraction of the 6s orbital (the electrons move at a significant fraction of c near a heavy nucleus) makes the 6s pair harder to ionise or share. The same effect explains the yellow colour of gold and mercury being liquid.",
    "Period 3 melting points reflect bonding: Na 371 K, Mg 923 K, Al 933 K (metallic bonding strengthens with charge and number of delocalised electrons), Si 1687 K (giant covalent lattice), then simple molecular solids with weak London forces: P₄ 317 K, S₈ 388 K, Cl₂ 172 K, Ar 84 K. S₈ exceeds P₄ and Cl₂ because bigger molecules have stronger dispersion forces, and the whole pattern is periodic because the electron configuration repeats."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Use nuclear charge, shielding, atomic radius AND attraction together — a trend explanation missing any of these loses marks",
    "For Be→B, the reason is the p-sub-shell being higher energy than s, not shielding",
    "For N→O, the reason is electron-electron repulsion from pairing in one orbital, not nuclear charge or shielding",
    "Don't confuse general periodicity trends with the Group 2 reactivity trend — same theory, applied in the opposite direction for a different purpose"
   ]}
  ]},
  {title:"Group 2 Chemistry", group:"Module 3: Periodic Table and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Group 2 metals (Mg to Ba) have outer s² configuration and lose these 2 electrons in redox reactions to form 2+ ions",
    "Reactivity increases down the group because ionisation energy decreases (more shielding, larger radius outweighs increased nuclear charge) — easier to lose electrons"
   ]},
   {heading:"Method — reactions", points:[
    "With oxygen: forms the metal oxide; with water: forms the metal hydroxide + hydrogen (vigour increases down the group); with dilute acids: forms a salt + hydrogen",
    "Group 2 oxides react with water to form hydroxides that are increasingly alkaline down the group (increasing hydroxide solubility)",
    "Uses as bases: Ca(OH)₂ neutralises acidic soil in agriculture; Mg(OH)₂ and CaCO₃ are antacids for indigestion"
   ]},
   {heading:"Common exam question types", points:[
    "Writing equations for Group 2 reactions with oxygen, water and dilute acids",
    "Explaining the reactivity trend down the group using ionisation energy",
    "Explaining the trend in alkalinity of Group 2 hydroxide solutions",
    "Applying Group 2 chemistry to real-world uses (antacids, agricultural lime)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Solubility of Group 2 salts is a thermodynamic balance: ΔHsol = −ΔHlatt + ΔHhyd(M²⁺) + ΔHhyd(anion). For hydroxides (small anion) the lattice enthalpy falls down the group faster than the cation's hydration enthalpy, so ΔHsol becomes more negative and solubility increases. For sulfates (large anion) the lattice enthalpy hardly changes with cation size but hydration still falls, so ΔHsol becomes more positive and solubility decreases.",
    "Thermal stability of carbonates and nitrates increases down the group because the small, highly charged Mg²⁺ polarises the anion more strongly (Fajans' rules), weakening C–O or N–O bonds. Thermodynamically, decomposition MCO₃ → MO + CO₂ becomes spontaneous when T > ΔH ÷ ΔS, and ΔHdecomp rises down the group while ΔS stays near +160 J K⁻¹ mol⁻¹ (a gas is released), so the decomposition temperature rises.",
    "Flame colours come from electronic transitions: heat promotes an outer electron to a higher level and as it returns to a lower level it emits a photon of energy ΔE = hc ÷ λ, with wavelengths characteristic of each element (Ca brick-red, Sr crimson, Ba apple-green). Analytical versions are flame photometry, atomic absorption spectroscopy (AAS) and ICP-OES, which measure concentrations down to parts per billion.",
    "Beryllium is anomalous: its very small, highly charged Be²⁺ gives a polarising power that makes its compounds largely covalent (BeCl₂ is a polymeric chain), BeO and Be(OH)₂ are amphoteric, and [Be(H₂O)₄]²⁺ is acidic enough to donate protons. This is a diagonal relationship with aluminium, which shows the same behaviour.",
    "Water hardness is mostly dissolved Ca²⁺ and Mg²⁺. Temporary hardness (Ca(HCO₃)₂) is removed by boiling, which precipitates CaCO₃ as scale; permanent hardness (CaSO₄) is not. Total hardness is measured by EDTA titration: EDTA⁴⁻ forms a 1:1 complex with each M²⁺ (a hexadentate chelate, strongly favoured by entropy) and Eriochrome Black T turns from wine-red to blue at the end point. Ion-exchange softeners swap Ca²⁺ for Na⁺ on a resin.",
    "Industrial uses: lime (CaO) is made by heating limestone at about 900 °C; slaked lime Ca(OH)₂ sets in mortar by slowly reabsorbing CO₂ to form CaCO₃ again. In flue-gas desulfurisation, SO₂ is removed by CaCO₃ or Ca(OH)₂ slurry (producing CaSO₃, oxidised to gypsum CaSO₄·2H₂O), which prevents acid rain and gives a saleable by-product. Mg²⁺ sits at the centre of chlorophyll and Ca²⁺ is a signalling ion in cells."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: estimate the temperature at which CaCO₃ decomposes. Data: ΔfH° CaCO₃ −1206.9, CaO −635.1, CO₂ −393.5 kJ mol⁻¹; S° CaCO₃ 92.9, CaO 39.7, CO₂ 213.8 J K⁻¹ mol⁻¹. → ΔH = −635.1 − 393.5 + 1206.9 = +178.3 kJ mol⁻¹; ΔS = 39.7 + 213.8 − 92.9 = +160.6 J K⁻¹ mol⁻¹. ΔG = 0 when T = ΔH ÷ ΔS = 178300 ÷ 160.6 = 1110 K (837 °C). The measured value is nearer 1170 K because ΔH and ΔS themselves change with temperature."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Explain reactivity via ionisation energy specifically — don't just say 'bigger atoms are more reactive' with no electron-based reason",
    "Second ionisation energy definition isn't required, but be able to write its equation: M⁺(g) → M²⁺(g) + e⁻",
    "Increasing alkalinity down the group is due to increasing SOLUBILITY of the hydroxide, not increasing metal reactivity itself",
    "Acid reactions here are limited to those producing a salt and hydrogen gas — don't overcomplicate"
   ]}
  ]},
  {title:"The Halogens", group:"Module 3: Periodic Table and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Halogens exist as diatomic molecules (Cl₂, Br₂, I₂); boiling point increases down the group from increasing London forces with more electrons",
    "Outer s²p⁵ configuration; gain 1 electron to form 1− ions; reactivity (oxidising power) DECREASES down the group"
   ]},
   {heading:"Method — reactivity and key reactions", points:[
    "Reactivity trend: decreasing ease of forming 1− ions down the group, as radius/shielding increase and attract an incoming electron less strongly",
    "Displacement reactions: a more reactive (smaller) halogen displaces a less reactive one from solution, shown by colour changes",
    "Disproportionation of chlorine: Cl₂ + H₂O → HClO + HCl (water treatment); Cl₂ + 2NaOH (cold, dilute) → NaCl + NaClO + H₂O (bleach)",
    "Chlorine in water treatment: benefit (kills bacteria) weighed against risk (toxic gas, chlorinated hydrocarbon by-products)",
    "Halide tests: aqueous silver nitrate — Cl⁻ white precipitate (dissolves in dilute ammonia), Br⁻ cream (dissolves in concentrated ammonia only), I⁻ yellow (insoluble in ammonia)"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining the trend in boiling point or reactivity of the halogens",
    "Writing/explaining disproportionation equations for chlorine",
    "Describing the silver nitrate test for halide ions, including the ammonia follow-up",
    "Evaluating risks and benefits of chlorinating water"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Oxidising power falls F₂ > Cl₂ > Br₂ > I₂ (E° = +2.87, +1.36, +1.07, +0.54 V). The reduction X₂(g) + 2e⁻ → 2X⁻(aq) can be split into bond enthalpy, electron affinity and hydration enthalpy of X⁻. Fluorine is exceptional because its F–F bond is weak (158 kJ mol⁻¹, lone pair repulsion in a small molecule) and F⁻ has a very exothermic hydration enthalpy (small ion, high charge density), which together outweigh its less exothermic electron affinity.",
    "Halogens form interhalogen compounds (ClF₃, BrF₅, IF₇) and polyhalide ions. Iodine dissolves poorly in water but well in aqueous KI through I₂ + I⁻ ⇌ I₃⁻ (K ≈ 700 at room temperature). The blue-black starch–iodine colour is caused by linear polyiodide chains threaded inside the helix of amylose; it is destroyed on heating and forms only when iodide is present.",
    "Hydrogen halides: HF is a weak acid (pKₐ ≈ 3.2) while HCl, HBr and HI are essentially fully dissociated. HF is weak partly because the H–F bond is much stronger (568 kJ mol⁻¹, against about 299 kJ mol⁻¹ for H–I) and partly because F⁻ strongly hydrogen-bonds to undissociated HF to form HF₂⁻. HF also attacks glass (SiO₂ + 4HF → SiF₄ + 2H₂O), which is why it is stored in plastic.",
    "The reaction of sodium halides with concentrated H₂SO₄ reflects reducing power rising down the group (Cl⁻ < Br⁻ < I⁻): NaCl gives only HCl (not oxidised); NaBr gives HBr and then Br₂ with SO₂ (sulfur +6 → +4); NaI gives I₂ and reduces sulfur further to S and H₂S (down to −2, the largest change). In exam answers, name the sulfur product and state its oxidation-state change.",
    "Chlorine disproportionates in water: Cl₂ + H₂O ⇌ H⁺ + Cl⁻ + HOCl. The active disinfectant is hypochlorous acid HOCl, a weak acid (pKₐ ≈ 7.5), so pool disinfection is most effective at slightly acid pH where more HOCl is undissociated (a better membrane-crossing oxidant than OCl⁻). Chlorination can form harmful by-products such as trihalomethanes with organic matter, so UV and ozone are alternatives.",
    "Oxoacids of chlorine show oxidation states +1 to +7 (HOCl, HClO₂, HClO₃, HClO₄). Acid strength rises with the number of terminal O atoms because they stabilise the anion by delocalising charge: pKₐ about 7.5, 2.0, −1, about −10 for HOCl to HClO₄. Oxidising ability does not simply follow oxidation state; kinetic barriers make perchlorate a sluggish oxidant in cold dilute solution despite its +7 state."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Halogen reactivity decreases down the group (opposite direction to Group 2's increasing reactivity) — don't mix up the two trends",
    "Disproportionation means the SAME element ends up with two different oxidation numbers in the products — state both to prove it",
    "Always follow the silver halide test with ammonia solubility, since white/cream precipitates can look similar",
    "Complex chemistry with ammonia beyond simple observations isn't required — stick to describing what you see"
   ]}
  ]},
  {title:"Qualitative Analysis: Tests for Ions", group:"Module 3: Periodic Table and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Anion test order: carbonate, then sulfate, then halide (since BaCO₃ and Ag₂SO₄ are also insoluble — this order avoids false positives)",
    "Carbonate: add dilute acid — effervescence, CO₂ (turns limewater cloudy)",
    "Sulfate: add acidified aqueous barium chloride/nitrate — white precipitate of BaSO₄",
    "Halide: add acidified aqueous silver nitrate — Cl⁻ white, Br⁻ cream, I⁻ yellow precipitate"
   ]},
   {heading:"Method — cation tests", points:[
    "Ammonium: warm with aqueous NaOH — ammonia gas released (turns damp red litmus blue)",
    "With NaOH (dropwise then excess): Cu²⁺ blue precipitate (insoluble in excess); Fe²⁺ green (insoluble in excess, browns on standing as it oxidises to Fe³⁺); Fe³⁺ orange/brown (insoluble in excess); Mn²⁺ light brown/off-white; Cr³⁺ grey-green — DISSOLVES in excess NaOH to a green solution ([Cr(OH)₆]³⁻)",
    "With excess aqueous ammonia: Cu²⁺ blue precipitate dissolves in excess to a deep blue solution; Cr³⁺ similarly dissolves in excess"
   ]},
   {heading:"Common exam question types", points:[
    "Identifying an unknown ionic compound from a sequence of observations",
    "Predicting the observation for a given transition metal ion + NaOH or ammonia",
    "Writing ionic equations for precipitation reactions",
    "Explaining why the correct anion TEST ORDER matters"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Precipitation is controlled by the solubility product. A solid forms when the ionic product Q = [M⁺][X⁻] exceeds Ksp. For BaSO₄ (Ksp = 1.1×10⁻¹⁰ mol² dm⁻⁶) the solubility is √Ksp = 1.0×10⁻⁵ mol dm⁻³, about 2.4 mg per dm³, which is why the Ba²⁺/sulfate test is so sensitive. A common ion (extra Ba²⁺) lowers the solubility further.",
    "Why silver halides dissolve differently in ammonia: Ag⁺ forms the complex [Ag(NH₃)₂]⁺ with Kstab ≈ 1.1×10⁷. The equilibrium constant for AgX + 2NH₃ ⇌ [Ag(NH₃)₂]⁺ + X⁻ is Ksp × Kstab. For AgCl (Ksp 1.8×10⁻¹⁰) this is 2×10⁻³, large enough to dissolve in dilute NH₃; AgBr (5.4×10⁻¹³) gives 6×10⁻⁶ so it needs concentrated NH₃; AgI (8.5×10⁻¹⁷) gives 9×10⁻¹⁰ so it does not dissolve.",
    "Amphoteric hydroxides dissolve in excess alkali because the metal ion is a Lewis acid that accepts more OH⁻ as ligands: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (or [Al(OH)₄(H₂O)₂]⁻). Cu(OH)₂ dissolves in excess ammonia because NH₃ is a better ligand than H₂O, replacing four waters to give the deep blue [Cu(NH₃)₄(H₂O)₂]²⁺ (ligand exchange: the ammine complex is the more stable one).",
    "Test order matters. A carbonate test is done before a sulfate test, because BaCO₃ also precipitates (it is dissolved by dilute HCl but BaSO₄ is not). Silver nitrate for halides is added only after acidifying with HNO₃, which removes CO₃²⁻ and OH⁻ that would otherwise give a white or brown precipitate of Ag₂CO₃ or Ag₂O and so a false positive. Never use HCl (adds Cl⁻) or H₂SO₄ (adds sulfate) as the acid for these tests.",
    "Colours also record redox changes. Fe(OH)₂ is pale green but oxidises in air to red-brown Fe(OH)₃, because Fe³⁺ hydroxide is so insoluble that it makes Fe²⁺ much easier to oxidise in alkaline solution than in acid. The colours of transition metal precipitates and solutions come from d–d electronic transitions, which is the subject of crystal field theory in the Transition Elements topic.",
    "Modern analysis rarely uses wet chemistry. ICP-OES and ICP-MS atomise a sample in an argon plasma at about 6000–10 000 K and detect element-specific emission or mass, down to parts per trillion for ICP-MS; ion chromatography separates and quantifies anions; XRF identifies elements in solid samples non-destructively. The A-level tests remain useful because they illustrate the underlying equilibria and are quick and cheap."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: why does AgCl dissolve in 1.0 mol dm⁻³ NH₃ but AgI not? → AgCl + 2NH₃ ⇌ [Ag(NH₃)₂]⁺ + Cl⁻ has K = Ksp × Kstab = (1.8×10⁻¹⁰)(1.1×10⁷) = 2.0×10⁻³. If s mol dm⁻³ dissolves, K = s² ÷ (1 − 2s)², so √K = 0.0445 = s ÷ (1 − 2s), giving s = 0.041 mol dm⁻³, which is easily visible as the solid dissolves. For AgI, K = 9.4×10⁻¹⁰, √K = 3.1×10⁻⁵, so s is only about 3×10⁻⁵ mol dm⁻³: effectively insoluble."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Learn precipitate colours and excess-reagent behaviour as a fixed table: Cu²⁺ blue, Fe²⁺ green, Fe³⁺ orange/brown, Mn²⁺ light brown, Cr³⁺ grey-green (uniquely dissolves in excess NaOH)",
    "Always acidify silver nitrate/barium chloride tests first, to remove other ions that would give a false-positive precipitate",
    "Fe²⁺ hydroxide slowly oxidises in air to Fe³⁺ hydroxide (green precipitate developing a brown tinge on standing) — a classic observation question",
    "Don't confuse 'insoluble in excess' (most transition metal hydroxides) with 'dissolves in excess' (only Cr(OH)₃ with NaOH; Cu(OH)₂/Cr(OH)₃ with ammonia)"
   ]}
  ]},
  {title:"Reaction Rates & Catalysts", group:"Module 3: Periodic Table and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Simple collision theory: reactions occur only when particles collide with at least the activation energy and the correct orientation",
    "Increasing concentration (or pressure for gases) increases rate by increasing collision frequency",
    "Reaction rate can be calculated from the gradient of a graph of a measured quantity (concentration, gas volume, mass) against time"
   ]},
   {heading:"Method — catalysts and the Boltzmann distribution", points:[
    "A catalyst increases rate without being used up, by providing an alternative pathway with lower activation energy (a lower peak on an enthalpy profile diagram)",
    "Homogeneous catalysts share the phase of the reactants; heterogeneous catalysts are in a different phase",
    "Catalysts matter economically/environmentally: lower required temperatures reduce energy demand and CO₂ emissions — weighed against toxicity of some catalysts",
    "The Boltzmann distribution shows the spread of molecular energies; only molecules exceeding activation energy can react on collision",
    "Higher temperature shifts the distribution so more molecules exceed activation energy (faster rate); a catalyst lowers the activation energy needed, without changing the distribution itself"
   ]},
   {heading:"Common exam question types", points:[
    "Sketching/interpreting Boltzmann distribution curves at different temperatures, marking activation energy with/without a catalyst",
    "Explaining the effect of concentration, temperature or a catalyst using collision theory/the Boltzmann distribution",
    "Calculating rate from a graph's gradient",
    "Discussing the economic/environmental importance of catalysts"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The Arrhenius equation k = A·exp(−Eₐ/RT) gives ln k = ln A − Eₐ/(RT), so a plot of ln k against 1/T is a straight line with gradient −Eₐ/R. From two temperatures, ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂). The exp(−Eₐ/RT) factor is the Boltzmann fraction of collisions with energy of at least Eₐ, and A (the pre-exponential factor) contains collision frequency and an orientation (steric) factor.",
    "Transition state theory (Eyring) gives a deeper picture: k = (kBT ÷ h)·exp(−ΔG‡/RT) = (kBT ÷ h)·exp(ΔS‡/R)·exp(−ΔH‡/RT), where ΔG‡, ΔH‡ and ΔS‡ are the free energy, enthalpy and entropy of activation. A very negative ΔS‡ (an ordered transition state, as in SN2 or in bimolecular steps) slows a reaction even if the energy barrier is modest.",
    "Integrated rate laws: zero order [A] = [A]₀ − kt; first order [A] = [A]₀·exp(−kt), i.e. ln[A] = ln[A]₀ − kt, with constant half-life t½ = ln 2 ÷ k; second order 1 ÷ [A] = 1 ÷ [A]₀ + kt, with half-life that doubles as concentration falls. A constant half-life is the signature of first-order kinetics (radioactive decay, many drug eliminations). Pseudo-first-order conditions (one reagent in large excess) simplify analysis.",
    "Mechanisms must be consistent with the rate equation but can never be proved by it. The steady-state approximation assumes the concentration of a reactive intermediate stays constant (d[I]/dt ≈ 0). Orders can be non-integer or change with concentration (Lindemann unimolecular reactions, enzyme saturation), and the rate-determining step is the slowest step only when the steps are sequential and the earlier steps are irreversible or fast pre-equilibria.",
    "Catalysts lower Eₐ by providing an alternative pathway but do not change ΔG or the equilibrium constant, so they speed forward and reverse reactions equally. Heterogeneous catalysis proceeds through adsorption, surface reaction and desorption (Langmuir adsorption model, as in the Haber process on iron and car catalytic converters on Pt/Pd/Rh); homogeneous catalysis occurs in a single phase (Fe³⁺ in I⁻/S₂O₈²⁻); autocatalysis occurs when a product is the catalyst (Mn²⁺ in MnO₄⁻/C₂O₄²⁻ titrations).",
    "Fast reactions are studied by stopped-flow mixing (milliseconds), flash photolysis (Norrish and Porter, Nobel 1967) and femtochemistry using ultrashort laser pulses (Zewail, Nobel 1999), which watch bonds break and form in real time. Colorimetry follows reactions through the Beer–Lambert law A = εcl, and iodine-clock reactions give a sharp colour change after a time inversely proportional to the initial rate."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: the rate of a reaction doubles when the temperature rises from 298 K to 308 K. Estimate Eₐ. → ln 2 = (Eₐ ÷ 8.314)(1 ÷ 298 − 1 ÷ 308) = (Eₐ ÷ 8.314)(1.0896×10⁻⁴), so Eₐ = 0.6931 × 8.314 ÷ 1.0896×10⁻⁴ = 52.9 kJ mol⁻¹. This is why 'rate doubles per 10 K' is a good rule of thumb for reactions with Eₐ near 50 kJ mol⁻¹ at room temperature, but not for all reactions.",
    "Worked example: the rate constant of a reaction is 2.0×10⁻³ s⁻¹ at 300 K and 1.6×10⁻² s⁻¹ at 320 K. Find Eₐ and the half-life at 300 K (first order). → ln(k₂/k₁) = ln 8 = 2.079; (1 ÷ 300 − 1 ÷ 320) = 2.083×10⁻⁴ K⁻¹; Eₐ = 8.314 × 2.079 ÷ 2.083×10⁻⁴ = 83.0 kJ mol⁻¹. t½ = ln 2 ÷ k = 0.6931 ÷ 2.0×10⁻³ = 347 s."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "A catalyst shifts WHERE the activation energy line sits (lowers it) — it does NOT shift the Boltzmann distribution curve itself, a common diagram mistake",
    "Higher temperature both shifts the whole distribution right AND flattens/spreads it — mention both, not just 'molecules move faster'",
    "State the catalyst mechanism precisely: an alternative pathway with lower activation energy, not just 'catalysts speed things up'",
    "Don't confuse rate of reaching equilibrium (affected by catalysts/temperature) with position of equilibrium (only affected by temperature)"
   ]}
  ]},
  {title:"Alkenes & Reaction Mechanisms", group:"Module 4: Core Organic Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "General formula CₙH₂ₙ; alkenes are unsaturated hydrocarbons containing at least one C=C double bond",
    "E/Z isomerism arises when each carbon of the C=C has two different groups attached — assign priority using CIP rules (higher atomic number = higher priority); Z = higher-priority groups on the same side, E = opposite sides",
    "The C=C is a region of high electron density (one σ and one π bond), making it attractive to electrophiles",
    "Test for C=C: shake with orange bromine water — it decolourises to become colourless"
   ]},
   {heading:"Mechanism — electrophilic addition", points:[
    "With a symmetrical reagent (Br₂): the alkene's π electrons attack the electrophile, polarising the Br–Br bond; a bromonium/carbocation intermediate forms; Br⁻ then attacks the carbocation from the other side",
    "With an unsymmetrical reagent (HBr): H⁺ (electrophile) is attacked by the π bond, forming a carbocation; Markovnikov's rule says H adds to the carbon with more hydrogens already attached, because this goes via the more stable carbocation (tertiary > secondary > primary, due to inductive electron donation from alkyl groups)",
    "Peroxide effect: with peroxides present, HBr adds via a free-radical mechanism instead, giving the anti-Markovnikov product — this does NOT apply to HCl or HI",
    "Hydration: alkene + steam, catalysed by concentrated phosphoric acid, gives an alcohol (industrial route to ethanol)",
    "Hydrogenation: alkene + H₂ with a nickel catalyst gives an alkane (used to harden vegetable oils into margarine)",
    "Addition polymerisation: many alkene monomers join by opening their C=C bonds to form a long saturated polymer chain — draw the repeat unit in square brackets with the bond continuing through each side"
   ]},
   {heading:"Common exam question types", points:[
    "Drawing full curly-arrow mechanisms for electrophilic addition (symmetrical and unsymmetrical reagents)",
    "Predicting and explaining the major product using carbocation stability",
    "Drawing a polymer repeat unit from a given monomer, or identifying the monomer from a polymer section",
    "Explaining E/Z isomerism and assigning E/Z using priority rules"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Frontier orbital view: the C=C π bond is the highest occupied molecular orbital (HOMO) and is exposed above and below the molecular plane, which is why alkenes act as nucleophiles toward electrophiles. The electrophile accepts the π electrons into an empty orbital. Mechanism arrows describe electron-pair movement, so they start at a lone pair or bond (the source) and point to where the pair ends up.",
    "Bromine addition goes through a cyclic bromonium ion, not a free carbocation. Br⁺ is delivered to one face of the double bond, giving a three-membered ring; Br⁻ can then only attack from the opposite face, so the two Br atoms add anti (trans). Cyclohexene gives trans-1,2-dibromocyclohexane. In bromine water, water outcompetes Br⁻ as the nucleophile and gives a bromohydrin, evidence for the intermediate.",
    "Markovnikov's rule is explained by carbocation stability: tertiary > secondary > primary. Alkyl groups stabilise the empty p orbital by the inductive effect and by hyperconjugation (overlap of neighbouring σ C–H bonds with the empty p orbital). Carbocations are planar, so a nucleophile attacks either face and a chiral carbon is formed as a racemic mixture. Carbocations can rearrange by 1,2-hydride or methyl shifts to a more stable ion, which is why HBr adds to 3-methylbut-1-ene to give mainly 2-bromo-2-methylbutane.",
    "Alkene stability is measured by enthalpy of hydrogenation: but-1-ene −127, cis-but-2-ene −120 and trans-but-2-ene −116 kJ mol⁻¹. A smaller released energy means a more stable alkene. More substituted double bonds are more stable (hyperconjugation), and trans beats cis because of less steric strain. The same logic gives Zaitsev's rule for elimination and underlies the anomalously low hydrogenation enthalpy of benzene.",
    "Industrial hydration of ethene, C₂H₄ + H₂O ⇌ C₂H₅OH, is exothermic (ΔH = −45.7 kJ mol⁻¹) but entropy-disfavoured because two gas molecules combine into one (ΔS = −125.7 J K⁻¹ mol⁻¹). ΔG changes sign at T = ΔH ÷ ΔS = 364 K, so at the 570 K used in industry K is tiny and conversion per pass is only about 5%. Unreacted ethene is recycled, and high pressure and phosphoric acid on silica make it economic.",
    "Polymerisation is controlled by the catalyst. Free-radical polymerisation at high pressure gives branched low-density polyethylene; Ziegler–Natta catalysts (TiCl₄ with Al(C₂H₅)₃, Nobel Prize 1963) give linear, high-density polyethylene and stereoregular isotactic polypropylene, with strong crystalline packing. Other alkene reactions at degree level include epoxidation with peracids, ozonolysis to carbonyls and olefin metathesis (Grubbs, Nobel 2005)."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: show why industrial ethene hydration gives a low equilibrium conversion at 573 K. → ΔH = (−235.1) − (+52.4 + (−241.8)) = −45.7 kJ mol⁻¹; ΔS = 282.7 − (219.6 + 188.8) = −125.7 J K⁻¹ mol⁻¹. At 573 K: ΔG = −45 700 − 573(−125.7) = +26 300 J mol⁻¹. K = exp(−ΔG ÷ RT) = exp(−26 300 ÷ (8.314 × 573)) = exp(−5.53) = 0.004 (in bar⁻¹). The equilibrium lies to the left; at 298 K, ΔG = −8.2 kJ mol⁻¹ and K ≈ 28, but the reaction is far too slow to use."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Curly arrows must start from the middle of the π bond (or a lone pair), never from an atom or a positive charge — arrows show movement of electron pairs",
    "Always draw and label the carbocation intermediate explicitly, and explain WHY it forms preferentially (more alkyl groups = more inductive electron donation = more stable positive charge)",
    "Remember the peroxide effect is an exception specific to HBr — don't apply it to HCl/HI additions",
    "For polymer questions, the repeat unit must show the bond extending past both ends of the brackets, and the C=C must have become a C–C single bond"
   ]}
  ]},
  {title:"Alcohols", group:"Module 4: Core Organic Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "Alcohols (R-OH) are polar; hydrogen bonding with water explains their solubility and relatively low volatility compared with similarly-sized alkanes",
    "Classified as primary (OH carbon attached to 1 other carbon), secondary (2 others), or tertiary (3 others) — this classification decides oxidation behaviour"
   ]},
   {heading:"Method — reactions of alcohols", points:[
    "Combustion: alcohols burn in oxygen to CO₂ and H₂O",
    "Oxidation with Cr₂O₇²⁻/H⁺ (K₂Cr₂O₇/H₂SO₄, equations use [O]): primary alcohols → aldehydes (gentle heat, distil off immediately) → further to carboxylic acids (reflux, excess oxidant); secondary alcohols → ketones only; tertiary alcohols resist oxidation entirely",
    "Elimination: alcohol + acid catalyst (conc. H₃PO₄/H₂SO₄) + heat → alkene + H₂O (mechanism not required)",
    "Substitution: alcohol + halide ion in acid (e.g. NaBr/H₂SO₄) → haloalkane (mechanism not required)"
   ]},
   {heading:"Common exam question types", points:[
    "Predicting the oxidation product of a 1°/2°/3° alcohol and the conditions needed to control it",
    "Writing equations for combustion, oxidation, elimination and substitution of alcohols",
    "Explaining the volatility/solubility difference between alcohols and alkanes via hydrogen bonding",
    "Identifying an alcohol from a reaction sequence using its oxidation products"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Alcohols are very weak acids (ethanol pKₐ ≈ 16, similar to water). They react with sodium to give alkoxides (2C₂H₅OH + 2Na → 2C₂H₅O⁻Na⁺ + H₂), which are strong bases and nucleophiles (Williamson ether synthesis). Phenol (pKₐ ≈ 10) is far more acidic because its anion is stabilised by delocalising the negative charge into the ring; tertiary alcohols are less acidic than primary because the bulky alkyl groups hinder solvation of the anion.",
    "Chromic acid oxidation first forms a chromate ester R₂CH–O–CrO₃H, then a base removes the hydrogen on the carbon bearing oxygen in an elimination-like step, giving C=O and Cr(IV). Tertiary alcohols have no such hydrogen, so they are not oxidised. To stop at an aldehyde, either distil it out as it forms or use a milder reagent such as PCC (pyridinium chlorochromate) or the Dess–Martin periodinane.",
    "–OH is a poor leaving group (it would leave as strongly basic OH⁻), so it must be activated: protonation (ROH₂⁺ leaves as water, in HBr or HI reactions), conversion to a tosylate (ROTs, a very good leaving group formed without breaking the C–O bond, so the carbon's stereochemistry is retained), or SOCl₂, which gives RCl with SO₂ and HCl as gases that escape and drive the reaction. The Lucas test (ZnCl₂/HCl) separates alcohols by SN1 rate: tertiary reacts at once (cloudy), secondary in minutes, primary not at room temperature.",
    "Dehydration by concentrated acid goes by E1 for secondary and tertiary alcohols: protonation, loss of water to give a carbocation, and loss of H⁺ from an adjacent carbon. Zaitsev's rule predicts the more substituted alkene as the major product (more stable). Temperature controls the outcome for ethanol: about 170 °C gives ethene (elimination), while about 140 °C with excess alcohol gives diethyl ether (intermolecular SN2).",
    "Ethanol can be made by fermentation (yeast zymase, C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂) or by hydration of ethene. Fermentation has an atom economy of only 51% (2 × 46.07 ÷ 180.16), is a slow batch process and the solution stops at about 15% ethanol because ethanol kills the yeast, so it needs fractional distillation. Hydration is 100% atom economical and continuous but uses fossil-derived ethene. 'Carbon neutral' claims for bioethanol ignore fertiliser, land use and distillation energy.",
    "Spectroscopy and bonding: the O–H stretch is broad at 3200–3550 cm⁻¹ in the liquid because hydrogen bonding gives a spread of bond strengths, but sharp near 3600 cm⁻¹ in dilute solution or gas where it is free. In ¹H NMR the O–H proton appears at a variable shift, and it disappears when the sample is shaken with D₂O because the proton exchanges for deuterium, which is a standard way of proving it is an O–H."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: the atom economy of ethanol by fermentation of glucose. → C₆H₁₂O₆ (180.16) → 2C₂H₅OH (2 × 46.07 = 92.14) + 2CO₂. Atom economy = 92.14 ÷ 180.16 × 100 = 51.1%. For hydration, C₂H₄ + H₂O → C₂H₅OH is a single product so the atom economy is 100%."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Reaction conditions control the primary alcohol oxidation product: gentle heat + distil immediately = aldehyde; reflux + excess oxidant = carboxylic acid",
    "Tertiary alcohols can't be oxidised because there's no H on the carbon attached to OH — always give this specific reason",
    "Use [O] in oxidation equations as required, rather than the full dichromate formula each time",
    "Elimination and substitution mechanisms are explicitly NOT required for alcohols — reagents/conditions/products only"
   ]}
  ]},
  {title:"Haloalkanes", group:"Module 4: Core Organic Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "The C-halogen bond is polar (δ+ on carbon), making the carbon susceptible to nucleophilic attack",
    "Nucleophile: an electron pair donor (e.g. OH⁻, CN⁻, NH₃, water)"
   ]},
   {heading:"Method — substitution & environmental chemistry", points:[
    "Hydrolysis by aqueous alkali (OH⁻ nucleophile, forms an alcohol) or by water with AgNO₃/ethanol (compares hydrolysis rates of different C-halogen bonds via how fast a precipitate forms)",
    "Nucleophilic substitution mechanism (primary haloalkane + aqueous alkali): OH⁻ lone pair attacks the δ+ carbon opposite the halogen, the C-halogen bond breaks heterolytically",
    "Hydrolysis rate: C-I fastest → C-Cl slowest, explained by decreasing bond enthalpy down the group (weakest bond breaks easiest) — NOT by bond polarity, which actually decreases the opposite way",
    "CFCs release Cl radicals under UV in the upper atmosphere, catalytically breaking down ozone: Cl• + O₃ → ClO• + O₂, then ClO• + O → Cl• + O₂ (chlorine radical regenerated, so a little destroys a lot of ozone)"
   ]},
   {heading:"Common exam question types", points:[
    "Drawing the nucleophilic substitution mechanism for a primary haloalkane with aqueous alkali",
    "Explaining the hydrolysis rate trend using bond enthalpy",
    "Writing/interpreting radical equations for ozone depletion by CFCs",
    "Describing the silver nitrate/ethanol method for comparing hydrolysis rates"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "SN2 is a single concerted step with rate = k[RX][Nu⁻]. The nucleophile attacks the carbon from the side opposite to the leaving group (backside attack into the C–X σ* antibonding orbital), through a trigonal bipyramidal transition state, so the configuration is inverted (Walden inversion). SN1 is two steps with rate = k[RX]: the slow ionisation gives a planar carbocation, which is attacked from either face, giving racemisation (usually with a slight excess of inversion because of ion pairing).",
    "Structure decides the mechanism. Methyl and primary haloalkanes favour SN2 (little steric hindrance); tertiary favour SN1 (stable carbocation, crowded transition state for SN2); secondary can go either way depending on solvent and nucleophile. Neopentyl halides are very slow in SN2 despite being primary because the adjacent tert-butyl group blocks backside attack. Relative SN2 rates fall in the order methyl > primary > secondary >> tertiary.",
    "Solvent effects: polar protic solvents (water, ethanol) stabilise ions and the leaving group through hydrogen bonding, which speeds SN1 but blunts SN2 by caging the nucleophile. Polar aprotic solvents (DMSO, DMF, propanone) solvate cations but leave anions 'naked' and more reactive, which speeds SN2. Leaving-group ability follows I⁻ > Br⁻ > Cl⁻ >> F⁻, matching C–X bond enthalpies (C–I 228, C–Br 290, C–Cl 346, C–F 467 kJ mol⁻¹) and the strength of the conjugate acid.",
    "Substitution competes with elimination. Hot ethanolic KOH, strong or bulky bases (potassium tert-butoxide) and tertiary substrates favour E2, a one-step process requiring the H and the leaving group to be anti-periplanar. A small, unhindered base removes the more substituted (more stable, Zaitsev) alkene; bulky bases favour the less substituted (Hofmann) alkene. Cold aqueous OH⁻ favours substitution. Elimination is favoured by entropy, so higher temperature favours it further.",
    "CFCs destroy ozone by a radical chain reaction. UV in the stratosphere breaks C–Cl bonds homolytically: CCl₂F₂ → •CClF₂ + Cl•. Then Cl• + O₃ → ClO• + O₂ and ClO• + O → Cl• + O₂, regenerating the chlorine radical, so one Cl• can destroy on the order of 10⁵ ozone molecules before a termination step. The Montreal Protocol (1987) phased CFCs out; replacement HFCs do not contain chlorine but are potent greenhouse gases, so hydrofluoroolefins are replacing them.",
    "Haloalkanes make carbon–carbon bonds through organometallics: RBr + Mg in dry ether gives a Grignard reagent RMgBr, in which the carbon is δ⁻ (polarity reversed from the δ⁺ carbon in RBr). It attacks the carbonyl carbon of aldehydes and ketones to give alcohols, and CO₂ to give carboxylic acids. It must be made in water-free conditions because RMgBr is a very strong base and is destroyed by water to give the alkane."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Hydrolysis rate is explained by BOND ENTHALPY, not bond polarity — polarity decreases from C-F to C-I, the opposite trend to reactivity; a very common mix-up",
    "In the mechanism, the nucleophile attacks from the side opposite the leaving halogen — show the curly arrow from the OH⁻ lone pair",
    "In the ozone equations, notice Cl• is regenerated at the end — this is what makes it act as a catalyst, not a reactant used up",
    "Ethanol in the silver nitrate test dissolves both the organic haloalkane and the aqueous silver nitrate so they can react — mention this if asked why it's used"
   ]}
  ]},
  {title:"IR Spectroscopy & Mass Spectrometry", group:"Module 4: Core Organic Chemistry", sections:[
   {heading:"Core definitions & key equations", points:[
    "IR radiation causes covalent bonds to vibrate more and absorb energy at characteristic wavenumbers (cm⁻¹), specific to the bond and its environment",
    "Key absorptions: O-H (alcohol), C=O (aldehyde/ketone/carboxylic acid), broad O-H (carboxylic acid, distinct from an alcohol's O-H), C-H (~3000 cm⁻¹, in almost all organics)",
    "Mass spectrometry: the molecular ion peak (M⁺) has the highest m/z (aside from a small M+1 peak from carbon-13) and gives the molecular mass directly"
   ]},
   {heading:"Method — using and interpreting spectra", points:[
    "IR data is provided on the data sheet in exams — you interpret given data rather than memorising exact ranges",
    "A carboxylic acid shows BOTH a C=O peak AND a broad O-H peak, distinguishing it from an aldehyde/ketone (C=O only) or alcohol (O-H only)",
    "Fragmentation peaks below the molecular ion can identify structural parts — each fragment's m/z corresponds to the mass of that piece",
    "IR spectroscopy monitors atmospheric gases linked to global warming and measures ethanol in breathalysers; combined with elemental analysis it helps deduce unknown structures"
   ]},
   {heading:"Common exam question types", points:[
    "Identifying functional groups from a described or given IR spectrum",
    "Using the molecular ion peak to find molecular mass, and identifying fragments from m/z",
    "Combining elemental analysis, mass spec and IR data to deduce an unknown structure",
    "Explaining the link between IR-absorbing gases and the greenhouse effect"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "IR absorption occurs when the frequency of the radiation matches a vibration whose dipole moment changes. Homonuclear diatomics (N₂, O₂) have no dipole change and are IR-inactive, which is why they are not greenhouse gases, while CO₂ (asymmetric stretch about 2350 cm⁻¹, bend about 667 cm⁻¹), CH₄ and H₂O absorb outgoing infrared and trap heat. The wavenumber = 1 ÷ λ, in cm⁻¹, is proportional to frequency and energy.",
    "Hooke's law treats a bond as a spring: wavenumber = (1 ÷ 2πc)√(k ÷ μ), where k is the force constant (bond strength) and μ the reduced mass m₁m₂ ÷ (m₁ + m₂). Stronger bonds (higher k) and lighter atoms (smaller μ) absorb at higher wavenumber. This explains C≡C (about 2100–2260) > C=C (about 1650) > C–C (below 1300) and why O–H and N–H (3200–3600) are higher than C–H (about 3000).",
    "Modern IR spectrometers are Fourier-transform (FTIR): an interferometer measures all frequencies at once and a Fourier transform converts the interferogram to a spectrum, giving faster scans and better signal-to-noise. Attenuated total reflectance (ATR) lets liquids and solids be measured with no sample preparation. The fingerprint region (below about 1500 cm⁻¹) is unique to each compound, so spectra can be matched against a library.",
    "Electron-impact mass spectrometry bombards molecules with 70 eV electrons, giving a molecular ion M⁺• (a radical cation) that fragments into the most stable cations: tertiary carbocations, acylium ions R–C≡O⁺ (m/z 43 for CH₃CO⁺), resonance-stabilised benzyl/tropylium ions (m/z 91) and ions formed by α-cleavage next to C=O. Only charged fragments are detected. The nitrogen rule says that a molecule with an odd mass M must contain an odd number of nitrogen atoms.",
    "Isotope patterns carry formula information. Chlorine gives M and M+2 peaks in a 3:1 ratio and bromine 1:1 (³⁵Cl:³⁷Cl ≈ 3:1; ⁷⁹Br:⁸¹Br ≈ 1:1). The M+1 peak from ¹³C (1.1% natural abundance) lets you estimate the number of carbons: n(C) ≈ (M+1 height ÷ M height) ÷ 0.011. High-resolution MS measures exact mass to 4+ decimal places, separating CO (27.9949), N₂ (28.0061) and C₂H₄ (28.0313), all 'm/z 28' at A-level.",
    "Degrees of unsaturation (double-bond equivalents) = (2C + 2 + N − H − X) ÷ 2 where C, H, N and X are the numbers of carbon, hydrogen, nitrogen and halogen atoms. C₄H₈O₂ gives (8 + 2 − 8) ÷ 2 = 1, so one C=O or ring. Combine techniques: MS gives M and the formula, IR identifies functional groups, ¹³C NMR counts distinct carbon environments and ¹H NMR gives environments (chemical shift δ in ppm relative to TMS), proton count (integration) and neighbours (the n + 1 splitting rule). Chromatography is coupled to MS (GC-MS, LC-MS) to analyse mixtures such as drugs in blood or contaminants in food."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: estimate the C=O stretching wavenumber using Hooke's law. Take k = 1200 N m⁻¹ and μ = (12.000 × 15.995) ÷ (12.000 + 15.995) = 6.856 u = 6.856 × 1.6605×10⁻²⁷ kg = 1.138×10⁻²⁶ kg. → wavenumber = (1 ÷ 2πc)√(k ÷ μ) = (1 ÷ (2π × 2.998×10¹⁰ cm s⁻¹)) × √(1200 ÷ 1.138×10⁻²⁶) = 1724 cm⁻¹, in good agreement with the measured 1680–1750 cm⁻¹ for carbonyls. Using k = 500 N m⁻¹ for C–H with μ = 0.93 u gives 3020 cm⁻¹, matching the typical 2850–3100 cm⁻¹ band."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Distinguish a carboxylic acid from an aldehyde/ketone/alcohol by needing BOTH C=O and a broad O-H, not either alone",
    "Mass spectra of organic halogen compounds are NOT required — you won't interpret isotope patterns for Cl/Br",
    "The M+1 peak is a small peak one unit higher, from natural carbon-13 — it isn't a different compound",
    "Deduce structure systematically: mass from mass spec, functional groups from IR, then build a structure consistent with all the evidence and the molecular formula"
   ]}
  ]},
  {title:"Equilibrium: Kc & Kp", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Core definitions & key equations", points:[
    "Dynamic equilibrium: forward and reverse reaction rates are equal, so concentrations of reactants/products stay constant — but reactions are still happening in both directions, in a closed system",
    "Kc = [products] each raised to the power of its stoichiometric coefficient ÷ [reactants] each raised to the power of its stoichiometric coefficient, all at equilibrium, using concentrations in mol dm⁻³",
    "Kp uses partial pressures instead, for gas-phase equilibria only; partial pressure of a gas = its mole fraction × total pressure",
    "Units of Kc/Kp depend on the specific equation — derive them each time by cancelling the concentration/pressure units algebraically"
   ]},
   {heading:"Method — Le Chatelier & calculations", points:[
    "Le Chatelier's principle: if a system at equilibrium is disturbed, it shifts to partially oppose the change",
    "Concentration: increasing a reactant's concentration shifts equilibrium towards products (to reduce it back down) — but K itself does NOT change",
    "Pressure (gases only): increasing pressure shifts equilibrium towards the side with fewer gas moles — K does NOT change",
    "Temperature: increasing temperature shifts equilibrium in the endothermic direction — this is the ONLY factor that changes the actual value of K",
    "A catalyst speeds up both forward and reverse reactions equally, reaching equilibrium faster but not shifting its position or changing K",
    "ICE table method for calculating Kc: set up Initial, Change, Equilibrium rows for each species, then substitute equilibrium values into the Kc expression"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating Kc or Kp from given equilibrium concentrations/pressures, including working out units",
    "Predicting the direction of shift when a condition changes, explaining using Le Chatelier",
    "Explaining why K only changes with temperature, contrasting this with the effect of a catalyst",
    "Mole fraction and partial pressure calculations for Kp"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The true thermodynamic equilibrium constant is dimensionless and is written with activities, a = γ × (c ÷ c°), not concentrations. Kc and Kp are approximations that treat activity coefficients γ as 1, which is fine for dilute solutions and low-pressure gases but fails in concentrated electrolytes (Debye–Hückel theory corrects for ionic strength). The 'units of Kc' you work out at A-level come from dropping the standard-state concentration c°.",
    "Equilibrium is set by free energy, not just enthalpy: ΔG = ΔG° + RT ln Q, and at equilibrium ΔG = 0 and Q = K, so ΔG° = −RT ln K and K = exp(−ΔG° ÷ RT). A ΔG° of −5.7 kJ mol⁻¹ at 298 K changes K by a factor of 10. The mixing entropy of reactants and products is why reactions rarely go to 100% completion: the Gibbs energy minimum lies at an intermediate composition.",
    "The van 't Hoff equation, d ln K ÷ dT = ΔH° ÷ RT², gives ln(K₂ ÷ K₁) = −(ΔH° ÷ R)(1 ÷ T₂ − 1 ÷ T₁). It is the quantitative form of Le Chatelier's principle for temperature: K falls with temperature for an exothermic reaction and rises for an endothermic one. A plot of ln K against 1 ÷ T has gradient −ΔH° ÷ R and intercept ΔS° ÷ R, a common way to determine ΔH° and ΔS° experimentally.",
    "Kp and Kc are related by Kp = Kc × (RT) raised to the power Δn, where Δn is the change in moles of gas, since p = cRT for an ideal gas (with consistent units). They are equal when Δn = 0. Partial pressure pᵢ = xᵢ × ptotal (mole fraction times total pressure). A catalyst, a change in pressure or a change in concentration may change the position of equilibrium or the rate of reaching it, but only a change in temperature changes the value of K.",
    "Kinetics and equilibrium are connected: for an elementary reaction, K = kforward ÷ kreverse, because at equilibrium the forward and reverse rates are equal. This is why a catalyst, which speeds both directions by the same factor, cannot change K. It also shows that a reaction mechanism cannot violate the thermodynamic constant: the individual rate constants in a multistep mechanism must multiply to give K overall.",
    "The Haber–Bosch process (Haber, Nobel 1918; Bosch, Nobel 1931) produces about 150 million tonnes of ammonia per year, supports the fertiliser needed to feed roughly half of the world's population and consumes about 1–2% of global energy. It runs at about 450 °C and 200 atm over an iron catalyst promoted with K₂O and Al₂O₃, a compromise between yield (favoured by low temperature, since the reaction is exothermic), rate (favoured by high temperature) and the cost of compression."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: for N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH° = −92.2 kJ mol⁻¹ and ΔS° = −198.7 J K⁻¹ mol⁻¹. Find K at 298 K, then estimate K at 673 K. → ΔG° = −92 200 − 298(−198.7) = −33.0 kJ mol⁻¹. ln K = 32 990 ÷ (8.314 × 298) = 13.32, so K = 6×10⁵ at 298 K. Van 't Hoff: ln(K₂ ÷ K₁) = −(−92 200 ÷ 8.314)(1 ÷ 673 − 1 ÷ 298) = −20.7, so K₂ = 6×10⁵ × exp(−20.7) ≈ 6×10⁻⁴ (assuming a constant ΔH°; measured values at 673 K are nearer 2×10⁻⁴). K falls by about nine orders of magnitude, which is why a compromise temperature is used."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always derive and state the units of Kc/Kp explicitly by cancelling through the expression — don't assume they have no units, since this depends on the equation's stoichiometry",
    "Be precise about the difference between shifting position of equilibrium (concentration/pressure changes) and changing the value of K (temperature only) — conflating these is one of the most common A-level chemistry errors",
    "For Kp questions, double check whether you're given partial pressures directly or need to calculate them from mole fractions and total pressure first",
    "State clearly that a catalyst changes the RATE of reaching equilibrium, not the equilibrium position or K value"
   ]}
  ]},
  {title:"pH, Buffers & Acids/Bases", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Core definitions & key equations", points:[
    "Brønsted–Lowry acid = proton (H⁺) donor; Brønsted–Lowry base = proton acceptor; conjugate acid-base pairs differ by one H⁺",
    "pH = −log₁₀[H⁺]; [H⁺] = 10^(−pH); at 25°C, Kw = [H⁺][OH⁻] = 10⁻¹⁴ mol² dm⁻⁶, so pH + pOH = 14",
    "Strong acids/bases fully dissociate in water; weak acids/bases only partially dissociate, described by Ka (or Kb): Ka = [H⁺][A⁻] ÷ [HA]; pKa = −log₁₀Ka",
    "Buffer solution = a mixture that resists pH changes when small amounts of acid or base are added — made from a weak acid + its conjugate base (or weak base + conjugate acid)"
   ]},
   {heading:"Method — calculations", points:[
    "Strong acid pH: [H⁺] = concentration of acid directly (assuming full dissociation, monoprotic); strong base: find [OH⁻] then use Kw to get [H⁺]",
    "Weak acid pH: [H⁺] = √(Ka × C), valid when dissociation is small (<5%) so the equilibrium concentration of HA ≈ initial concentration",
    "Henderson–Hasselbalch equation for buffers: pH = pKa + log₁₀([A⁻] ÷ [HA]) — used to calculate buffer pH or the ratio of acid:conjugate base needed for a target pH",
    "Buffer action: adding H⁺ shifts the A⁻ + H⁺ ⇌ HA equilibrium to remove most of the added H⁺; adding OH⁻ is neutralised by HA regenerating A⁻ and water — the ratio of HA:A⁻ barely changes, so pH barely changes",
    "Titration curve shapes: strong-strong has a steep vertical section around pH 7; weak acid–strong base has equivalence above pH 7; strong acid–weak base has equivalence below pH 7; weak-weak has no sharp vertical section",
    "Indicator choice: the colour-change range must lie within the steep, vertical part of the titration curve"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating pH of strong/weak acids and bases from given concentrations",
    "Buffer pH calculations, or calculating the mass/volume of a component needed for a target pH",
    "Sketching or interpreting titration curves and choosing a suitable indicator",
    "Explaining buffer action in terms of equilibrium shift"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Strictly, pH = −log₁₀ a(H⁺), the logarithm of hydrogen-ion activity, which is what a glass electrode measures. Kw rises with temperature (1.0×10⁻¹⁴ at 25 °C, about 5.5×10⁻¹³ at 100 °C) because the autoionisation of water is endothermic. At 100 °C a neutral solution has [H⁺] = [OH⁻] = 7.4×10⁻⁷ mol dm⁻³, so neutral pH is 6.13, not 7. 'pH 7 is neutral' holds only at 25 °C.",
    "The Henderson–Hasselbalch equation, pH = pKₐ + log₁₀([A⁻] ÷ [HA]), follows by taking logs of the Kₐ expression. A buffer works best when the ratio of base to acid is between 1:10 and 10:1, so within ±1 pH unit of pKₐ, and has maximum capacity at pH = pKₐ (equal concentrations). Capacity depends on the absolute amounts of buffer, not just the ratio. Blood is buffered by H₂CO₃/HCO₃⁻ (effective pKₐ = 6.1 including dissolved CO₂), so at pH 7.4 the ratio [HCO₃⁻] ÷ [CO₂] = 10 raised to the power 1.3, about 20:1.",
    "The simple formula [H⁺] = √(Kₐc) assumes that very little acid dissociates and the water contribution is negligible. It is reliable when dissociation is under about 5%; otherwise solve the quadratic x² ÷ (c − x) = Kₐ. For very dilute strong acid (10⁻⁸ mol dm⁻³ HCl) the water contribution dominates and the pH is 6.98, not 8, which shows why the 'pH = −log c' formula is not universal.",
    "Polyprotic acids lose protons stepwise with pKₐ₁ < pKₐ₂ < pKₐ₃ (H₃PO₄: 2.15, 7.20, 12.35) because removing H⁺ from an increasingly negative ion is harder. A titration curve has a buffer region around each pKₐ and a steep jump at each equivalence point. In an amino acid the isoelectric point pI is the pH at which the net charge is zero (the zwitterion dominates), the mean of the two pKₐ values either side of the neutral species; proteins are least soluble at their pI, which is used in isoelectric focusing.",
    "Acid strength is explained by the stability of the conjugate base and the strength of the H–X bond. Down Group 17 the H–X bond weakens, so HI is the strongest of the hydrogen halides. In organic acids, carboxylate delocalisation makes RCOOH (pKₐ ≈ 4.8) much stronger than alcohols (≈ 16), and electron-withdrawing groups strengthen it further: ClCH₂COOH has pKₐ 2.87 and CF₃COOH about 0.5. For a conjugate pair, Kₐ × Kb = Kw, so pKₐ + pKb = 14 at 25 °C.",
    "Water levels all stronger acids: in water the strongest acid possible is H₃O⁺, so HCl, HBr, HNO₃ and H₂SO₄ (first proton) all seem equally strong. Beyond that, the Hammett acidity function H₀ describes very acidic non-aqueous media, such as fluoroantimonic acid (H₀ ≈ −28), a superacid that protonates hydrocarbons. Lewis acids (electron-pair acceptors, such as BF₃ and AlCl₃) extend acid–base theory beyond proton transfer and underpin Friedel–Crafts chemistry and complex formation."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: find the pH of 0.010 mol dm⁻³ ethanoic acid (Kₐ = 1.75×10⁻⁵ mol dm⁻³) using both methods. → Approximation: [H⁺] = √(1.75×10⁻⁵ × 0.010) = 4.18×10⁻⁴, pH = 3.38. Quadratic: x² + Kₐx − Kₐc = 0, x = [−Kₐ + √(Kₐ² + 4Kₐc)] ÷ 2 = 4.10×10⁻⁴, pH = 3.39. Dissociation is 4.1%, so the approximation is acceptable (just under the 5% rule).",
    "Worked example: a buffer contains 0.200 mol dm⁻³ ethanoic acid and 0.100 mol dm⁻³ sodium ethanoate; pKₐ = 4.76. Find the pH. → pH = 4.76 + log₁₀(0.100 ÷ 0.200) = 4.76 − 0.30 = 4.46. Adding a small amount of acid converts A⁻ to HA, changing the ratio only slightly, which is why the pH barely moves."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always state the assumption behind [H⁺] = √(Ka × C) explicitly — that dissociation is small enough not to significantly change [HA] — examiners specifically credit this",
    "Don't confuse pKa (a fixed property of the acid) with pH (which depends on concentration and what else is in solution)",
    "At the half-equivalence point of a weak acid titration, pH = pKa exactly — a very commonly tested fact",
    "Remember Kw changes with temperature, so 'pH 7 = neutral' is only strictly true at 25°C"
   ]}
  ]},
  {title:"Entropy & Free Energy", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Core definitions & key equations", points:[
    "Entropy (S) measures the number of ways particles and energy can be arranged — disorder; it increases: solid → liquid → gas, when a solid/liquid dissolves, when moles of gas increase in a reaction, or when temperature rises",
    "ΔS°(system) = ΣS°(products) − ΣS°(reactants), using standard entropy values",
    "ΔS(surroundings) = −ΔH ÷ T (T in kelvin) — an exothermic reaction (ΔH negative) increases the surroundings' entropy",
    "ΔS(total) = ΔS(system) + ΔS(surroundings); a reaction is feasible if ΔS(total) is positive",
    "Gibbs free energy: ΔG = ΔH − TΔS(system); ΔG < 0 means the reaction is feasible — mathematically equivalent to ΔS(total) > 0"
   ]},
   {heading:"Method — working with feasibility", points:[
    "Convert units carefully before combining: ΔH is usually in kJ mol⁻¹, ΔS in J K⁻¹ mol⁻¹ — convert one so the units match before calculating ΔG or ΔS(total)",
    "A reaction with ΔH > 0 can still be feasible if ΔS(system) is sufficiently positive and T is large enough that TΔS outweighs ΔH",
    "Finding the temperature at which a reaction becomes feasible: set ΔG = 0 and rearrange to T = ΔH ÷ ΔS",
    "At A2: ΔG° = −RT ln K links thermodynamics directly to the equilibrium constant — a very negative ΔG° corresponds to a very large K"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating ΔS(system), ΔS(surroundings) and ΔS(total) from given data, then commenting on feasibility",
    "Calculating ΔG and explaining what its sign means for feasibility",
    "Finding the minimum/maximum temperature at which a reaction becomes feasible",
    "Explaining why an endothermic reaction can still occur at a given temperature"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Boltzmann's equation S = kB ln W links entropy to the number of microstates W (distinct arrangements of particles and energy consistent with the same macrostate). Entropy rises when energy can be spread over more quantised levels, which happens with more particles, more volume or more floppy and complex molecules. The third law says S = 0 for a perfect crystal at 0 K, which is why absolute (not just relative) entropy values can be tabulated.",
    "The second law requires ΔStotal = ΔSsystem + ΔSsurroundings > 0 for a spontaneous change, where ΔSsurroundings = −ΔH ÷ T for heat exchanged at constant pressure. Multiplying through by −T gives ΔG = ΔH − TΔSsystem = −TΔStotal. So the Gibbs free energy is just the total entropy change expressed in units of energy for the system alone; ΔG < 0 means total entropy increases.",
    "ΔG° is linked to equilibrium and electrochemistry: ΔG° = −RT ln K = −nFE°. A reaction can be thermodynamically feasible (ΔG < 0) but not happen at an observable rate because of a high activation energy; feasibility says nothing about kinetics. Coupling uses a spontaneous reaction to drive a non-spontaneous one: in cells ATP hydrolysis (ΔG°′ ≈ −30.5 kJ mol⁻¹) is coupled to otherwise endergonic biosynthesis.",
    "The sign of ΔG as a function of temperature gives four cases: ΔH < 0 and ΔS > 0 always spontaneous; ΔH > 0 and ΔS < 0 never; ΔH < 0 and ΔS < 0 spontaneous only below T = ΔH ÷ ΔS; ΔH > 0 and ΔS > 0 spontaneous only above that temperature. A plot of ΔG against T is a straight line with gradient −ΔS and intercept ΔH; the crossing of the T axis is the changeover temperature.",
    "Ellingham diagrams plot ΔG° against T for the formation of oxides per mole of O₂. The line for C + O₂ → CO₂ is nearly flat (ΔS ≈ 0, equal moles of gas), while 2C + O₂ → 2CO slopes downwards (ΔS > 0). Metal extraction works where the carbon line lies below the metal oxide line: iron oxides are reduced by carbon monoxide in the blast furnace, but aluminium oxide needs electrolysis because its line is far lower at any accessible temperature.",
    "Entropy of mixing explains spontaneous mixing of gases and the formation of solutions even with no enthalpy change: ΔSmix = −R Σ nᵢ ln xᵢ (per mole, positive since xᵢ < 1). The chelate effect, the hydrophobic effect and protein folding are largely entropy stories as well. In reactions, the sign of ΔS is usually fixed by the change in moles of gas: each extra mole of gas adds roughly +120 to +150 J K⁻¹ mol⁻¹."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: for N₂ + 3H₂ → 2NH₃, ΔH° = −92.2 kJ mol⁻¹ and ΔS° = −198.7 J K⁻¹ mol⁻¹. Find ΔG° at 298 K and the temperature above which the reaction is no longer feasible under standard conditions. → ΔG° = −92 200 − 298(−198.7) = −33 000 J mol⁻¹ = −33.0 kJ mol⁻¹ (feasible). Changeover T = ΔH ÷ ΔS = −92 200 ÷ −198.7 = 464 K (191 °C). Above this the −TΔS term (positive) outweighs ΔH, which is why an industrial compromise temperature of about 700 K needs very high pressure to compensate."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "The single most common mistake is forgetting the ×1000/÷1000 unit conversion between kJ and J when combining ΔH and ΔS — always check units line up first",
    "'Feasible' (ΔG < 0) does not mean a reaction will actually happen quickly — it says nothing about rate, only whether it's thermodynamically possible",
    "Always show the TΔS term with its correct sign and units explicitly in your working, not just a final number",
    "Entropy of the surroundings depends on temperature (ΔS = −ΔH/T) — a very exothermic reaction at low temperature increases surroundings' entropy the most"
   ]}
  ]},
  {title:"Lattice Enthalpy & Born-Haber Cycles", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Core definitions & key equations", points:[
    "Lattice enthalpy (ΔLEH): enthalpy change when 1 mole of an ionic lattice forms from its gaseous ions — a measure of ionic bond strength (more exothermic = stronger)",
    "Enthalpy of solution (ΔsolH): 1 mole of solute dissolving fully in water; enthalpy of hydration (ΔhydH): 1 mole of gaseous ions dissolving in water",
    "Born-Haber energy terms: enthalpy of formation, ionisation energy, enthalpy of atomisation, and electron affinity (1st EA exothermic; 2nd EA, e.g. for O²⁻, is endothermic — adding an electron to an already-negative ion repels)"
   ]},
   {heading:"Method — constructing and using cycles", points:[
    "Born-Haber cycle: builds a compound from elements via two routes — directly (enthalpy of formation) or step-by-step (atomisation, ionisation, electron affinity, lattice enthalpy) — Hess's Law equates the two routes to find the unknown value",
    "Enthalpy of solution cycle: dissolving directly (ΔsolH) vs breaking the lattice into gaseous ions (reverse lattice enthalpy) then hydrating them (ΔhydH) — equated by Hess's Law",
    "Higher ionic charge or smaller ionic radius gives a MORE exothermic lattice enthalpy and hydration enthalpy — stronger attraction at shorter distance/more charge"
   ]},
   {heading:"Common exam question types", points:[
    "Constructing a full Born-Haber cycle and calculating an unknown value (usually lattice enthalpy)",
    "Constructing an enthalpy of solution cycle using lattice and hydration enthalpies",
    "Explaining the effect of ionic charge/radius on lattice or hydration enthalpy magnitude",
    "Explaining why a theoretical lattice enthalpy might differ from an experimental one (some covalent character)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The Born–Landé equation calculates lattice energy from an electrostatic model: U = (NA M z⁺z⁻e² ÷ 4πε₀r₀)(1 − 1 ÷ n), where M is the Madelung constant (a geometric sum over the whole lattice, 1.7476 for NaCl), r₀ is the nearest-neighbour distance and n is the Born exponent (about 8–12) that accounts for short-range repulsion. It shows that lattice enthalpy scales with charge product z⁺z⁻ and inversely with ionic separation, exactly as A-level states qualitatively.",
    "For NaCl, with r₀ = 282 pm, M = 1.7476 and n = 9, Born–Landé gives about 765 kJ mol⁻¹, against about 787 kJ mol⁻¹ from the Born–Haber cycle, an excellent agreement that supports the ionic model. The Kapustinskii equation estimates lattice energy from ionic radii and total ion charges alone (no structure needed) and gives about 750 kJ mol⁻¹ for NaCl; it is used to predict lattice energies for compounds with unknown structure.",
    "Disagreement between the experimental (Born–Haber) and theoretical (ionic model) values measures covalent character. Silver halides: AgCl 905 vs 833, AgBr 891 vs 818 and AgI 889 vs 778 kJ mol⁻¹ (experimental vs calculated), the gap widening as the large, polarisable I⁻ is distorted by the small Ag⁺. For NaCl the gap is under 3%. The crystal structure also matters through the Madelung constant and radius ratio: NaCl has 6:6 coordination, CsCl 8:8, ZnS 4:4.",
    "Born–Haber cycles explain which compounds exist. A calculated ΔfH for MgCl is about −125 kJ mol⁻¹, so it is feasible to form from the elements. But MgCl₂ pays the second ionisation energy (1451 kJ mol⁻¹) and gains a much larger lattice enthalpy (about −2526 kJ mol⁻¹), giving ΔfH = −641 kJ mol⁻¹. Disproportionation 2MgCl → Mg + MgCl₂ is therefore strongly favourable (about −391 kJ per 2 mol MgCl), so MgCl is never isolated. NaCl₂ would need the second ionisation energy of Na, about 4562 kJ mol⁻¹ (removing a 2p electron from a noble gas core), which no lattice enthalpy can repay.",
    "The second electron affinity is always endothermic (O⁻ + e⁻ → O²⁻ is +798 kJ mol⁻¹ because the electron is added to a negative ion), so O²⁻ does not exist as a free gaseous ion; it is stabilised only by the very large lattice enthalpy of a crystal (MgO about −3791 kJ mol⁻¹). Lattice enthalpy cannot be measured directly (it would require forming a mole of solid from gaseous ions), so it is found indirectly via a Born–Haber cycle.",
    "Combined with hydration enthalpy in the enthalpy of solution, ΔHsol = −ΔHlatt + ΣΔHhyd, lattice enthalpy explains solubility trends and why some salts dissolve endothermically (the entropy gain drives them). Thermal decomposition temperatures of carbonates and nitrates also follow the lattice enthalpy of the oxide formed relative to the carbonate: a small, highly charged cation gives a very stable oxide, so it decomposes at a lower temperature."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: the Born–Landé lattice energy of NaCl. → U = (6.022×10²³ × 1.7476 × (1.602×10⁻¹⁹)²) ÷ (4π × 8.854×10⁻¹² × 2.82×10⁻¹⁰) × (1 − 1 ÷ 9) = 8.61×10⁵ J mol⁻¹ × 0.889 = 765 kJ mol⁻¹. The Born–Haber figure is 787 kJ mol⁻¹, so the purely electrostatic model is within 3% for this nearly ideal ionic compound."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Scale atomisation/ionisation data correctly for the moles the compound actually needs (e.g. ½Cl₂(g)→Cl(g) is per mole of Cl atoms — check whether that needs doubling for the compound in question)",
    "Second electron affinities are ENDOTHERMIC (arrow up) even though first electron affinities are exothermic (arrow down) — mixing up this arrow direction is one of the most common Born-Haber mistakes",
    "Always include state symbols throughout a Born-Haber cycle — losing them costs marks even with correct numbers",
    "A more exothermic lattice enthalpy comes from smaller, more highly charged ions — mention BOTH charge and radius in a full explanation"
   ]}
  ]},
  {title:"Transition Elements", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Core definitions & key equations", points:[
    "Transition elements (Ti-Cu, Period 4) are d-block elements that form at least one ion with an incomplete d-sub-shell; use sub-shell notation (e.g. Fe: 1s²2s²2p⁶3s²3p⁶3d⁶4s²), removing 4s electrons before 3d for ions",
    "Characteristic properties: variable oxidation states, coloured ions, and catalytic behaviour (e.g. Cu²⁺ catalyses Zn + acid; MnO₂ catalyses H₂O₂ decomposition)"
   ]},
   {heading:"Method — ligands, complexes and reactions", points:[
    "A ligand forms a dative bond to a central metal ion; monodentate donates one lone pair (H₂O, Cl⁻, NH₃), bidentate donates two (e.g. NH₂CH₂CH₂NH₂, 'en')",
    "Complex ion: a metal ion surrounded by ligands; coordination number = number of dative bonds; common shapes: octahedral (6-fold, e.g. [Cu(H₂O)₆]²⁺), tetrahedral (4-fold, e.g. CuCl₄²⁻), square planar (4-fold, e.g. cis-platin)",
    "Stereoisomerism in complexes: cis-trans (e.g. Pt(NH₃)₂Cl₂) and optical isomerism (e.g. with bidentate ligands)",
    "Cis-platin is an anti-cancer drug, binding DNA to prevent cell division (benefit weighed against side effects)",
    "Ligand substitution changes colour (e.g. pale blue [Cu(H₂O)₆]²⁺ + excess NH₃ → deep blue [Cu(NH₃)₄(H₂O)₂]²⁺; + excess Cl⁻ → yellow [CuCl₄]²⁻)",
    "Precipitation of Cu²⁺/Fe²⁺/Fe³⁺/Mn²⁺/Cr³⁺ with NaOH/NH₃ gives characteristic coloured hydroxides; only Cr(OH)₃ dissolves further in excess NaOH; only Cr(OH)₃ and Cu(OH)₂ dissolve further in excess NH₃"
   ]},
   {heading:"Common exam question types", points:[
    "Writing electron configurations for Period 4 transition metal atoms and ions",
    "Predicting complex ion shape from coordination number and ligand type",
    "Writing ligand substitution equations, including colour changes",
    "Explaining why transition metals form coloured ions and act as catalysts (mechanism detail not required)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Crystal field theory (CFT) treats ligands as point negative charges that repel the metal's d electrons. In an octahedral complex the five d orbitals split into a lower triply degenerate t₂g set (dxy, dxz, dyz, pointing between ligands) and a higher doubly degenerate eg set (dz², dx²−y², pointing at ligands) separated by Δoct. In a tetrahedral complex the pattern is reversed and Δtet ≈ 4/9 Δoct, so tetrahedral complexes are almost always high spin.",
    "Colour arises when a d electron absorbs a photon of energy ΔE = Δoct = hc ÷ λ and moves from t₂g to eg; the colour seen is the complement of the colour absorbed. [Ti(H₂O)₆]³⁺ (d¹) absorbs at about 500 nm, corresponding to Δoct ≈ 239 kJ mol⁻¹, and looks purple. Ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺) cannot undergo d–d transitions and are colourless. Intense colours such as purple MnO₄⁻ (d⁰) come from charge-transfer transitions, which are much more intense than d–d transitions.",
    "The spectrochemical series orders ligands by the splitting they produce: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO. Strong-field ligands give a large Δoct, which can exceed the electron-pairing energy P, forcing electrons to pair in t₂g (low spin) in octahedral d⁴–d⁷ ions. [Fe(H₂O)₆]²⁺ is high spin (4 unpaired electrons), while [Fe(CN)₆]⁴⁻ is low spin (0 unpaired, diamagnetic). The spin-only magnetic moment is μ = √[n(n + 2)] Bohr magnetons, so 4.90 and 0 respectively.",
    "Ligand field stabilisation energy (LFSE) in an octahedral complex is −0.4Δoct per t₂g electron and +0.6Δoct per eg electron. It explains the Irving–Williams stability order for divalent ions (Cu²⁺ most stable) and the Jahn–Teller distortion of d⁹ Cu²⁺, whose uneven eg occupancy gives a tetragonally elongated octahedron with two long axial bonds; this is why [Cu(H₂O)₆]²⁺ has an unusually strong colour and an irregular shape.",
    "The chelate effect: [Ni(en)₃]²⁺ is far more stable than [Ni(NH₃)₆]²⁺ (log β ≈ 18.3 vs 8.6) although the Ni–N bond enthalpies are similar. Replacing six monodentate ligands with three bidentate ligands releases net extra particles from the complex, so ΔS is strongly positive and ΔG more negative. EDTA⁴⁻, a hexadentate chelate, therefore binds metal ions extremely strongly, which is why it is used in titrations, in descaling and as a chelation therapy for lead poisoning.",
    "Many functions depend on variable oxidation states and the ability to bind ligands: V₂O₅ in the Contact process (V⁵⁺ ⇌ V⁴⁺), Fe in haemoglobin (Fe²⁺ bound to a porphyrin; O₂ binds reversibly), and the platinum anticancer drug cisplatin, cis-[Pt(NH₃)₂Cl₂] (square planar d⁸). In the cell cisplatin loses chloride and binds guanine N7 atoms in DNA, kinking it and triggering cell death; the trans isomer is inactive because it cannot bridge adjacent bases."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Sc and Zn are d-block but NOT transition elements (Sc³⁺ is d⁰, Zn²⁺ is d¹⁰, neither incomplete) — a commonly tested exception",
    "Always remove 4s electrons before 3d when writing a transition metal ION's configuration, even though 4s fills first in the atom",
    "Learn the specific colour changes as definite facts (frequently tested directly) rather than trying to reason them out",
    "No detail of HOW colour or catalysis arises is required — focus on describing/predicting observations"
   ]}
  ]},
  {title:"Electrode Potentials & Redox Titrations", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Core definitions & key equations", points:[
    "Standard electrode (redox) potential, E°: measured relative to a standard hydrogen electrode (0V) under standard conditions",
    "A cell uses two half-cells connected by a wire (electron flow) and a salt bridge (ion flow, completes the circuit)",
    "Standard cell potential = E°(more positive/reduced electrode) − E°(more negative/oxidised electrode)"
   ]},
   {heading:"Method — using electrode potentials & redox titrations", points:[
    "A more positive E° means a greater tendency to be reduced; the half-cell with the more positive E° gets reduced, the other gets oxidised",
    "Predicting feasibility: a positive overall cell potential suggests a reaction is feasible — but this ignores reaction rate (kinetics) and only strictly applies at standard concentrations",
    "Redox titrations: Fe²⁺/MnO₄⁻ (self-indicating, purple decolourises at the endpoint) and I₂/S₂O₃²⁻ (starch indicator, blue-black to colourless) — same mole-ratio method as acid-base titrations",
    "Fuel cells generate voltage from a fuel reacting with oxygen using the same electrode potential principles (specific equations aren't required to be recalled)"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating a standard cell potential from two electrode potentials",
    "Predicting reaction feasibility from electrode potential data, and discussing its limitations",
    "Redox titration calculations (Fe²⁺/MnO₄⁻ or I₂/S₂O₃²⁻) to find an unknown concentration",
    "Describing the experimental setup for measuring a standard electrode potential"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The Nernst equation extends standard potentials to non-standard conditions: E = E° − (RT ÷ nF) ln Q, which at 298 K is E = E° − (0.0592 ÷ n) log₁₀ Q. For Cu²⁺ + 2e⁻ ⇌ Cu with [Cu²⁺] = 0.010 mol dm⁻³, E = 0.34 − (0.0592 ÷ 2) log₁₀(1 ÷ 0.010) = 0.34 − 0.059 = +0.28 V. A cell with the same electrodes but different concentrations (a concentration cell) generates a voltage from the concentration difference alone.",
    "Cell potential gives the equilibrium constant: E°cell = (RT ÷ nF) ln K = (0.0592 ÷ n) log₁₀ K at 298 K. For the Daniell cell (Zn/Cu, E° = 1.10 V, n = 2), log₁₀ K = 2 × 1.10 ÷ 0.0592 = 37.2, so K ≈ 10³⁷. A reaction with E°cell > 0 is thermodynamically favourable (ΔG° = −nFE°), but kinetic effects can prevent it: zinc should reduce water but does so slowly because hydrogen has a high overpotential on its surface.",
    "Practical electrochemistry: the standard hydrogen electrode (Pt, H₂ at 1 bar, 1 mol dm⁻³ H⁺) is awkward, so labs use secondary references such as the saturated calomel electrode (+0.244 V) or Ag/AgCl (+0.222 V). A high-resistance voltmeter draws almost no current, so the cell is close to equilibrium and the reading is the EMF rather than a potential drop. A salt bridge completes the circuit with minimal junction potential (KNO₃ is used with Ag⁺, since KCl would precipitate AgCl).",
    "Fuel cells and batteries are electrochemical cells with chemical energy converted directly to electrical energy, so they are not limited by the Carnot efficiency. A hydrogen–oxygen fuel cell has a maximum thermodynamic efficiency of ΔG ÷ ΔH = 237.1 ÷ 285.8 = 83% at 298 K (liquid water). Lithium-ion cells (LiCoO₂ and graphite, about 3.7 V) work by Li⁺ ions intercalating into layered electrodes, with no metal plating on discharge; rechargeability depends on this reversible insertion.",
    "Corrosion of iron is an electrochemical process: anodic regions oxidise Fe → Fe²⁺ + 2e⁻ while cathodic regions reduce O₂ + 2H₂O + 4e⁻ → 4OH⁻; Fe²⁺ and OH⁻ react to give Fe(OH)₂, oxidised in air to hydrated Fe₂O₃ (rust). It needs both O₂ and water, and is faster with dissolved salt (better conductivity). Sacrificial protection uses a more reactive metal (Zn, Mg, with more negative E°) which corrodes in preference; galvanising does this and also gives a physical barrier.",
    "Faraday's law underpins electrolysis: the charge Q = I × t, the moles of electrons n(e⁻) = Q ÷ F with F = 96 485 C mol⁻¹, and mass deposited = n(e⁻) ÷ (charge on ion) × Mr. Industrial electrolysis (aluminium by the Hall–Héroult process at about 13–15 kWh per kg; chlorine and NaOH by the chlor-alkali process) is a major energy user. In redox titrations the electrode potential changes sharply at the equivalence point, which can be detected with a Pt electrode instead of an indicator."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: a current of 2.00 A passes for 30.0 minutes through aqueous CuSO₄ with copper electrodes. What mass of copper is deposited? → Q = I × t = 2.00 × 1800 = 3600 C. n(e⁻) = 3600 ÷ 96 485 = 0.0373 mol. Cu²⁺ + 2e⁻ → Cu, so n(Cu) = 0.0373 ÷ 2 = 0.01866 mol, mass = 0.01866 × 63.55 = 1.19 g.",
    "Worked example: calculate E for the half-cell Cu²⁺(0.010 mol dm⁻³)/Cu and the potential of a cell formed with the standard Zn²⁺/Zn electrode (E° = −0.76 V). → E(Cu) = 0.34 − (0.0592 ÷ 2) × 2 = 0.34 − 0.059 = +0.281 V. Ecell = 0.281 − (−0.76) = +1.04 V, lower than the standard 1.10 V because the Cu²⁺ concentration (the reactant) is smaller, which agrees with Le Chatelier."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always state BOTH limitations of feasibility predictions: they say nothing about RATE, and only strictly apply under STANDARD conditions",
    "Cell potential = E°(reduced electrode) − E°(oxidised electrode) — get the subtraction the right way round or the sign will be wrong",
    "MnO₄⁻ titrations need no separate indicator, since MnO₄⁻ itself is intensely coloured and decolourises exactly at the endpoint",
    "Redox titration calculations use exactly the acid-base mole-ratio method — write the balanced equation first and work in moles"
   ]}
  ]},
  {title:"Arenes (Aromatic Compounds)", group:"Module 6: Organic Chemistry and Analysis", sections:[
   {heading:"Core definitions & key equations", points:[
    "Benzene, C₆H₆, has a planar ring of 6 carbons, each contributing one electron to a delocalised system of π electrons spread evenly above and below the ring — NOT three alternating C=C double bonds (the Kekulé model)",
    "Evidence for delocalisation: all C–C bond lengths in benzene are equal (~139 pm, between a single ~154 pm and double ~134 pm bond length); benzene's hydrogenation enthalpy (~−208 kJ mol⁻¹) is far less exothermic than the theoretical value for three isolated double bonds (~−360 kJ mol⁻¹), showing benzene is more stable than the Kekulé structure suggests",
    "Because the delocalised ring gives extra stability, benzene undergoes electrophilic substitution (keeping the ring intact) rather than addition (which would destroy the delocalisation)",
    "Phenol (benzene with an OH group) is more reactive than benzene towards electrophilic substitution, because a lone pair on the oxygen partially delocalises into the ring, increasing electron density"
   ]},
   {heading:"Mechanism — electrophilic substitution", points:[
    "General mechanism: a strong electrophile is generated, it attacks the delocalised ring forming a positively-charged intermediate (arenium ion) with the electrophile bonded to one carbon, then a H⁺ is lost from that carbon, restoring the full delocalised ring",
    "Nitration: benzene + concentrated HNO₃/H₂SO₄ (heated ~50°C) — H₂SO₄ protonates HNO₃ to generate the electrophile NO₂⁺, giving nitrobenzene",
    "Halogenation: benzene + Cl₂/Br₂ with an AlCl₃ or FeBr₃ halogen carrier catalyst, which polarises the halogen molecule to generate a stronger electrophile",
    "Friedel–Crafts acylation: benzene + acyl chloride (RCOCl) with an AlCl₃ catalyst, generating an acylium ion (RCO⁺) electrophile — forms a ketone",
    "Friedel–Crafts alkylation: similar, using a haloalkane and AlCl₃ to generate a carbocation electrophile — but this can over-alkylate, so acylation is often preferred synthetically",
    "Phenol's bromination reacts directly with bromine water (no catalyst needed, unlike benzene) to give a white precipitate of 2,4,6-tribromophenol"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining the evidence for the delocalised model of benzene over the Kekulé model",
    "Drawing full mechanisms for nitration, halogenation, or Friedel–Crafts reactions, including how the electrophile is generated",
    "Comparing the reactivity of benzene vs phenol and explaining why",
    "Naming and drawing substituted arenes"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Benzene's stability is measured by hydrogenation enthalpy. Cyclohexene releases −120 kJ mol⁻¹, so a hypothetical 'cyclohexa-1,3,5-triene' with three isolated C=C would release −360 kJ mol⁻¹; benzene actually releases only −208 kJ mol⁻¹. The 152 kJ mol⁻¹ difference is the delocalisation (resonance) energy. All six C–C bonds are 139 pm, between a single (154 pm) and a double (134 pm) bond, so the Kekulé structures are resonance contributors, not rapidly interconverting isomers.",
    "Hückel's rule: a planar, cyclic, fully conjugated ring with 4n + 2 π electrons (2, 6, 10, 14…) is aromatic and unusually stable; 4n electrons (cyclobutadiene, 4) are antiaromatic and unstable. Benzene has 6 π electrons, naphthalene 10, the cyclopentadienyl anion 6 and the tropylium cation 6 (which is why the m/z 91 fragment in mass spectra of alkylbenzenes is so abundant). In molecular orbital terms the six p orbitals form three filled bonding π MOs and three empty antibonding ones.",
    "Electrophilic substitution (not addition) occurs because addition would destroy the delocalisation energy. The electrophile attacks the π system to give a positively charged, non-aromatic σ-complex (Wheland intermediate, an arenium ion) with the positive charge delocalised over three carbons; the fast loss of H⁺ then restores the aromatic ring. In nitration the electrophile NO₂⁺ is formed by HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻, and H₂SO₄ is regenerated as the catalyst when the ring loses H⁺.",
    "Directing effects depend on how a substituent affects the stability of the Wheland intermediate. Electron-donating groups (–OH, –NH₂, –OR, –alkyl) stabilise the positive charge when attack is at the ortho or para positions, so they are activating and ortho/para-directing (phenol brominates without a halogen carrier and gives 2,4,6-tribromophenol). Electron-withdrawing groups (–NO₂, –COOH, –CN) destabilise it and are deactivating and meta-directing. Halogens are an exception: weakly deactivating (inductive) yet ortho/para-directing (lone pair donation).",
    "Friedel–Crafts alkylation (RCl/AlCl₃) has two practical problems: the product is more reactive than benzene, so polyalkylation occurs, and primary carbocations rearrange to more stable ones (propyl chloride gives mainly isopropylbenzene). Friedel–Crafts acylation (RCOCl/AlCl₃) avoids both because the acylium ion RCO⁺ does not rearrange and the acylated ring is deactivated; the ketone can then be reduced to the alkyl group (Clemmensen: Zn/Hg and HCl). The AlCl₃ is needed in more than catalytic amounts because it complexes the ketone product.",
    "The ring current explains NMR: π electrons circulate in an applied field and deshield the ring protons, which appear at δ 6.5–8.0 ppm (compared with about 5–6 ppm for alkene protons). Aromatic amines give diazonium salts: ArNH₂ + HNO₂ (NaNO₂/HCl below 5 °C) → ArN₂⁺Cl⁻. Above 5 °C the diazonium salt decomposes to a phenol and N₂. Cold diazonium salts couple with phenols or aromatic amines to give azo dyes, whose extended conjugation (the –N=N– chromophore) absorbs visible light; methyl orange and many food dyes are made this way."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always explain WHY substitution happens instead of addition (it preserves the extra stability of the delocalised ring) — simply naming the reaction without this reasoning loses marks",
    "Show explicitly how the electrophile is generated (e.g. H₂SO₄ + HNO₃ → NO₂⁺ + HSO₄⁻ + H₂O) — this generation step is very commonly asked for separately",
    "Don't draw benzene with alternating double bonds when showing the mechanism — use the circle-in-a-hexagon symbol and clearly break/reform the delocalisation at the correct point",
    "For phenol, the extra reactivity comes from the oxygen's lone pair donating into the ring, not from the OH group being a better leaving group"
   ]}
  ]},
  {title:"Carbonyls: Aldehydes & Ketones", group:"Module 6: Organic Chemistry and Analysis", sections:[
   {heading:"Core definitions & key equations", points:[
    "Both contain the C=O (carbonyl) group; aldehydes have at least one H atom on the carbonyl carbon (–CHO, always at the end of a chain), ketones have two carbon groups attached (in the middle of a chain)",
    "Because of the H atom, aldehydes are easily oxidised to carboxylic acids; ketones are not oxidised under normal lab conditions",
    "Naming: aldehydes end in -al, ketones end in -one (with a locant number for the carbonyl position if needed)",
    "The carbonyl carbon is δ+ (oxygen is more electronegative), making it susceptible to attack by nucleophiles"
   ]},
   {heading:"Method — tests & reactions", points:[
    "Tollens' reagent (ammoniacal silver nitrate): warm gently — aldehydes give a silver mirror (Ag⁺ reduced to Ag), ketones give no change",
    "Fehling's/Benedict's solution (blue Cu²⁺ complex): warm — aldehydes give a brick-red precipitate of Cu₂O, ketones give no change",
    "2,4-DNPH (Brady's reagent): forms an orange/yellow precipitate with any C=O — confirms a carbonyl is present but not which type; the precipitate's melting point can be compared to known data to identify the specific compound",
    "Nucleophilic addition with HCN (or NaCN + dilute acid): CN⁻ attacks the δ+ carbon, forming a hydroxynitrile — with an unsymmetrical carbonyl this creates a new chiral centre, giving a racemic mixture since the nucleophile can attack from either face",
    "Reduction with NaBH₄ (or LiAlH₄): H⁻ acts as the nucleophile, reducing aldehydes to primary alcohols and ketones to secondary alcohols"
   ]},
   {heading:"Common exam question types", points:[
    "Identifying an unknown as aldehyde vs ketone using Tollens'/Fehling's, with expected observations",
    "Drawing the full nucleophilic addition mechanism with curly arrows for HCN or NaBH₄",
    "Explaining why HCN addition to an unsymmetrical carbonyl gives a racemic mixture",
    "Combining carbonyl chemistry with alcohol oxidation in a reaction sequence to identify an unknown compound"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The C=O carbon is electrophilic because oxygen is more electronegative and the carbon is sp² and planar, so nucleophiles attack along the Bürgi–Dunitz angle (about 107°) into the π* orbital. This gives a tetrahedral alkoxide that is protonated. Aldehydes react faster than ketones for two reasons: less steric hindrance (one H instead of a second alkyl group) and less electronic stabilisation, since two electron-donating alkyl groups reduce the partial positive charge on carbon in ketones.",
    "Cyanohydrin formation needs the nucleophile CN⁻, not HCN, because HCN is a weak acid and a poor nucleophile. The rate is greatest in slightly basic solution (about pH 9–10) where there is enough CN⁻ yet enough HCN to protonate the intermediate; in strong acid there is no CN⁻, and in strong base no proton donor. Since the planar carbonyl is attacked equally from both faces, a chiral product is formed as a racemic mixture (no net optical activity). Hydrolysis of the nitrile then gives a 2-hydroxy carboxylic acid, extending the carbon chain by one.",
    "Hydride reductions: NaBH₄ delivers H⁻ and works in water or ethanol; it reduces aldehydes and ketones only. LiAlH₄ is a much stronger hydride donor, reacts violently with water so needs dry ether, and also reduces carboxylic acids, esters and amides to alcohols or amines. The product of reducing an aldehyde is a primary alcohol and a ketone gives a secondary alcohol. In biology NADH is the equivalent hydride donor, reducing pyruvate to lactate through the same C=O addition of H⁻.",
    "Addition–elimination (condensation) with 2,4-dinitrophenylhydrazine (2,4-DNPH) gives a yellow/orange precipitate of a hydrazone with a sharp melting point. The mechanism is nucleophilic addition by NH₂, followed by loss of water. The melting point of the recrystallised derivative was used historically to identify the carbonyl compound against a data table; modern chemists use NMR and MS. Tollens' reagent ([Ag(NH₃)₂]⁺, giving a silver mirror) and Fehling's/Benedict's solution (Cu²⁺ complex giving red Cu₂O) oxidise aldehydes but not ketones.",
    "α-Hydrogens (on the carbon next to C=O) are acidic (pKₐ about 17–20) because the conjugate base, an enolate, delocalises the charge onto oxygen. This gives keto–enol tautomerism (the keto form usually dominates by far, but the enol form is the nucleophile in many reactions) and the aldol reaction: an enolate adds to another carbonyl to form a β-hydroxy carbonyl, a key C–C bond-forming reaction. The iodoform test (I₂/NaOH, yellow CHI₃) works for methyl ketones CH₃C(=O)R and for ethanol, via repeated enolate halogenation.",
    "Spectral signatures: the C=O stretch is strong at 1680–1750 cm⁻¹ (conjugated ketones lower, about 1685; aldehydes about 1725; esters about 1735), ¹³C NMR shows the carbonyl carbon at δ 190–220 ppm (aldehydes and ketones) and the aldehyde proton in ¹H NMR at δ 9–10 ppm. Grignard reagents add to aldehydes (secondary alcohols), ketones (tertiary alcohols) and formaldehyde (primary alcohols), a general way to build alcohols with more carbon atoms."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Know the mechanism precisely: the nucleophile's lone pair attacks the δ+ carbon (arrow 1), a second arrow moves from the C=O bond onto the oxygen forming a negatively-charged alkoxide intermediate, which is then protonated",
    "Don't say 'ketones can't be oxidised' without the reason — it's because there's no hydrogen on the carbonyl carbon to remove",
    "For the racemic mixture explanation, state explicitly that the planar carbonyl carbon can be attacked from either face with equal probability, giving a 50:50 mixture of enantiomers",
    "2,4-DNPH only confirms a carbonyl is present, not which one — you need a melting point comparison or a separate test to distinguish aldehyde from ketone"
   ]}
  ]},
  {title:"Carboxylic Acids & Esters", group:"Module 6: Organic Chemistry and Analysis", sections:[
   {heading:"Core definitions & key equations", points:[
    "Carboxylic acids (–COOH) are weak acids — they partially dissociate: RCOOH ⇌ RCOO⁻ + H⁺",
    "They're more acidic than alcohols or phenols because the carboxylate ion (RCOO⁻) is stabilised by delocalisation of the negative charge across both oxygen atoms",
    "Reactions: with reactive metals (e.g. Mg) give H₂ gas; with carbonates/hydrogencarbonates give CO₂ gas (a positive test); with bases give a salt + water"
   ]},
   {heading:"Method — esterification & hydrolysis", points:[
    "Esterification: carboxylic acid + alcohol ⇌ ester + water, catalysed by concentrated H₂SO₄, heated under reflux — a reversible equilibrium reaction, so yield is limited",
    "Naming esters: alkyl alkanoate — the alcohol-derived part is named first (ending -yl), the acid-derived part second (ending -oate)",
    "Acid hydrolysis of an ester: reflux with dilute acid — reverses esterification, giving back the carboxylic acid and alcohol (also an equilibrium)",
    "Base (alkaline) hydrolysis of an ester: reflux with NaOH — NOT reversible, gives the carboxylate SALT (not the free acid) plus the alcohol; called saponification",
    "Acyl chlorides (RCOCl) are much more reactive than carboxylic acids — react readily with water (acid + HCl fumes), alcohols (ester + HCl), and ammonia/amines (amide + HCl), all without needing a catalyst"
   ]},
   {heading:"Common exam question types", points:[
    "Writing balanced equations for a given carboxylic acid derivative reaction",
    "Naming esters and acyl chlorides, or deducing the acid/alcohol that made a given ester",
    "Explaining why esterification is reversible but base hydrolysis is not",
    "Comparing the reactivity of carboxylic acids vs acyl chlorides and explaining why"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Carboxylic acids (pKₐ about 4.8) are about 10¹¹ times stronger acids than alcohols (pKₐ about 16) because the carboxylate anion is stabilised by resonance: the negative charge is shared equally between the two oxygens, and both C–O bonds are equal in length (about 127 pm). Electron-withdrawing substituents increase acid strength by stabilising the anion further: ClCH₂COOH pKₐ 2.87, Cl₂CHCOOH 1.35, CCl₃COOH 0.65. In non-polar solvents and in the vapour carboxylic acids exist as hydrogen-bonded dimers, so their relative molecular mass appears doubled and boiling points are high.",
    "Acid derivatives (acyl chlorides, anhydrides, esters, amides) react by nucleophilic acyl substitution: addition of the nucleophile to C=O to give a tetrahedral intermediate, then elimination of the leaving group. Reactivity: acyl chloride > anhydride > ester ≈ carboxylic acid > amide. It depends on two factors: how good a leaving group is (Cl⁻ > RCOO⁻ > RO⁻ > NH₂⁻) and how much the lone pair on the substituent donates into C=O (strong for N in amides, which makes them very unreactive and gives them partial C=N double-bond character).",
    "Fischer esterification (acid + alcohol, H₂SO₄ catalyst) is an equilibrium with K ≈ 4 for ethanoic acid and ethanol, so a 1:1 mixture reaches only about 67% conversion. Le Chatelier is used to push it on: excess of the cheaper reagent, or removal of water (concentrated H₂SO₄ as dehydrating agent, or a Dean–Stark trap). Isotopic labelling with ¹⁸O in the alcohol shows the ¹⁸O ends up in the ester, proving that the acid loses its OH (acyl–oxygen cleavage), not the alcohol its O–H.",
    "Hydrolysis: acid-catalysed ester hydrolysis is the reverse of esterification and reaches equilibrium, while alkaline hydrolysis (saponification) goes to completion because the carboxylic acid formed is immediately deprotonated to the carboxylate, which cannot be attacked by the alcohol. Saponification of triglycerides with NaOH gives glycerol and the sodium salts of fatty acids (soap). Transesterification of triglycerides with methanol (base catalysed) gives fatty acid methyl esters, which is biodiesel.",
    "Aspirin is made by acetylating the –OH of salicylic acid with ethanoic anhydride (more reactive than ethanoic acid, which would give an unfavourable equilibrium; the by-product is ethanoic acid). The crude product is purified by recrystallisation; a sharp melting point (about 135 °C) shows purity, a low broad range shows impurities. A poor percentage yield arises from losses during recrystallisation and transfers. The ester linkage hydrolyses back to salicylic acid in damp storage, which smells of vinegar.",
    "IR distinguishes the groups: carboxylic acid O–H is very broad (2500–3300 cm⁻¹, overlapping C–H) with C=O about 1710 cm⁻¹; esters show C=O at about 1735 cm⁻¹ and C–O at 1000–1300 cm⁻¹ but no O–H. In ¹H NMR the acid proton appears at δ 10–12 ppm and exchanges with D₂O. In mass spectra esters and acids fragment by loss of OR or OH to give acylium ions RCO⁺ (m/z 43 for ethanoyl). Esters are widely used as flavourings and solvents because they are volatile and non-hydrogen-bonding."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: ethanoic acid (1.00 mol) and ethanol (1.00 mol) are heated with H₂SO₄ until equilibrium. K = [ester][water] ÷ ([acid][alcohol]) = 4.0. Find the yield. → Let x mol of ester form: K = x² ÷ (1 − x)² = 4, so x ÷ (1 − x) = 2 and x = 0.667. The yield is 66.7%. With 3.00 mol ethanol instead (so [alcohol] = 3 − x), K = x² ÷ ((1 − x)(3 − x)) = 4 gives x² = 4(3 − 4x + x²), so 3x² − 16x + 12 = 0 and x = 0.90 (the other root exceeds 1), a yield of 90% on the acid.",
    "Worked example: 2.00 g of salicylic acid (Mr 138.12) is converted to aspirin (Mr 180.16) and 1.90 g is isolated. What is the percentage yield? → n(salicylic acid) = 2.00 ÷ 138.12 = 0.01448 mol, so theoretical mass of aspirin = 0.01448 × 180.16 = 2.61 g. Percentage yield = 1.90 ÷ 2.61 × 100 = 72.8%."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "State clearly that esterification is reversible/acid-catalysed but base hydrolysis of an ester is irreversible — mixing these up is a very common error",
    "Base hydrolysis gives the carboxylate SALT (e.g. sodium ethanoate), not the free carboxylic acid — a frequent incorrect answer",
    "When naming an ester, double check which part is the alkyl (from the alcohol) and which is the -oate (from the acid) — easy to swap round",
    "Explain acyl chloride reactivity using the leaving group argument (Cl⁻ is a much better leaving group than OH⁻), not just 'acyl chlorides are more reactive'"
   ]}
  ]},
  {title:"Amines, Amino Acids & Chirality", group:"Module 6: Organic Chemistry and Analysis", sections:[
   {heading:"Core definitions & key equations", points:[
    "Amines are basic due to the nitrogen lone pair accepting a proton; react with dilute inorganic acids to form salts, e.g. R-NH₂ + HCl → R-NH₃⁺Cl⁻",
    "α-amino acids: general formula RCH(NH₂)COOH — both an amine and a carboxylic acid group on the same molecule",
    "Amides contain -CONH₂ (primary) or -CONHR (secondary), formed from acyl chlorides and ammonia/amines"
   ]},
   {heading:"Method — preparation and reactions", points:[
    "Aliphatic amines: haloalkane + excess ethanolic ammonia (substitution) — excess ammonia favours the primary amine over further-substituted products",
    "Aromatic amines: reduction of a nitroarene using tin and concentrated hydrochloric acid",
    "Amino acid reactions: the carboxylic acid group reacts with alkalis/forms esters; the amine group reacts with acids to form a salt",
    "Chirality: a chiral centre is a carbon with four different groups attached, giving optical isomers (non-superimposable mirror images) — check systematically for four different substituents"
   ]},
   {heading:"Common exam question types", points:[
    "Writing equations for amine preparation and their reactions with acids",
    "Identifying and explaining chiral centres, including in amino acids",
    "Drawing the two optical isomers of a chiral molecule in 3D",
    "Comparing amine reactivity with other nitrogen-containing functional groups (comparing different amines' basicity is not required)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Amine basicity depends on the availability of the nitrogen lone pair, compared through the pKₐ of the conjugate acid (R–NH₃⁺): ethylamine 10.6 > ammonia 9.25 > aniline 4.6 > amides (not basic). Alkyl groups donate electron density and push the lone pair to the proton; in aniline the lone pair is delocalised into the ring, so it is far less available. In amides the lone pair is delocalised into C=O. In the gas phase basicity rises primary < secondary < tertiary (more alkyl groups stabilise the ion), but in water solvation of the ammonium ion by hydrogen bonding reverses this for tertiary amines, so the order in solution is not simple.",
    "Making primary amines is awkward by direct substitution: RBr + NH₃ gives a mixture of primary, secondary, tertiary amines and the quaternary salt, because each product is a better nucleophile than ammonia. Large excess of NH₃ favours the primary amine. Cleaner methods: reduction of a nitrile (LiAlH₄ or H₂/Ni) which also adds a carbon, the Gabriel synthesis (phthalimide anion as a protected ammonia), and reductive amination of an aldehyde or ketone with NH₃ and a mild hydride (NaBH₃CN).",
    "Amino acids exist as zwitterions (⁺H₃N–CHR–COO⁻) in water around neutral pH. The isoelectric point pI is the pH at which the net charge is zero: for a neutral amino acid, pI = (pKₐ₁ + pKₐ₂) ÷ 2, so glycine (2.34 and 9.60) has pI = 5.97. Acidic side chains (Asp, Glu) lower pI to about 3; basic ones (Lys, Arg) raise it to 10–11. Amino acids are most insoluble and migrate least in an electric field at their pI, the basis of electrophoresis and isoelectric focusing.",
    "The peptide bond is planar and rigid because the N lone pair is delocalised onto C=O, giving the C–N bond about 40% double-bond character (132 pm, between a single C–N at 147 pm and a double at 127 pm). Rotation about it is restricted (about 75 kJ mol⁻¹), so the peptide group is almost always trans (cis only occurs before proline). The protein backbone's flexibility lies in the φ and ψ angles of rotation about the bonds either side of the α-carbon; the Ramachandran plot shows the sterically allowed combinations, leading to α-helices and β-sheets.",
    "Chirality: a carbon with four different groups is a stereocentre. Enantiomers have identical physical properties except that they rotate plane-polarised light by equal amounts in opposite directions (measured in a polarimeter; specific rotation [α] = α ÷ (l × c), with l in dm and c in g cm⁻³), and they react differently with other chiral molecules. Their configuration is assigned R or S by CIP priority rules (higher atomic number first, going outwards from the stereocentre). n stereocentres give up to 2ⁿ stereoisomers; stereoisomers that are not mirror images are diastereomers, which differ in physical properties and can be separated by ordinary methods. A meso compound has stereocentres but an internal mirror plane and no optical activity (meso-tartaric acid).",
    "Biological chirality: proteins use only L-amino acids (S configuration, except cysteine which is R), and enzymes are stereospecific, so enantiomers of a drug can behave very differently: (S)-ibuprofen is the active anti-inflammatory, and (S)-naproxen is marketed as a single enantiomer. Thalidomide's tragedy is often told as 'one enantiomer causes birth defects', but the enantiomers interconvert in the body, so giving a pure form would not have helped. Single-enantiomer synthesis (asymmetric catalysis, Nobel Prize 2001 to Knowles, Noyori and Sharpless) is now routine in pharmaceuticals; racemic mixtures are made when no chiral reagent or catalyst is used."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: sucrose has a specific rotation of +66.5° (dm⁻¹ g⁻¹ cm³). What is the observed rotation of a solution of 10.0 g in 100 cm³ in a 1.00 dm tube? → c = 0.100 g cm⁻³, α = [α] × l × c = 66.5 × 1.00 × 0.100 = +6.65°. If an enantiomerically enriched sample of a compound whose pure enantiomer has [α] = +66.5 shows [α] = +33.25, then the enantiomeric excess is 33.25 ÷ 66.5 = 50%, which corresponds to a 75:25 mixture of the two enantiomers.",
    "Worked example: find the isoelectric point of glycine and the predominant species at pH 2 and 12. → pI = (2.34 + 9.60) ÷ 2 = 5.97. At pH 2 (below pKₐ₁ = 2.34) it is mostly the cation ⁺H₃N–CH₂–COOH, at pH 12 (above pKₐ₂) it is the anion H₂N–CH₂–COO⁻, and at pH 5.97 it is the neutral zwitterion."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Use EXCESS ethanolic ammonia for a primary amine from a haloalkane — without excess you get a mixture of amines and a quaternary ammonium salt",
    "Aromatic amine preparation (Sn + conc. HCl reducing a nitroarene) is a specific named method — don't confuse it with the aliphatic route",
    "A chiral centre needs FOUR DIFFERENT groups — check systematically around each carbon rather than guessing by eye",
    "Amino acids have both basic and acidic groups in one molecule — this dual reactivity is a common exam theme"
   ]}
  ]},
  {title:"Polymers", group:"Module 6: Organic Chemistry and Analysis", sections:[
   {heading:"Core definitions & key equations", points:[
    "Addition polymers form when alkene monomers join by opening their C=C bonds, no other product formed; deduce the repeat unit from the monomer's skeleton with the double bond made single",
    "Condensation polymers form with loss of a small molecule (usually water or HCl) at each bond; polyesters from dicarboxylic acids/diacyl chlorides + diols, polyamides from dicarboxylic acids/diacyl chlorides + diamines"
   ]},
   {heading:"Method — polymer properties & sustainability", points:[
    "Polyesters/polyamides can be hydrolysed: acid hydrolysis gives back the carboxylic acid and alcohol/amine; base hydrolysis gives the carboxylate salt and alcohol/amine",
    "From a polymer section, deduce the repeat unit, the original monomer(s), and whether it's addition (all-carbon backbone) or condensation (ester/amide links in the backbone)",
    "Waste polymer disposal: combustion for energy, use as a chemical feedstock, removing toxic by-products (e.g. HCl from burning PVC)",
    "Biodegradable/photodegradable polymers reduce persistent plastic waste and dependency on finite oil-based resources"
   ]},
   {heading:"Common exam question types", points:[
    "Drawing repeat units for addition polymers, or deducing the monomer from a repeat unit",
    "Drawing/identifying a polyester or polyamide repeat unit from given monomers",
    "Explaining acid vs base hydrolysis products of polyesters/polyamides",
    "Evaluating waste polymer disposal methods for sustainability"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Step-growth (condensation) and chain-growth (addition) polymerisation have different kinetics. In chain growth, long polymer forms immediately and monomer is consumed gradually. In step growth, any two molecules can react, so high molar mass only appears at very high conversion. The Carothers equation gives the number-average degree of polymerisation Xₙ = 1 ÷ (1 − p), where p is the fraction of functional groups that have reacted: p = 0.99 gives Xₙ = 100 and p = 0.999 gives Xₙ = 1000. Exact 1:1 stoichiometry of the two functional groups is critical, which is why nylon-6,6 is made via a 1:1 'nylon salt'.",
    "Free-radical polymerisation has three stages: initiation (a peroxide or AIBN decomposes to radicals), propagation (a radical adds to the C=C of a monomer to generate a new radical, thousands of times), and termination (two radicals combine or disproportionate). Chain transfer, including back-biting in polyethylene, produces branches, giving low-density polyethylene with a lower melting temperature. Ziegler–Natta and metallocene catalysts give linear polymer and control tacticity: isotactic polypropylene (all methyls on the same side) is crystalline and strong; atactic is amorphous and soft.",
    "Real polymer samples are a mixture of chain lengths. Number-average molar mass Mₙ = Σnᵢmᵢ ÷ Σnᵢ and mass-average Mw = Σnᵢmᵢ² ÷ Σnᵢmᵢ; the dispersity Đ = Mw ÷ Mₙ ≥ 1 measures the breadth of the distribution (Đ = 1 for perfect uniformity, as for proteins). For two chains of 10 000 and one of 40 000, Mₙ = 20 000, Mw = 30 000 and Đ = 1.5. Gel permeation chromatography separates by hydrodynamic size and measures the distribution.",
    "Properties depend on structure. The glass transition temperature Tg is where amorphous regions change from rigid glass to rubbery; melting Tm applies to crystalline regions. Strong intermolecular forces and regular, stiff chains raise both: nylon-6,6 (hydrogen bonds between amide groups, Tm about 265 °C), Kevlar (rigid para-linked aromatic polyamide that aligns in liquid-crystalline solution when spun, giving very high tensile strength), versus polyethylene (only weak dispersion forces, Tm 110–135 °C). Plasticisers (small molecules) lower Tg in PVC, making it flexible.",
    "Thermoplastics soften on heating (linear or branched chains, no covalent crosslinks); thermosets (epoxy resins, Bakelite) are permanently crosslinked and char instead of melting. Elastomers (rubber) have light crosslinking: Goodyear's vulcanisation adds sulfur bridges to natural rubber so chains snap back after stretching; heavy crosslinking gives ebonite. Natural rubber is the cis polymer of 2-methylbuta-1,3-diene (isoprene).",
    "Sustainability: most addition polymers (polyethylene, PVC) have a saturated C–C backbone resistant to hydrolysis and biodegradation. Condensation polymers with ester or amide links can be hydrolysed: PLA (poly(lactic acid), made from lactic acid, an ester polymer) is compostable under industrial conditions, and PET can be depolymerised chemically back to monomers (glycolysis or methanolysis) for closed-loop recycling. Burning waste polymers releases CO₂ and may release HCl from PVC or HCN from nylon and polyurethanes, so energy recovery needs flue-gas treatment."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "You are NOT expected to recall exact structures of named synthetic polymers (nylon, Terylene) from memory — you'll derive them from given monomers, or vice versa",
    "Spot addition polymers (only C-C backbone) vs condensation polymers (ester -COO- or amide -CONH- links in the backbone) by looking for these groups",
    "Base hydrolysis of a polyester/polyamide gives the carboxylate SALT, not the free acid — same principle as ester hydrolysis",
    "Combustion of halogenated plastics (PVC) releases toxic HCl gas — mention the need to remove/neutralise this when discussing incineration"
   ]}
  ]},
  {title:"Additional Physical Chemistry: Rates, Equilibria & Redox", group:"Modules 3–5: Physical Chemistry", sections:[
   {heading:"Rate equations and mechanisms",points:["Rate is the change in concentration per unit time; rate = k[A]ᵐ[B]ⁿ, where m and n are determined experimentally and are not generally the stoichiometric coefficients.","Overall order = m + n. Zero order: rate independent of concentration; first order: doubling concentration doubles rate; second order: doubling concentration quadruples rate.","The rate constant k is temperature-dependent; its units depend on overall order. For a first-order reaction, k has units s⁻¹.","A rate-determining step is the slowest step in a multi-step mechanism. The rate equation must be consistent with the reactants in that step, including intermediates where appropriate.","Half-life is the time for concentration to halve. For a first-order reaction it is constant and independent of starting concentration; for other orders it generally varies."]},
   {heading:"Equilibrium and quantitative methods",points:["For aA + bB ⇌ cC + dD, Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ); omit pure solids and liquids. Use equilibrium concentrations, not initial concentrations.","For gases, Kp uses partial pressures with powers matching the balanced equation. Kp and Kc are related through the change in gaseous moles; use the exact OCR A formula-sheet convention and units.","A catalyst changes the rate of forward and reverse reactions equally and does not change Kc, Kp or the equilibrium position.","For a weak acid HA, Ka = [H⁺][A⁻]/[HA]. pKa = −log₁₀Ka; a smaller pKa means a stronger acid. Use equilibrium concentrations in Ka calculations.","For a buffer, added H⁺ is removed by A⁻ to form HA; added OH⁻ is removed by HA to form A⁻ and water. The pH changes only slightly while both components remain in substantial amounts."]},
   {heading:"Electrochemistry and practical accuracy",points:["E°cell = E°(more positive reduction potential) − E°(less positive reduction potential). A positive E°cell indicates thermodynamic feasibility under standard conditions, not necessarily a fast reaction.","In redox titrations, balance electrons as well as atoms and charge; use the mole ratio from the balanced ionic equation rather than assuming a 1:1 ratio.","For a valid calorimetry result, insulate the vessel, use a lid, stir, measure temperature at short intervals and extrapolate cooling where appropriate. Heat change q = mcΔT; ΔH = −q/n for the reacting amount.","⭐ In calculations, keep unrounded intermediate values, show units, use the balanced equation, and round only the final answer to sensible significant figures."]}
  ]},
  {title:"Organic Synthesis, Purification & Analysis", group:"Modules 4 and 6: Organic Chemistry", sections:[
   {heading:"Planning a synthesis",points:["Build a synthesis route by identifying the functional-group change at each step, the reagent, conditions, reaction type and any intermediate that must be isolated.","Common routes include alkane → haloalkane (UV substitution); haloalkane → alcohol (aqueous OH⁻, nucleophilic substitution); haloalkane → alkene (ethanolic OH⁻, elimination); alkene → alcohol (steam/acid catalyst); alcohol → carbonyl/carboxylic acid (oxidation); carbonyl → alcohol (reduction).","Reflux heats a reaction for a long time without losing volatile material; distillation separates a volatile product as it forms; a separating funnel separates immiscible liquids.","Recrystallisation purifies a solid: dissolve in minimum hot solvent, hot-filter insoluble impurities, cool to crystallise, vacuum-filter, wash with cold solvent and dry.","Use a drying agent to remove water from an organic layer, then filter/decant before distillation. A high percentage yield does not necessarily mean high purity."]},
   {heading:"Spectra and analytical evidence",points:["Mass spectrometry: molecular ion peak can indicate Mr; high-resolution mass spectrometry can distinguish formulae. Isotope patterns can identify halogens (chlorine approximately 3:1 for M:M+2; bromine approximately 1:1).","¹H NMR: chemical shift indicates proton environment; integration gives relative proton numbers; splitting gives adjacent non-equivalent proton information using the n + 1 rule in simple cases.","IR spectroscopy identifies bond types through characteristic absorption ranges; use the full pattern and supporting tests rather than identifying a molecule from one peak alone.","Chromatography separates components by different affinities for stationary and mobile phases. Rf = distance moved by spot ÷ distance moved by solvent front; compare only under identical conditions.","⭐ For an identification question, combine formula/Mr, IR, NMR and chemical-test evidence; each piece should eliminate alternatives."]}
  ]},
  {title:"Rate Equations, Orders & Half-life", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Rate equations and experimental method",points:["For a reaction aA + bB → products, rate = k[A]ᵐ[B]ⁿ. The orders m and n are determined experimentally; they are not generally the stoichiometric coefficients in the equation.","Overall order = m + n. A zero-order reactant has no effect on rate when its concentration changes; first order gives rate proportional to concentration; second order gives rate proportional to concentration squared (when that is the only concentration term).","Use initial-rate experiments: compare experiments where only one reactant concentration changes. If doubling [A] doubles rate, order in A is 1; if it quadruples rate, order is 2; if rate is unchanged, order is 0.","The rate constant k is temperature-dependent and has units that depend on overall order. For a first-order reaction, k has units s⁻¹; for a zero-order reaction, mol dm⁻³ s⁻¹; for a second-order reaction, dm³ mol⁻¹ s⁻¹.","A catalyst provides an alternative pathway with lower activation energy. It does not change ΔH, equilibrium position or Kc; it increases forward and reverse rates equally at equilibrium."]},
   {heading:"Concentration–time graphs and half-life",points:["The gradient of a concentration–time graph gives rate at that time. Draw a tangent for instantaneous rate; a secant between two points gives an average rate.","For a first-order reaction, half-life is constant and independent of initial concentration: t₁/₂ = 0.693/k. A constant half-life is evidence consistent with first-order behaviour.","The Arrhenius equation is k = Ae⁻ᴱᵃ/ᴿᵀ. A plot of ln k against 1/T has gradient −Eₐ/R and intercept ln A; use temperature in kelvin.","When comparing rate data, keep units consistent and state the evidence from the data. A proposed mechanism must agree with the experimentally determined rate equation."]}
  ]},
  {title:"Equilibrium Calculations & Kc Expressions", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Writing and using Kc",points:["For aA(g) + bB(g) ⇌ cC(g) + dD(g), Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ). Use equilibrium concentrations, not initial concentrations, and omit pure solids and pure liquids.","Kc has units derived from the concentration terms; do not assume it is always unitless. A large Kc means products are favoured at equilibrium; a small Kc means reactants are favoured, at the stated temperature.","Build an ICE table (initial, change, equilibrium). Use the balanced equation to express changes in molar concentration, then substitute equilibrium values into Kc.","Changing concentration or pressure can change the equilibrium composition but does not change Kc at constant temperature. Changing temperature changes Kc because it changes the relative rates/energetics of forward and reverse reactions.","For gaseous equilibria, increasing pressure by reducing volume favours the side with fewer moles of gas. If both sides have the same number of gas moles, there is no shift in position."]}
  ]},
  {title:"Ka, pH & Weak-acid Calculations", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Definitions and equations",points:["A weak acid only partially dissociates in water. For HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA] at equilibrium; water is omitted from the expression.","A larger Ka means greater dissociation and a stronger weak acid. pKa = −log₁₀Ka; lower pKa corresponds to a stronger acid.","pH = −log₁₀[H⁺]. For a weak monoprotic acid of initial concentration c, if x = [H⁺] at equilibrium, Ka = x²/(c − x). When x is small relative to c, use Ka ≈ x²/c, so [H⁺] ≈ √(Kac). Check that the approximation is reasonable.","For a buffer containing a weak acid and its conjugate base, added H⁺ is removed by A⁻ and added OH⁻ is neutralised by HA. A buffer resists pH change; it does not keep pH perfectly constant.","In a titration, use stoichiometry to find moles first, then the appropriate equilibrium expression. At half-neutralisation of a weak acid by a strong base, pH = pKa."]}
  ]},
  {title:"Electrochemical Cells & Standard Potentials", group:"Module 5: Physical Chemistry and Transition Elements", sections:[
   {heading:"Cell conventions and predictions",points:["Standard electrode potentials, E°, are measured relative to the standard hydrogen electrode under standard conditions (298 K, solutions 1 mol dm⁻³ and gases 100 kPa unless specified otherwise). A more positive E° means a greater tendency for reduction.","The more positive half-cell is the cathode (reduction); the less positive half-cell runs in reverse at the anode (oxidation). Electrons flow externally from anode to cathode.","E°cell = E°(more positive reduction) − E°(less positive reduction). A positive E°cell indicates a thermodynamically feasible reaction under standard conditions, but does not establish a fast rate.","Do not multiply E° values when multiplying half-equations. Reverse the sign when reversing a half-equation, then combine equations and balance electrons.","Cell potentials are affected by concentrations and temperature. A measured voltage may differ from E° if conditions are not standard or if there are kinetic/measurement limitations."]}
  ]},
  {title:"Organic Synthesis Routes & Reagents", group:"Module 6: Organic Chemistry and Analysis", sections:[
   {heading:"Planning multi-step synthesis",points:["Plan a synthesis by identifying the starting functional group, target functional group and each conversion. Write reagents and conditions above the arrow and include intermediates; one-step answers often miss required marks.","Alkane → haloalkane: halogen, UV light, free-radical substitution (mixtures may form). Alkene → alcohol: steam, acid catalyst and high temperature/pressure for industrial hydration, or cold dilute acidified conditions where specified for addition.","Haloalkane → alcohol: aqueous hydroxide, heat under reflux; haloalkane → nitrile: ethanolic cyanide, heat under reflux (adds one carbon); haloalkane → amine: excess ethanolic ammonia, heat in a sealed tube.","Primary alcohol → aldehyde: acidified dichromate, distil product as it forms. Primary alcohol → carboxylic acid: excess oxidant and reflux. Secondary alcohol → ketone; tertiary alcohols resist oxidation under these conditions.","Carbonyl → alcohol: reducing agent such as NaBH₄. Aldehydes can be oxidised to carboxylic acids; ketones do not readily oxidise under mild conditions. Carboxylic acid + alcohol ⇌ ester + water with acid catalyst and heating.","For every route, check the carbon skeleton, functional group, reagent, solvent, temperature and whether reflux or distillation is needed. Distillation removes a volatile product; reflux prevents volatile reactants escaping during prolonged heating."]}
  ]},
  {title:"Practical Skills: Rates, Titrations & Analysis", group:"Module 1: Development of Practical Skills", sections:[
   {heading:"Planning, measurements and evaluation",points:["Identify independent, dependent and control variables. Explain how each control variable is kept constant, not merely list it. Use a suitable range, enough values and repeats; identify anomalous results using a stated rule.","For a colorimeter, choose a suitable filter complementary to the solution colour, zero with a blank, use clean matched cuvettes and keep the orientation consistent. Calibration curves can estimate unknown concentrations within the calibrated range.","For rates, follow a suitable measurable change such as gas volume, mass loss, colour change or precipitate formation. Keep total volume and mixing method consistent; take readings at regular intervals and repeat.","For titration, rinse a burette with titrant and a pipette with the solution being measured; rinse the conical flask with distilled water only. Add titrant dropwise near the endpoint, swirl, use a white tile, and obtain concordant titres.","Percentage uncertainty for a measurement = absolute uncertainty ÷ measured value × 100. For quantities multiplied or divided, percentage uncertainties are added; for repeated readings, consider the range and mean. Quote units and appropriate significant figures.","Risk assessment should name the hazard, risk and control. Disposal must follow the method and local instructions; never assume a substance is safe to pour away."]}
  ]},

  {title:"A* Specification Gap-Fill: Quantitative Chemistry & Mathematical Skills", group:"Modules 1–5: Cross-topic specification skills", sections:[
   {heading:"Core calculations and decision rules",points:[
    "Always begin quantitative chemistry with a balanced equation, convert the known quantity to moles, use the stoichiometric ratio, then convert to the requested quantity. Show the mole ratio explicitly; never assume a 1:1 ratio.",
    "Moles: n = m/Mr; n = cV when V is in dm³; n = cV/1000 when V is in cm³; for gases at room temperature and pressure use the molar volume specified by the question/data booklet (commonly 24.0 dm³ mol⁻¹). Check the stated conditions before choosing a molar volume.",
    "Concentration: c = n/V. Convert cm³ to dm³ by dividing by 1000. For dilution, moles of solute are conserved: c₁V₁ = c₂V₂ when volumes use the same units.",
    "Percentage yield = actual mass ÷ theoretical mass × 100. Atom economy = Mr of desired product ÷ sum of Mr of all products in the balanced equation × 100. Yield measures practical success; atom economy measures how much reactant mass can become the desired product.",
    "Empirical formula: convert each element's mass or percentage to moles, divide by the smallest, then multiply all ratios by the smallest whole number that resolves fractions (e.g. ×2 for 1.5, ×3 for 1.33 or 1.67, ×4 for 1.25). Molecular formula multiplier = Mr ÷ empirical formula mass.",
    "For titration calculations: use the mean of concordant titres, not the rough titre; convert volume to dm³; calculate moles of the known solution; apply the balanced-equation ratio; then calculate the unknown concentration. Include units and sensible significant figures.",
    "Percentage uncertainty for multiplication/division: add percentage uncertainties for measured quantities used in the calculation, following the course's stated convention. For a burette titre formed from two readings, include uncertainty from both readings. Do not mix absolute and percentage uncertainty."
   ]},
   {heading:"Worked example — a non-1:1 titration",points:[
    "25.0 cm³ of 0.100 mol dm⁻³ H₂SO₄ neutralises 20.0 cm³ NaOH. Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.",
    "Moles H₂SO₄ = 0.100 × 0.0250 = 2.50 × 10⁻³ mol. Ratio H₂SO₄:NaOH = 1:2, so moles NaOH = 5.00 × 10⁻³ mol.",
    "Volume NaOH = 0.0200 dm³. Concentration = 5.00 × 10⁻³ ÷ 0.0200 = 0.250 mol dm⁻³. The factor of two comes from the balanced equation, not the measured volumes."
   ]},
   {heading:"A* exam checks",points:[
    "Use the exact equation and conditions provided; do not substitute a memorised gas molar volume when the question gives another value.",
    "Keep guard digits in intermediate calculations and round only at the end. Check that the final units match the quantity asked for.",
    "For an unfamiliar calculation, write down the relevant relationship, identify known values with units, rearrange symbolically, substitute, and then check magnitude and units."
   ]}
  ]},
  {title:"A* Specification Gap-Fill: Practical Chemistry, Uncertainty & Evaluation", group:"Module 1: Development of practical skills", sections:[
   {heading:"Planning and carrying out experiments",points:[
    "Before starting, identify the independent variable, dependent variable and control variables. State how each control variable will be held constant and how the measured outcome will be obtained.",
    "Choose apparatus based on the precision required. A volumetric pipette and burette are suitable for accurate titration volumes; a measuring cylinder is less precise. Rinse a pipette with the solution it will deliver and a burette with its titrant; rinse a conical flask with deionised water so residual solute does not change the number of moles delivered by the pipette.",
    "For a burette, remove the funnel before reading, ensure the jet is filled and free of air bubbles, read the bottom of the meniscus at eye level, record to the apparatus resolution, and add titrant dropwise near the end point while swirling the flask.",
    "Repeat titrations until concordant titres are obtained (typically within 0.10–0.20 cm³ depending on the method/instructions). Use concordant titres to calculate a mean and report the precision appropriately.",
    "Reflux heats a mixture for an extended time while condensing vapour back into the flask. Distillation separates a volatile product by boiling and condensing it. Recrystallisation purifies a solid using minimum hot solvent, hot filtration if needed, cooling, vacuum filtration, washing with cold solvent and drying.",
    "Use a fume cupboard for volatile or harmful vapours, wear appropriate eye protection, assess corrosive/flammable/toxic hazards, keep ignition sources away from flammable solvents and dispose of chemical waste as instructed. Risk statements should link hazard, possible harm and a control measure."
   ]},
   {heading:"Data quality and evaluation",points:[
    "Accuracy means closeness to the true/accepted value; precision means repeatability or closeness of repeated readings; reliability is strengthened by repeat measurements; validity asks whether the method tests the intended relationship while controlling confounders.",
    "Random errors cause scatter and can be reduced by repeats and averaging. Systematic errors shift readings consistently and are not removed simply by repeating; identify a likely source and a correction or calibration step.",
    "For calorimetry, measure a known mass/volume, insulate the vessel, use a lid, stir, record initial and final temperatures carefully and consider heat loss to surroundings. q = mcΔT; ΔH = −q/n for the reacting amount, with sign and units stated. Explain why measured temperature change may underestimate the magnitude of ΔH.",
    "For rates, define exactly how rate is measured (e.g. gas volume per time, mass loss per time, or time to a fixed change). Repeat, keep temperature and concentrations controlled, and use initial gradients/tangents where the question asks for instantaneous rate.",
    "A strong evaluation links each limitation to the direction or nature of its effect on the result and proposes a specific improvement that addresses it. ‘Use more accurate equipment’ is insufficient unless the apparatus and reason are named."
   ]},
   {heading:"Practical report checklist",points:[
    "Record raw readings with units and appropriate decimal places; distinguish raw data from calculated data; show one sample calculation; label graphs with quantity and unit; use a suitable scale and best-fit line/curve; identify anomalies only with a defensible reason.",
    "When comparing results, quote numerical evidence, consider uncertainty/overlap where relevant, and distinguish a trend from a causal conclusion. Correlation alone does not establish causation.",
    "These notes are a practical-skills framework. Match each individual required practical to the current OCR practical activity guidance and your teacher's instructions before treating the practical endorsement as complete."
   ]}
  ]},
  {title:"A* Specification Gap-Fill: Organic Routes, Mechanisms & Spectra", group:"Modules 4 and 6: Organic chemistry", sections:[
   {heading:"Route planning",points:[
    "For each step in a synthesis route, specify starting functional group, product functional group, reagent, conditions, reaction type and any purification required. Check whether a reagent gives substitution or elimination under the stated conditions.",
    "Haloalkane + aqueous hydroxide, warm/reflux → alcohol by nucleophilic substitution. Haloalkane + ethanolic hydroxide, heat → alkene by elimination. The solvent changes the favoured pathway; state it explicitly.",
    "Primary alcohol oxidation can give an aldehyde when distilled off as it forms, or a carboxylic acid under reflux with excess oxidising agent. Secondary alcohols oxidise to ketones; tertiary alcohols resist oxidation under typical A-level conditions.",
    "Aldehydes can be oxidised to carboxylic acids; aldehydes and ketones can be reduced to alcohols using a suitable reducing agent. Nucleophilic addition to carbonyls involves attack at the δ⁺ carbonyl carbon followed by protonation, with details depending on the reagent.",
    "For electrophilic addition to alkenes, the electron-rich π bond attracts an electrophile. For free-radical substitution of alkanes, UV light initiates homolytic fission; describe initiation, propagation and termination if the mechanism is requested.",
    "Purify and identify products using suitable techniques: separating funnel for immiscible liquids, drying agent for water in an organic layer, distillation for boiling-point separation, recrystallisation for solids, and chromatography for mixtures. Purity should be supported by data, not assumed from appearance."
   ]},
   {heading:"Analytical interpretation",points:[
    "Mass spectrum: molecular ion may indicate Mr; fragmentation peaks support structural deductions. Chlorine commonly gives M:M+2 near 3:1 and bromine near 1:1 because of their isotopes. Check whether the molecular ion is present before using it to infer Mr.",
    "IR spectra: use characteristic absorptions as evidence for functional groups and consider absence of expected peaks. Typical guide ranges include O–H (alcohol broad, about 3200–3600 cm⁻¹), carboxylic-acid O–H (very broad, about 2500–3300 cm⁻¹), C=O (about 1650–1750 cm⁻¹) and C–H below about 3100 cm⁻¹; use the data provided in the question/specification.",
    "¹H NMR: chemical shift indicates proton environment, integration gives relative proton numbers and splitting can indicate adjacent non-equivalent proton environments. The simple n+1 rule applies to common first-order cases; use supplied data and do not over-interpret complex patterns.",
    "Chromatography Rf = distance moved by component ÷ distance moved by solvent front. Compare Rf values only when conditions are the same. A single spot can support purity but does not prove identity by itself.",
    "For an identification answer, combine independent evidence: molecular formula/Mr, IR absorptions, NMR signals, isotope pattern and chemical tests. Explain how each observation supports or rules out a structure."
   ]}
  ]},

  {title:"A* Specification Gap-Fill: Inorganic Reactions, Observations & Tests", group:"Modules 2–5: Inorganic chemistry and practical analysis", sections:[
   {heading:"Qualitative analysis and observations",points:[
    "When describing a test, state the reagent, conditions, observation and inference. Distinguish ‘no visible change’ from a positive result, and do not infer an ion from a colour alone if confirmatory tests are required.",
    "Carbonate ions: add dilute acid; effervescence occurs as CO₂ is released. Bubble the gas through limewater; it turns milky/cloudy due to CaCO₃ formation. Sulfite ions can also release a choking gas with acid, so use confirmatory tests and safe handling.",
    "Halide ions: acidify the solution with dilute nitric acid, then add aqueous silver nitrate. Cl⁻ gives a white AgCl precipitate, Br⁻ a cream AgBr precipitate, and I⁻ a yellow AgI precipitate. Ammonia can distinguish precipitate solubility: AgCl dissolves in dilute ammonia; AgBr requires concentrated ammonia; AgI is insoluble. Avoid hydrochloric acid because it adds chloride ions.",
    "Sulfate ions: acidify with dilute hydrochloric or nitric acid as directed, then add barium ions (commonly barium chloride solution); a white BaSO₄ precipitate indicates sulfate. Acidification removes interfering carbonate ions; follow the exact OCR method and safety guidance.",
    "Ammonium ions: warm with aqueous sodium hydroxide; ammonia gas is released and turns damp red litmus paper blue. Do not smell directly; use the approved gas-test method.",
    "Transition-metal ions with aqueous sodium hydroxide may form characteristic hydroxide precipitates. Record the colour and whether it dissolves in excess reagent only when that observation is part of the specified test; colours can depend on oxidation state and conditions.",
    "Flame tests: clean the wire loop thoroughly, use the specified acid to clean it, and observe through the appropriate filter if needed. Sodium gives yellow, potassium lilac (often viewed through cobalt glass), calcium brick-red/orange-red, copper blue-green and lithium crimson. Contamination can mask the colour."
   ]},
   {heading:"Inorganic trends and redox reasoning",points:[
    "For periodic trends, explain the balance of nuclear charge, shielding and distance from the nucleus. Down a group, increased shell number and shielding can outweigh increased nuclear charge; across a period, nuclear charge rises while shielding changes less, so atomic radius generally decreases.",
    "Group 2 reactivity increases down the group because outer electrons are further from the nucleus and more shielded, making them easier to remove. Hydroxide solubility generally increases down Group 2; sulfate solubility generally decreases. Use observed trends rather than memorising one isolated value.",
    "For halogens, oxidising power decreases down Group 17 as gaining an electron becomes less favourable due to increased distance and shielding. A more reactive halogen oxidises the halide ion of a less reactive halogen; write balanced ionic equations and identify oxidising/reducing agents.",
    "Oxidation is electron loss/increase in oxidation number; reduction is electron gain/decrease in oxidation number. Balance redox equations by balancing atoms and charge, including H₂O and H⁺ in acidic conditions or OH⁻ where alkaline conditions are specified.",
    "For transition-metal chemistry, relate variable oxidation states to similar energies of 3d and 4s electrons; coloured ions arise from electronic transitions between split d orbitals in a ligand field. Complex ion geometry and ligand substitution depend on the ligands and conditions stated in the question."
   ]},
   {heading:"Practical precision checks",points:[
    "Use clean apparatus and avoid cross-contamination; use separate droppers for reagents; add reagents in the order specified; record precipitate colour, solubility in excess reagent and gas-test results systematically.",
    "If a result is ambiguous, use a confirmatory test and explain why it distinguishes alternatives. A high-quality identification answer links each observation to the relevant ionic equation or chemical property.",
    "Treat this as a focused gap-fill, not a replacement for the complete OCR qualitative-analysis table, data booklet or hazard guidance. Confirm every required ion and observation against the current H432 specification."
   ]}
  ]},
 ,
 {"title":"Save My Exams Supplement — Practical Chemistry & Measurement","group":"OCR A H432 · Supplementary revision notes","sections":[{"heading":"Planning practical work","points":["For a titration, rinse the burette with titrant and the pipette with the solution being measured; use a pipette filler, remove the funnel from the burette, and record initial/final burette readings at appropriate precision.","Use a rough titre only to locate the endpoint, then obtain concordant titres and calculate a mean from concordant values. Explain why concordance improves precision.","For a calorimetry experiment, measure the relevant mass/volume and temperature change, minimise heat loss, and use q = mcΔT. Check units and sign conventions before calculating enthalpy change per mole.","For rates experiments, take measurements at regular time intervals or use an appropriate continuous method. Repeat measurements, control temperature and concentrations, and state how the measured quantity relates to reaction progress.","For uncertainty, identify the instrument resolution and number of readings involved. Percentage uncertainty = absolute uncertainty ÷ measured value × 100; combine uncertainties according to the operation and method specified by the question.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/chemistry/ocr/17/revision-notes/ (Development of Practical Skills in Chemistry)."]},{"heading":"Qualitative analysis and purification","points":["Record observations precisely: colour change, precipitate formation and whether a precipitate dissolves in excess reagent. Do not replace an observation with an unsupported conclusion.","When testing for ions, state the reagent, conditions, observation and inference. A white precipitate alone may not identify a single ion; the follow-up test can be decisive.","Recrystallisation purifies a solid by dissolving it in a minimum volume of hot solvent, cooling to crystallise, filtering and washing crystals with a small amount of cold solvent, then drying them.","Distillation separates liquids based on boiling points; reflux allows heating for an extended time while vapour condenses and returns to the flask, reducing loss of volatile reactants/products.","Use a separating funnel for immiscible liquid layers. Identify which layer is aqueous/organic from the stated solvent density or a test; do not assume the organic layer is always on top."]}]},
 {"title":"Save My Exams Supplement — Equilibria, Acids & Organic Mechanisms","group":"OCR A H432 · Supplementary revision notes","sections":[{"heading":"Equilibria and acid calculations","points":["At dynamic equilibrium in a closed system, forward and reverse reaction rates are equal; concentrations remain constant but are not necessarily equal.","For Kc, use equilibrium concentrations and raise each concentration to its stoichiometric coefficient. Omit pure solids and pure liquids. A change in concentration or pressure can shift equilibrium position, but only temperature changes the value of K for a given reaction.","For a weak acid HA, Ka = [H⁺][A⁻]/[HA]. For a monoprotic acid with small dissociation, [H⁺] ≈ √(Ka × initial concentration); check the approximation is reasonable and calculate pH using −log₁₀[H⁺].","A buffer contains a weak acid and its conjugate base (or a weak base and its conjugate acid). Added H⁺ is removed by the conjugate base; added OH⁻ is removed by the weak acid, limiting pH change.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/chemistry/ocr/17/revision-notes/ (Acid-base & Redox; Chemical Equilibrium; pH practicals)."]},{"heading":"Mechanisms and organic synthesis","points":["Curly arrows show movement of an electron pair and must start at a lone pair or bond and point to where the pair moves. Show charges and intermediates where required.","In nucleophilic substitution, a nucleophile donates a lone pair to an electron-deficient carbon. For haloalkanes, the C–halogen bond breaks heterolytically and the halide leaves with the bonding pair.","In electrophilic addition to an alkene, the electron-rich π bond attacks an electrophile; subsequent steps produce the addition product. Include the correct charges, reagents and conditions.","For a synthesis route, show each reagent and condition above the arrow, identify intermediates, and ensure the carbon skeleton and functional group change are chemically consistent.","For spectroscopy, use multiple pieces of evidence. Match IR absorptions to functional groups and use molecular-ion, fragmentation, chemical-shift, integration and splitting information as appropriate; do not identify a compound from one peak alone.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/chemistry/ocr/17/revision-notes/ (Core Organic Chemistry; Organic Chemistry & Analysis)."]}]}],
 Biology: [
  {title:"Exam Technique — Data, Practicals & Extended Responses", group:"OCR A H420 · PMT question/mark-scheme patterns", sections:[
   {heading:"Planning practical investigations", points:[
    "State the independent variable (what is deliberately changed), dependent variable (what is measured) and several relevant controlled variables (what is kept constant). Name how each variable is controlled or measured, rather than writing only 'keep conditions the same'.",
    "Use biological replicates: sample multiple individuals or leaves from each group, and repeat the full investigation where practical. Equal sample sizes improve comparability; a larger sample reduces the influence of anomalous individuals.",
    "Describe the procedure in a logical order: sampling/collection → preparation → measurement or treatment → fixed exposure time → recording results → processing and comparison. Give apparatus and measurement units where relevant.",
    "For enzyme-rate investigations, specify the method used to measure rate (e.g. gas volume per unit time, colour change with a colorimeter, or time to a defined end point). Control pH and temperature as well as substrate/enzyme concentration where these are not the independent variables.",
    "When comparing plant varieties or treatments, control plant age, tissue mass/area, light intensity and duration, temperature, water supply and extraction/measurement procedure where relevant. Use the same method for every sample."
   ]},
   {heading:"Data handling and mark-scheme precision", points:[
    "Percentage change = (new value − original value) ÷ original value × 100. Identify the baseline explicitly: 'percentage difference compared with shade leaves' means divide by the shade value, not the sun value.",
    "When asked to improve an investigation, give a specific change and why it helps: increase sample size to reduce the effect of individual variation; use equal sample sizes to make groups comparable; repeat the whole experiment to check reproducibility; quantify a qualitative observation.",
    "Link each benefit to its biological consequence. For example, more stomata may increase CO₂ entry for photosynthesis; do not stop at 'more gas exchange' if the question asks for an explanation.",
    "For a fieldwork plan, specify how organisms are sampled, how many samples/sites are used, how the variable is measured, how the data are processed (mean, percentage, rate or index), and how the groups are compared.",
    "For a 5–7 mark response, organise the answer in the order requested by the question. Include independent/dependent/controlled variables or collection/testing/processing stages explicitly when prompted.",
    "For biological drawings, draw only structures visible in the image, use clear continuous single lines without shading, keep proportions accurate, and use ruled label lines that touch the feature. If a cell type is specified, name it precisely.",
    "For microscope calibration, use the stage micrometer to calculate the real length represented by one eyepiece-graticule division, then multiply by the number of divisions spanning the specimen. Convert units carefully (1 mm = 1000 μm) and give the requested significant figures."
   ]},
   {heading:"Question patterns reviewed", points:[
    "PMT OCR A Module 1 question sets include synoptic practical/data tasks, not only recall: planning experiments, calculating percentage differences, improving sample design, interpreting variation and explaining plant responses.",
    "Mark schemes may award separate points for a method, a controlled variable, a measurement, processing and a linked biological explanation. A vague statement such as 'repeat it' may not earn credit unless the repetition is described clearly.",
    "The practice questions in Bridge Protocol are original questions modelled on these patterns; they are not copied PMT questions."
   ]}
  ]},

  {title:"Biological Molecules: Carbs & Lipids", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Core definitions & key equations", points:[
    "Monosaccharides (e.g. glucose, fructose, galactose) are the monomers; glucose exists as α-glucose and β-glucose isomers, differing in the orientation of the OH group on carbon 1",
    "Condensation reaction: two monosaccharides join with loss of a water molecule, forming a glycosidic bond; hydrolysis is the reverse, using a water molecule to break the bond",
    "Disaccharides: maltose (glucose + glucose), sucrose (glucose + fructose), lactose (glucose + galactose)",
    "Triglycerides = 1 glycerol + 3 fatty acids joined by ester bonds (condensation, losing 3 water molecules); phospholipids replace one fatty acid with a phosphate group, giving a hydrophilic head and two hydrophobic tails"
   ]},
   {heading:"Method — structure-function & polysaccharides in detail", points:[
    "Starch (plant storage) = amylose (long unbranched chains of α-glucose, α-1,4 bonds, coils into a helix) + amylopectin (branched, α-1,4 with α-1,6 branch points) — compact, good for storage",
    "Glycogen (animal storage) is structurally similar to amylopectin but even more highly branched — many branch ends mean many places for enzymes to act at once, releasing glucose very rapidly",
    "Cellulose (plant cell walls) is made of β-glucose monomers joined by β-1,4 bonds; alternating glucose units are flipped 180°, producing long straight unbranched chains that hydrogen-bond together into strong microfibrils, giving plant cell walls their strength",
    "Phospholipids arrange into a bilayer in water because hydrophilic heads face the water and hydrophobic tails face inwards away from it — the basis of all cell membranes",
    "Saturated fatty acids have no C=C double bonds and pack tightly (solid at room temperature); unsaturated fatty acids have C=C kinks that prevent tight packing (liquid at room temperature)"
   ]},
   {heading:"Common exam question types", points:[
    "Biochemical tests: Benedict's for reducing sugars (heat, positive = brick-red precipitate) and non-reducing sugars (hydrolyse with dilute HCl and neutralise first, then repeat); iodine test for starch (yellow-brown → blue-black); emulsion test for lipids (shake with ethanol then water, positive = white emulsion)",
    "Explaining how a polysaccharide's structure relates to its function",
    "Drawing/identifying glycosidic or ester bond formation via condensation",
    "Comparing starch, glycogen and cellulose structures and functions"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Glucose in solution is mostly a six-membered ring formed when the C1 aldehyde reacts with the C5 hydroxyl to give a hemiacetal. The new –OH on C1 (the anomeric carbon) can point down (α) or up (β), and the two forms interconvert through the open chain (mutarotation). Only a hemiacetal can reopen to give the free aldehyde that reduces Benedict's reagent: maltose and lactose are reducing sugars, sucrose is not because its glycosidic bond ties up both anomeric carbons.",
    "The type of glycosidic bond controls shape and function. α(1→4) links turn amylose into a compact helix (about six glucose per turn) that stores well and is easily hydrolysed by amylase; α(1→6) branches (every 24–30 residues in amylopectin, every 8–12 in glycogen) give many free ends for rapid enzymatic mobilisation. In cellulose the β(1→4) link flips each successive glucose by 180°, giving straight chains that hydrogen-bond sideways into microfibrils with tensile strength comparable to steel. Humans lack a cellulase, so cellulose is dietary fibre.",
    "Glycogen is a better fuel store than free glucose because osmotic pressure depends on the number of particles: thousands of glucose units in one glycogen molecule exert the osmotic effect of one particle, so the store does not draw water into the cell. Branching also lets many phosphorylase enzymes work at once, which is why muscle can mobilise glucose in seconds. Plants use starch and animals use glycogen for the same reason: compact, insoluble, osmotically inert and quickly accessible.",
    "Lipids store more energy per gram (about 37 kJ g⁻¹ against about 17 kJ g⁻¹ for carbohydrate) because their carbon atoms are more reduced (more C–H bonds, fewer C–O), so more energy is released on oxidation; storage as anhydrous fat also avoids the 2–3 g of bound water per gram of glycogen. Triglycerides are formed from glycerol and three fatty acids by ester bonds (condensation); the degree of saturation controls the melting point: stearic acid (18:0) melts at about 69 °C, oleic acid (18:1 cis) at about 13 °C, and trans-elaidic acid at about 45 °C.",
    "A cis double bond puts a kink in the hydrocarbon tail, which stops tails from packing closely and therefore lowers the melting point and keeps membranes fluid; trans fats are straight, pack like saturated fat and raise LDL cholesterol. Industrial partial hydrogenation of vegetable oils creates trans bonds as a by-product, which is why trans fats are harmful and are now strictly limited in foods. Omega-3 fatty acids (double bond at the third carbon from the methyl end) cannot be made by humans and are essential.",
    "Phospholipids are amphipathic, so they spontaneously assemble in water. Above a critical micelle concentration (CMC) single-chain amphiphiles form micelles; double-tailed phospholipids, whose cone shape suits a flat sheet, form bilayers that close into vesicles. Assembly is driven by entropy: ordered water cages around hydrophobic tails are released when the tails cluster (the hydrophobic effect), not by a strong attraction between tails. This self-assembly is the basis of cell membranes, liposome drug delivery and soap cleaning.",
    "Cholesterol is a rigid, mostly hydrophobic molecule that inserts between phospholipids with its small –OH towards the head groups. It acts as a fluidity buffer: at high temperature it restricts movement of phospholipid tails and reduces fluidity; at low temperature it stops tails packing tightly and prevents the membrane freezing. It also reduces permeability to small polar molecules. Cholesterol is the precursor of steroid hormones, bile salts and vitamin D; atherosclerosis is linked to LDL-bound cholesterol being taken up by macrophages in artery walls."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Explain structure-function links explicitly and specifically — e.g. explaining that cellulose's β-1,4 bonds let adjacent chains hydrogen-bond into microfibrils, giving tensile strength, scores far more than simply stating cellulose is strong",
    "For the non-reducing sugar test, you MUST state that you first hydrolyse the sample (boil with dilute HCl) and neutralise it before repeating the Benedict's test — forgetting this step is a very common lost mark",
    "Don't confuse glycosidic bonds (between sugars) with ester bonds (in triglycerides/phospholipids) — both form by condensation but are chemically different",
    "Branching (in glycogen/amylopectin) is what allows RAPID glucose release — more branches means more ends for enzymes to work on simultaneously"
   ]}
  ]},
  {title:"Biological Molecules: Proteins & Enzymes", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Core definitions & key equations", points:[
    "Amino acids share a general structure: an amine group, a carboxyl group, a hydrogen, and a variable R group, all attached to a central carbon; the R group determines the amino acid's properties",
    "Peptide bond: forms by condensation between the amine group of one amino acid and the carboxyl group of another, releasing water; hydrolysis breaks it",
    "Enzymes are globular proteins that act as biological catalysts, lowering activation energy without being used up",
    "Induced fit model: the active site changes shape slightly as the substrate binds, moulding around it to strain the substrate's bonds and lower activation energy further than a rigid lock-and-key model would suggest"
   ]},
   {heading:"Method — protein structure & enzyme kinetics", points:[
    "Primary structure: the specific sequence of amino acids, held by peptide bonds",
    "Secondary structure: the chain coils (α-helix) or folds (β-pleated sheet) due to hydrogen bonding between nearby C=O and N-H groups in the backbone",
    "Tertiary structure: overall 3D folding of a single polypeptide, stabilised by hydrogen bonds, ionic bonds, disulfide bonds, and hydrophobic interactions between R groups",
    "Quaternary structure: two or more polypeptide chains associate together (e.g. haemoglobin's four subunits)",
    "Factors affecting enzyme rate: temperature (rate rises with kinetic energy to an optimum, then falls sharply as heat breaks hydrogen/ionic bonds, denaturing the active site); pH (extremes disrupt bonding similarly); substrate concentration (rate rises then plateaus once active sites saturate); enzyme concentration (rate rises roughly linearly if substrate is in excess)",
    "Inhibitors: competitive inhibitors resemble the substrate and compete for the active site (effect reduced by more substrate); non-competitive inhibitors bind an allosteric site, changing active site shape so substrate can't bind (more substrate does NOT overcome this)"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining the effect of temperature or pH on enzyme rate, in terms of specific bonds and active site shape",
    "Distinguishing competitive from non-competitive inhibition, including how each affects a rate-vs-substrate-concentration graph",
    "Practical enzyme investigations: measuring initial rate (e.g. gas syringe for catalase, colorimetry for amylase/starch-iodine), and why initial rate is used",
    "Biuret test for protein (positive = colour change from blue to purple/lilac)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The Michaelis–Menten equation, v = Vmax[S] ÷ (Km + [S]), follows from E + S ⇌ ES → E + P with the steady-state assumption. Km is the substrate concentration giving half of Vmax and is a rough inverse measure of affinity (small Km = high affinity). Vmax = kcat[E]total, where kcat (the turnover number) is the number of substrate molecules converted per active site per second, from about 1 s⁻¹ for lysozyme to about 10⁷ s⁻¹ for catalase. Catalytic efficiency is kcat ÷ Km; the best enzymes approach the diffusion limit of 10⁸–10⁹ mol⁻¹ dm³ s⁻¹.",
    "The Lineweaver–Burk plot linearises the data: 1 ÷ v = (Km ÷ Vmax)(1 ÷ [S]) + 1 ÷ Vmax, so the intercept on the y axis is 1 ÷ Vmax and the x intercept is −1 ÷ Km. Inhibitors are recognised by how the lines change: a competitive inhibitor raises the apparent Km but leaves Vmax unchanged (lines cross on the y axis) and can be overcome with more substrate; a non-competitive inhibitor lowers Vmax with no change to Km; an uncompetitive inhibitor lowers both and gives parallel lines. A competitive inhibitor with inhibitor constant Ki gives apparent Km = Km(1 + [I] ÷ Ki).",
    "Enzymes lower activation energy by binding the transition state more tightly than the substrate (Pauling): induced fit, strain on bonds, general acid–base catalysis by active-site residues such as His, a metal ion stabilising negative charge, and holding substrates in the correct orientation (a large entropy effect). Serine proteases (chymotrypsin) use a Ser–His–Asp catalytic triad. Rate enhancements reach 10¹⁷ (orotidine decarboxylase) over the uncatalysed reaction. The optimum pH reflects the ionisation of these key groups, and the temperature optimum is a balance between rate rising and denaturation.",
    "Protein folding is driven mainly by the hydrophobic effect, with hydrogen bonds, ionic interactions and disulfide bonds providing specificity. Anfinsen's ribonuclease experiment (Nobel 1972) showed that the amino acid sequence alone encodes the 3D structure: urea and a reducing agent unfolded the protein, and removing them let it refold spontaneously with full activity. The net stability of a folded protein is small, only about 20–60 kJ mol⁻¹, a delicate balance of large opposing terms. Chaperones (Hsp70, GroEL) prevent misfolding and aggregation.",
    "Secondary structure is set by hydrogen bonds between backbone C=O and N–H groups. An α-helix has 3.6 residues per turn, 0.54 nm pitch and each C=O hydrogen-bonds to the N–H four residues along (i → i + 4); β-sheets are formed by strands side by side, running parallel or antiparallel. The Ramachandran plot shows which backbone angles (φ, ψ) are sterically allowed. Misfolded proteins that stack into β-sheet fibrils cause amyloid diseases (Alzheimer's), and prions are infectious misfolded proteins that template the misfolding of normal protein.",
    "Haemoglobin shows cooperative oxygen binding: each subunit's binding of O₂ shifts the tetramer from the tense (T) state to the relaxed (R) state, raising the affinity of the rest, giving a sigmoidal curve (Hill coefficient about 2.8). The Bohr effect (lower pH and higher CO₂ lower the affinity) delivers more O₂ to respiring tissue. Sickle-cell disease is a single amino acid substitution (Glu6 → Val in the β chain) creating a hydrophobic patch that makes deoxyhaemoglobin polymerise into fibres, a classic example of how one point mutation changes tertiary and quaternary behaviour.",
    "Protein analysis techniques: SDS-PAGE separates denatured proteins by size only (SDS coats them in uniform negative charge); X-ray crystallography and cryo-electron microscopy give atomic structures; mass spectrometry identifies proteins from peptide masses (proteomics); and Edman degradation reads sequences one residue at a time from the N-terminus. A fluorescence or absorbance assay at 280 nm (Trp and Tyr absorb) is the usual way to estimate protein concentration, and Bradford and BCA assays are colorimetric alternatives."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: an enzyme has Vmax = 50 μmol min⁻¹ and Km = 2.0 mmol dm⁻³. Find the rate at [S] = 1.0 mmol dm⁻³, then with a competitive inhibitor at [I] = 2.0 mmol dm⁻³ (Ki = 1.0 mmol dm⁻³). → v = 50 × 1.0 ÷ (2.0 + 1.0) = 16.7 μmol min⁻¹. With the inhibitor, apparent Km = 2.0 × (1 + 2.0 ÷ 1.0) = 6.0 mmol dm⁻³, so v = 50 × 1.0 ÷ (6.0 + 1.0) = 7.1 μmol min⁻¹. Vmax is unchanged: at very high [S] the inhibitor is out-competed.",
    "Worked example: Vmax = 5.0×10⁻⁶ mol dm⁻³ s⁻¹ with total enzyme [E] = 1.0×10⁻⁸ mol dm⁻³ and Km = 2.0×10⁻³ mol dm⁻³. Find kcat and the catalytic efficiency. → kcat = Vmax ÷ [E] = 5.0×10⁻⁶ ÷ 1.0×10⁻⁸ = 500 s⁻¹. kcat ÷ Km = 500 ÷ 2.0×10⁻³ = 2.5×10⁵ mol⁻¹ dm³ s⁻¹, well below the diffusion limit (about 10⁸–10⁹), so the enzyme is not perfectly optimised."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Name the exact bonds broken by heat/pH changes (hydrogen and ionic bonds — NOT peptide bonds) — vague answers that just say the enzyme's shape changes, without naming the bonds, lose marks",
    "For inhibitor graphs: competitive inhibition still reaches the same Vmax at high substrate concentration; non-competitive inhibition lowers Vmax itself",
    "Explain denaturation precisely — it means the tertiary (3D) structure is permanently disrupted, not that the primary sequence changes",
    "Always justify why initial rate is used in practicals — measured before substrate concentration falls enough to become limiting, giving a fair comparison"
   ]}
  ]},
  {title:"Cell Structure & Ultrastructure", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Core definitions & key equations", points:[
    "Prokaryotic cells: no nucleus or membrane-bound organelles, circular DNA with no histones, smaller 70S ribosomes, often a cell wall/capsule/flagella/plasmids",
    "Eukaryotic cells: membrane-bound nucleus and organelles, linear DNA with histones, larger 80S ribosomes",
    "Magnification = size of image ÷ actual size of object; practise converting mm ↔ μm ↔ nm (×1000 each step down)",
    "Resolution = the minimum distance between two points at which they can still be seen as two separate points — different from magnification"
   ]},
   {heading:"Method — organelles & microscopy technique", points:[
    "Nucleus: contains DNA (chromatin) and a nucleolus (makes ribosomal RNA/ribosome subunits), surrounded by a nuclear envelope with pores",
    "Mitochondria: double membrane, inner membrane folded into cristae (increases surface area), matrix contains enzymes for the Krebs cycle",
    "Rough ER has ribosomes attached and folds/transports proteins; smooth ER makes/processes lipids",
    "Golgi apparatus modifies proteins/lipids and packages them into vesicles for transport or secretion",
    "Lysosomes contain digestive (hydrolytic) enzymes to break down waste or worn-out organelles",
    "Chloroplasts (plant cells): double membrane, thylakoids stacked into grana, stroma contains Calvin cycle enzymes",
    "Cell fractionation: (1) homogenise tissue in cold, isotonic, buffered solution; (2) filter to remove debris; (3) ultracentrifuge at increasing speeds — heaviest organelles (nuclei) sediment first at low speed, then mitochondria/chloroplasts, then smaller organelles like ribosomes at very high speed"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating actual/image size or magnification from a scale bar or stated magnification",
    "Comparing prokaryotic and eukaryotic cell features",
    "Explaining the purpose of each step in cell fractionation",
    "Comparing light and electron microscopy in terms of resolution and magnification, and what each can/can't show"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Resolution is limited by diffraction: the smallest resolvable distance d = 0.61λ ÷ NA, where λ is the wavelength and NA the numerical aperture of the lens. Visible light (about 550 nm) with NA = 1.4 gives d ≈ 240 nm, which is why a light microscope cannot resolve ribosomes or the layers of a membrane. Electrons accelerated at 100 kV have a wavelength of about 0.004 nm, so TEM can resolve about 0.1 nm in practice (limited by lens aberrations), and magnification only helps if resolution allows.",
    "Specialised microscopy: SEM scans a focused beam over a coated specimen and detects secondary electrons to give a 3D-looking surface image (resolution about 1–10 nm); TEM transmits electrons through ultra-thin stained sections to give internal detail but a 2D projection and requires a vacuum and fixed, dead material. Fluorescence microscopy uses fluorescent dyes or genetically encoded GFP to follow specific proteins in living cells, confocal microscopy removes out-of-focus light, and super-resolution methods (Nobel Prize 2014) beat the diffraction limit. Cryo-EM freezes samples in vitreous ice to give near-atomic structures.",
    "Endosymbiotic theory (Margulis) says mitochondria and chloroplasts descend from free-living bacteria engulfed by an ancestral host cell. Evidence: a double membrane (the inner one bacterial), their own circular DNA without histones, 70S ribosomes (like bacteria and unlike the 80S eukaryotic cytoplasmic ribosomes), reproduction by binary fission, sensitivity to antibiotics that inhibit bacterial translation, a bacteria-like phospholipid cardiolipin in the inner mitochondrial membrane, and a size similar to bacteria. Gene transfer to the nucleus has shrunk their genomes.",
    "Cell fractionation separates organelles by differential centrifugation: homogenise cold (slows enzyme activity), in isotonic buffered solution (prevents osmotic damage and pH changes), filter, then spin at increasing speed. Nuclei pellet first (low g), then mitochondria and chloroplasts, then lysosomes, then microsomes (ER fragments) and finally ribosomes; each pellet is resuspended and re-spun. Marker enzymes (for example succinate dehydrogenase in mitochondria) confirm purity. Density-gradient centrifugation then separates organelles of similar size by density.",
    "The cytoskeleton organises the interior: microtubules (25 nm, α/β-tubulin dimers, polarised, with dynamic instability driven by GTP hydrolysis) form spindle fibres and cilia and act as tracks for kinesin (towards + end) and dynein; actin microfilaments (7 nm) drive cell shape change and muscle contraction (with myosin); intermediate filaments (about 10 nm) give mechanical strength. Kinesin walks in 8 nm steps using one ATP per step. Colchicine and the anticancer drug paclitaxel (Taxol) target microtubule dynamics and so block mitosis.",
    "Protein trafficking: proteins destined for secretion or membranes carry an N-terminal signal peptide that is recognised by the signal recognition particle, which docks the ribosome on the rough ER so the protein is made directly into the lumen. Vesicles then carry cargo ER → Golgi → plasma membrane; the Golgi modifies proteins (glycosylation), sorts them, and packages lysosomal enzymes with mannose-6-phosphate tags. Retention signals (KDEL) return escaped ER proteins. Faults in these pathways cause diseases such as cystic fibrosis (misfolded CFTR degraded in the ER)."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: a mitochondrion measures 45 mm on an electron micrograph and its actual length is 1.5 μm. Find the magnification. → Convert both to the same unit: 45 mm = 45 000 μm, so M = image size ÷ actual size = 45 000 ÷ 1.5 = ×30 000. To find the actual size of another structure measuring 12 mm: 12 000 μm ÷ 30 000 = 0.4 μm (400 nm).",
    "Worked example: calculate the best resolution of a light microscope using green light (λ = 550 nm) with an oil-immersion lens of NA = 1.4, and of a TEM (λ = 0.0037 nm, NA = 0.01 as a typical value). → Light: d = 0.61 × 550 ÷ 1.4 = 240 nm. Electron: d = 0.61 × 0.0037 ÷ 0.01 = 0.23 nm. The electron microscope's resolution is about 1000 times better because the wavelength is about 150 000 times shorter."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Never confuse magnification and resolution — electron microscopes are used because they have far higher resolution, not just because they magnify more",
    "For cell fractionation, explain WHY each condition matters (cold: reduce enzyme activity that could damage organelles; isotonic: prevent osmotic damage; buffered: keep pH constant) rather than just listing the conditions",
    "Always show full unit conversion working in magnification calculations — forgetting a ×1000 conversion between μm and mm is a common error",
    "Organelles are separated by DENSITY/SIZE (heaviest sediment first), not any other property — state this explicitly"
   ]}
  ]},
  {title:"The Cell Cycle & Division", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Core definitions & key equations", points:[
    "The cell cycle: interphase (G1 growth, S phase DNA replication, G2 further growth) → mitosis (nuclear division) → cytokinesis (cytoplasm divides)",
    "Mitosis produces two genetically identical diploid daughter cells — growth, repair, asexual reproduction",
    "Meiosis involves two successive divisions and produces four genetically different haploid cells (gametes) — halves the chromosome number"
   ]},
   {heading:"Method — phases in detail", points:[
    "Prophase: chromatin condenses into visible chromosomes (each with two sister chromatids); the nuclear envelope breaks down; spindle fibres form",
    "Metaphase: chromosomes line up individually along the cell's equator, attached to spindle fibres from each pole",
    "Anaphase: the centromere splits, spindle fibres pull sister chromatids to opposite poles",
    "Telophase: chromatids arrive at the poles, decondense, and a nuclear envelope reforms around each set",
    "Meiosis I: homologous pairs line up together in metaphase I; crossing over between non-sister chromatids of homologous chromosomes happens in prophase I; whole homologous pairs separate to opposite poles in anaphase I",
    "Meiosis II: proceeds like a normal mitotic division but starting from haploid cells, giving four haploid cells overall",
    "Variation sources in meiosis: crossing over (prophase I) and independent assortment (random orientation of homologous pairs in metaphase I, giving 2ⁿ combinations for n pairs)",
    "Cell cycle checkpoints (G1, G2, M) check for DNA damage or correct chromosome attachment — failure can lead to uncontrolled division (cancer)"
   ]},
   {heading:"Common exam question types", points:[
    "Identifying/describing the stage of mitosis shown in a diagram, with correct terminology",
    "Explaining sources of genetic variation in meiosis (crossing over vs independent assortment)",
    "Calculating the number of possible gamete combinations (2ⁿ) for a given number of chromosome pairs",
    "Linking uncontrolled cell division/checkpoint failure to cancer"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Progress through the cell cycle is driven by cyclin-dependent kinases (CDKs), which are active only when bound to a cyclin whose level rises and falls through the cycle. In G1, cyclin D–CDK4/6 phosphorylates the retinoblastoma protein (Rb), releasing the transcription factor E2F, which switches on S-phase genes. This is the restriction point after which a cell is committed to divide. Cyclin B–CDK1 (MPF, mitosis-promoting factor) triggers entry into mitosis; cyclin destruction by ubiquitination lets the cycle exit.",
    "Checkpoints: at G1/S, DNA damage activates p53 (the 'guardian of the genome'), which induces the CDK inhibitor p21, halting the cycle for repair or triggering apoptosis; at G2/M unreplicated or damaged DNA is detected; the spindle assembly checkpoint holds the cell in metaphase until every chromosome is attached to the spindle. Only then does the anaphase-promoting complex (APC/C) mark securin for destruction, freeing the protease separase to cut cohesin and release sister chromatids.",
    "Cancer arises from accumulated mutations in genes controlling the cell cycle. Proto-oncogenes (Ras, Myc, cyclin D) become oncogenes by gain-of-function mutations that act dominantly; tumour-suppressor genes (p53, Rb, BRCA1) require loss of both alleles (Knudson's two-hit hypothesis), which is why inherited faulty alleles raise cancer risk. p53 is mutated in over 50% of human cancers. Several mutations are needed, so cancer incidence rises steeply with age. Hallmarks include ignoring growth-inhibition signals, evading apoptosis and activating telomerase.",
    "Telomeres are repeated sequences (TTAGGG in humans) at chromosome ends. DNA polymerase cannot fully replicate the lagging strand end, so telomeres shorten with each division, which limits normal somatic cells to about 50 divisions (the Hayflick limit). Telomerase, a reverse transcriptase carrying its own RNA template, extends telomeres in germ cells and stem cells and is reactivated in about 85–90% of cancers, allowing them to divide indefinitely.",
    "Meiosis creates variation in two ways. Independent assortment of homologous pairs in metaphase I gives 2ⁿ combinations in a gamete (2²³ = 8 388 608 in humans), and crossing over at chiasmata (typically 1–3 per chromosome pair) swaps alleles between non-sister chromatids, so no two gametes are alike. Errors in separation (non-disjunction) give aneuploidy: trisomy 21 (Down syndrome) is the most common viable one and its risk rises with maternal age because meiosis I in a human oocyte is arrested for decades.",
    "Practical quantification: the mitotic index = number of cells in mitosis ÷ total cells counted, and since the proportion of time in a phase equals the proportion of cells seen in it, the duration of mitosis = mitotic index × total cell cycle time. Use enough fields of view to count a large sample (at least 100–200 cells) to get a reliable value. The test for differences in observed and expected phase counts is the chi-squared test."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: in a root tip squash, 18 of 150 cells are in mitosis. The cell cycle takes 24 hours. Estimate the time spent in mitosis. → Mitotic index = 18 ÷ 150 = 0.12 (12%). Time in mitosis = 0.12 × 24 h = 2.9 hours. If 6 of the 18 are in prophase, prophase lasts about 6 ÷ 150 × 24 = 0.96 h."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Use precise terminology: chromosome vs chromatid vs homologous pair — loose use of these terms is specifically penalised",
    "State precisely when and where crossing over happens: prophase I, between non-sister chromatids of homologous chromosomes",
    "Don't confuse independent assortment (which pair goes to which pole) with crossing over (swapping DNA sections) — both are prophase/metaphase I events but distinct processes",
    "Mitosis keeps chromosome number the same (diploid → diploid); meiosis halves it (diploid → haploid) — state this explicitly when comparing"
   ]}
  ]},
  {title:"Nucleotides & Nucleic Acids", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Core definitions & key equations", points:[
    "A nucleotide (the monomer of nucleic acids) has a pentose sugar, a phosphate group, and a nitrogenous base; nucleotides join by condensation, forming phosphodiester bonds and a sugar-phosphate backbone",
    "DNA bases: adenine (A), thymine (T), cytosine (C), guanine (G); A pairs with T (2 hydrogen bonds), C pairs with G (3 hydrogen bonds)",
    "DNA structure: a double helix of two antiparallel strands, held together by hydrogen bonds between complementary base pairs",
    "ATP: a phosphorylated nucleotide (adenine + ribose + 3 phosphates) that is the cell's immediate energy source; hydrolysing the terminal phosphate releases energy (ATP → ADP + Pi)"
   ]},
   {heading:"Method — replication, transcription & translation", points:[
    "Semi-conservative replication: DNA helicase unwinds the double helix (breaking hydrogen bonds); DNA polymerase builds a new complementary strand on each original strand as a template — each new DNA molecule keeps one original strand and gains one new strand",
    "The genetic code is a triplet code (3 bases = 1 codon = 1 amino acid), degenerate (more than one codon can code for the same amino acid), and non-overlapping",
    "Transcription (nucleus): RNA polymerase uses one DNA strand as a template to build a complementary mRNA strand (using uracil instead of thymine)",
    "Translation (ribosome): mRNA codons are read in sequence; complementary tRNA anticodons bring specific amino acids, joined by peptide bonds, until a stop codon is reached"
   ]},
   {heading:"Common exam question types", points:[
    "Describing nucleotide structure and how they join into polynucleotides",
    "Explaining semi-conservative replication and why it's described that way",
    "Describing transcription and translation in sequence with correct terminology",
    "Explaining why a degenerate, non-overlapping code matters"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "B-DNA, the usual form, is a right-handed double helix with a diameter of 2.0 nm, 10 base pairs per turn, a rise of 0.34 nm per base pair and a pitch of 3.4 nm, with a wide major groove and narrow minor groove where proteins read the base sequence without unwinding. Chargaff's rules (A = T, G = C) were explained by base pairing: A–T has two hydrogen bonds, G–C three, so GC-rich DNA is more stable and has a higher melting temperature. DNA absorbs UV at 260 nm (A₂₆₀ of 1.0 ≈ 50 μg cm⁻³ of double-stranded DNA), and a ratio A₂₆₀/A₂₈₀ of about 1.8 indicates purity.",
    "Semi-conservative replication was proved by Meselson and Stahl (1958): E. coli grown in ¹⁵N medium was shifted to ¹⁴N and DNA was separated by density in a caesium chloride gradient. After one generation all DNA was of intermediate (hybrid) density, and after two generations half was hybrid and half light, ruling out conservative and dispersive models. Replication starts at origins; helicase unwinds, single-strand binding proteins stabilise, topoisomerase relieves supercoiling and primase makes an RNA primer.",
    "DNA polymerase can only add nucleotides to a 3′ –OH, so it synthesises 5′ → 3′ only. The leading strand is made continuously, the lagging strand discontinuously as Okazaki fragments (about 1000–2000 nucleotides in bacteria, 100–200 in eukaryotes), joined by DNA ligase after primers are replaced. Accuracy is very high: the polymerase's base selection has an error rate of about 10⁻⁵, 3′ → 5′ proofreading exonuclease activity reduces it to about 10⁻⁷, and mismatch repair gives a final error rate of about 10⁻⁹–10⁻¹⁰ per base pair.",
    "Scale: the E. coli chromosome (4.6 million base pairs) is about 1.6 mm long but fits in a cell about 2 μm long, so DNA is packed by supercoiling. A haploid human genome (3.2×10⁹ base pairs) is about 1.1 m of DNA, about 2.2 m per diploid nucleus, compacted by winding around histone octamers into nucleosomes (about 147 base pairs per nucleosome, the 'beads on a string'), then into higher-order chromatin. Eukaryotic genes also contain introns that are spliced out and regulatory sequences far from the coding region.",
    "In translation, aminoacyl-tRNA synthetases attach the correct amino acid to each tRNA (the second 'genetic code', with extremely high accuracy). The code is degenerate (64 codons, 20 amino acids) because wobble at the third codon position lets one tRNA read more than one codon. The ribosome's peptidyl transferase activity is carried out by rRNA, not protein, making the ribosome a ribozyme and supporting the 'RNA world' hypothesis. Reverse transcriptase (retroviruses, telomerase) makes DNA from an RNA template, which is why the central dogma is a rule of normal flow, not an absolute law.",
    "Mutations: substitutions may be silent (synonymous codon), missense (changes an amino acid) or nonsense (stop codon); insertions or deletions that are not multiples of three cause frameshifts that usually destroy the protein. Transitions (purine ↔ purine) are more common than transversions. Spontaneous deamination of cytosine to uracil is repaired because DNA normally has no uracil, which is probably why DNA uses thymine (methylated uracil): a deaminated 5-methylcytosine becomes thymine and cannot be recognised as damage, making methylated CpG sites mutation hotspots."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: calculate the length of the human haploid genome (3.2×10⁹ base pairs, 0.34 nm per base pair) and the number of times larger it is than a nucleus 6 μm across. → Length = 3.2×10⁹ × 0.34×10⁻⁹ m = 1.09 m. Ratio = 1.09 m ÷ 6×10⁻⁶ m ≈ 1.8×10⁵, so the DNA is nearly 200 000 times longer than the nucleus, hence extreme compaction by histones."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Say 'semi-conservative' precisely: each new DNA molecule keeps ONE original strand and gains one entirely new strand",
    "Don't mix up codon (triplet on mRNA) with anticodon (complementary triplet on tRNA) — a very frequent confusion",
    "RNA uses uracil not thymine, and ribose not deoxyribose — state both differences when comparing DNA and RNA",
    "ATP hydrolysis releases energy because the products (ADP + Pi) are more stable, not because energy is simply 'stored in the bond'"
   ]}
  ]},
  {title:"Cell Membranes & Transport", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Core definitions & key equations", points:[
    "Fluid mosaic model: a phospholipid bilayer (hydrophilic heads out, hydrophobic tails in) that is fluid (components move sideways) and a mosaic (proteins of different sizes scattered throughout)",
    "Membrane components: phospholipids (barrier to water-soluble substances), cholesterol (regulates fluidity), glycoproteins/glycolipids (signalling/recognition), channel and carrier proteins (transport)"
   ]},
   {heading:"Method — movement across membranes", points:[
    "Simple diffusion: net movement from high to low concentration through the bilayer directly (small, non-polar molecules)",
    "Facilitated diffusion: larger/polar molecules move down their gradient via channel/carrier proteins — still passive, no ATP",
    "Active transport: movement AGAINST the concentration gradient, using ATP and carrier proteins",
    "Osmosis: net water movement from higher to lower water potential across a partially permeable membrane; pure water has the highest possible water potential",
    "Animal cells in a lower water potential solution shrink/crenate; in higher water potential they can lyse (no cell wall); plant cells become plasmolysed in lower water potential but turgid (not burst — cell wall resists) in higher water potential",
    "Endocytosis (bulk transport in, e.g. phagocytosis/pinocytosis) and exocytosis (bulk transport out) both need ATP and involve vesicles"
   ]},
   {heading:"Common exam question types", points:[
    "Describing the fluid mosaic model and the roles of specific components",
    "Distinguishing simple diffusion, facilitated diffusion and active transport by direction and energy use",
    "Explaining the effect of a named solution's water potential on plant vs animal cells",
    "Interpreting practicals on factors affecting membrane permeability"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The fluid mosaic model is dynamic: phospholipids diffuse laterally about 1 μm in a second but flip between leaflets (transverse 'flip-flop') very rarely unless catalysed by flippases, which keeps the two leaflets different (phosphatidylserine is kept on the inner leaflet; exposure on the outside signals apoptosis). Lipid rafts are cholesterol- and sphingolipid-rich microdomains that concentrate signalling proteins. The cytoskeleton fences the membrane into domains, and peripheral proteins may be anchored by lipid groups.",
    "Diffusion obeys Fick's first law: flux J = −D (dC ÷ dx), where D is the diffusion coefficient. The time to diffuse a distance x is about t = x² ÷ 2D, so time rises with the square of distance: for glucose (D ≈ 6×10⁻¹⁰ m² s⁻¹) it takes about 0.08 s to cross 10 μm (a cell) but about 23 hours to cross 1 cm. This is why large organisms need transport systems, why cells are small and why surfaces for exchange have a large area and thin diffusion path.",
    "Membrane potential is explained by ion gradients and selective permeability. The Nernst equation gives the equilibrium potential of one ion: E = (RT ÷ zF) ln([ion]outside ÷ [ion]inside), which at 37 °C is (61.5 mV ÷ z) × log₁₀([out] ÷ [in]). For K⁺ with 5 mmol dm⁻³ outside and 140 mmol dm⁻³ inside, E(K⁺) = 61.5 × log₁₀(5 ÷ 140) = −89 mV; for Na⁺ (145 outside, 12 inside) it is about +67 mV. The resting potential (about −70 mV) is close to E(K⁺) because the membrane at rest is mainly permeable to K⁺.",
    "Facilitated diffusion through carrier proteins is saturable and shows Michaelis–Menten-type kinetics, unlike simple diffusion which is proportional to concentration difference. Channels (open or closed by gating) can pass ions at 10⁷–10⁸ ions per second, far faster than carriers (about 10²–10⁴ per second), and aquaporins (Nobel 2003) let water cross at about 3×10⁹ molecules per second while excluding protons by their positive charge pattern. Water potential gradients drive osmosis, and osmotic pressure follows π = iMRT (van 't Hoff).",
    "Active transport: the Na⁺/K⁺-ATPase pumps 3 Na⁺ out and 2 K⁺ in per ATP hydrolysed, cycling between phosphorylated and unphosphorylated conformations; it uses about 25% of a typical cell's ATP and up to about 70% in neurons. The sodium gradient it creates is then used for secondary active transport: the SGLT1 symporter in the gut moves glucose against its gradient together with 2 Na⁺ down theirs (the principle behind oral rehydration therapy), and SGLT2 reabsorbs glucose in the kidney, the target of the drug class of SGLT2 inhibitors.",
    "Vesicular transport: receptor-mediated endocytosis concentrates specific cargo in clathrin-coated pits, such as LDL particles binding the LDL receptor (familial hypercholesterolaemia is caused by faulty receptors) and transferrin delivering iron. Vesicles fuse with the target membrane through SNARE proteins, triggered at synapses by Ca²⁺. Membrane area is conserved by recycling: a cell can internalise its whole surface in about an hour in some conditions, so the plasma membrane is continually renewed."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: use the Nernst equation to find E(K⁺) when the extracellular concentration is 5 mmol dm⁻³ and intracellular 140 mmol dm⁻³ at 37 °C (310 K). → E = (RT ÷ zF) ln(5 ÷ 140) = (8.314 × 310 ÷ (1 × 96 485)) × ln(0.0357) = 0.02671 × (−3.332) = −0.0890 V = −89 mV. If extracellular K⁺ rises to 10 mmol dm⁻³ (hyperkalaemia): E = 0.02671 × ln(10 ÷ 140) = −70 mV, so the cell is partly depolarised and more excitable, which is why high blood potassium disrupts heart rhythm.",
    "Worked example: estimate the osmotic pressure of 0.15 mol dm⁻³ NaCl (i = 2, fully dissociated) at 37 °C. → π = iMRT = 2 × 150 mol m⁻³ × 8.314 × 310 = 7.7×10⁵ Pa = 773 kPa (about 7.6 atm). A cell placed in pure water is exposed to this pressure difference, which is why animal cells without a wall burst in water and why intravenous fluids are isotonic."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Facilitated diffusion is still passive — the only difference from simple diffusion is needing a protein for larger/polar/charged particles; don't confuse it with active transport",
    "Plant cells don't burst in a hypotonic solution because the cell wall resists once turgid — always mention the wall specifically",
    "Water potential language should be comparative (higher/lower than), not absolute",
    "Endocytosis/exocytosis need ATP for active vesicle movement/membrane fusion — don't call them passive"
   ]}
  ]},
  {title:"Exchange Surfaces & Gas Exchange", group:"Module 3: Exchange and Transport", sections:[
   {heading:"Core definitions & key equations", points:[
    "As organisms get larger, surface area : volume ratio decreases, so simple diffusion across the outer body surface is no longer sufficient — specialised exchange surfaces and transport systems are needed",
    "Fick's Law: rate of diffusion ∝ (surface area × concentration difference) ÷ diffusion distance",
    "Good exchange surfaces share: large surface area, thin (short diffusion distance), and a steep concentration gradient maintained by good blood supply/ventilation"
   ]},
   {heading:"Method — exchange surfaces in different organisms", points:[
    "Human lungs: air passes trachea → bronchi → bronchioles → alveoli; alveoli walls are one cell thick, surrounded by a dense capillary network, and there are millions of them (huge total surface area)",
    "Ventilation: the diaphragm contracts and flattens, external intercostal muscles contract, increasing thoracic volume and decreasing pressure below atmospheric — air flows in; the reverse happens for expiration",
    "Fish gills use a counter-current exchange system — water flows over the gill lamellae in the opposite direction to blood flow, maintaining a concentration gradient favouring oxygen diffusion along the entire gill length",
    "Insects exchange gases via a tracheal system — air enters through spiracles (which can open/close to control water loss) and diffuses directly to tissues through tracheae and tracheoles, without a circulatory system for gas transport"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining a named adaptation of an exchange surface using specific Fick's Law terminology",
    "Explaining why counter-current exchange in fish gills is more efficient than parallel flow",
    "Describing the mechanism of ventilation in humans",
    "Comparing exchange surfaces/systems across different organisms"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Fick's law of diffusion for an exchange surface: rate ∝ (surface area × concentration difference) ÷ diffusion distance. Every feature of an exchange organ maximises one of these terms: folding for area (about 70 m² of alveolar surface in a human adult from 300–500 million alveoli), ventilation and blood flow to keep the gradient steep, and walls one cell thick (alveolar–capillary barrier about 0.5 μm) for a short path. Diffusion in air is about 10⁴ times faster than in water, which is why aquatic animals need such efficient gills.",
    "Surface area to volume ratio is not just a counting exercise: for a sphere it is 3 ÷ r, so a 1 μm radius bacterium has 3 μm⁻¹ and a 1 cm radius animal has only 3 cm⁻¹, thousands of times less. Metabolic rate rises with mass more slowly than volume (Kleiber's law: rate ∝ mass raised to the power 0.75), so small animals lose heat proportionally faster and need a high metabolic rate per gram: a shrew must eat almost constantly while an elephant eats little per kilogram of body mass.",
    "Counter-current exchange in fish gills keeps a favourable gradient along the whole lamella: blood flows in the opposite direction to water, so blood is always meeting water that has a higher oxygen concentration than the blood. A concurrent (parallel) flow would equilibrate at about 50% saturation, while counter-current flow extracts up to about 80%. Birds use a cross-current system with unidirectional air flow through the lungs (via air sacs), the reason geese can fly over the Himalayas where oxygen partial pressure is low.",
    "Alveoli are prone to collapse because pressure inside a bubble is P = 2T ÷ r (Laplace's law): the smaller the radius, the higher the pressure that surface tension generates, so small alveoli would empty into larger ones. Surfactant (dipalmitoylphosphatidylcholine, made by type II pneumocytes) lowers the surface tension more in smaller alveoli than larger ones and prevents collapse. Premature babies lacking surfactant develop respiratory distress syndrome, treated with artificial surfactant and corticosteroids that speed lung maturation.",
    "Ventilation numbers: tidal volume about 500 cm³, breathing rate 12 min⁻¹, so minute ventilation is 6.0 dm³ min⁻¹. But about 150 cm³ of each breath is anatomical dead space (airways with no exchange), so alveolar ventilation is (500 − 150) × 12 = 4.2 dm³ min⁻¹. Shallow rapid breathing is therefore inefficient. Spirometry measures FEV₁ (forced expiratory volume in one second) and FVC; FEV₁ ÷ FVC below about 0.7 indicates obstructive disease (asthma, COPD), while a normal ratio with low volumes suggests restrictive disease (fibrosis).",
    "Partial pressures drive gas exchange. Dry air is 20.95% O₂, giving about 21.2 kPa at sea level (101.3 kPa); after humidification in the airways (water vapour 6.3 kPa) inspired pO₂ is about 19.9 kPa. Alveolar pO₂ is about 13.3 kPa (100 mmHg) and pCO₂ about 5.3 kPa (40 mmHg); venous blood arrives at about 5.3 kPa O₂ and 6.1 kPa CO₂. These are small differences, yet gas exchange is complete in about one-third of the capillary transit time, giving a large safety margin.",
    "Insects have a tracheal system of air tubes (spiracles to tracheoles) delivering O₂ directly to cells, so the blood does not carry oxygen. Tracheole ends are fluid-filled and the fluid is withdrawn during exercise, increasing the surface exposed to air. Because diffusion distance rises with the square of distance, this system limits insect body size (and, together with the amount of O₂ in the atmosphere, may explain Carboniferous giant dragonflies). Spiracles are opened and closed to balance O₂ uptake against water loss."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: a person has a tidal volume of 450 cm³, dead space of 150 cm³ and a breathing rate of 14 min⁻¹. Compare minute and alveolar ventilation, then see what happens if breathing becomes shallower (300 cm³) and faster (21 min⁻¹) with the same minute ventilation. → Minute ventilation = 450 × 14 = 6300 cm³ min⁻¹; alveolar ventilation = (450 − 150) × 14 = 4200 cm³ min⁻¹. Shallow breathing: minute ventilation = 300 × 21 = 6300 (unchanged) but alveolar ventilation = (300 − 150) × 21 = 3150 cm³ min⁻¹, a 25% fall in useful ventilation."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Never just describe a structural feature — always explicitly link it back to a specific term in Fick's Law, e.g. stating that a feature increases surface area and therefore increases rate of diffusion, for full marks",
    "For counter-current exchange, explain that opposing flow directions mean blood always meets water with a higher oxygen concentration than itself along the entire gill length, maintaining the gradient the whole way",
    "Ventilation works via pressure/volume relationships (Boyle's Law) — frame explanations this way rather than vaguely saying muscles contract so air comes in",
    "Insects don't use blood/haemolymph to transport oxygen — gas exchange and gas transport are combined in the tracheal system, unlike mammals"
   ]}
  ]},
  {title:"Transport in Animals", group:"Module 3: Exchange and Transport", sections:[
   {heading:"Core definitions & key equations", points:[
    "Multicellular animals need mass transport because diffusion alone is too slow over large distances/low SA:V ratios",
    "Closed circulatory systems (mammals) keep blood in vessels at higher pressure than open systems (insects), allowing faster, controlled transport",
    "Blood vessels: arteries (thick muscular/elastic walls, high pressure, away from heart), arterioles (control flow into capillary beds), capillaries (one cell thick, exchange site), veins/venules (thinner walls, valves, low pressure, back to heart)",
    "Tissue fluid forms from plasma forced out of capillaries by hydrostatic pressure, bathes cells, and is mostly reabsorbed (partly by osmosis from plasma proteins) or drained via the lymphatic system"
   ]},
   {heading:"Method — the heart and haemoglobin", points:[
    "Cardiac cycle: atrial systole (atria contract) → ventricular systole (ventricles contract, AV valves close) → diastole (heart relaxes and refills, semilunar valves close)",
    "The heartbeat is myogenic: the sinoatrial node (SAN, pacemaker) triggers atrial contraction; delayed at the atrioventricular node (AVN) before passing down the bundle of His/Purkyne fibres to trigger coordinated ventricular contraction",
    "An ECG shows the heart's electrical activity: P wave (atrial contraction), QRS complex (ventricular contraction), T wave (ventricular relaxation) — abnormal traces can show arrhythmia",
    "Haemoglobin's affinity for oxygen changes with oxygen partial pressure, giving the S-shaped (sigmoid) oxygen dissociation curve via cooperative binding",
    "Fetal haemoglobin has a HIGHER oxygen affinity than adult haemoglobin (curve shifted left), letting it take oxygen from the mother's blood at the placenta"
   ]},
   {heading:"Common exam question types", points:[
    "Describing each blood vessel's structure and linking it to function",
    "Describing the cardiac cycle and electrical coordination, including interpreting ECG traces",
    "Explaining the oxygen dissociation curve shape and cooperative binding",
    "Comparing fetal and adult oxygen dissociation curves and their significance"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Poiseuille's law gives the flow of a fluid through a tube: Q = π r⁴ ΔP ÷ (8ηL), so resistance is inversely proportional to the fourth power of the radius. Halving the radius of an arteriole raises its resistance 16-fold. This is why small changes in arteriolar diameter, controlled by smooth muscle, are the main way blood pressure and blood distribution are regulated. Mean arterial pressure ≈ diastolic + one third of pulse pressure, so for 120/80 mmHg it is 80 + 40 ÷ 3 ≈ 93 mmHg.",
    "Cardiac output = heart rate × stroke volume (70 min⁻¹ × 70 cm³ ≈ 4.9 dm³ min⁻¹ at rest, up to 25 dm³ min⁻¹ in athletes). The Frank–Starling law says that the more the ventricle is filled in diastole, the stronger it contracts, matching output to venous return. Heart rate is set by the SAN pacemaker: its cells have an unstable resting potential (the 'funny' current) that drifts to threshold, with an intrinsic rate of about 100 min⁻¹, slowed to about 70 min⁻¹ at rest by vagal (parasympathetic) tone.",
    "Blood velocity depends on total cross-sectional area. With cardiac output 5000 cm³ min⁻¹ = 83 cm³ s⁻¹ and total capillary cross-section of about 4500 cm² (the aorta is about 4 cm²), velocity falls from about 21 cm s⁻¹ in the aorta to about 0.02 cm s⁻¹ (0.2 mm s⁻¹) in capillaries, since v = Q ÷ A. The slow flow gives time for exchange between blood and tissue. Velocity rises again in veins as the total area decreases.",
    "Tissue fluid forms by Starling forces. At the arteriolar end of a capillary, hydrostatic pressure (about 35 mmHg) pushes fluid out, opposed by the plasma protein oncotic pressure (about 25 mmHg), a net outward pressure of about +10 mmHg. At the venous end hydrostatic pressure has fallen to about 15 mmHg, so the net is about −10 mmHg and fluid is reabsorbed. About 10% of the fluid is not returned and drains through the lymph vessels (about 3 dm³ per day). Oedema occurs when this balance fails: low plasma albumin (liver disease, malnutrition), raised venous pressure or blocked lymph.",
    "Haemoglobin loads and unloads O₂ according to the oxygen dissociation curve; P50 (the pO₂ at which it is 50% saturated) is about 3.5 kPa for adult haemoglobin. Right shift (Bohr effect: more CO₂, lower pH, higher temperature or 2,3-bisphosphoglycerate) increases unloading in active tissue; foetal haemoglobin (α₂γ₂) has a left-shifted curve because it binds 2,3-BPG less strongly, so it takes O₂ from maternal blood across the placenta. Myoglobin has a hyperbolic curve and a very low P50, so it holds O₂ in muscle until pO₂ is very low.",
    "CO₂ transport: about 70% travels as hydrogencarbonate (formed in red cells by carbonic anhydrase: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻); HCO₃⁻ leaves the cell in exchange for Cl⁻ (the chloride shift) and the H⁺ is buffered by haemoglobin, promoting O₂ release. About 23% binds to the amino groups of haemoglobin as carbaminohaemoglobin and about 7% is dissolved in plasma. In the lungs the reactions reverse (the Haldane effect: deoxygenated blood carries more CO₂).",
    "The cardiac cycle can be read from the ECG: the P wave is atrial depolarisation, the QRS complex is ventricular depolarisation (and masks atrial repolarisation), the T wave is ventricular repolarisation. Valves open and close by pressure differences, not by muscle. The AV node delays conduction by about 0.1 s, giving the ventricles time to fill; the Purkinje fibres conduct quickly through the septum from the apex upwards so that the ventricles contract from the base to the apex, driving blood out. Atrial fibrillation (chaotic atrial activity) is a common arrhythmia that raises stroke risk."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: a resting heart has an end-diastolic volume of 120 cm³, an end-systolic volume of 50 cm³ and beats at 72 min⁻¹. Find stroke volume, cardiac output and ejection fraction. → Stroke volume = 120 − 50 = 70 cm³. Cardiac output = 70 × 72 = 5040 cm³ min⁻¹ = 5.04 dm³ min⁻¹. Ejection fraction = 70 ÷ 120 = 58% (normal range about 55–70%; below 40% suggests heart failure)."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "'Myogenic' means the heart initiates its OWN contraction (via the SAN) — the nervous system only speeds up/slows down the rate, it doesn't start each beat",
    "Always link vessel structure to function specifically, e.g. 'capillary walls are one cell thick, minimising diffusion distance'",
    "The sigmoid dissociation curve shape comes from cooperative binding: binding the first O₂ makes it easier for the next O₂ to bind",
    "A leftward-shifted curve (fetal Hb) means HIGHER oxygen affinity, saturating at a lower partial pressure — a common point of confusion"
   ]}
  ]},
  {title:"Transport in Plants", group:"Module 3: Exchange and Transport", sections:[
   {heading:"Core definitions & key equations", points:[
    "Multicellular plants need transport for water/minerals (roots to leaves) and organic products of photosynthesis (leaves to the rest of the plant)",
    "Xylem: dead, hollow, lignified vessels transporting water/minerals upward, one-way (transpiration stream); lignin gives strength and waterproofing",
    "Phloem: living sieve tube elements (with companion cells) transporting dissolved organic solutes (mainly sucrose) either direction, source to sink — translocation"
   ]},
   {heading:"Method — water movement & adaptation", points:[
    "Transpiration: evaporation of water from mesophyll cells inside the leaf, lost as vapour through stomata; this pulls more water up the xylem via cohesion (water molecules hydrogen-bond together) and tension (a continuous column under tension) — the cohesion-tension theory",
    "Factors affecting transpiration rate: light intensity, temperature, humidity, and wind speed — measured experimentally using a potometer (which actually measures water UPTAKE as a proxy)",
    "Water pathway: soil → root hair cells → root cortex (apoplast pathway through cell walls, or symplast pathway through cytoplasm via plasmodesmata) → xylem → leaf mesophyll → evaporates into sub-stomatal space → diffuses out through stomata",
    "Xerophyte adaptations to reduce water loss: thick waxy cuticle, rolled leaves/sunken stomata (trap humid air), reduced leaf surface area, hairy leaves (trap a humid layer)"
   ]},
   {heading:"Common exam question types", points:[
    "Comparing xylem and phloem structure, linked to function",
    "Explaining the cohesion-tension theory of water movement",
    "Explaining how a named factor affects transpiration rate, and interpreting potometer data",
    "Explaining named xerophytic adaptations in terms of reducing water loss"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Water potential Ψ = Ψs + Ψp (solute potential, always negative or zero, plus pressure potential). Water moves from higher (less negative) to lower (more negative) Ψ: soil about −0.3 MPa, root cortex about −0.5, leaf mesophyll about −1.5 and dry air at 50% relative humidity about −93 MPa. This enormous gradient pulls water up the plant. Water is pulled by tension, so xylem water is under negative pressure (down to −2 MPa or lower), a metastable state that relies on cohesion between water molecules and adhesion to wall surfaces.",
    "Cohesion–tension theory has to overcome gravity (0.01 MPa per metre of height) plus friction: for a 100 m tree gravity alone needs about 1 MPa of tension, and with friction in xylem at least 2–3 MPa. Air bubbles (cavitation, embolism) break the water column when tension is too high or after freezing; plants cope with narrow conduits, vessel networks that let water bypass blocked ones, and in some species by refilling. This sets a practical height limit of about 120–130 m, close to the tallest known trees.",
    "Poiseuille's law (flow ∝ r⁴) shows why wide vessels transport far more water than narrow tracheids: a vessel 20 μm in radius carries 256 times the flow of a tracheid 5 μm in radius at the same pressure gradient. Wide vessels are more vulnerable to cavitation, giving a trade-off between efficiency and safety. Lignin-thickened walls stop the xylem collapsing under tension, and bordered pits with a valve-like torus limit the spread of air bubbles.",
    "Stomata control the compromise between CO₂ entry and water loss. Guard cells open when proton pumps (H⁺-ATPases) driven by blue light and low CO₂ push H⁺ out, hyperpolarising the membrane so that K⁺ enters; accumulation of K⁺ with Cl⁻ and malate lowers Ψ, water enters by osmosis, and the cells swell and bow apart because of the unevenly thickened walls. Abscisic acid (ABA), produced in drought, triggers Ca²⁺ signalling that opens anion channels, so K⁺ and water leave and the pore closes within minutes.",
    "Pressure-flow (Münch) hypothesis for translocation: sucrose is loaded into sieve tubes at the source (via companion cells, using an H⁺/sucrose symporter powered by proton gradients, which is active loading), lowering Ψ so water enters from the xylem, raising turgor pressure (about 1–2 MPa); at the sink sucrose is removed, water leaves, and pressure falls, so mass flow moves sap down the pressure gradient at about 0.5–1 m h⁻¹. Evidence includes aphid stylets that exude sap under pressure, ringing experiments that lead to swelling above the cut, and radioactive ¹⁴CO₂ tracing; objections include the unexplained role of sieve plates.",
    "Root pathways: water crosses the cortex by the apoplast (cell walls), symplast (through plasmodesmata) and vacuolar routes, but the Casparian strip (waxy suberin) in the endodermis blocks the apoplast so all water and solutes must pass through a cell membrane, giving the plant control of what enters the xylem. Mineral ions are taken up by active transport (H⁺-ATPase pumps and co-transporters), which uses ATP, creating the root pressure seen as guttation at night. Mycorrhizal fungi greatly extend uptake of phosphate and water.",
    "Potometer calculation: water uptake = cross-sectional area of the capillary × distance moved by the air bubble ÷ time. Control variables are light, temperature, humidity and air movement; transpiration rate rises with all of these except humidity. Plants of dry habitats (xerophytes) reduce water loss by thick cuticles, sunken stomata, rolled leaves, hairs and, in CAM plants, opening stomata only at night; C₄ plants have higher water-use efficiency because PEP carboxylase fixes CO₂ at lower stomatal openings."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: in a potometer the capillary has an internal radius of 0.50 mm. The air bubble moves 25 mm in 5.0 minutes. Calculate the rate of water uptake. → Cross-sectional area = πr² = π × 0.50² = 0.785 mm². Volume = 0.785 × 25 = 19.6 mm³. Rate = 19.6 ÷ 5.0 = 3.9 mm³ min⁻¹. Remember that this measures water uptake, which is slightly more than transpiration because some water is used in photosynthesis and for turgor."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "A potometer measures water UPTAKE by the shoot, not transpiration directly — state this distinction explicitly",
    "Xylem is dead (allows free water flow); phloem is living (needed for active loading/unloading of sucrose) — always contrast the two",
    "Cohesion-tension relies on an unbroken water column — an air bubble (embolism) blocks transport past that point",
    "Link each xerophyte adaptation to a SPECIFIC water-loss-reducing mechanism, not just a feature list"
   ]}
  ]},
  {title:"Communicable Disease & Immunity", group:"Module 4: Biodiversity, Evolution and Disease", sections:[
   {heading:"Core definitions & key equations", points:[
    "A pathogen is an organism that causes disease (bacteria, viruses, fungi, protoctista); a communicable disease can spread between organisms",
    "Transmission is direct (contact, bodily fluids) or indirect (vectors, contaminated surfaces/food/water, airborne droplets)",
    "Non-specific defences: physical barriers (skin, mucous membranes, cilia) and phagocytosis (phagocytes engulf and digest pathogens in a phagolysosome)",
    "The specific immune response involves lymphocytes recognising antigens — unique molecules on a pathogen's surface"
   ]},
   {heading:"Method — immune response & prevention", points:[
    "Antigens trigger clonal selection: B lymphocytes with a complementary-shaped antibody are selected and cloned (clonal expansion), differentiating into plasma cells (secrete antibodies) and memory cells",
    "Primary immune response: relatively slow, since suitable lymphocytes are rare at first — symptoms usually appear before enough antibodies are made",
    "Secondary immune response: memory cells (B and T) respond much faster and in far greater numbers on re-exposure to the same antigen, often preventing symptoms altogether",
    "T helper cells release cytokines to activate B cells and phagocytes; T killer cells destroy infected host cells directly",
    "Vaccination introduces antigens (a weakened/inactive pathogen, or a fragment of one) to trigger a primary response and memory cell production without causing disease, giving fast protection via the secondary response if the real pathogen is met later",
    "Herd immunity: once a high enough proportion of a population is immune, disease spread is limited, indirectly protecting those who can't be vaccinated",
    "Antibiotics kill/inhibit bacteria (not viruses) by targeting bacteria-specific structures/processes; resistance evolves through natural selection when naturally-resistant bacteria survive treatment and reproduce"
   ]},
   {heading:"Common exam question types", points:[
    "Describing/explaining the primary vs secondary immune response, including interpreting an antibody-concentration-over-time graph",
    "Explaining how vaccination provides immunity, including herd immunity",
    "Explaining the development of antibiotic resistance via natural selection",
    "Describing the structure/function of antibodies and the steps of phagocytosis"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Antibody diversity (about 10¹¹ different specificities) comes from somatic recombination, not from one gene per antibody. In developing B cells the heavy-chain gene is assembled by joining one of about 40 V, 25 D and 6 J segments (V(D)J recombination, catalysed by RAG1/RAG2), giving about 6000 heavy-chain combinations; light chains add around 200–300 more variants. Imprecise joining and random addition of nucleotides at the junctions (junctional diversity) adds orders of magnitude more. T-cell receptors are generated by the same mechanism.",
    "Clonal selection and affinity maturation: an antigen binds the few B cells whose receptor fits, stimulating them to divide. In germinal centres of lymph nodes, somatic hypermutation introduces point mutations at about 10⁻³ per base pair per division in the variable regions, and B cells whose mutant antibodies bind better are selected to survive, so affinity rises over the course of a response (booster doses of vaccines exploit this). Class switching changes the constant region (IgM → IgG, IgA or IgE) without altering specificity.",
    "T cells recognise antigen peptides presented on MHC molecules: CD8⁺ cytotoxic T cells bind peptide–MHC class I (present on nearly all nucleated cells, showing proteins made inside the cell, such as viral proteins), and CD4⁺ helper T cells bind MHC class II (on antigen-presenting cells: dendritic cells, macrophages, B cells). Full activation needs a second co-stimulatory signal; without it the T cell becomes anergic, preventing autoimmunity. MHC genes are the most polymorphic in the genome, which is why tissue matching matters for transplants.",
    "Herd immunity: if one case infects R₀ others in a fully susceptible population (the basic reproduction number), an infection cannot spread once a proportion 1 − 1 ÷ R₀ is immune. For R₀ = 3 this is 67%; for measles (R₀ = 12–18) it is 92–94%, which is why vaccination coverage must be very high to protect those who cannot be vaccinated. Vaccines work by stimulating primary response and memory cells so that a second exposure causes a rapid, stronger secondary response within days.",
    "Pathogen evasion: influenza shows antigenic drift (point mutations in haemagglutinin and neuraminidase that gradually escape antibodies, requiring yearly vaccine updates) and antigenic shift (reassortment of RNA segments from different strains, producing pandemic strains). HIV infects CD4⁺ T cells, uses reverse transcriptase that has no proofreading (high mutation rate), and integrates into the host genome as a latent provirus, so the immune system cannot clear it. Trypanosomes switch their surface proteins repeatedly (antigenic variation).",
    "Antibiotics target features that eukaryotic cells lack: penicillin inhibits the transpeptidase that cross-links peptidoglycan, so growing bacteria burst; tetracyclines and aminoglycosides bind the bacterial 70S ribosome; rifampicin inhibits bacterial RNA polymerase. They do not work against viruses (no cell wall, no ribosomes). Resistance spreads by natural selection of random mutations and by horizontal gene transfer: conjugation transfers plasmids carrying resistance genes (for example β-lactamase, which breaks the β-lactam ring). MRSA and multidrug-resistant tuberculosis make antibiotic stewardship essential.",
    "Monoclonal antibodies are produced from a hybridoma (Köhler and Milstein, Nobel 1984): a B cell making one specific antibody is fused with an immortal myeloma cell, and the hybrid clone is selected and grown. They are used in ELISA (an enzyme-linked antibody gives a colour change proportional to antigen present), in pregnancy tests, in cancer treatment (trastuzumab binds HER2) and in autoimmune disease (anti-TNF therapies). An antibody (IgG, about 150 kDa) is a Y-shaped protein with two identical antigen-binding Fab arms and an Fc region recognised by phagocytes, with dissociation constants as low as about 10⁻⁹ mol dm⁻³."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Antibodies don't kill pathogens directly — they mark them for destruction (agglutination, opsonisation) or neutralise toxins; avoid saying antibodies 'kill' pathogens",
    "Distinguish memory cells (long-lived, enable a fast secondary response) from plasma cells (short-lived, actively secrete antibodies now) — mixing these up is a common error",
    "Explain vaccination via memory cell formation specifically, not just 'you become immune'",
    "Antibiotics do not cause resistance mutations — resistant bacteria already exist by random mutation, and antibiotics simply select for their survival; phrase this as natural selection, not antibiotics 'causing' resistance"
   ]}
  ]},
  {title:"Biodiversity, Classification & Sampling", group:"Module 4: Biodiversity, Evolution and Disease", sections:[
   {heading:"Core definitions & key equations", points:[
    "Biodiversity is considered at species diversity (number and abundance of species in an area), genetic diversity (variety of alleles within a species/population), and habitat diversity",
    "Species diversity index, e.g. Simpson's Index D = 1 − Σ(n/N)², where n = number of individuals of one species and N = total number of individuals of all species — a higher D means higher diversity",
    "Classification organises organisms into a taxonomic hierarchy (domain, kingdom, phylum, class, order, family, genus, species) based on shared characteristics and evolutionary relationships",
    "Phylogeny describes evolutionary relationships between organisms, increasingly based on molecular evidence (DNA/protein sequence comparison) rather than physical features alone"
   ]},
   {heading:"Method — sampling techniques", points:[
    "Random sampling with quadrats estimates abundance/percentage cover of non-mobile organisms (plants); random coordinates avoid bias",
    "Systematic sampling with a transect (line or belt) investigates how species distribution changes across an environmental gradient",
    "Mark-release-recapture estimates population size of mobile animals: capture and mark a sample, release, recapture later, then use the Lincoln index: population estimate = (total marked × total second sample) ÷ number of marked individuals recaptured",
    "Assumptions of mark-release-recapture: population size doesn't change between samples (no births/deaths/migration), marking doesn't affect survival/behaviour, marks aren't lost, and the population mixes randomly"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating a species diversity index and explaining what the value means",
    "Describing and justifying an appropriate sampling method for a given scenario",
    "Mark-release-recapture calculations using the Lincoln index",
    "Comparing classification based on physical features vs molecular/genetic evidence"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Simpson's index of diversity D = 1 − Σ(n ÷ N)², where n is the number of individuals of each species and N the total, is the probability that two individuals chosen at random belong to different species (0 = no diversity, 1 = infinite). The Shannon index H = −Σ pᵢ ln pᵢ (pᵢ the proportion of species i) weights rare species more. For counts of 10, 20, 30, 25 and 15, D = 1 − 0.225 = 0.775 and H = 1.54. A diverse community has both many species (richness) and an even spread (evenness).",
    "The species–area relationship S = c × A raised to the power z (S species, A area, z about 0.15–0.35 for islands and fragments) predicts species loss from habitat destruction. With z = 0.25, reducing the habitat to 10% of its area leaves 0.1 raised to the power 0.25 = 0.56, i.e. 56% of the species, a loss of 44%. Island biogeography (MacArthur and Wilson) explains why remote, small islands have fewer species than large near ones: immigration falls with distance and extinction rises as area shrinks, so species number is an equilibrium.",
    "Sampling design and statistics: random sampling avoids bias and uses a grid of random coordinates; systematic sampling along a belt transect shows a gradient (for example succession across a dune); sample size must be large enough that the mean stabilises. The Lincoln index estimates population size by mark–release–recapture: N = (M × n) ÷ m, where M animals are marked, n later caught, m of them marked. It assumes no births, deaths or migration, marking does not affect survival, and that marked animals mix evenly. For M = 40, n = 50, m = 8 it gives N = 250.",
    "Tests for relationships: Spearman's rank correlation tests the strength of a monotonic relationship between two variables (for example abiotic factor and species abundance) without assuming normality; compare r_s with a critical value. The t-test compares two means (are two sites different?); the chi-squared test compares observed and expected frequencies in categories. Always state a null hypothesis, calculate, compare with the critical value at p = 0.05 with the correct degrees of freedom, and conclude in context without saying the null hypothesis is 'proved'.",
    "Classification reflects evolutionary relationships. Woese used sequences of 16S ribosomal RNA to show that life falls into three domains: Bacteria, Archaea and Eukarya, with Archaea more closely related to eukaryotes than to bacteria. Phylogenetic trees (cladograms) are built from shared derived characters and DNA sequences; the more differences in a gene, the longer ago the divergence (molecular clock, if mutation rate is roughly constant). DNA barcoding identifies species from a short standard gene (COI in animals), useful for illegal trade monitoring.",
    "Conservation value: biodiversity matters for ecosystem services (pollination, nutrient cycling, water purification), for genetic resources (crop wild relatives carry disease resistance) and because genetic diversity within a species gives resilience to change. In situ conservation (national parks, wildlife corridors) protects whole ecosystems; ex situ (seed banks such as the Millennium Seed Bank, zoos) is a back-up. Small populations lose genetic diversity through drift and inbreeding depression, so captive breeding uses studbooks to minimise relatedness."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: a quadrat survey finds 10, 20, 30, 25 and 15 individuals of five species. Calculate Simpson's index of diversity. → N = 100. Σ(n ÷ N)² = 0.10² + 0.20² + 0.30² + 0.25² + 0.15² = 0.01 + 0.04 + 0.09 + 0.0625 + 0.0225 = 0.225. D = 1 − 0.225 = 0.775. If one species dominated (for example 96, 1, 1, 1, 1): Σ = 0.9216 + 4 × 0.0001 = 0.922, D = 0.078, showing that low evenness gives low diversity even with five species.",
    "Worked example: 40 beetles are marked and released. A later sample of 50 contains 8 marked beetles. Estimate the population. → N = M × n ÷ m = 40 × 50 ÷ 8 = 250 beetles. This assumes the marks did not affect survival or capture and that there was no migration; if marked beetles were easier for predators to see, m would be too low and N overestimated."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always justify why a specific sampling method suits the given scenario (e.g. a transect for a gradient, quadrats for a uniform area) rather than describing the method generically",
    "State the assumptions behind mark-release-recapture explicitly when asked to evaluate the method's reliability",
    "A higher diversity index doesn't automatically mean a 'better' ecosystem, just a more even/diverse species distribution — avoid unsupported value judgements",
    "Modern classification increasingly relies on molecular phylogeny (DNA/protein similarity) rather than physical appearance alone, which can reclassify organisms previously grouped by convergent features"
   ]}
  ]},
  {title:"Natural Selection, Evolution & Speciation", group:"Module 4: Biodiversity, Evolution and Disease", sections:[
   {heading:"Core definitions & key equations", points:[
    "Variation arises from genetic causes (mutation, meiosis, random fertilisation), environmental causes, or a combination of both",
    "Natural selection: individuals with advantageous alleles/phenotypes for their environment are more likely to survive and reproduce, passing those alleles on — allele frequency in the population changes over generations",
    "Directional selection favours one extreme phenotype (e.g. under environmental change); stabilising selection favours the average/intermediate phenotype and reduces variation (stable environment); disruptive selection favours both extremes over the intermediate, potentially producing two distinct forms",
    "Evidence for evolution: the fossil record (transitional forms, dating), comparative anatomy (homologous structures suggesting common ancestry), and comparative biochemistry/genetics (DNA and protein sequence similarity between species)"
   ]},
   {heading:"Method — speciation", points:[
    "Speciation is the formation of new species: populations of the same species become reproductively isolated and evolve independently until they can no longer interbreed to produce fertile offspring",
    "Allopatric speciation: a physical/geographic barrier (e.g. a river, mountain range) separates populations; separated populations experience different selection pressures/genetic drift and diverge over time",
    "Sympatric speciation: populations become reproductively isolated without a geographic barrier, e.g. through behavioural, temporal (breeding at different times), or mechanical differences",
    "Prezygotic barriers prevent mating/fertilisation occurring at all (e.g. behavioural, temporal, geographic, mechanical isolation); postzygotic barriers occur after fertilisation, resulting in inviable or infertile hybrid offspring"
   ]},
   {heading:"Common exam question types", points:[
    "Distinguishing directional, stabilising and disruptive selection, including sketching/interpreting phenotype-frequency graphs",
    "Explaining allopatric vs sympatric speciation with a named type of isolation",
    "Evaluating evidence for evolution from a given data set (fossils, DNA/protein comparisons)",
    "Explaining prezygotic vs postzygotic reproductive isolation"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Hardy–Weinberg: for a gene with two alleles at frequencies p and q (p + q = 1), genotype frequencies in a large, randomly mating population with no selection, mutation, migration or drift are p² + 2pq + q² = 1. It is a null model: a departure from it indicates one of those forces acting. Cystic fibrosis affects 1 in 2500, so q² = 1 ÷ 2500, q = 0.02, p = 0.98 and carriers 2pq = 2 × 0.98 × 0.02 = 0.039, about 1 in 25: most copies of a recessive allele hide in heterozygotes, which is why selection removes recessive alleles so slowly.",
    "Selection changes allele frequency by an amount that depends on the selection coefficient s (reduction in fitness) and the dominance. For a fully recessive lethal allele (s = 1), the frequency falls from q to q ÷ (1 + q) each generation: starting at q = 0.2 it falls to 0.167, then 0.143, and takes about 45 generations to reach 0.02 (since qₙ = q₀ ÷ (1 + nq₀)). This slowness explains why recessive disease alleles persist; heterozygote advantage (sickle cell: protection against malaria in heterozygotes) can maintain deleterious alleles at a stable frequency indefinitely.",
    "Genetic drift is random change in allele frequency, and it is strongest in small populations: the variance of allele frequency change per generation is p(1 − p) ÷ 2N, so with N = 50 and p = 0.5 the standard deviation is 0.05 per generation (compared with 0.005 for N = 5000). The founder effect and bottlenecks (cheetahs, northern elephant seals reduced to about 20 animals) lower diversity. Kimura's neutral theory holds that most molecular variation is neutral and governed by drift; selection acts on the small fraction of mutations that affect fitness.",
    "Types of selection: stabilising (extremes disfavoured, as in human birth weight), directional (one extreme favoured, as in antibiotic resistance and peppered moth melanism) and disruptive (both extremes favoured, may lead to speciation). Sexual selection explains traits such as peacock tails by female choice or male competition, which can reduce survival. Kin selection (Hamilton's rule): an altruistic allele spreads if r × B > C, where r is relatedness (0.5 for siblings, 0.125 for cousins), B the benefit to the recipient and C the cost to the actor, explaining sterile worker castes in bees and ants.",
    "Speciation needs reproductive isolation. Allopatric speciation follows geographical separation (physical barrier), after which populations diverge by selection and drift until they cannot interbreed; sympatric speciation occurs without separation (for example by polyploidy in plants, where a chromosome-doubling event creates an instantly isolated tetraploid; bread wheat is a hexaploid formed by hybridisation of three species). Isolating mechanisms are prezygotic (temporal, behavioural, mechanical, gametic) or postzygotic (hybrid inviability or sterility, as in mules, which have 63 chromosomes that cannot pair in meiosis).",
    "Evidence for evolution goes beyond fossils and homologous structures. Molecular evidence: the cytochrome c and haemoglobin sequences differ by amounts that match the branching order of species; humans and chimpanzees differ by about 1–2% in aligned DNA sequence; pseudogenes (such as the broken vitamin C gene in primates) are 'molecular fossils'. Hox genes controlling body plans are conserved across animals. Evolution is observed directly: antibiotic and pesticide resistance, the evolution of lactase persistence in some human populations in the last 10 000 years, and Lenski's long-term E. coli experiment over 70 000 generations.",
    "The molecular clock assumes neutral mutations accumulate at a roughly constant rate, so the number of sequence differences between two species is proportional to the time since divergence: divergence time = differences per site ÷ (2 × rate), the factor 2 because both lineages mutate. Rates must be calibrated against fossils of known age and vary between genes and lineages. It lets biologists date events that left no fossils, such as the divergence of the human and chimpanzee lineages about 6–7 million years ago."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: a recessive condition affects 1 in 10 000 births. Find the carrier frequency and the expected number of carriers in a population of 5 million. → q² = 1 ÷ 10 000 = 0.0001, q = 0.01, p = 0.99. Carriers = 2pq = 2 × 0.99 × 0.01 = 0.0198, about 2%, or 1 in 50. Carriers in 5 million = 0.0198 × 5 000 000 = 99 000, so for every affected person there are about 198 carriers.",
    "Worked example: a lethal recessive allele has frequency q = 0.20. Find the frequency after one generation of selection against homozygotes. → Frequency of recessive homozygotes q² = 0.04 die before reproduction. The surviving population has gene pool: p² + 2pq = 0.64 + 0.32 = 0.96 of the population, with the q alleles coming only from heterozygotes (0.32 × ½ = 0.16). New q = 0.16 ÷ 0.96 = 0.167, equal to q ÷ (1 + q) = 0.2 ÷ 1.2."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Natural selection acts on existing variation — it does NOT create new mutations to order; describe it as differential survival/reproduction of already-varying individuals",
    "For selection-type graphs, be precise: stabilising narrows the distribution around the mean, directional shifts the whole distribution, disruptive creates two peaks",
    "Distinguish allopatric (a geographic barrier is necessary) from sympatric (no geographic barrier, isolated some other way) precisely, and always name the specific type of reproductive isolation involved",
    "'Survival of the fittest' is an imprecise phrase — frame it as differential reproductive success (passing on alleles), not just survival"
   ]}
  ]},
  {title:"Neuronal Communication", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Resting potential (~−70 mV) is maintained mainly by the sodium-potassium pump (3 Na⁺ out, 2 K⁺ in per cycle, using ATP), combined with the membrane being more permeable to K⁺ than Na⁺ at rest",
    "Action potential sequence: stimulus opens some Na⁺ channels causing slight depolarisation; if threshold (~−55 mV) is reached, voltage-gated Na⁺ channels open rapidly (full depolarisation, ~+40 mV); voltage-gated K⁺ channels then open and Na⁺ channels inactivate (repolarisation); K⁺ channels are slightly slow to close, causing brief hyperpolarisation before resting potential is restored",
    "All-or-nothing principle: if threshold is reached, a full action potential of fixed size always fires; stimulus intensity is coded by FREQUENCY of action potentials, not their size",
    "The refractory period (Na⁺ channels inactivated) ensures the impulse travels in one direction and limits maximum frequency"
   ]},
   {heading:"Method — conduction speed & synapses", points:[
    "Myelinated neurones conduct faster via saltatory conduction — myelin (made by Schwann cells) insulates the axon, so depolarisation only occurs at the gaps (nodes of Ranvier), and the impulse jumps from node to node",
    "Conduction speed also increases with larger axon diameter and higher temperature, up to the point where proteins begin to denature",
    "Synaptic transmission: an action potential opens voltage-gated Ca²⁺ channels at the presynaptic knob; Ca²⁺ influx causes vesicles to fuse with the membrane and release neurotransmitter by exocytosis; neurotransmitter diffuses across the cleft and binds receptors on the postsynaptic membrane, opening ion channels",
    "Excitatory synapses depolarise the postsynaptic membrane; inhibitory synapses hyperpolarise it, making an action potential less likely",
    "Spatial summation combines input from several different presynaptic neurones firing together; temporal summation combines several impulses from the SAME presynaptic neurone in rapid succession — either can reach threshold even if no single input alone would"
   ]},
   {heading:"Common exam question types", points:[
    "Sketching/labelling and explaining an action potential trace",
    "Explaining why myelination increases conduction speed (saltatory conduction)",
    "Describing the full sequence of events at a synapse",
    "Distinguishing spatial from temporal summation with an example"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Equilibrium potentials come from the Nernst equation: E = (RT ÷ zF) ln([X]outside ÷ [X]inside), which at 37 °C is E = (61.5 mV ÷ z) × log₁₀([X]out ÷ [X]in). For typical mammalian values (K⁺ 5 mM outside, 140 mM inside) E(K⁺) = −89 mV; for Na⁺ (145 mM outside, 12 mM inside) E(Na⁺) = +67 mV. The Nernst potential is the membrane voltage at which the electrical and chemical gradients for one ion exactly balance, so no net flux occurs.",
    "The real resting potential (−60 to −70 mV) is a weighted average given by the Goldman–Hodgkin–Katz equation: Vm = (RT ÷ F) ln[(pK[K⁺]out + pNa[Na⁺]out + pCl[Cl⁻]in) ÷ (pK[K⁺]in + pNa[Na⁺]in + pCl[Cl⁻]out)]. At rest pK ≫ pNa (about 1 : 0.04), so Vm sits close to E(K⁺) but is pulled slightly positive by Na⁺ leak. During the action potential pNa rises about 500-fold, driving Vm towards E(Na⁺); with pNa : pK = 20 : 1 the equation gives about +50 mV, close to the observed overshoot.",
    "Hodgkin and Huxley (Nobel 1963) explained the action potential with voltage-gated channels: depolarisation opens Na⁺ channels (fast, positive feedback), which then inactivate through a 'ball-and-chain' inactivation gate; slower K⁺ channels open and repolarise the membrane. Inactivated Na⁺ channels cannot reopen until the membrane repolarises, which is the molecular basis of the absolute refractory period and the reason action potentials travel only forwards. Tetrodotoxin (pufferfish) blocks Na⁺ channels; local anaesthetics such as lidocaine do the same.",
    "Conduction velocity: in unmyelinated axons velocity ∝ √(axon diameter), because a larger radius lowers the internal resistance faster than it raises capacitance (the squid giant axon, about 500 μm, conducts at about 25 m s⁻¹). In myelinated axons velocity ∝ diameter, with saltatory conduction between nodes of Ranvier (about 1 mm apart) giving 50–120 m s⁻¹ in a thin mammalian fibre. Myelin raises membrane resistance and lowers capacitance, which is why demyelination (multiple sclerosis) slows or blocks conduction.",
    "Synaptic transmission details: an action potential opens voltage-gated Ca²⁺ channels; Ca²⁺ binds synaptotagmin, triggering SNARE-mediated vesicle fusion (botulinum toxin cleaves SNAREs, causing flaccid paralysis). Ionotropic receptors such as the nicotinic acetylcholine receptor are ligand-gated channels (fast, milliseconds); metabotropic receptors act through G proteins and second messengers (slower, modulatory). Acetylcholinesterase ends the signal; nerve agents such as sarin inhibit it, causing sustained stimulation.",
    "Summation and integration: a neurone sums excitatory (EPSP, depolarising) and inhibitory (IPSP, hyperpolarising, e.g. opening Cl⁻ channels so Vm approaches E(Cl⁻) ≈ −64 mV) postsynaptic potentials. If the sum at the axon hillock reaches threshold (about −55 mV) the neurone fires; strength is coded by frequency, not amplitude (all-or-nothing). Long-term potentiation (NMDA receptor, Ca²⁺ entry, more AMPA receptors) is the cellular model of learning and memory.",
    "Cable theory sets how far a graded potential spreads: V(x) = V₀ × exp(−x ÷ λ), where the length constant λ = √(rm ÷ ri) (rm = membrane resistance, ri = axial resistance per unit length). Graded potentials decay with distance (λ is typically 0.1–1 mm), which is why neurones need regenerative action potentials to carry signals over long distances without loss."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: calculate E(K⁺) at 37 °C with [K⁺]out = 5 mM and [K⁺]in = 140 mM. → E = 61.5 × log₁₀(5 ÷ 140) = 61.5 × (−1.447) = −89.0 mV. If extracellular K⁺ rises to 10 mM (hyperkalaemia), E = 61.5 × log₁₀(10 ÷ 140) = −70.5 mV, so neurones and heart muscle cells depolarise — one reason high blood K⁺ is dangerous."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Be ready to name a specific real example (e.g. acetylcholine at a cholinergic synapse, broken down afterwards by acetylcholinesterase) — named answers score more than generic ones",
    "Clearly distinguish spatial summation (multiple different presynaptic neurones) from temporal summation (repeated impulses from the same neurone)",
    "State explicitly that the action potential is all-or-nothing and stimulus strength is coded by FREQUENCY, not size, of impulses",
    "Myelin doesn't speed up the impulse under itself — it can only regenerate at the nodes of Ranvier, which is what makes it jump faster overall"
   ]}
  ]},
  {title:"Hormonal Communication & Homeostasis", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Homeostasis: maintaining a stable internal environment via negative feedback — a deviation from the set point is detected, triggers a response via effectors, which reverses the change back towards the set point",
    "Nervous communication is electrical, very fast, short-lived, and acts on a specific target via a synapse; hormonal communication is chemical, slower to start but longer-lasting, and travels via the blood to potentially many target cells",
    "Endocrine glands secrete hormones directly into the blood: pancreas (insulin, glucagon), adrenal glands (adrenaline), thyroid (thyroxine), pituitary gland (many, including ADH release)"
   ]},
   {heading:"Method — blood glucose regulation & the kidney", points:[
    "High blood glucose is detected by the pancreas; beta cells secrete insulin, stimulating cells to take up glucose and convert it to glycogen (glycogenesis), lowering blood glucose",
    "Low blood glucose triggers alpha cells to secrete glucagon, stimulating glycogen breakdown (glycogenolysis) and glucose production from non-carbohydrate sources (gluconeogenesis) in the liver, raising blood glucose",
    "Type 1 diabetes: the immune system destroys insulin-producing beta cells; Type 2 diabetes: cells become less responsive to insulin (insulin resistance)",
    "Second messenger model: a hormone that can't cross the membrane (e.g. adrenaline) binds a receptor outside, activating adenylate cyclase which converts ATP to cAMP inside the cell, triggering a cascade of reactions",
    "Kidney/osmoregulation: blood is filtered under pressure at the glomerulus into the Bowman's capsule (ultrafiltration); useful substances are reabsorbed in the proximal convoluted tubule; the loop of Henle creates a concentration gradient via a counter-current multiplier; ADH increases the collecting duct's permeability to water when blood is too concentrated, increasing water reabsorption and producing more concentrated urine"
   ]},
   {heading:"Common exam question types", points:[
    "Describing the full negative feedback loop for blood glucose regulation, including named hormones",
    "Comparing nervous and hormonal communication systematically",
    "Explaining the second messenger mechanism for a named hormone",
    "Kidney/nephron structure and function, and how ADH controls water reabsorption"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Hormone receptors fall into two families. Lipid-soluble hormones (steroids, thyroxine) cross the membrane and bind intracellular receptors that act as transcription factors (hormone–receptor complexes bind hormone response elements on DNA, changing gene expression over hours). Water-soluble hormones (peptides, adrenaline) bind cell-surface receptors and act through second messengers within seconds. Affinity is described by the dissociation constant Kd: the hormone concentration at which half of the receptors are occupied.",
    "Signal amplification via G-protein-coupled receptors: adrenaline (β-receptor) activates a Gₛ protein, which activates adenylyl cyclase to make cAMP, which activates protein kinase A, which phosphorylates phosphorylase kinase, then glycogen phosphorylase, which breaks down glycogen. Each step is an enzyme making many products, so one hormone molecule can lead to the release of about 10⁶ glucose molecules. The signal is switched off by phosphodiesterase (breaks cAMP down; caffeine inhibits it) and by receptor desensitisation (β-arrestin).",
    "The insulin receptor is a receptor tyrosine kinase: insulin binding causes autophosphorylation, recruiting IRS proteins and activating PI3-kinase and Akt, which move GLUT4 vesicles to the plasma membrane in muscle and fat (GLUT4 recycling, not synthesis, is why glucose uptake rises within minutes). Type 2 diabetes is characterised by insulin resistance (cells respond less) and eventually β-cell failure; type 1 is autoimmune destruction of β-cells.",
    "Negative feedback has a set point, a sensor, a controller and an effector, and the 'gain' of the loop determines how closely the variable is held. The hypothalamic–pituitary axes (e.g. TRH → TSH → thyroxine) use long-loop negative feedback; positive feedback (oxytocin in labour, LH surge before ovulation) drives events to completion. Plasma glucose is held at about 4–6 mmol dm⁻³ by insulin, glucagon, adrenaline and cortisol acting together.",
    "Pancreatic β-cells act as glucose sensors: GLUT2 allows glucose entry, metabolism raises the ATP : ADP ratio, which closes ATP-sensitive K⁺ channels; the resulting depolarisation opens voltage-gated Ca²⁺ channels and Ca²⁺ triggers insulin exocytosis. Sulfonylurea drugs for type 2 diabetes work by closing the same K⁺ channels, and mutations that keep them open cause neonatal diabetes.",
    "Feedback systems in clinical practice: HbA1c measures average glycaemia over about 8–12 weeks because glucose slowly and non-enzymatically attaches to haemoglobin during the red cell's 120-day life; the oral glucose tolerance test checks how quickly the feedback loop clears a glucose load; SGLT2 inhibitors lower blood glucose by blocking renal glucose reabsorption. Cortisol follows a circadian rhythm and rises under stress, increasing gluconeogenesis, one reason chronic stress and corticosteroid drugs can raise blood glucose.",
    "Local and non-classical signalling: not all communication is endocrine. Paracrine signals (histamine, growth factors) act on neighbouring cells, autocrine signals on the secreting cell, and gases such as nitric oxide (made by endothelial NO synthase, activating guanylyl cyclase and cGMP to relax smooth muscle) act within seconds over short distances. Sildenafil acts by inhibiting phosphodiesterase-5, the enzyme that breaks down cGMP."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Never say hormonal communication is faster than nervous communication — it's the opposite, but longer-lasting and can act on many targets via the blood",
    "Distinguish glycogenesis (making glycogen), glycogenolysis (breaking down glycogen) and gluconeogenesis (making new glucose from non-carbohydrates) precisely",
    "For osmoregulation, remember MORE ADH means MORE water reabsorbed means LESS, more concentrated urine produced — this relationship is commonly reversed by mistake",
    "Always name the specific hormone, gland, and target tissue in homeostasis answers rather than describing the process generically"
   ]}
  ]},
  {title:"Homeostasis & Excretion", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Homeostasis: maintaining a stable internal environment via negative feedback (receptor detects change → coordinator processes it → effector reverses the change)",
    "Ectotherms rely mainly on behavioural responses for temperature control; endotherms use physiological responses (shivering, vasoconstriction/dilation, sweating)",
    "Excretion removes metabolic waste (CO₂ from respiration, urea from deamination of excess amino acids) — essential to prevent toxic build-up"
   ]},
   {heading:"Method — the liver and kidney", points:[
    "The liver deaminates excess amino acids (removes the amine group, forming ammonia, quickly converted to less toxic urea) and detoxifies substances (e.g. alcohol)",
    "The nephron: ultrafiltration at the glomerulus (pressure forces small molecules into the Bowman's capsule; proteins/cells stay in the blood); selective reabsorption in the proximal convoluted tubule (glucose and useful ions/water, normally ALL the glucose); the loop of Henle builds an ion gradient in the medulla via a countercurrent multiplier; the collecting duct fine-tunes water reabsorption",
    "Osmoregulation: the hypothalamus detects blood water potential; if too low, the posterior pituitary releases more ADH, increasing collecting duct permeability to water (via aquaporins), increasing reabsorption and producing more concentrated urine — negative feedback",
    "Kidney failure treatments: dialysis (external filtering against a controlled dialysis fluid) or transplant; urine composition (e.g. glucose, protein) can aid medical diagnosis"
   ]},
   {heading:"Common exam question types", points:[
    "Describing the negative feedback loop for thermoregulation or osmoregulation with named structures/hormones",
    "Describing ultrafiltration and selective reabsorption in sequence",
    "Explaining how ADH release changes with blood water potential, and predicting urine concentration",
    "Interpreting urine/blood composition data for diagnosis"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Kidney function is quantified by clearance: C = (U × V) ÷ P, where U is urine concentration, V is urine flow rate and P is plasma concentration. Inulin is freely filtered and neither secreted nor reabsorbed, so its clearance equals the glomerular filtration rate (GFR, about 120–125 cm³ min⁻¹ in a healthy adult, about 180 dm³ per day). In practice, creatinine clearance or eGFR from blood creatinine is used, and a falling eGFR defines stages of chronic kidney disease.",
    "Starling forces drive ultrafiltration: net filtration pressure = (glomerular hydrostatic pressure − capsular hydrostatic pressure) − plasma oncotic pressure, for example 55 − 15 − 30 = 10 mmHg. Filtration is only about 20% of plasma, and the high glomerular capillary pressure is maintained by the afferent arteriole being wider than the efferent arteriole. Autoregulation keeps GFR nearly constant over mean arterial pressures of about 80–180 mmHg.",
    "The countercurrent multiplier explains how urine up to about 1200 mOsm kg⁻¹ (four times plasma) is made. The thick ascending limb actively transports Na⁺ and Cl⁻ out (Na⁺/K⁺/2Cl⁻ cotransporter, ATP-driven) but is impermeable to water, building an osmotic gradient of about 200 mOsm kg⁻¹ at each horizontal level that is 'multiplied' along the loop. Urea recycling adds to the medullary gradient. The vasa recta act as a countercurrent exchanger so the gradient is not washed out. Loop diuretics (furosemide) block the cotransporter.",
    "ADH acts through V2 receptors on the collecting duct: a Gₛ pathway raises cAMP, which triggers insertion of aquaporin-2 (AQP2) channels into the apical membrane, so water flows out by osmosis down the medullary gradient. Diabetes insipidus (lack of ADH or receptor response) produces up to 20 dm³ of dilute urine per day. Alcohol suppresses ADH release, causing diuresis.",
    "The renin–angiotensin–aldosterone system (RAAS) controls blood pressure and Na⁺: low renal perfusion releases renin; renin converts angiotensinogen to angiotensin I; ACE converts this to angiotensin II, which constricts arterioles and stimulates aldosterone, which increases Na⁺ (and so water) reabsorption in the distal tubule. ACE inhibitors (ramipril) and angiotensin receptor blockers are first-line antihypertensives.",
    "Acid–base balance uses the bicarbonate buffer: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻, with the Henderson–Hasselbalch equation pH = pKₐ + log([HCO₃⁻] ÷ [CO₂]) and pKₐ ≈ 6.1. Blood pH of 7.4 corresponds to a bicarbonate : dissolved CO₂ ratio of about 20 : 1. The lungs adjust CO₂ in minutes (respiratory compensation) and the kidneys adjust HCO₃⁻ and H⁺ excretion in hours to days (metabolic compensation).",
    "Nitrogen excretion tracks evolutionary environment: ammonia (very toxic, needs lots of water) in aquatic animals; urea (less toxic, made by the ornithine cycle in the liver, 2NH₃ + CO₂ → CO(NH₂)₂ + H₂O) in mammals; uric acid (almost insoluble, needs little water) in birds and insects. Thermoregulation uses the same feedback logic, with the hypothalamus as the set-point (about 37 °C) and effectors including sweating, vasodilation and shivering."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: inulin clearance. Urine inulin concentration U = 12 mg cm⁻³, urine flow V = 1.0 cm³ min⁻¹, plasma inulin P = 0.10 mg cm⁻³. → GFR = U × V ÷ P = 12 × 1.0 ÷ 0.10 = 120 cm³ min⁻¹, which is normal. Over 24 h this is 120 × 1440 = 172.8 dm³ of filtrate, so about 99% of the filtrate must be reabsorbed to give about 1.5 dm³ of urine."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "More ADH means MORE water reabsorbed means LESS (more concentrated) urine — this is very commonly stated backwards",
    "Ultrafiltration is passive/pressure-driven; selective reabsorption afterwards is the actively selective, energy-requiring step",
    "Deamination happens in the LIVER, not the kidney — the kidney only removes urea from the blood, it doesn't make it",
    "Describe thermoregulation/osmoregulation as full negative feedback loops, not just isolated named responses"
   ]}
  ]},
  {title:"Plant & Animal Responses", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Plant tropisms are directional growth responses to a stimulus: phototropism (light), geotropism (gravity) — coordinated by plant hormones, not a nervous system",
    "Auxin (e.g. IAA) is made in the shoot tip, diffuses down and promotes cell elongation; uneven distribution (more on the shaded side) causes bending towards light; auxin also maintains apical dominance",
    "Gibberellins promote stem elongation and stimulate seed germination (triggering amylase production to break down starch reserves)"
   ]},
   {heading:"Method — the nervous system and muscle", points:[
    "The nervous system splits into CNS (brain, spinal cord) and PNS (somatic — voluntary; autonomic — involuntary, split into sympathetic 'fight or flight' and parasympathetic 'rest and digest')",
    "Brain regions: cerebrum (conscious thought), cerebellum (coordination/balance), medulla oblongata (involuntary functions like heart rate/breathing), hypothalamus (homeostasis, links nervous and endocrine systems)",
    "A reflex arc is fast, automatic and bypasses conscious processing (stimulus → receptor → sensory neurone → relay neurone in the spinal cord → motor neurone → effector)",
    "Heart rate is controlled by both the autonomic nervous system (sympathetic increases rate, parasympathetic/vagus decreases it) and hormones (adrenaline increases rate) — both act on the SAN",
    "Muscle contraction (sliding filament theory): a nerve impulse triggers calcium release, allowing myosin heads to bind actin and pull the filaments past each other (using ATP for the power stroke and to detach), shortening the sarcomere"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining phototropism or apical dominance via auxin distribution and cell elongation",
    "Describing the pathway and purpose of a reflex arc",
    "Explaining how heart rate is controlled by nervous and hormonal mechanisms together",
    "Describing the sliding filament theory, including calcium and ATP's roles"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Auxin (IAA) and the acid-growth hypothesis: auxin activates H⁺-ATPase pumps in cell membranes, lowering wall pH to about 4.5–5; expansins loosen cellulose cross-links in the acidic wall and turgor pressure then stretches the cell irreversibly. Phototropism arises because the PIN family of auxin efflux carriers redistributes auxin to the shaded side, where cells elongate more (Cholodny–Went model). Phototropins (blue-light receptors) detect the light direction.",
    "Phytochrome exists in two interconvertible forms: Pr (absorbs red light at about 660 nm, inactive) converts to Pfr (absorbs far-red at about 730 nm, active) and back again. The Pfr : Pr ratio reports the red : far-red ratio, which falls in the shade of other leaves (leaves absorb red but transmit far-red), triggering shade avoidance (stem elongation). Long-day and short-day flowering depend on the length of the uninterrupted night, measured through phytochrome and the circadian clock, not the length of the day.",
    "Gibberellins promote germination: the embryo releases GA, which diffuses to the aleurone layer and switches on the gene for α-amylase; the enzyme hydrolyses starch to maltose and glucose for the seedling. Abscisic acid (ABA) opposes GA and promotes dormancy; in drought it triggers stomatal closure through ABA receptors, Ca²⁺ signalling and efflux of K⁺ and anions from guard cells, which lose turgor. Ethylene (a gas) promotes fruit ripening and abscission; a ripe fruit's ethylene is the reason 'one bad apple' hastens ripening of others. Cytokinins promote cell division and delay leaf senescence.",
    "Plant defences are induced by signalling: wounding triggers jasmonic acid, and pathogen attack triggers salicylic acid and systemic acquired resistance (SAR) in distant leaves. Gene-for-gene resistance (R genes recognising pathogen effectors) causes a hypersensitive response, in which infected cells die rapidly to wall the pathogen off.",
    "The reflex arc and neural control: the spinal cord handles simple reflexes (the stretch reflex monosynaptically; the withdrawal reflex via interneurones), whereas the brain integrates complex responses. The autonomic system has two divisions with opposing effects on most organs: sympathetic (noradrenaline; 'fight or flight') and parasympathetic (acetylcholine; 'rest and digest'). Heart rate rises through β₁-adrenergic receptors; β-blockers lower it by blocking them.",
    "Mechanisms of muscle contraction in more detail: the sliding-filament model with Ca²⁺ binding troponin C to move tropomyosin and expose myosin-binding sites; cross-bridge cycling needs ATP both to detach myosin and to re-cock the head (rigor mortis occurs because ATP is no longer available). The sarcoplasmic reticulum releases Ca²⁺ through ryanodine receptors in response to the T-tubule signal (excitation–contraction coupling). Fast-twitch fibres rely on glycolysis and fatigue quickly; slow-twitch fibres are myoglobin-rich, mitochondria-rich and fatigue-resistant.",
    "Circadian and behavioural timing: the suprachiasmatic nucleus is the master clock, with a free-running period of about 24.2 h in humans, reset by light detected by melanopsin-containing retinal ganglion cells; it signals the pineal gland to release melatonin at night. In plants and animals, clock genes form transcription–translation feedback loops (PER/CRY in mammals). Jet lag is the mismatch between this internal clock and the new light cycle."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Auxin promotes cell elongation at low concentrations in shoots — describe this specific mechanism, not just 'a growth hormone'",
    "A reflex arc bypasses the BRAIN but still goes through the spinal cord via a relay neurone — it isn't entirely nerve-free",
    "Both nervous (fast) and hormonal (adrenaline, longer-lasting) mechanisms act on the SAME target (the SAN) — mention both for a full answer",
    "In the sliding filament theory, the filaments don't shorten themselves — they slide past each other, shortening the sarcomere overall"
   ]}
  ]},
  {title:"Photosynthesis", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Overall equation: 6CO₂ + 6H₂O → (light energy) → C₆H₁₂O₆ + 6O₂, occurring in chloroplasts",
    "Light-dependent reactions occur in the thylakoid membranes; light-independent reactions (Calvin cycle) occur in the stroma"
   ]},
   {heading:"Method — the two stages in detail", points:[
    "Light-dependent reactions: light energy absorbed by chlorophyll in photosystems II and I; photosystem II splits water (photolysis) into protons, electrons and oxygen (the O₂ released); excited electrons pass along an electron transport chain, releasing energy used to pump H⁺ into the thylakoid space, building a proton gradient; H⁺ flows back through ATP synthase (chemiosmosis), generating ATP; electrons eventually reduce NADP to NADPH at photosystem I",
    "Non-cyclic photophosphorylation (both photosystems, produces ATP, NADPH and O₂) is the main pathway; cyclic photophosphorylation (only photosystem I, produces only ATP) occurs when NADP is in short supply",
    "Calvin cycle: CO₂ combines with the 5-carbon RuBP (catalysed by RuBisCO), forming an unstable 6-carbon intermediate that splits into two molecules of the 3-carbon GP; GP is reduced to the 3-carbon TP using ATP and NADPH; most TP is recycled (using more ATP) to regenerate RuBP; a small fraction of TP is used to make glucose and other organic molecules",
    "Limiting factors: light intensity, CO₂ concentration and temperature can each limit the rate — whichever is in shortest supply relative to the plant's needs limits the overall rate"
   ]},
   {heading:"Common exam question types", points:[
    "Describing the light-dependent reactions in detail, including photolysis, the electron transport chain, and chemiosmosis",
    "Describing the Calvin cycle with correct named molecules and carbon numbers at each stage",
    "Interpreting limiting factor graphs",
    "Practical investigations into rate of photosynthesis (e.g. pondweed/algal balls, measuring oxygen production, varying light intensity)"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "The light-dependent reactions follow the Z-scheme: photosystem II (P680) oxidises water at the oxygen-evolving complex (2H₂O → O₂ + 4H⁺ + 4e⁻, using a Mn₄CaO₅ cluster), electrons pass through plastoquinone, the cytochrome b₆f complex (which pumps protons) and plastocyanin to photosystem I (P700), then to ferredoxin and NADP⁺ reductase to make NADPH. Each photosystem boosts the electron's energy with a photon, and the low-energy electron from water ends up at a reducing potential of about −0.4 V.",
    "Chemiosmosis in the chloroplast: electron transport pumps H⁺ into the thylakoid lumen, making the lumen about pH 5–6 against stroma pH of about 8 (a ΔpH of 2–3 units provides most of the proton-motive force, unlike mitochondria where the membrane potential dominates). ATP synthase (CF₀F₁) makes ATP as H⁺ flows back to the stroma. Cyclic electron flow around photosystem I makes extra ATP without NADPH, balancing the ATP : NADPH ratio the Calvin cycle needs (3 ATP : 2 NADPH per CO₂).",
    "The Calvin cycle has three phases: carboxylation (RuBisCO fixes CO₂ onto ribulose-1,5-bisphosphate, giving two 3-phosphoglycerate), reduction (using ATP and NADPH to make triose phosphate) and regeneration of RuBP (needs ATP). Six turns fix 6 CO₂ and give 12 triose phosphate: 2 leave as net product (one glucose) and 10 are rearranged into 6 RuBP. Light switches the cycle on through ferredoxin–thioredoxin reduction of key enzymes, a rise in stromal pH and Mg²⁺ — preventing futile cycling at night.",
    "Photorespiration: RuBisCO also accepts O₂ (it has relatively poor specificity), giving 2-phosphoglycolate, which must be salvaged through the chloroplast, peroxisome and mitochondrion, releasing CO₂ and costing energy; this wastes up to 25% of fixed carbon in C₃ plants on hot, dry days when stomata are closed and the internal O₂ : CO₂ ratio is high. C₄ plants (maize, sugar cane) avoid this by first fixing CO₂ into oxaloacetate with PEP carboxylase (which has no affinity for O₂) in mesophyll cells and then releasing it in bundle-sheath cells around RuBisCO; CAM plants separate the same steps in time (stomata open at night).",
    "Limiting factors are explained quantitatively by the light-response curve: the rate rises about linearly with light at low irradiance (slope = quantum yield), then saturates; the compensation point is where photosynthesis equals respiration (net CO₂ exchange zero). Sun leaves have higher saturation points than shade leaves. Elevated CO₂ benefits C₃ plants more than C₄ plants, which already concentrate CO₂, and this is the basis of CO₂ enrichment in greenhouses (about 1000 ppm).",
    "Energetics: a photon of 680 nm carries 176 kJ per mole of photons (E = hcN_A ÷ λ). The minimum quantum requirement is about 8 photons per CO₂ fixed (about 10 in practice), so making one glucose (6 CO₂, ΔG ≈ +2870 kJ mol⁻¹) needs at least 48 photons, or 48 × 176 = 8450 kJ of photon energy. The maximum efficiency of conversion of absorbed red light to chemical energy is therefore 2870 ÷ 8450 = 34%; whole-plant efficiency over a growing season is only about 1–3% because light is lost by reflection, wrong wavelengths, photorespiration and respiration.",
    "Methods and applications: chlorophyll fluorescence (Fv/Fm ≈ 0.83 in healthy leaves) measures photosystem II efficiency and stress; paper or thin-layer chromatography of pigments gives Rf values (carotenoids run highest, chlorophyll b lowest); the Hill reaction (isolated chloroplasts with DCPIP, an artificial electron acceptor that goes from blue to colourless) showed that O₂ comes from water, supported later by ¹⁸O labelling. Herbicides such as DCMU (diuron) and atrazine block electron transfer at photosystem II."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: maximum efficiency of photosynthesis in red light. A 680 nm photon has energy E = hc ÷ λ = (6.626×10⁻³⁴ × 2.998×10⁸) ÷ 680×10⁻⁹ = 2.92×10⁻¹⁹ J; per mole of photons = 2.92×10⁻¹⁹ × 6.022×10²³ = 176 kJ. With 8 photons per CO₂, 48 photons per glucose = 8450 kJ. Stored energy is 2870 kJ mol⁻¹, so efficiency = 2870 ÷ 8450 = 34% (27% if 10 photons per CO₂ are needed, as measured)."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Use the actual named molecules and carbon numbers (CO₂ + RuBP (5C) → 2×GP (3C) → TP (3C), using ATP/NADPH) rather than a vague 'carbon dioxide is fixed'",
    "Don't confuse light-independent with not needing light at all in practice — the Calvin cycle needs a continuous supply of ATP and NADPH from the light-dependent reactions",
    "Explain chemiosmosis properly: the H⁺ gradient across the thylakoid membrane drives ATP synthesis as H⁺ flows through ATP synthase — don't just say ATP is made",
    "For limiting factor graphs, always identify which specific factor is limiting at a given point and justify it by referring to where the plateau occurs"
   ]}
  ]},
  {title:"Respiration", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Core definitions & key equations", points:[
    "Overall equation (aerobic): C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (+ ATP)",
    "Four stages: glycolysis (cytoplasm) → link reaction (mitochondrial matrix) → Krebs cycle (mitochondrial matrix) → oxidative phosphorylation (cristae)"
   ]},
   {heading:"Method — the four stages in detail", points:[
    "Glycolysis: glucose (6C) is phosphorylated, split into two 3-carbon triose phosphates, oxidised to two pyruvate — net gain of 2 ATP and 2 reduced NAD; does not require oxygen",
    "Link reaction: each pyruvate is decarboxylated and oxidised, combined with coenzyme A to form acetyl coenzyme A, reducing NAD — happens twice per glucose",
    "Krebs cycle: acetyl CoA combines with oxaloacetate to form citrate; a series of decarboxylation/oxidation reactions releases CO₂, reduces NAD and FAD, produces 1 ATP by substrate-level phosphorylation, and regenerates oxaloacetate — happens twice per glucose",
    "Oxidative phosphorylation: reduced NADH and FADH₂ deliver electrons to the electron transport chain; energy released pumps H⁺ into the intermembrane space, building a proton gradient; H⁺ flows back through ATP synthase (chemiosmosis), generating most of the cell's ATP; oxygen is the final electron acceptor, forming water",
    "Anaerobic respiration regenerates NAD⁺ so glycolysis can continue: pyruvate is reduced to lactate in animals; in yeast/plants pyruvate is decarboxylated to ethanal then reduced to ethanol — both give far less ATP than aerobic respiration"
   ]},
   {heading:"Common exam question types", points:[
    "Describing each stage of aerobic respiration with correct location, inputs/outputs and named molecules",
    "Explaining chemiosmosis and the role of oxygen as the final electron acceptor",
    "Comparing anaerobic respiration in animals (lactate) vs yeast (ethanol)",
    "Discussing approximate ATP yield per glucose"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Glycolysis is regulated at three irreversible steps: hexokinase (inhibited by its product glucose-6-phosphate), phosphofructokinase-1 (PFK-1, the key control point: inhibited by ATP and citrate, activated by AMP and fructose-2,6-bisphosphate) and pyruvate kinase. This ties glucose use to the cell's energy charge. Pyruvate dehydrogenase links glycolysis to the Krebs cycle and is inhibited by its products acetyl-CoA and NADH and by phosphorylation, and is the reason thiamine (vitamin B₁) deficiency causes lactic acidosis.",
    "The Krebs cycle: acetyl-CoA + oxaloacetate → citrate (citrate synthase), and per turn 3 NADH, 1 FADH₂, 1 GTP/ATP and 2 CO₂ are made. The cycle also supplies precursors for biosynthesis (amino acids from α-ketoglutarate and oxaloacetate, haem from succinyl-CoA), so anaplerotic reactions such as pyruvate carboxylase replenish oxaloacetate. Isocitrate dehydrogenase and α-ketoglutarate dehydrogenase are inhibited by NADH and ATP, linking the cycle's speed to supply and demand.",
    "Oxidative phosphorylation: electrons from NADH enter at Complex I (4 H⁺ pumped), from FADH₂ at Complex II (no pumping), and both feed ubiquinone to Complex III (4 H⁺) and then cytochrome c to Complex IV (2 H⁺ per electron pair, reducing ½O₂ to water). About 10 H⁺ are pumped per NADH and 6 per FADH₂. The proton-motive force Δp = Δψ − (2.3RT ÷ F)ΔpH is about 200 mV in mitochondria, mostly membrane potential (Δψ ≈ −160 to −180 mV) plus ΔpH ≈ 0.5–1.",
    "ATP yield: the mammalian ATP synthase c-ring has 8 subunits, so 8 H⁺ per 3 ATP made (2.7 H⁺ per ATP) plus one H⁺ for phosphate/ADP transport, about 3.7 H⁺ per ATP. Therefore P/O ≈ 10 ÷ 3.7 ≈ 2.7 → conventionally 2.5 ATP per NADH and 1.5 per FADH₂. Complete oxidation of glucose gives about 30–32 ATP, not the textbook 36–38, after the cost of shuttling cytoplasmic NADH into mitochondria (glycerol phosphate shuttle: 1.5 ATP per NADH; malate–aspartate shuttle: 2.5).",
    "Uncoupling and heat: uncoupling protein 1 (UCP1, thermogenin) in brown fat lets protons leak back through the inner membrane without ATP synthesis, so the energy is released as heat (non-shivering thermogenesis in newborns and hibernators). 2,4-dinitrophenol (DNP), a chemical uncoupler, was used as a slimming drug and caused fatal hyperthermia. Cyanide, azide and carbon monoxide block Complex IV; oligomycin blocks ATP synthase; rotenone blocks Complex I.",
    "Respiratory quotient (RQ) = CO₂ produced ÷ O₂ consumed identifies the fuel: carbohydrate about 1.0, protein about 0.8–0.9, fat about 0.7 (tripalmitin: C₅₁H₉₈O₆ + 72.5O₂ → 51CO₂ + 49H₂O, RQ = 51 ÷ 72.5 = 0.70). An RQ above 1 suggests fat synthesis from carbohydrate; fermentation by yeast gives RQ well above 1 because CO₂ is made with little O₂. Respirometers measure O₂ uptake (CO₂ absorbed by soda lime or KOH).",
    "Anaerobic metabolism and hypoxia: without oxygen NADH is recycled by lactate dehydrogenase (pyruvate + NADH → lactate + NAD⁺) in animals or by pyruvate decarboxylase and alcohol dehydrogenase (→ ethanol + CO₂) in yeast and plants, giving just 2 ATP per glucose. Lactate from muscle travels to the liver for gluconeogenesis (the Cori cycle, costing 6 ATP to regenerate one glucose). The Warburg effect is the observation that many tumour cells use glycolysis even when oxygen is available."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: ATP yield per glucose (modern values). Glycolysis: 2 ATP + 2 NADH (cytosolic, 1.5 or 2.5 ATP each via shuttles = 3 or 5). Pyruvate → acetyl-CoA: 2 NADH = 5. Krebs cycle (2 turns): 6 NADH = 15, 2 FADH₂ = 3, 2 GTP = 2 → 20. Total = 2 + 3 + 5 + 20 = 30 (glycerol phosphate shuttle) or 32 (malate–aspartate shuttle) ATP per glucose, not the older 36–38."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Explain chemiosmosis in your own words (H⁺ gradient built by the electron transport chain → flows through ATP synthase → ATP produced) rather than just naming the stages",
    "State clearly WHY anaerobic respiration happens: to regenerate NAD⁺ so glycolysis can keep running, not simply 'to produce energy without oxygen'",
    "Say specifically that glycolysis is the only stage that can occur with no oxygen present at all and still produce ATP",
    "Quote ATP yield figures cautiously — different sources give slightly different totals (often ~30-32 ATP per glucose); understanding the process matters more than one exact number"
   ]}
  ]},
  {title:"Patterns of Inheritance & Genetics", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Core definitions & key equations", points:[
    "Genotype = genetic makeup for a gene; phenotype = the observable characteristic; homozygous = two identical alleles, heterozygous = two different alleles",
    "Dominant alleles are expressed if present at all; recessive alleles are only expressed if homozygous recessive; codominant alleles are both fully expressed in a heterozygote; incomplete dominance produces an intermediate phenotype",
    "Monohybrid cross: tracks one gene using a Punnett square; dihybrid cross tracks two genes at once — independently assorting genes give a 9:3:3:1 ratio in a heterozygous × heterozygous cross"
   ]},
   {heading:"Method — linkage, epistasis & statistics", points:[
    "Linked genes (close together on the same chromosome) don't assort independently and are inherited together more often than the standard dihybrid ratio predicts",
    "Epistasis: one gene's allele masks or affects the expression of a different gene, changing the expected dihybrid ratio (e.g. to 9:3:4 or 12:3:1 depending on the type)",
    "Test cross: cross an organism showing the dominant phenotype (unknown genotype) with a homozygous recessive individual, to determine whether it's homozygous or heterozygous dominant from the offspring ratio",
    "Chi-squared test: χ² = Σ[(observed − expected)² ÷ expected], compared against a critical value (typically p = 0.05, degrees of freedom = number of categories − 1) to test whether a difference from the expected ratio is statistically significant"
   ]},
   {heading:"Common exam question types", points:[
    "Full genetic cross workings (monohybrid, dihybrid, test cross), including defining allele symbols and Punnett squares",
    "Recognising and explaining linkage or epistasis from unusual offspring ratios",
    "Carrying out and interpreting a chi-squared test",
    "Linking genetics to natural selection and speciation"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Hardy–Weinberg equilibrium (p² + 2pq + q² = 1, p + q = 1) holds only if there is no selection, mutation or migration, the population is large (no genetic drift) and mating is random. Allele frequencies stay constant and genotype frequencies reach p², 2pq, q² after one generation of random mating. Departures from it are used to detect selection, inbreeding (fewer heterozygotes than 2pq: the inbreeding coefficient F = 1 − H(obs) ÷ H(exp)) or genotyping errors.",
    "Genetic mapping: genes on the same chromosome are linked and recombine by crossing over at chiasmata in prophase I. Recombination frequency (RF) = recombinant offspring ÷ total offspring, and 1% RF = 1 map unit (centimorgan, cM). RF cannot exceed 50% because multiple crossovers between distant genes cancel out, so distant genes behave as if unlinked; map distances are therefore additive only over short intervals, and three-point test crosses measure interference.",
    "The χ² test compares observed with expected counts: χ² = Σ(O − E)² ÷ E, with degrees of freedom = categories − 1. For a dihybrid cross (9 : 3 : 3 : 1) there are 3 degrees of freedom and the 5% critical value is 7.815. If χ² is below this, the difference from expected could be due to chance (do not reject the null hypothesis). Mendel's own data fit so well that later statisticians questioned whether results were unconsciously smoothed.",
    "Inheritance beyond simple dominance: incomplete dominance (heterozygote intermediate), codominance (both alleles expressed, as in ABO blood group alleles IA and IB), multiple alleles, epistasis (one gene masks another, giving ratios such as 9 : 3 : 4 or 12 : 3 : 1) and polygenic inheritance (many genes with small additive effects giving continuous variation). Quantitative genetics defines heritability h² = VG ÷ VP (genetic variance ÷ total phenotypic variance), the proportion of variation in a population due to genes in a given environment — not the proportion of a trait 'caused by' genes in an individual.",
    "Non-Mendelian molecular mechanisms: genomic imprinting (the allele is expressed according to its parent of origin, through DNA methylation, e.g. IGF2), mitochondrial inheritance (maternal; mtDNA diseases show heteroplasmy, a mix of normal and mutant mtDNA), X-inactivation (one X chromosome silenced in female cells by XIST RNA, producing mosaics such as tortoiseshell cats) and trinucleotide repeat expansions (CAG repeats in Huntington's disease show 'anticipation': earlier onset in successive generations).",
    "Sex linkage and pedigrees: X-linked recessive traits (haemophilia, red–green colour blindness) are more common in males since they have only one X (hemizygous); an affected father passes the allele to all of his daughters (carriers) but none of his sons. Pedigree analysis works through exclusion: a trait cannot be autosomal recessive if two unaffected parents who are not carriers have an affected child — the question is always which pattern is consistent with every individual in the pedigree.",
    "Applications: genome-wide association studies (GWAS) scan hundreds of thousands of SNPs in thousands of people to find variants associated with disease; polygenic risk scores sum small effects. Linkage disequilibrium lets a tag SNP stand for neighbouring variants. Pharmacogenetics uses genotype to predict drug response (e.g. CYP2C19 variants and clopidogrel)."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: Hardy–Weinberg. Cystic fibrosis affects 1 in 2500 births (q² = 1/2500). → q = √(1/2500) = 0.02, p = 0.98; carriers = 2pq = 2 × 0.98 × 0.02 = 0.0392, about 1 in 25.5 people. The vast majority of copies of the CF allele are hidden in healthy carriers, which is why removing affected people from the population changes allele frequency so slowly.",
    "Worked example: χ² for a dihybrid cross. Observed (round yellow, round green, wrinkled yellow, wrinkled green) = 315, 108, 101, 32; total 556; expected 9 : 3 : 3 : 1 = 312.75, 104.25, 104.25, 34.75. → χ² = 0.0162 + 0.1349 + 0.1011 + 0.2176 = 0.470 (3 d.f.). This is below the critical value of 7.815 (p = 0.05), so the data are consistent with the 9 : 3 : 3 : 1 ratio."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always define your allele symbols clearly at the start of a genetics answer (e.g. B = brown allele, dominant; b = blue allele, recessive) and show the full Punnett square, even if the ratio seems obvious — method marks are awarded",
    "For chi-squared, state your conclusion by comparing calculated χ² to the critical value AND explain what it means in context, e.g. that since the calculated value is less than the critical value, there is no significant difference between observed and expected results, supporting independent assortment",
    "Don't confuse epistasis (one gene affecting expression of another) with linkage (genes physically close together, inherited together) — they produce different unusual ratios with different causes",
    "Degrees of freedom for chi-squared = number of phenotype classes minus 1 — a commonly mis-remembered detail"
   ]}
  ]},
  {title:"Cellular Control & Gene Expression", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Core definitions & key equations", points:[
    "Gene mutations (substitution, deletion, insertion) can change the amino acid sequence of a protein — though the degenerate genetic code means some substitutions are silent (no effect)",
    "Gene expression can be regulated at the transcriptional level (whether/how much a gene is transcribed), post-transcriptional level (RNA processing/splicing), and post-translational level (modifying the finished protein)"
   ]},
   {heading:"Method — development and body plans", points:[
    "Homeobox (Hox) genes control the development of body plans across a wide range of organisms, and are highly conserved through evolution",
    "Mitosis drives growth/increase in cell number during development; apoptosis (programmed cell death) removes unwanted cells in a controlled way (e.g. shaping fingers by removing webbing)"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining the effect of a given mutation type on protein structure/function (or lack of effect for a silent mutation)",
    "Describing a named level of gene expression regulation",
    "Explaining the role of Hox genes in development",
    "Explaining how mitosis and apoptosis together control body form"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Prokaryotic gene regulation: in the lac operon, the repressor (lacI) binds the operator and blocks RNA polymerase; allolactose binds the repressor and releases it. But expression is also controlled by cAMP–CAP (catabolite activator protein): when glucose is low, cAMP is high and CAP–cAMP binds upstream and increases transcription. So the operon works as a logic gate (lactose present AND glucose absent), a good example of combinatorial control.",
    "Eukaryotic transcription needs general transcription factors (TFIID with TBP binds the TATA box and recruits RNA polymerase II) plus gene-specific activators that bind enhancers, which can be tens of kilobases away; looping DNA and the Mediator complex connect them to the promoter. Transcription factors have DNA-binding domains (zinc fingers, helix-turn-helix, leucine zippers). Steroid hormone receptors are a classic example of ligand-activated transcription factors.",
    "Chromatin and epigenetics: DNA is wound around histone octamers (nucleosomes); histone acetylation (HATs add acetyl groups, neutralising lysine's charge) loosens chromatin and activates genes, while histone deacetylases (HDACs) and DNA methylation of CpG islands (DNA methyltransferases) silence them. Methylation patterns are copied through cell division (maintenance DNMT1), giving heritable changes without a change in DNA sequence; they underlie X-inactivation, imprinting and cell identity, and are altered in cancer.",
    "Post-transcriptional control: alternative splicing makes several proteins from one gene (human genes average about 8–10 exons, and over 90% undergo alternative splicing, one reason ~20,000 genes give >100,000 proteins). Eukaryotic mRNAs get a 5′ cap and a poly-A tail, which affect stability and translation. MicroRNAs (about 22 nt) and siRNAs load into RISC and bind complementary mRNA, causing degradation or translational repression — RNA interference (Nobel 2006).",
    "Cancer as a failure of control: proto-oncogenes (e.g. RAS, MYC) become oncogenes when mutated or overexpressed (gain of function, 'accelerator stuck on'); tumour suppressors (p53, RB, BRCA1) need both alleles to be lost (Knudson's two-hit hypothesis; 'brakes cut'). p53 is the 'guardian of the genome': it arrests the cell cycle (via p21) or triggers apoptosis in response to DNA damage, and is mutated in about half of human cancers. Cancer typically needs several mutations accumulated over time.",
    "Homeobox (Hox) genes encode transcription factors containing a 180-bp homeobox (60 amino acid homeodomain) that control the body plan along the head-to-tail axis; their order on the chromosome matches their order of expression along the body (collinearity), and they are highly conserved from fruit flies to humans. Morphogen gradients (e.g. Bicoid in Drosophila) provide positional information via concentration-dependent gene activation. Apoptosis is controlled by caspases (a proteolytic cascade) and removes webbing between digits in embryos.",
    "Gene expression is measured by RT-qPCR, microarrays and RNA-seq (transcriptomics); ChIP-seq maps where proteins bind DNA and bisulfite sequencing maps methylation. Single-cell RNA-seq reveals that 'identical' cells in a tissue differ in expression. Control also happens after translation (phosphorylation, ubiquitin-tagged proteasomal degradation: the 2004 Nobel for the ubiquitin system)."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Not all mutations have an effect — a substitution might be silent due to the degenerate genetic code; consider this before assuming harm",
    "Keep the three levels of gene expression control distinct: transcriptional, post-transcriptional, post-translational — using the wrong level loses marks",
    "Apoptosis is controlled/programmed, distinct from uncontrolled cell death (necrosis) — always describe it that way",
    "Hox genes being conserved across very different organisms is often used as evidence for common ancestry"
   ]}
  ]},
  {title:"Manipulating Genomes", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Core definitions & key equations", points:[
    "DNA sequencing determines the order of bases; modern high-throughput sequencing enables fast genome-wide comparisons and amino acid sequence prediction",
    "PCR amplifies a specific DNA sequence exponentially: repeated cycles of heating (separate strands), cooling (primers bind), heating with DNA polymerase (synthesise new strands) roughly double the target DNA each cycle",
    "Gel electrophoresis separates DNA fragments (or proteins) by size: negatively-charged DNA moves towards the positive electrode, smaller fragments moving further"
   ]},
   {heading:"Method — applications", points:[
    "DNA profiling uses variable non-coding regions (short tandem repeats), combined with PCR (amplify small samples) and electrophoresis (visualise the pattern) — used in forensics, paternity testing, diagnosis",
    "Genetic engineering: isolate a gene (restriction enzymes at specific sequences, or reverse transcriptase from mRNA to make cDNA), insert into a vector (e.g. a plasmid, using the same enzyme for compatible 'sticky ends'), insert the vector into a host to express the gene",
    "Ethical issues: consent/safety (especially gene therapy), ecological impact of releasing GMOs, and broader societal objections",
    "Gene therapy inserts a functioning gene copy into a patient's cells; somatic gene therapy affects only the individual, germline therapy would affect offspring (far more ethically contentious)"
   ]},
   {heading:"Common exam question types", points:[
    "Describing PCR steps and explaining why each temperature stage is needed",
    "Interpreting a gel electrophoresis result",
    "Describing the steps of genetic engineering to insert a gene into a host",
    "Discussing ethical issues around a named genetic technology"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "PCR amplifies DNA exponentially: after n cycles of doubling the number of copies is N₀ × 2ⁿ (30 cycles → about 10⁹ copies from one template); in practice the efficiency E < 1 so N = N₀(1 + E)ⁿ (E = 0.9 gives 2.3×10⁸ after 30 cycles). Cycling uses denaturation at about 95 °C, primer annealing at about 50–65 °C (primer Tm ≈ 4(G+C) + 2(A+T) °C as a rough guide, so 10 G/C and 10 A/T gives 60 °C) and extension at 72 °C with heat-stable Taq polymerase (from Thermus aquaticus). Contamination is the main practical problem because a single stray molecule can be amplified.",
    "Quantitative PCR (qPCR) records fluorescence each cycle and defines Ct, the cycle at which the signal crosses a threshold: lower Ct means more starting template. Relative expression uses ΔΔCt: fold change = 2 raised to the power of (−ΔΔCt), where ΔCt = Ct(target) − Ct(reference gene) and ΔΔCt = ΔCt(treated) − ΔCt(control). A ΔΔCt of −3 therefore means an 8-fold increase.",
    "Sanger sequencing uses dideoxynucleotides (ddNTPs, with no 3′-OH) to terminate chains at each base; fragments are separated by capillary electrophoresis and read by fluorescent labels (read lengths about 800–1000 bases). Next-generation sequencing instead sequences millions of short fragments in parallel (sequencing by synthesis, with reversible dye terminators, or nanopore sequencing, which reads the current change as DNA passes through a protein pore). The human genome (3.1 Gb) cost about $3 billion for the first draft and now costs a few hundred dollars.",
    "CRISPR-Cas9 genome editing: a guide RNA (about 20 nt) directs the Cas9 nuclease to a complementary DNA target adjacent to a PAM sequence (NGG for SpCas9), where it makes a double-strand break. The cell repairs it by non-homologous end joining (error-prone, causing indels and gene knock-out) or homology-directed repair (precise, using a supplied template). Base and prime editors change single bases without double-strand breaks. Risks include off-target cuts and mosaicism, and germline editing raises ethical issues.",
    "Bioinformatics: sequence alignment (BLAST) finds homologous genes through a scoring matrix; the E-value is the number of matches expected by chance, so a smaller E-value means a more significant match. Genome annotation predicts genes using open reading frames and RNA-seq evidence. Comparative genomics shows that humans and chimpanzees differ at about 1.2% of aligned nucleotides, and phylogenetic trees are built by comparing aligned sequences.",
    "Applications and DNA profiling: forensic profiling analyses STRs (short tandem repeats, e.g. 13–20 core loci) amplified by PCR and separated by size; the probability of a random match is the product of genotype frequencies across loci (the product rule), reaching one in billions. Gene therapy uses viral vectors (AAV, lentivirus) to deliver a working gene; Luxturna (for RPE65 retinal dystrophy) and exa-cel (CRISPR-edited cells for sickle cell disease) are approved examples.",
    "Recombinant DNA tools: restriction enzymes cut at palindromic sequences (EcoRI cuts G↓AATTC, leaving sticky ends), DNA ligase joins the pieces, plasmids carry an origin of replication, a selectable marker (antibiotic resistance) and a multiple cloning site; blue–white screening (lacZ disruption) identifies recombinants. cDNA, made by reverse transcriptase from mature mRNA, lacks introns so can be expressed in bacteria, which cannot splice. Expression in E. coli suits simple proteins, while glycosylated proteins need yeast or mammalian cells."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: qPCR relative expression. A gene has Ct = 24 in treated cells and 27 in controls; the reference gene has Ct = 18 in both. → ΔCt(treated) = 24 − 18 = 6; ΔCt(control) = 27 − 18 = 9; ΔΔCt = 6 − 9 = −3; fold change = 2³ = 8. The gene is expressed eight times more strongly in treated cells.",
    "Worked example: PCR yield. Starting from 1 copy with efficiency 0.9 (1.9-fold per cycle): after 30 cycles N = 1.9³⁰ = 2.3×10⁸ copies; with perfect efficiency it would be 2³⁰ = 1.07×10⁹, so a 10% loss of efficiency per cycle makes a 4.7-fold difference after 30 cycles."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Explain WHY each PCR temperature works: ~95°C separates strands (breaks hydrogen bonds), ~50-65°C lets primers anneal, ~72°C suits heat-tolerant DNA polymerase (e.g. Taq) to build new strands",
    "In electrophoresis, SMALLER fragments travel FURTHER — a commonly reversed assumption",
    "Restriction enzymes cut at specific palindromic sequences, often leaving complementary sticky ends for inserting into a plasmid cut with the SAME enzyme",
    "Distinguish somatic gene therapy (one individual, not inherited) from germline (affects offspring, far more contentious, not currently permitted in humans in most countries)"
   ]}
  ]},
  {title:"Cloning & Biotechnology", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Core definitions & key equations", points:[
    "Natural plant clones form via vegetative propagation; artificial cloning uses cuttings (simple) or micropropagation/tissue culture (growing many identical plants from small tissue pieces using plant hormones)",
    "Artificial animal cloning: embryo twinning (splitting an early embryo) or somatic cell nuclear transfer (SCNT) — enucleating an egg and replacing the nucleus with one from a body (somatic) cell of the animal to be cloned"
   ]},
   {heading:"Method — microorganisms & fermentation", points:[
    "Microorganisms produce food (e.g. mycoprotein), medicines (antibiotics, engineered insulin) and other chemicals — fast growth, use waste substrates, controllable conditions, but sometimes allergenicity/perception issues",
    "Aseptic technique prevents contamination of cultures (sterilising equipment/media, working near a flame)",
    "Batch fermentation: fixed nutrients, grow-produce-empty cycle (simpler, some idle time); continuous fermentation: nutrients continuously added and product/waste removed, keeping cells in optimum growth for longer (more complex, more efficient for ongoing production)",
    "Standard microbial growth curve: lag (adapting) → log/exponential (rapid growth) → stationary (growth rate = death rate, resources limiting) → death (nutrients exhausted/toxins accumulated)"
   ]},
   {heading:"Common exam question types", points:[
    "Describing the steps of SCNT or embryo twinning",
    "Evaluating arguments for/against artificial cloning in plants or animals",
    "Comparing batch and continuous fermentation for a given scenario",
    "Interpreting a microbial growth curve, identifying phases and explaining each"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Microbial growth kinetics: in a batch culture there are lag, exponential (log), stationary and death phases. During exponential growth N = N₀ × 2ⁿ, where n is the number of generations (a 30-minute generation time gives 2¹⁶ = 65,536-fold growth in 8 hours); equivalently N = N₀ × exp(rt) with r = ln 2 ÷ doubling time. The stationary phase starts when nutrients run out or toxic products accumulate, and is when many secondary metabolites (including antibiotics) are made.",
    "The Monod equation describes how the specific growth rate depends on the limiting nutrient: μ = μmax·S ÷ (Ks + S), the same form as Michaelis–Menten (Ks is the substrate concentration giving μ = ½μmax). With μmax = 0.50 h⁻¹, Ks = 0.20 g dm⁻³ and S = 1.0 g dm⁻³, μ = 0.50 × 1.0 ÷ 1.2 = 0.42 h⁻¹ (doubling time ln 2 ÷ 0.417 = 1.66 h). In a continuous-culture chemostat the dilution rate D (flow rate ÷ volume) sets μ = D at steady state; if D exceeds μmax the culture is washed out.",
    "Industrial fermenters are stirred-tank bioreactors with controlled temperature, pH, dissolved oxygen (sparging air and agitation), foam control and sterile technique. Batch and fed-batch (nutrient added gradually to avoid overflow metabolism) are used for penicillin; continuous culture for biomass such as Quorn (Fusarium venenatum mycoprotein). Downstream processing (cell separation, extraction, chromatography, formulation) is often the most expensive step, and recombinant proteins must meet strict purity standards.",
    "Immobilised enzymes (entrapped in alginate beads, adsorbed or covalently bound) can be reused and make product separation easier; examples are glucose isomerase for high-fructose corn syrup and lactase for lactose-free milk. Immobilisation can alter apparent Km (substrate diffusion limits) but usually raises thermal stability. Biosensors pair an immobilised enzyme (glucose oxidase) with an electrode to measure glucose, which is the basis of home blood glucose meters.",
    "Cloning in plants and animals: plant cells are totipotent, so tissue culture (micropropagation) on agar with auxin : cytokinin in the right ratio gives clones; a high auxin ratio favours roots, a high cytokinin ratio favours shoots. Dolly the sheep (1996) was made by somatic cell nuclear transfer, showing that differentiated nuclei can be reprogrammed by egg cytoplasm; induced pluripotent stem cells (iPSCs, from fibroblasts using four transcription factors, Nobel 2012) can now be made without eggs.",
    "Antibiotic resistance and the economics of microbes: plasmid-borne resistance genes spread by conjugation, and selection pressure from antibiotics favours resistant strains (MRSA, ESBL Enterobacteriaceae). Minimum inhibitory concentration (MIC) is the lowest concentration that prevents visible growth; agar diffusion zones of inhibition correlate with it. Bacteriophage therapy and new antibiotic classes are being studied.",
    "Safe and aseptic technique: flame sterilisation of loops, working near a flame (upward convection keeps contaminants away), sterile agar plates incubated at 25 °C (not 37 °C) in schools to avoid growing human pathogens, and taped-but-not-sealed lids so that anaerobes (e.g. Clostridium) cannot grow. Autoclaves sterilise at 121 °C and 15 psi for 15 minutes to kill spores."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: bacterial doubling. A culture doubles every 20 min. How long to grow from 10³ to 10⁹ cells per cm³? → fold increase = 10⁶ = 2ⁿ, so n = log₂(10⁶) = 19.93 generations → time = 19.93 × 20 = 399 min ≈ 6.6 h. The growth constant is r = ln 2 ÷ 20 = 0.0347 min⁻¹.",
    "Worked example: Monod growth rate. μmax = 0.50 h⁻¹, Ks = 0.20 g dm⁻³, S = 1.0 g dm⁻³ → μ = 0.50 × 1.0 ÷ (0.20 + 1.0) = 0.417 h⁻¹. If S falls to 0.20 g dm⁻³ (S = Ks), μ = 0.25 h⁻¹, exactly half of μmax, as the model requires."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "SCNT uses a SOMATIC cell nucleus, not a gamete — this is what makes the clone genetically identical to the somatic cell donor, not the egg donor",
    "In the stationary phase, population size is stable because growth rate EQUALS death rate (dynamic balance), not because growth has simply stopped",
    "Continuous fermentation suits large-scale ongoing production; batch gives more control, often preferred when exact product/timing matters",
    "When evaluating cloning ethics, give a SPECIFIC benefit and a SPECIFIC concern (e.g. reduced genetic diversity increasing disease vulnerability), not a vague general statement"
   ]}
  ]},
  {title:"Ecosystems", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Core definitions & key equations", points:[
    "An ecosystem includes all living (biotic) and non-living (abiotic) factors in an area and their interactions; ecosystems are dynamic and change over time",
    "Biomass transfers through feeding relationships; energy is lost between trophic levels (heat from respiration, waste/undigested material, uneaten parts), so biomass/energy decreases up the food chain",
    "Nutrients (carbon, nitrogen) are recycled between organisms and the environment via decomposition, respiration, and (for nitrogen) nitrogen-fixing/nitrifying/denitrifying bacteria"
   ]},
   {heading:"Method — succession and sampling", points:[
    "Primary succession: development from bare, lifeless substrate — pioneer species colonise first, alter the environment (adding organic matter/forming soil), allowing new species through a sequence of seral stages, reaching a stable climax community",
    "Measuring distribution and abundance: quadrats (percentage cover/frequency, non-mobile organisms), transects (across an environmental gradient), and mark-release-recapture (mobile animals)"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining energy/biomass loss between trophic levels and interpreting biomass/energy pyramids",
    "Describing the stages of primary succession, including the climax community",
    "Describing a method to measure distribution/abundance of a named organism",
    "Explaining a named nutrient cycle (carbon or nitrogen) in outline"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Ecological energetics: gross primary production (GPP) is the total energy fixed by photosynthesis; net primary production NPP = GPP − R (respiration of producers), and only NPP is available to consumers. For example, GPP = 12 000 and R = 5 000 kJ m⁻² yr⁻¹ gives NPP = 7 000 (58% of GPP). Tropical rainforests and estuaries have the highest NPP per unit area; open ocean has low NPP per m² but covers most of Earth, so contributes about half of global NPP.",
    "Trophic transfer efficiency (energy at one level ÷ energy at the level below) is typically about 10% (range 2–25%): much energy is lost to respiration, undigested material and parts not eaten. Endotherms are less efficient (1–3% production efficiency) than ectotherms (10–30%) because they spend energy keeping warm. Hence food chains are short (usually four or five links), and eating lower on the chain feeds more people per unit area. Biomass pyramids can be inverted in the ocean (phytoplankton turn over so fast that standing biomass is small), but energy pyramids are never inverted.",
    "Nutrient cycles: nitrogen is cycled by nitrogen fixation (Rhizobium in root nodules, Azotobacter, cyanobacteria: N₂ → NH₃ using nitrogenase, which needs 16 ATP per N₂ and is inhibited by O₂, so legumes use leghaemoglobin to protect it), nitrification (NH₄⁺ → NO₂⁻ by Nitrosomonas → NO₃⁻ by Nitrobacter), denitrification (NO₃⁻ → N₂ in waterlogged anaerobic soil by Pseudomonas) and ammonification. The Haber process now fixes roughly as much nitrogen as all natural land processes combined.",
    "Eutrophication: nitrate and phosphate run-off causes algal blooms; algae block light so submerged plants die; decomposers multiply and consume O₂ (biochemical oxygen demand, BOD), so fish and invertebrates die. The sequence is a good model of positive feedback in an ecosystem. Remedies include limiting fertiliser use, buffer strips, sewage treatment and restoring wetlands.",
    "Succession and stability: primary succession starts on bare rock (lichens and mosses → soil formation → herbs → shrubs → woodland climax), and secondary succession starts with soil already present. Early pioneers are r-selected (fast-growing, high-dispersal), while late species are K-selected. Biodiversity is often highest at intermediate stages of succession (the intermediate disturbance hypothesis), and keystone species (sea otters, wolves) have effects out of proportion to their abundance.",
    "Carbon budget and climate: atmospheric CO₂ has risen from about 280 ppm (pre-industrial) to over 420 ppm. The ocean and forests absorb about half of human emissions, but ocean uptake lowers pH (ocean acidification: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻, reducing carbonate ions that shellfish and corals need). Peat bogs and permafrost store vast amounts of carbon, and warming turns them from sinks into sources, a positive feedback.",
    "Measuring ecosystems: the Lincoln index N = (M × C) ÷ R estimates population size from mark–release–recapture (assumptions: marking does not harm or change behaviour, marks persist, mixing is random, no births, deaths or migration). Productivity can be measured by biomass change (dry mass, burned in a calorimeter), gas exchange in light and dark bottles, or satellite NDVI (a greenness index)."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: net primary production and transfer efficiency. GPP = 12 000 kJ m⁻² yr⁻¹, plant respiration = 5 000 → NPP = 12 000 − 5 000 = 7 000 kJ m⁻² yr⁻¹ (58%). If primary consumers capture 700 kJ m⁻² yr⁻¹ of this, trophic efficiency = 700 ÷ 7 000 = 10%.",
    "Worked example: Lincoln index. 100 animals are marked and released; a later sample of 80 contains 20 marked. → N = (M × C) ÷ R = (100 × 80) ÷ 20 = 400. The Chapman correction for small samples gives (101 × 81) ÷ 21 − 1 = 389, which is less biased."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Energy is lost between trophic levels mainly as HEAT from respiration — name this specifically, not just 'used for life processes'",
    "Distinguish distribution (WHERE, e.g. via a transect) from abundance (HOW MUCH, e.g. via quadrat counts) — a common mix-up",
    "In primary succession, pioneer species change the abiotic environment to make it MORE suitable for others — this facilitation drives succession, not just time passing",
    "A climax community is relatively stable, not permanently unchanging — avoid saying succession 'stops' completely"
   ]}
  ]},
  {title:"Populations & Sustainability", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Core definitions & key equations", points:[
    "Population size depends on birth rate, death rate, immigration and emigration; limited by density-dependent factors (food/space, disease, predation — effects intensify with density) and density-independent factors (natural disasters, extreme weather — don't depend on density)",
    "Interspecific competition (different species competing for the same resource, can cause competitive exclusion) and intraspecific competition (same species, limits growth as density increases)"
   ]},
   {heading:"Method — conservation and sustainability", points:[
    "Conservation actively manages/protects ecosystems while typically allowing sustainable human use (e.g. managed woodland, fishing quotas); preservation protects an area/species in its current, undisturbed state, generally preventing use",
    "Sustainable management balances current population needs against maintaining resources for the future — e.g. selective logging, quotas, crop rotation, replanting"
   ]},
   {heading:"Common exam question types", points:[
    "Explaining density-dependent vs density-independent factors with named examples",
    "Distinguishing interspecific from intraspecific competition and predicting effects on population size",
    "Explaining the difference between conservation and preservation with examples",
    "Evaluating a named ecosystem management strategy for sustainability"
   ]},
   {heading:"Beyond A-Level (Degree-Level Context)", points:[
    "Logistic growth: dN/dt = rN(1 − N/K), where r is the intrinsic rate of increase and K the carrying capacity. Growth is fastest at N = K/2 (the inflection point), where dN/dt = rK/4. For r = 0.5, K = 1000 and N = 200: dN/dt = 0.5 × 200 × (1 − 0.2) = 80 individuals per unit time. Real populations overshoot and oscillate when there is a time-lag in density dependence (Verhulst's equation with delay, as in lynx–hare cycles).",
    "Maximum sustainable yield (MSY) in the logistic model is rK/4, harvested at N = K/2, so harvesting at that stock size keeps the population growing back as fast as it is cut. Real fisheries cannot sit exactly at MSY because estimates of stock size are uncertain, so the precautionary approach sets quotas lower; overfishing leads to collapse, as in North Atlantic cod. Quotas, mesh size limits, closed seasons and marine protected areas are the usual management tools.",
    "Density-dependent factors (competition, predation, disease, waste accumulation) affect a larger fraction of the population as density rises and provide negative feedback; density-independent factors (fire, frost, drought) do not. Life-history strategies: r-selected species (small, many offspring, little parental care, fast turnover) vs K-selected species (large, few offspring, much care, stable populations near K). Survivorship curves (Types I, II, III) describe age-specific mortality.",
    "Population genetics of small populations: genetic drift (random change in allele frequency, large in small populations) and inbreeding reduce heterozygosity by about 1/(2Nₑ) per generation, where Nₑ is the effective population size (often much smaller than the census number because of unequal sex ratios and variation in breeding success). A bottleneck (cheetahs, northern elephant seals) and the founder effect cause lasting loss of diversity, increasing vulnerability to disease. The '50/500 rule' is a rough conservation guide to the minimum Nₑ needed to avoid inbreeding depression and to keep long-term adaptive potential.",
    "Species–area relationship and extinction: S = c × A raised to the power z (z about 0.15–0.35) predicts species loss as habitat shrinks; with z = 0.25, losing 90% of the area leaves 0.1 raised to the power 0.25 = 56% of the species. Extinction risk is assessed by IUCN categories using population size, rate of decline and range. Edge effects and fragmentation (wildlife corridors help) reduce effective habitat more than the area lost suggests.",
    "Sustainability and resource use: the ecological footprint measures the land and sea area needed to produce what a population consumes and absorb its waste; humans currently use the equivalent of about 1.7 Earths per year. Sustainable development meets present needs without compromising future generations. Practical applications include sustainable forestry (coppicing, selective logging, replanting), integrated pest management (biological control, crop rotation, resistant varieties, minimum pesticides), and ex situ conservation (seed banks such as Svalbard, captive breeding) alongside in situ conservation (reserves).",
    "Biological control and invasive species: introduced predators or pathogens can control pests (myxomatosis in rabbits, ladybirds against aphids) but can also become pests themselves (cane toads in Australia); an effective agent must be host-specific and well tested. Invasive species (Japanese knotweed, grey squirrels, zebra mussels) often lack natural predators and diseases in the new range, and the 'enemy release' hypothesis predicts rapid spread."
   ]},
   {heading:"Worked examples (A* to first-year level)", points:[
    "Worked example: logistic growth. r = 0.50 per year, K = 1000, N = 200 → dN/dt = 0.50 × 200 × (1 − 200 ÷ 1000) = 80 per year. At N = 500 (K/2), dN/dt = 0.50 × 500 × 0.5 = 125 per year = rK/4, the maximum sustainable yield, so the highest harvest that can be taken without the stock shrinking is 125 per year."
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Density-DEPENDENT factors have a bigger effect as population size increases (e.g. disease spreads faster when crowded); density-independent factors affect a population regardless of size",
    "Conservation generally still ALLOWS sustainable human use; preservation aims to prevent human interference entirely — a frequently tested definition pair",
    "Intraspecific competition is usually the main factor limiting a single population's growth near carrying capacity, since same-species individuals need identical resources",
    "Sustainability answers should balance CURRENT needs against FUTURE resource availability — a one-sided answer about current use only isn't complete"
   ]}
  ]},
  {title:"Oxygen Transport, Immunity & Disease", group:"Modules 3 and 4: Exchange and Biodiversity", sections:[
   {heading:"Haemoglobin and transport",points:["Haemoglobin has four polypeptide subunits, each with a haem group containing Fe²⁺ that binds oxygen reversibly. Oxygen loading occurs where oxygen partial pressure is high; unloading occurs where it is lower.","The oxygen dissociation curve is sigmoid because binding of one oxygen molecule increases haemoglobin's affinity for subsequent oxygen molecules (cooperative binding).","A right shift means lower affinity and easier oxygen unloading; increased CO₂, increased temperature and lower pH cause this (Bohr effect), helping active tissues obtain oxygen.","Fetal haemoglobin has a higher oxygen affinity than adult haemoglobin, allowing oxygen transfer from maternal to fetal blood across the placenta.","In mammals, most CO₂ is transported as hydrogencarbonate ions in plasma; CO₂ enters red blood cells, is converted by carbonic anhydrase to carbonic acid, then dissociates."]},
   {heading:"Pathogens and immune responses",points:["Phagocytes engulf pathogens by phagocytosis, digest them in lysosomes and can present antigens. B lymphocytes form plasma cells that secrete specific antibodies and memory cells.","Helper T cells release cytokines that activate B cells and cytotoxic T cells; cytotoxic T cells destroy infected body cells. Memory cells enable a faster, larger secondary response.","Antibodies bind specific antigens, causing agglutination, neutralisation or marking pathogens for destruction. Antigens and antibodies are specific due to complementary shapes.","Vaccination exposes the immune system to a safe form/source of antigen and generates memory cells; herd immunity reduces transmission when enough of a population is immune.","Antibiotics target bacterial structures/processes and do not treat viruses. Overuse selects resistant bacteria; reduce selection pressure through appropriate prescribing, completing prescribed courses and infection control."]}
  ]},
  {title:"Gene Expression, Epigenetics & Evolution", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"From gene to protein",points:["Transcription uses one DNA strand as a template to make complementary mRNA; in eukaryotes it occurs in the nucleus. RNA polymerase joins RNA nucleotides using complementary base pairing (A–U, C–G).","Translation occurs at ribosomes. tRNA anticodons pair with mRNA codons; each tRNA carries a specific amino acid, and peptide bonds join amino acids in the order encoded by the mRNA.","A mutation may be substitution, insertion or deletion. Insertions/deletions can cause a frameshift; consequences range from no change to altered protein structure or function.","Gene expression can be regulated by transcription factors and epigenetic modifications. DNA methylation often reduces transcription; histone modification can alter how accessible DNA is.","Alternative splicing allows different mRNA molecules and proteins to be produced from one primary transcript. Cell differentiation results from different patterns of gene expression, not usually different genomes."]},
   {heading:"Populations and evolution",points:["Allele frequency changes between generations through natural selection, genetic drift, mutation and gene flow. Natural selection acts on phenotypes but changes allele frequencies in populations.","Selection requires heritable variation and differential reproductive success. State the environmental selection pressure, advantageous phenotype, survival/reproduction advantage and inheritance of alleles.","Speciation occurs when populations become reproductively isolated and accumulate genetic differences; isolation may be geographic or reproductive. Do not claim that individuals evolve during their lifetime.","Hardy–Weinberg equilibrium uses p + q = 1 and p² + 2pq + q² = 1 for two alleles; assumptions include a very large population, random mating, no selection, no mutation and no migration.","⭐ Evaluate evidence carefully: correlation does not prove causation, sample size and sampling method affect reliability, and a conclusion should not go beyond the data."]}
  ]},
  {title:"Microscopy, Cell Fractionation & Calculations", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Microscopes and magnification",points:["Magnification = image size ÷ actual size. Rearrange to actual size = image size ÷ magnification. Convert units before calculating: 1 mm = 1000 µm; 1 µm = 1000 nm.","Light microscopes can observe living cells and larger structures but have lower resolution than electron microscopes. TEM gives high-resolution internal detail from thin sections; SEM shows surface detail in 3D-like images. Electron microscopes require a vacuum and dead, prepared specimens.","Resolution is the ability to distinguish two close points as separate. Higher magnification does not automatically mean higher resolution.","Cell fractionation homogenises tissue in a cold, isotonic, buffered solution, then filters and centrifuges it at increasing speeds. Cold slows enzyme activity; isotonic conditions reduce osmotic damage; buffer maintains pH.","Differential centrifugation separates organelles by size and density. Larger/heavier components sediment at lower speeds; smaller components require higher speeds. Identify the pellet and supernatant at each stage."]}
  ]},
  {title:"Membranes, Transport & Water Potential", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Transport mechanisms",points:["The fluid-mosaic membrane contains a phospholipid bilayer with embedded proteins, cholesterol and carbohydrate chains. Hydrophobic fatty-acid tails form a barrier to most polar/charged substances.","Simple diffusion is net movement down a concentration gradient without ATP. Facilitated diffusion uses channel or carrier proteins but still moves down a concentration/electrochemical gradient. Active transport moves substances against a gradient using energy, commonly from ATP.","Osmosis is net movement of water across a partially permeable membrane from higher water potential (less negative) to lower water potential (more negative). Water potential is measured in kPa; pure water at standard atmospheric pressure has Ψ = 0 kPa.","In plants, water entering cells makes them turgid; loss of water causes flaccidity and may cause plasmolysis as the membrane pulls away from the cell wall. Animal cells may swell and lyse or shrink in solutions of different water potential.","Co-transport in the ileum uses sodium gradients established by active transport. Sodium and glucose enter epithelial cells via a co-transporter; glucose then leaves by facilitated diffusion into the blood."]}
  ]},
  {title:"Enzymes, ATP & Metabolic Control", group:"Module 2: Foundations in Biology", sections:[
   {heading:"Enzyme action and factors",points:["Enzymes are biological catalysts, usually globular proteins. The active site has a complementary shape and chemical environment; substrate binding forms an enzyme–substrate complex, lowering activation energy.","The induced-fit model describes the active site changing shape slightly as substrate binds. Enzymes do not change the overall free-energy change or equilibrium position; they speed up attainment of equilibrium.","Increasing substrate concentration raises rate until active sites are saturated. Temperature increases kinetic energy up to an optimum; above it, bonds maintaining tertiary structure are disrupted and the active site changes shape. pH changes ionic interactions and can denature an enzyme at extremes.","Competitive inhibitors bind at the active site and can be overcome by increasing substrate concentration. Non-competitive inhibitors bind elsewhere and alter enzyme function; increasing substrate concentration does not fully overcome their effect.","ATP hydrolysis to ADP + Pi releases usable free energy for cellular processes. ATP is regenerated by phosphorylation of ADP during respiration and photosynthesis; it is an immediate energy-transfer molecule, not a long-term store."]}
  ]},
  {title:"The Heart, Circulation & Oxygen Transport", group:"Module 3: Exchange and Transport", sections:[
   {heading:"Cardiac cycle and vessels",points:["The mammalian heart has two atria and two ventricles. Valves ensure one-way flow: atrioventricular valves prevent backflow into atria; semilunar valves prevent backflow from arteries into ventricles.","During atrial systole, atria contract; during ventricular systole, ventricles contract and pressure closes the AV valves and opens semilunar valves; during diastole, chambers relax and fill. Pressure differences drive flow.","Arteries have thick muscular and elastic walls to withstand high pressure; veins have thinner walls, larger lumens and valves; capillaries have one-cell-thick endothelium for short diffusion distance.","Haemoglobin binds oxygen reversibly. Oxygen dissociation curves are sigmoid due to cooperative binding. A right shift means lower affinity and easier oxygen unloading, caused by higher CO₂, higher temperature or lower pH (Bohr effect).","Tissue fluid forms when hydrostatic pressure forces fluid out of capillaries at the arteriole end. Most returns at the venule end due to lower hydrostatic pressure and water potential effects; excess drains into lymph vessels."]}
  ]},
  {title:"Photosynthesis: Light-dependent & Calvin Cycle", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Mechanisms and limiting factors",points:["Chlorophyll in photosystems absorbs light energy. In non-cyclic photophosphorylation, light excites electrons; photolysis replaces lost electrons and produces protons and oxygen. Electron transport creates a proton gradient that drives ATP synthase; reduced NADP is also produced.","In the Calvin cycle, CO₂ combines with ribulose bisphosphate (RuBP) catalysed by rubisco to form an unstable 6-carbon intermediate that splits into GP. ATP and reduced NADP convert GP to triose phosphate (TP); some TP makes carbohydrates and the rest regenerates RuBP.","The rate may be limited by light intensity, CO₂ concentration or temperature. Increasing one factor only raises rate until another factor becomes limiting. High temperatures can reduce rate as enzymes lose function.","A controlled investigation should vary one factor at a time, measure oxygen production or another suitable proxy, repeat measurements and control temperature, light distance, plant size and CO₂ supply where relevant.","Light intensity from a point source approximately follows an inverse-square relationship with distance, so doubling distance gives about one-quarter the intensity, provided other factors remain constant."]}
  ]},
  {title:"Respiration, ATP Yield & Metabolic Pathways", group:"Module 5: Communication, Homeostasis and Energy", sections:[
   {heading:"Aerobic and anaerobic respiration",points:["Glycolysis occurs in the cytoplasm: glucose is phosphorylated, split into triose phosphate and converted to pyruvate, producing a net gain of 2 ATP and reduced NAD.","With oxygen, pyruvate enters the mitochondrial matrix and is converted to acetyl coenzyme A, releasing CO₂ and reduced NAD. The link reaction produces no ATP directly.","In the Krebs cycle, acetyl groups are oxidised; CO₂, reduced NAD, reduced FAD and a small amount of ATP are produced. Reduced coenzymes donate electrons to the electron transport chain on the inner mitochondrial membrane.","Electron transport releases energy used to pump protons across the inner membrane. Protons flow back through ATP synthase to generate ATP. Oxygen is the final electron acceptor and combines with electrons and protons to form water.","Without oxygen, the electron transport chain stops and oxidative phosphorylation cannot continue. In animals pyruvate is reduced to lactate to regenerate NAD; in yeast/plants ethanol and CO₂ are produced. Anaerobic respiration yields far less ATP per glucose.","Do not state a single universal ATP yield unless the question specifies a convention: shuttle systems and the efficiency assumed can change the textbook total."]}
  ]},
  {title:"Inheritance, Chi-squared & Genetic Diagrams", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Genetic crosses and statistical tests",points:["A gene is a DNA sequence that contributes to a functional product; alleles are alternative forms of a gene. Genotype describes alleles; phenotype is the observable characteristic arising from genotype and environment.","For a monohybrid cross, define allele symbols clearly, write parental genotypes, gametes, offspring genotypes and predicted phenotypes. For codominance or incomplete dominance, state how heterozygotes appear; do not assume complete dominance.","A test cross uses a homozygous recessive individual to determine the genotype of an individual showing a dominant phenotype. A 1:1 offspring ratio is consistent with a heterozygous parent in a simple monohybrid cross.","Chi-squared: χ² = Σ (observed − expected)² ÷ expected. Calculate expected frequencies from the null hypothesis, use degrees of freedom = number of categories − 1 (unless parameters are estimated), then compare with the critical value at the stated significance level.","If calculated χ² exceeds the critical value, reject the null hypothesis: the difference is statistically significant and unlikely to be due to chance alone. If it does not exceed the critical value, there is insufficient evidence to reject the null hypothesis; this does not prove it true.","Meiosis creates variation through crossing over and independent assortment. Random fertilisation adds further variation; mutation introduces new alleles. Natural selection changes allele frequencies over generations when heritable traits affect reproductive success."]}
  ]},
  {title:"Ecology, Sampling & Population Estimates", group:"Module 6: Genetics, Evolution and Ecosystems", sections:[
   {heading:"Fieldwork and calculations",points:["Use random quadrats to estimate abundance or percentage cover in a habitat; use a transect when investigating change along an environmental gradient. Keep quadrat size, sampling method and identification criteria consistent.","Estimated population = (mean number per quadrat) × (total habitat area ÷ quadrat area), when quadrats are representative and organisms are suitably sampled. State assumptions and limitations.","For mark–release–recapture, population estimate N ≈ (number caught first × number caught second) ÷ number of marked individuals recaptured. Assumptions include mixing, no significant births/deaths/immigration/emigration, marks retained and not affecting survival, and equal catchability.","Species richness is the number of species; species evenness describes how evenly individuals are distributed. Simpson's Index of Diversity is often expressed as 1 − Σ(n/N)²; check the exact formula provided by the course/question and use consistent notation.","Energy transfer between trophic levels is inefficient because energy is lost through respiration, heat, movement, excretion and uneaten/undigested material. Biomass pyramids can be more informative than numbers when organisms differ greatly in size.","Biodiversity can be conserved in situ (protecting habitats and ecosystems) or ex situ (such as seed banks and captive breeding). Evaluate ecological, genetic, economic and social consequences rather than listing methods only."]}
  ]},
  {title:"Practical Skills, Statistics & Evaluation", group:"Module 1: Development of Practical Skills", sections:[
   {heading:"Practical endorsement and exam methods",points:["Independent variable: the factor deliberately changed. Dependent variable: the response measured. Control variables are kept constant to make the test fair. State how controls are maintained and how the dependent variable is measured.","Reliability is improved by repeats and calculating a mean after dealing with anomalies; validity depends on whether the method measures what it claims to measure and controls relevant variables; accuracy concerns closeness to the true value.","Use a calibration curve where appropriate, select a suitable range and interval, repeat readings, identify anomalous data with a defensible reason, and present data in a table with headings and units.","For a line graph, plot the independent variable on the x-axis and dependent variable on the y-axis, use sensible scales, include units, and draw a best-fit line/curve rather than joining every point automatically.","Correlation does not prove causation. A statistically significant result indicates evidence against a null hypothesis at the chosen threshold, not proof of a mechanism or a large biological effect.","In an evaluation, link each limitation to its likely effect on results and propose a realistic improvement that addresses that limitation. Avoid vague statements such as ‘use better equipment’ without specifying what and why."]}
  ]},

  {title:"A* Specification Gap-Fill: Practical Biology & Experimental Design", group:"Module 1: Development of practical skills", sections:[
   {heading:"Planning and variables",points:[
    "For an investigation, state a testable hypothesis, identify the independent and dependent variables, and specify control variables with the method used to maintain each. Use a suitable range of independent-variable values and enough intervals to reveal the trend.",
    "Use repeats at each condition, calculate a mean and identify anomalies only when there is a defensible reason. Repeats help assess variation; increasing sample size generally improves the estimate and can increase the power of statistical tests.",
    "Reliability concerns consistency of results; accuracy concerns closeness to the true value; validity concerns whether the method measures the intended effect while controlling confounding variables. Explain which one is improved by each proposed change.",
    "Use appropriate apparatus and resolution, calibrate equipment where needed, keep measurement technique consistent, and record raw values before calculations. State units in table headings and graph axes; use a suitable scale and line/curve of best fit.",
    "Ethics and safety: minimise harm to organisms, use aseptic technique where appropriate, wear suitable PPE, identify biological/chemical hazards, and follow teacher-approved procedures for handling and disposal. Do not culture unknown microorganisms outside approved school procedures."
   ]},
   {heading:"Microscopy and biological calculations",points:[
    "Magnification = image size ÷ actual size. Rearrange to actual size = image size ÷ magnification. Convert units before calculation: 1 mm = 1000 μm; 1 μm = 1000 nm. Use the same units in numerator and denominator.",
    "Resolution is the ability to distinguish two close points as separate; magnification enlarges an image. Increasing magnification without improving resolution does not reveal additional detail.",
    "For a scale bar, measure the bar on the image and use its stated actual length to establish a conversion factor. State units and give an answer to sensible significant figures.",
    "Percentage change = (final − initial) ÷ initial × 100. For water potential/osmosis practicals, use consistent tissue dimensions, blot samples in the same way, measure mass accurately, repeat across a range of solution concentrations and estimate the isotonic point from a graph where percentage mass change is zero.",
    "For rates, rate = change in measured quantity ÷ time. Use a tangent to a curve for instantaneous rate and the change between two points for average rate. Check whether a steeper gradient represents an increase or decrease in the measured quantity."
   ]},
   {heading:"Statistics and evidence",points:[
    "Null hypothesis: there is no significant difference/association and observed variation is due to chance. State the null hypothesis in context rather than writing only ‘there is no difference’.",
    "Chi-squared: χ² = Σ (observed − expected)² ÷ expected. Degrees of freedom are usually number of categories − 1. Compare the calculated value with the critical value at the stated probability level: if calculated χ² is greater, reject the null hypothesis; otherwise there is insufficient evidence to reject it.",
    "Spearman's rank tests for correlation between two ranked variables. Calculate rank differences d, then use the specified formula or table. Compare with the critical value for the sample size and significance level; distinguish correlation from causation.",
    "Standard deviation describes spread around a mean; standard error describes uncertainty in the estimated mean and is commonly SD ÷ √n. Use the statistic requested by the question, and do not claim significance from overlapping/non-overlapping error bars unless the question's method supports that inference.",
    "When interpreting data, quote values and units, identify the trend and any anomalies, explain biological significance separately from statistical significance, and avoid conclusions that exceed the sample or method."
   ]}
  ]},
  {title:"A* Specification Gap-Fill: Required Practical Methods & Evaluation", group:"Module 1: Practical endorsement and written practical skills", sections:[
   {heading:"Core practical method patterns",points:[
    "Biochemical tests: Benedict's test for reducing sugars requires heating the sample with Benedict's reagent; a positive result changes from blue through green/yellow/orange to brick-red precipitate depending on concentration. For non-reducing sugars, first hydrolyse with dilute acid, cool and neutralise, then repeat Benedict's test. Iodine solution changes from orange-brown to blue-black with starch. The emulsion test uses ethanol followed by water; a cloudy white emulsion indicates lipid.",
    "Enzyme investigations: choose a measurable dependent variable (e.g. product formed per time or time to a fixed endpoint), control temperature and pH, vary substrate or enzyme concentration systematically, repeat readings and use initial rates when comparing enzyme activity. Explain why a colour endpoint may be subjective and how a colorimeter can improve objectivity where appropriate.",
    "Membrane permeability investigations: use equal-sized beetroot cylinders, rinse away pigment released by cutting, expose samples to controlled temperatures or solvents for equal times, then measure pigment leakage consistently (for example with a colorimeter). Keep tissue dimensions, solution volume and exposure time controlled.",
    "Photosynthesis investigations: measure oxygen output or another suitable proxy while varying light intensity, carbon dioxide availability or temperature. Control other limiting factors, repeat readings and explain that lamp distance is only a proxy for intensity; for a point source, intensity approximately follows an inverse-square relationship with distance.",
    "Respiration investigations: use a suitable organism/system and measure oxygen uptake or carbon dioxide production with controls for temperature, organism mass/number and time. If using a respirometer, account for pressure/temperature changes and use a control where appropriate.",
    "Field sampling: random quadrats estimate abundance or percentage cover; systematic transects investigate changes along a gradient. Record sample area and number of samples, use consistent identification criteria and discuss representativeness and sampling bias.",
    "Mark–release–recapture estimate: N ≈ (number marked in first sample × total caught in second sample) ÷ marked individuals recaptured in second sample. Assumptions: marks remain visible and do not affect survival, marked individuals mix fully, population is closed during sampling and individuals have equal catchability. Discuss which assumption may fail."
   ]},
   {heading:"Practical write-up and evaluation",points:[
    "For each practical, learn the aim, independent/dependent/control variables, apparatus, method sequence, safety, raw data, calculation/graph, conclusion and limitations. This is a revision framework; verify the exact set of OCR PAG activities and teacher's practical instructions before marking an individual activity complete.",
    "When suggesting an improvement, pair a specific limitation with a specific change: e.g. ‘colour endpoint is subjective’ → use a colorimeter and fixed wavelength; ‘temperature varied’ → use a thermostatically controlled water bath; ‘small sample size’ → increase independent replicates and sample randomly.",
    "Distinguish biological repeats (independent samples/organisms) from repeated readings of the same sample. Repeated readings can reduce measurement noise but do not replace independent biological replication.",
    "A graph should have a descriptive title when useful, independent variable on x-axis, dependent variable on y-axis, units in axis labels, a sensible scale and a suitable best-fit line/curve. Do not join points dot-to-dot unless the data represent discrete categories or the method requires it."
   ]}
  ]},
  {title:"A* Specification Gap-Fill: Synoptic Biology & High-Precision Explanations", group:"Modules 2–6: Synoptic links", sections:[
   {heading:"Mechanisms that need full causal chains",points:[
    "Diffusion: net movement down a concentration gradient due to random particle movement. Rate increases with larger surface area, steeper concentration gradient and shorter diffusion distance; for gases, explain how ventilation and blood flow maintain gradients where relevant.",
    "Osmosis: net movement of water across a partially permeable membrane from higher water potential (less negative) to lower water potential (more negative). State the membrane and direction of water movement; do not describe osmosis as movement of solute.",
    "Active transport: movement against an electrochemical/concentration gradient using energy from ATP and membrane transport proteins. Co-transport uses an ion gradient established by active transport to drive another substance's movement.",
    "Negative feedback: a change away from a set point is detected by receptors; a coordination centre processes information; effectors produce a response that reverses the initial change. Positive feedback amplifies a change and is not the normal mechanism for maintaining homeostasis.",
    "Natural selection: mutation creates genetic variation; selection pressure means individuals with advantageous heritable alleles have greater reproductive success; alleles are passed to offspring and their frequency changes over generations. Avoid saying individuals evolve because they ‘need’ to.",
    "Gene expression: transcription makes RNA from a DNA template; translation uses codons on mRNA and tRNA anticodons to assemble amino acids into a polypeptide. A mutation may be silent, missense or nonsense; phenotype depends on the effect on protein function and environmental influences.",
    "Respiration and photosynthesis are linked by carbon and energy flow, but neither is simply the reverse of the other in terms of pathways. Explain the named stages, location, substrates/products and role of ATP/reduced coenzymes when asked.",
    "For synoptic answers, explicitly connect scales: molecular structure → cell process → tissue/organ function → whole-organism or ecosystem consequence. Each link must be explained, not merely listed."
   ]},
   {heading:"High-mark response structure",points:[
    "For ‘describe’, give the relevant features or sequence accurately. For ‘explain’, connect cause to mechanism to outcome. For ‘compare’, make paired points about both items. For ‘evaluate’, balance strengths and limitations and reach a conclusion supported by evidence.",
    "Use precise terminology: antigen vs antibody; gene vs allele; genotype vs phenotype; magnification vs resolution; reliability vs validity; correlation vs causation; population vs community; productivity vs biomass.",
    "In data questions, quote numerical evidence, calculate where requested, state the biological interpretation and address uncertainty or limitations. Do not claim a trend is significant without the appropriate statistical evidence.",
    "Learn definitions closely, but practise applying them to unfamiliar contexts. A* responses typically connect the named process to the supplied data rather than reciting an unrelated memorised paragraph."
   ]}
  ]},

  {title:"A* Specification Gap-Fill: Frequently Missed Biology Detail", group:"Modules 2–6: Targeted specification points", sections:[
   {heading:"Protein structure, blood and immunity",points:[
    "Fibrous proteins have long, often parallel polypeptide chains with repetitive sequences and extensive cross-linking, making them strong and insoluble. Collagen provides tensile strength in connective tissues; α-keratin provides strength/protection in hair, nails and skin. Relate structure to the specific mechanical role rather than calling all proteins globular.",
    "Erythrocytes and neutrophils arise from haematopoietic stem cells in bone marrow. Erythrocytes specialise in oxygen transport: they lose the nucleus in mammals, have a biconcave shape and contain haemoglobin. Neutrophils are phagocytes with a lobed nucleus and granules/lysosomes containing enzymes; they engulf pathogens by phagocytosis.",
    "Opsonins bind to pathogen surfaces and make them easier for phagocytes to recognise and engulf. Agglutinins cause pathogens/cells carrying the relevant antigen to clump together, aiding removal. Antitoxins are antibodies that bind to and neutralise toxins; they do not necessarily destroy the pathogen itself.",
    "Vaccination exposes the immune system to a harmless form or component of an antigen, stimulating clonal selection and formation of memory cells without causing the full disease. On later exposure, memory cells produce a faster, larger secondary response. Population vaccination can reduce transmission and protect susceptible individuals through herd immunity, but protection depends on coverage, vaccine effectiveness and pathogen characteristics."
   ]},
   {heading:"Heart, plant responses and energy",points:[
    "An ECG records electrical activity associated with the cardiac cycle, not the mechanical contraction itself. The P wave represents atrial depolarisation; the QRS complex represents ventricular depolarisation (atrial repolarisation is masked); the T wave represents ventricular repolarisation. Interpret intervals and heart rate from the trace and use the scale given.",
    "Commercial uses of plant hormones include auxins in selective weedkillers and rooting powders, gibberellins to break seed dormancy/promote germination and fruit growth, and ethene to coordinate fruit ripening. Use the specific hormone–effect relationship requested and consider crop management or economic implications when evaluating.",
    "Chemiosmosis in mitochondria: electrons pass along the electron transport chain in the inner mitochondrial membrane; released energy pumps H⁺ from the matrix into the intermembrane space. H⁺ returns through ATP synthase down its electrochemical gradient, driving phosphorylation of ADP. Oxygen is the terminal electron acceptor and combines with electrons and H⁺ to form water.",
    "Chemiosmosis in chloroplasts: light-driven electron transfer and photolysis contribute to a proton gradient across the thylakoid membrane; H⁺ flows from the thylakoid lumen through ATP synthase into the stroma, producing ATP. Reduced NADP is formed and used in the Calvin cycle. Keep the membrane orientation and direction of proton flow clear.",
    "Microorganisms are used in biotechnology to produce useful products such as enzymes, antibiotics, foods, and recombinant proteins. Industrial fermentation requires suitable nutrient supply, temperature, pH, oxygen conditions (aerobic or anaerobic as needed), agitation and aseptic technique; batch and continuous culture have different control and harvesting considerations."
   ]},
   {heading:"A* explanation checkpoints",points:[
    "For an immune response, distinguish antigen recognition, clonal expansion, plasma-cell antibody secretion, memory-cell formation and the role of phagocytes. Do not describe antibodies as directly ‘eating’ pathogens.",
    "For ATP production, distinguish substrate-level phosphorylation from oxidative phosphorylation/photophosphorylation, identify the membrane and proton-gradient direction, and explain the role of ATP synthase.",
    "For a practical or data response, state what was measured, how it was measured, the trend supported by the data and at least one limitation. Avoid claims that go beyond the evidence."
   ]}
  ]},
 ,
 {"title":"Save My Exams Supplement — Practical Skills & Data Analysis","group":"OCR A H420 · Supplementary revision notes","sections":[{"heading":"Planning and evaluating investigations","points":["Before writing a method, state the independent variable, dependent variable and the key control variables. Explain how each control is kept constant; ‘keep conditions the same’ is not sufficiently precise.","Use a suitable range of independent-variable values and enough intervals to reveal a trend. Repeat measurements, identify anomalous results using a stated rule, and calculate a mean from appropriate repeats.","For a fair comparison, use the same organism/material, apparatus, measurement interval and environmental conditions where relevant. Explain how the design reduces confounding variables.","Evaluate a method by identifying a specific limitation, explaining its effect on reliability/validity, and proposing a practical improvement. More repeats improve reliability; they do not automatically remove systematic error.","For graphs, choose an appropriate scale, label axes with quantity and unit, plot accurately and draw a suitable line/curve of best fit. Use the graph to support a conclusion and quote data when comparing groups.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/biology/ocr/17/revision-notes/ (Development of Practical Skills in Biology)."]},{"heading":"Biological calculations and evidence","points":["Percentage change = (change ÷ original value) × 100. State whether the result is a percentage increase or decrease; use the starting value as the denominator.","Magnification = image size ÷ actual size. Rearrange before substituting and convert units first: 1 mm = 1000 μm; 1 μm = 1000 nm.","For sampling, describe the sampling strategy and why it reduces bias. Random sampling supports an unbiased estimate; systematic sampling can reveal changes along an environmental gradient.","When interpreting biological data, distinguish correlation from causation, describe the pattern before explaining it, and avoid claiming a difference is significant unless an appropriate statistical test supports that conclusion.","For a biological drawing, use clear single lines, no shading, accurate proportions and straight ruled label lines. Include a title and magnification/scale information when requested."]}]},
 {"title":"Save My Exams Supplement — Foundations & Core Biology","group":"OCR A H420 · Supplementary revision notes","sections":[{"heading":"Cells, membranes and biological molecules","points":["Eukaryotic cells contain membrane-bound organelles; prokaryotic cells lack a nucleus and membrane-bound organelles, and their DNA is typically circular and free in the cytoplasm. Avoid describing prokaryotes as having no DNA or ribosomes.","The fluid-mosaic model describes a phospholipid bilayer with proteins embedded in or associated with it. Hydrophobic fatty-acid tails face inward; hydrophilic phosphate heads face the aqueous environments.","Simple diffusion is net movement down a concentration gradient. Facilitated diffusion uses channel/carrier proteins but no ATP directly; active transport moves substances against a concentration gradient using energy and membrane proteins.","Condensation joins monomers and releases water; hydrolysis breaks bonds using water. Glycosidic bonds join monosaccharides, peptide bonds join amino acids, and ester bonds join glycerol to fatty acids.","Enzyme activity depends on substrate concentration, enzyme concentration, temperature and pH. Above the optimum temperature, changes to the active site reduce successful enzyme–substrate complex formation.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/biology/ocr/17/revision-notes/ (Foundations in Biology; Biological Molecules; Biological Membranes)."]},{"heading":"Exchange, transport and immunity — answer structure","points":["Efficient exchange surfaces have a large surface area, short diffusion distance and a mechanism to maintain a steep concentration gradient. Link each adaptation to its effect on rate of exchange.","In mammals, ventilation and blood flow help maintain concentration gradients at gas-exchange surfaces. Explain diffusion down partial-pressure/concentration gradients rather than saying gases are ‘pulled’ across membranes.","In plants, transpiration is evaporation from mesophyll cell walls followed by diffusion of water vapour out through stomata. Cohesion between water molecules helps maintain a continuous column in xylem.","Phagocytes engulf pathogens by phagocytosis; lymphocytes contribute to specific immune responses. Antibodies bind complementary antigens and can promote agglutination or mark pathogens for destruction.","Save My Exams topic map for OCR Biology includes exchange and transport, communicable disease, biodiversity and classification: https://www.savemyexams.com/a-level/biology/ocr/17/revision-notes/. Check each point against the current H420 specification."]}]}],
 Maths: [
  {title:"Exam Technique — Method Marks & Multi-step Problems", group:"Edexcel 9MA0 · PMT question/mark-scheme patterns", sections:[
   {heading:"Algebra and proof", points:[
    "For the factor theorem, if (x − a) is a factor of f(x), show f(a) = 0 by substitution. To find an unknown coefficient, substitute the root into the polynomial and solve the resulting equation, showing the algebra.",
    "When factorising a cubic, use a known factor to divide the polynomial, factorise the remaining quadratic and state the complete factorisation. Check by expanding if needed.",
    "For 'show that' questions, write enough intermediate steps for the result to follow logically. A correct final answer without supporting method may lose method marks.",
    "For composite functions, calculate the inner function first: fg(x) means f(g(x)). For inverse functions, write y = f(x), rearrange to make x the subject, then swap x and y; state domain restrictions where needed."
   ]},
   {heading:"Calculus and modelling", points:[
    "For a tangent/normal question, differentiate to find dy/dx, substitute the point's x-coordinate to get the gradient, then use y − y₁ = m(x − x₁). The normal gradient is the negative reciprocal of the tangent gradient.",
    "For a definite integral representing area, evaluate the antiderivative at the upper and lower limits and subtract. If the curve crosses the x-axis, split the integral so geometric areas are treated as positive where required.",
    "In mechanics, define the positive direction, convert units consistently, select the appropriate constant-acceleration equation and check the sign of the answer against the chosen direction.",
    "For binomial expansion, use the correct power and coefficient, simplify each term carefully, and check whether the question requests a specific power of x or a stated number of terms."
   ]},
   {heading:"Statistics and interpretation", points:[
    "For a hypothesis test, state H₀ and H₁ in the context of the parameter, identify the distribution/model and significance level, compare the test statistic with the critical region or use the p-value, then state a contextual conclusion.",
    "Do not write 'accept H₀' as an absolute proof. Use the specification-appropriate wording: there is/is not sufficient evidence at the stated significance level to support H₁.",
    "For a normal distribution, standardise with z = (x − μ)/σ, identify the required tail or interval, and use complements carefully. A sketch can help avoid selecting the wrong probability region.",
    "For inverse normal questions, convert the stated tail probability to its z-value (including a negative z for a lower-tail probability below 0.5), then rearrange x = μ + zσ. Keep enough precision until the final answer.",
    "For a binomial-to-normal approximation, use μ = np and σ² = np(1 − p), check that the approximation is suitable, and apply the continuity correction in the direction required by the inequality (e.g. P(X > 110) becomes approximately P(Y > 110.5)).",
    "For conditional normal probabilities, divide the probability of the intersection by the probability of the condition: P(A | B) = P(A ∩ B)/P(B). Do not report only the numerator."
   ]},
   {heading:"Question patterns reviewed", points:[
    "PMT Edexcel topic sets include linked multi-part algebra questions where an early result is used in later parts, and they expect clear working for factor theorem, constants, factorisation and root transformations.",
    "The practice questions in Bridge Protocol are original questions modelled on these patterns; they are not copied PMT questions."
   ]}
  ]},

  {title:"Algebra & Functions", group:"Pure Mathematics", sections:[
   {heading:"Core definitions & key equations", points:[
    "Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ; a^(1/n) = ⁿ√a",
    "Surds: √a × √b = √(ab); √a ÷ √b = √(a/b); rationalising a denominator means multiplying top and bottom by a suitable expression (often the conjugate) to remove the surd from the denominator",
    "Completing the square: x² + bx + c = (x + b/2)² − (b/2)² + c — used to find turning points and to solve equations without factorising",
    "Quadratic formula: x = [−b ± √(b² − 4ac)] ÷ 2a; the discriminant b² − 4ac determines the number of real roots: >0 two roots, =0 one repeated root, <0 no real roots"
   ]},
   {heading:"Method — functions & graph transformations", points:[
    "Function notation: f(x) describes an input-output rule; domain = valid inputs, range = possible outputs",
    "Composite functions: fg(x) means do g first, then f — i.e. f(g(x))",
    "Inverse functions f⁻¹(x): reflect the graph of f(x) in the line y = x; find algebraically by swapping x and y in y = f(x) and rearranging to make y the subject again; the domain of f⁻¹ is the range of f",
    "Graph transformations: f(x) + a shifts up by a; f(x + a) shifts left by a; af(x) stretches vertically by factor a; f(ax) stretches horizontally by factor 1/a; −f(x) reflects in the x-axis; f(−x) reflects in the y-axis",
    "Simultaneous equations (one linear, one quadratic): substitute the linear equation into the quadratic and solve the resulting quadratic"
   ]},
   {heading:"Common exam question types", points:[
    "Solving quadratic/simultaneous equations, often requiring completing the square or the formula",
    "Sketching a transformed graph from a given original graph and a stated transformation",
    "Finding a composite or inverse function algebraically, including stating domain restrictions",
    "Simplifying surd or index expressions, including rationalising denominators"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always state domain restrictions explicitly when finding an inverse function, or when a function involves a square root or logarithm — a commonly dropped mark",
    "When completing the square with a leading coefficient that isn't 1, factor it out of the x² and x terms first before completing the square inside the brackets",
    "For graph transformations, remember horizontal transformations (inside the bracket) behave backwards compared to what you might intuitively expect",
    "Rationalising a denominator with a two-term surd expression requires multiplying by the conjugate, not just the surd itself"
   ]}
  ]},
  {title:"Coordinate Geometry", group:"Pure Mathematics", sections:[
   {heading:"Core definitions & key equations", points:[
    "Gradient between two points: m = (y₂ − y₁) ÷ (x₂ − x₁)",
    "Equation of a straight line: y − y₁ = m(x − x₁), or y = mx + c",
    "Parallel lines have equal gradients; perpendicular lines have gradients that multiply to give −1",
    "Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2); distance between two points: √[(x₂−x₁)² + (y₂−y₁)²]"
   ]},
   {heading:"Method — circles", points:[
    "Equation of a circle: (x − a)² + (y − b)² = r², centre (a, b), radius r",
    "Given the expanded form x² + y² + 2gx + 2fy + c = 0, complete the square on the x-terms and y-terms separately to find the centre (−g, −f) and radius √(g² + f² − c)",
    "A tangent to a circle touches it at exactly one point and is always perpendicular to the radius at that point",
    "To find where a line meets a circle, substitute the line into the circle's equation — the discriminant of the resulting quadratic shows 2 intersection points, 1 (tangent), or none"
   ]},
   {heading:"Common exam question types", points:[
    "Finding the equation of a line given a point and gradient, or two points",
    "Finding the centre and radius of a circle from an equation in expanded form",
    "Finding the equation of a tangent to a circle at a given point, or proving a line is a tangent",
    "Using circle theorems (angle in a semicircle is 90°, perpendicular from centre bisects a chord) alongside coordinate geometry"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "When completing the square for a circle's centre/radius, remember the radius is √(g² + f² − c), not just √c — a very common error",
    "To prove a line is a tangent, show that substituting it into the circle's equation gives a discriminant of exactly zero",
    "Remember perpendicular-from-centre-bisects-chord and angle-in-a-semicircle-is-90° — these circle theorems combine frequently with coordinate geometry",
    "Always check whether a question wants the line in the form y = mx + c or ax + by + c = 0"
   ]}
  ]},
  {title:"Trigonometric Identities & Equations", group:"Pure Mathematics", sections:[
   {heading:"Core definitions & key equations", points:[
    "sin²θ + cos²θ = 1 (rearranges to sin²θ = 1 − cos²θ, etc.); tanθ = sinθ ÷ cosθ",
    "Exact values to memorise: sin/cos/tan of 0°, 30°, 45°, 60°, 90° (and their radian equivalents)",
    "Graphs of sinθ, cosθ, tanθ: know their shape, period (360°/2π for sin and cos, 180°/π for tan), amplitude and symmetry",
    "Double angle formulae (A2): sin 2θ = 2sinθcosθ; cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ"
   ]},
   {heading:"Method — solving trig equations", points:[
    "Use inverse trig functions to find one solution, then use a CAST diagram or the graph's symmetry to find every other solution within the given range",
    "For sin(x) = k, solutions repeat every 360°; for tan(x) = k, solutions repeat every 180°",
    "For multiple-angle equations (e.g. sin(2x) = k), solve for 2x first over the extended range, THEN divide by 2 — this extended range often gives more solutions for x than solving directly",
    "Identities simplify or solve mixed equations — e.g. converting everything to sin and cos, or using sin²+cos²=1 to turn a mixed equation into a quadratic in one function"
   ]},
   {heading:"Common exam question types", points:[
    "Solving trig equations over a given range, including equations needing identities first",
    "Proving trig identities using sin²+cos²=1 or the double angle formulae",
    "Sketching transformed trig graphs",
    "Forming and solving a quadratic in sinθ or cosθ"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "After solving, always double-check you've found every solution in the stated interval — stopping after the first calculator answer is one of the most common lost marks in trig",
    "For multiple-angle equations, extend the solving range accordingly BEFORE dividing back down — forgetting this loses valid solutions",
    "When squaring both sides of a trig equation, check for and discard any extra solutions introduced that don't satisfy the original equation",
    "Learn the exact trig values (0°, 30°, 45°, 60°, 90°) fully — many non-calculator questions rely on knowing these instantly"
   ]}
  ]},
  {title:"Sequences, Series & Binomial Expansion", group:"Pure Mathematics", sections:[
   {heading:"Core definitions & key equations", points:[
    "Arithmetic: constant common difference d; uₙ = a + (n−1)d; Sₙ = n/2 [2a + (n−1)d] = n/2 (first term + last term)",
    "Geometric: constant common ratio r; uₙ = arⁿ⁻¹; Sₙ = a(1 − rⁿ) ÷ (1 − r); sum to infinity S∞ = a ÷ (1 − r), only valid when |r| < 1",
    "Binomial expansion, positive integer n: (1+x)ⁿ = 1 + nx + [n(n−1)/2!]x² + ... + xⁿ, using binomial coefficients from Pascal's triangle or nCr",
    "Binomial expansion, non-integer or negative n: (1+x)ⁿ = 1 + nx + [n(n−1)/2!]x² + ... continues infinitely, valid only for |x| < 1"
   ]},
   {heading:"Method — working with series & expansions", points:[
    "For (a + bx)ⁿ, factor out aⁿ first: (a+bx)ⁿ = aⁿ(1 + (b/a)x)ⁿ, then expand the bracket using the standard series, with validity becoming |bx/a| < 1",
    "Recognise arithmetic vs geometric sequences from context (constant difference vs constant ratio) before choosing a formula",
    "Sigma notation (Σ) represents a sum of a sequence of terms",
    "Use given terms of a sequence to set up simultaneous equations and find a and d (or a and r)"
   ]},
   {heading:"Common exam question types", points:[
    "Finding a specific term or sum of an arithmetic/geometric series given initial information",
    "Finding the sum to infinity of a geometric series and checking the convergence condition",
    "Expanding (1+x)ⁿ or (a+bx)ⁿ up to a given term, stating the range of validity",
    "Using a partial binomial expansion to approximate a value"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "For (a+bx)ⁿ, forgetting to factor out aⁿ before expanding is one of the most common errors — it changes every term in the expansion",
    "Always state the validity condition (|x| < 1, or the adjusted version after factoring) when asked — often a separate mark",
    "Don't confuse the Sₙ formulas between arithmetic and geometric sequences — check which type first",
    "Sum to infinity ONLY exists if |r| < 1 — always check/state this condition rather than blindly applying the formula"
   ]}
  ]},
  {title:"Differentiation", group:"Pure Mathematics", sections:[
   {heading:"Core definitions & key equations", points:[
    "From first principles: dy/dx = lim(h→0) [f(x+h) − f(x)] ÷ h — the gradient of a chord becoming the gradient of the tangent as h shrinks to zero",
    "Standard derivatives: d/dx(xⁿ) = nxⁿ⁻¹; d/dx(sinx) = cosx; d/dx(cosx) = −sinx; d/dx(eˣ) = eˣ; d/dx(lnx) = 1/x",
    "Chain rule: for y = f(g(x)), dy/dx = f'(g(x)) × g'(x)",
    "Product rule: for y = uv, dy/dx = u(dv/dx) + v(du/dx); quotient rule: for y = u/v, dy/dx = [v(du/dx) − u(dv/dx)] ÷ v²"
   ]},
   {heading:"Method — applying differentiation", points:[
    "Stationary points occur where dy/dx = 0; classify using the second derivative: d²y/dx² > 0 = local minimum, < 0 = local maximum, = 0 is inconclusive (check the gradient either side, or use a higher derivative)",
    "Tangent gradient at a point = dy/dx evaluated there; normal gradient = −1 ÷ tangent gradient (perpendicular)",
    "Rates of change problems use the chain rule to connect related rates (e.g. dV/dt = dV/dr × dr/dt)",
    "A function is increasing where dy/dx > 0 and decreasing where dy/dx < 0 over an interval"
   ]},
   {heading:"Common exam question types", points:[
    "Finding and classifying stationary points of a given function",
    "Finding the equation of a tangent or normal to a curve at a given point",
    "Using the chain, product or quotient rule on combined functions",
    "Connected rates of change problems, often involving geometry"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always justify max/min/inflection classification explicitly using the second derivative or a sign-change table — stating the type without justification loses marks",
    "For the chain rule, double check you've correctly identified the inner and outer functions before differentiating each part",
    "Don't mix up the product/quotient rule order — especially the minus sign in the quotient rule",
    "For a normal to a curve, remember its gradient is the negative reciprocal of the tangent's gradient at that exact point"
   ]}
  ]},
  {title:"Integration", group:"Pure Mathematics", sections:[
   {heading:"Core definitions & key equations", points:[
    "Integration reverses differentiation: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1); always include +C for an indefinite integral",
    "Standard integrals: ∫cosx dx = sinx + C; ∫sinx dx = −cosx + C; ∫eˣ dx = eˣ + C; ∫(1/x) dx = ln|x| + C",
    "A definite integral ∫ f(x) dx (from x = a to x = b) gives the signed area between the curve and the x-axis from a to b, evaluated as F(b) − F(a)",
    "Area between two curves = ∫[top curve − bottom curve] dx over the relevant interval"
   ]},
   {heading:"Method — techniques (A2)", points:[
    "Integration by substitution: choose u = (some function of x) to simplify the integral, convert dx into terms of du, integrate with respect to u, then substitute back (or change the limits)",
    "Integration by parts: ∫u (dv/dx) dx = uv − ∫v (du/dx) dx — choose u as the part that gets simpler when differentiated",
    "Finding the equation of a curve from dy/dx: integrate to get y in terms of x plus a constant C, then use a given point to find C"
   ]},
   {heading:"Common exam question types", points:[
    "Evaluating definite integrals to find area under a curve, or between two curves",
    "Using substitution or integration by parts on a given integral",
    "Finding the equation of a curve given its gradient function and a point it passes through",
    "Checking whether a curve crosses the x-axis within given limits, adjusting an area calculation accordingly"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always check whether the curve crosses the x-axis within your limits before calculating an area — if it does, integrate each region separately and take the modulus, or regions will wrongly cancel",
    "When using substitution on a definite integral, either convert limits into terms of u or substitute back to x before evaluating — don't mix the two",
    "For integration by parts, if your choice of u and dv makes the resulting integral more complicated, try swapping the choice",
    "Don't forget +C on indefinite integrals — often a specifically awarded mark"
   ]}
  ]},
  {title:"Kinematics (SUVAT)", group:"Mechanics", sections:[
   {heading:"Core definitions & key equations", points:[
    "The five SUVAT variables: s (displacement), u (initial velocity), v (final velocity), a (acceleration), t (time)",
    "The four SUVAT equations: v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t — pick the one containing the three quantities you know and the one you want",
    "These equations only apply when acceleration is CONSTANT — for variable acceleration, use calculus instead"
   ]},
   {heading:"Method — applying kinematics", points:[
    "Displacement-time graphs: gradient = velocity; velocity-time graphs: gradient = acceleration, area under the graph = displacement",
    "For vertical motion under gravity, use a = g ≈ 9.8 m/s² (check your chosen sign convention)",
    "Multi-stage motion problems must be split into separate stages, applying SUVAT (or calculus) to each stage with its own values",
    "Variable acceleration: given s(t), differentiate once for v(t) = ds/dt, again for a(t) = dv/dt; given a(t), integrate once for v(t) (plus a constant from initial conditions), again for s(t)"
   ]},
   {heading:"Common exam question types", points:[
    "Solving for an unknown SUVAT variable given the other three",
    "Sketching or interpreting displacement-time and velocity-time graphs",
    "Multi-stage motion problems",
    "Variable acceleration problems requiring differentiation/integration rather than SUVAT"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Define your positive direction clearly at the start and stay completely consistent with signs — sign errors are the single biggest cause of lost marks in mechanics",
    "Check whether acceleration is constant (SUVAT) or clearly variable, e.g. given as a function of time (use calculus) — using SUVAT when acceleration isn't constant is a fundamental error",
    "Remember constants of integration when going from a(t) to v(t) to s(t) — use given initial conditions to find each one",
    "Area below the time-axis on a velocity-time graph represents negative (backwards) displacement, not simply added as positive area"
   ]}
  ]},
  {title:"Forces & Newton's Laws", group:"Mechanics", sections:[
   {heading:"Core definitions & key equations", points:[
    "Newton's first law: an object stays at rest or moving at constant velocity unless acted on by a resultant force",
    "Newton's second law: F = ma (resultant force, mass, acceleration, all in consistent SI units)",
    "Newton's third law: for every force one object exerts on a second object, the second exerts an equal and opposite force back — these act on DIFFERENT objects",
    "Weight = mg; normal reaction acts perpendicular to a surface; friction opposes relative motion; tension acts along a string, pulling inward"
   ]},
   {heading:"Method — resolving forces & connected particles", points:[
    "Resolving at an angle: split a force into perpendicular components using sinθ and cosθ — sketch the triangle to check which component uses sin and which uses cos",
    "For an object on an inclined plane, it's usually easiest to resolve forces parallel and perpendicular to the slope itself",
    "Connected particles (e.g. masses joined by a string over a pulley): draw a separate force diagram for EACH object; an inextensible string gives equal acceleration magnitude for both, and a smooth/light pulley gives equal tension throughout — set up F=ma for each object and solve simultaneously",
    "Equilibrium: an object in equilibrium has zero resultant force — resolve in two perpendicular directions and set each resultant to zero"
   ]},
   {heading:"Common exam question types", points:[
    "Resolving forces on a slope or at an angle, finding a resultant force or acceleration",
    "Connected particle problems (pulleys, trains of masses) requiring simultaneous F=ma equations",
    "Equilibrium problems, finding an unknown force or angle",
    "Combining Newton's laws with SUVAT"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always draw a clear, fully-labelled force diagram before writing any equations — most lost marks in mechanics trace back to a missing or unclear diagram",
    "For connected particles, treat each object separately with its own F=ma equation before combining — treating the whole system as one object too early is a common source of errors",
    "Double check whether an angle is measured from the horizontal, vertical, or slope before deciding whether to use sinθ or cosθ",
    "Newton's third law pairs act on two DIFFERENT objects — pairing an object's weight with the normal reaction on the SAME object is a common misconception, not a valid third law pair"
   ]}
  ]},
  {title:"Vectors", group:"Mechanics", sections:[
   {heading:"Core definitions & key equations", points:[
    "A vector has both magnitude and direction; written in component form (xi + yj, or as a column vector), or as a magnitude and direction",
    "Magnitude of vector (x, y): |v| = √(x² + y²); unit vector in the same direction = v ÷ |v|",
    "Position vector describes a point's location relative to a fixed origin; displacement from A to B = position vector of B − position vector of A"
   ]},
   {heading:"Method — using vectors in mechanics & geometry", points:[
    "Add/subtract vectors by combining corresponding components separately",
    "Resolve a force or velocity given as magnitude and direction into i, j components using magnitude×cos(angle) and magnitude×sin(angle), depending on how the angle is defined",
    "In mechanics, keep motion/forces/momentum in component (i, j) form throughout a calculation, only converting to magnitude and direction at the very end",
    "Vector geometry: prove points are collinear by showing one vector is a scalar multiple of another; find intersections by setting two vector equations equal and solving for the unknown parameters"
   ]},
   {heading:"Common exam question types", points:[
    "Finding the magnitude and direction of a given vector, or resolving into components",
    "Vector mechanics problems (resultant velocity, time for two moving objects to meet, using position vectors as functions of time)",
    "Vector geometry proofs (collinearity, ratio in which a point divides a line)",
    "Combining vectors with calculus (differentiating a position vector to get velocity, and vice versa)"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "In mechanics vector problems, keep everything in i/j component form throughout the ENTIRE calculation rather than converting early — early conversion is a major source of compounding rounding errors",
    "For collinearity proofs, show explicitly that one vector is a scalar multiple of the other — simply saying they look like they're on the same line scores no marks",
    "Sketch a vector first to check which component needs sin and which needs cos, rather than applying the same pattern automatically every time",
    "Position vectors and displacement vectors are different — displacement is the DIFFERENCE between two position vectors, not a position vector itself"
   ]}
  ]},
  {title:"Statistical Sampling", group:"Statistics", sections:[
   {heading:"Core definitions & key equations", points:[
    "A population is the entire group being studied; a sample is a smaller subset selected from it, used to make inferences about the whole population",
    "A census surveys the entire population (accurate but often impractical); a sample survey is quicker/cheaper but introduces sampling error — a natural difference between a sample's result and the true population value, purely due to chance",
    "Simple random sampling: every member has an equal chance of selection — unbiased but can be impractical for large populations",
    "Systematic sampling: select every kth member from a list after a random starting point — straightforward, but can introduce bias if the list has a hidden pattern matching the interval k"
   ]},
   {heading:"Method — other sampling methods & bias", points:[
    "Stratified sampling: divide the population into groups (strata) based on a characteristic, then sample proportionally from each stratum using simple random sampling within each",
    "Number sampled from a stratum = (size of stratum ÷ size of population) × total sample size",
    "Opportunity (convenience) sampling: choosing whoever is available at the time — quick and cheap, but likely biased and unrepresentative",
    "Quota sampling: interviewers select people to fit specific quotas using non-random judgement — avoids non-response but introduces interviewer bias",
    "Bias occurs when a sampling method systematically over- or under-represents part of the population — always identify a specific source of bias in a given scenario, not just say it could be biased"
   ]},
   {heading:"Common exam question types", points:[
    "Describing how to carry out stratified sampling for a scenario, including calculating numbers from each stratum",
    "Comparing sampling methods, evaluating advantages/disadvantages for a specific context",
    "Identifying sources of bias in a described sampling method",
    "Distinguishing a population, sampling frame and sample"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "For stratified sampling, always show the proportion calculation explicitly rather than just stating a final number",
    "When evaluating a sampling method, give a reason specific to the scenario described, not a generic textbook advantage/disadvantage",
    "Distinguish population (everyone/everything you want to know about) from sampling frame (the actual list you can select from)",
    "Systematic sampling can be biased if the list order coincides with a pattern matching the sampling interval — consider whether this applies to the specific scenario"
   ]}
  ]},
  {title:"Data Presentation & Interpretation", group:"Statistics", sections:[
   {heading:"Core definitions & key equations", points:[
    "Central tendency: mean (sum ÷ number of values, affected by outliers), median (middle value when ordered, not affected by outliers), mode (most frequent value)",
    "Spread: range (max − min, very sensitive to outliers), interquartile range IQR = Q3 − Q1 (middle 50%, less affected by outliers), variance and standard deviation (spread around the mean)",
    "Standard deviation: σ = √[Σ(x − mean)² ÷ n], or σ = √[(Σx²/n) − mean²] as a computational shortcut",
    "Outliers are often defined as values more than 1.5×IQR beyond Q1 or Q3, or more than 2 standard deviations from the mean — check which definition your question specifies"
   ]},
   {heading:"Method — displaying and interpreting data", points:[
    "Box plots show the five-number summary (minimum, Q1, median, Q3, maximum) — useful for comparing spread and skew between data sets",
    "Histograms show frequency density (frequency ÷ class width) for grouped data with unequal class widths, so the AREA of each bar represents frequency",
    "Cumulative frequency graphs plot running totals of frequency, used to estimate the median and quartiles from grouped data",
    "Correlation coefficients (e.g. PMCC) measure the strength and direction of a LINEAR relationship, ranging from −1 to +1 — correlation does NOT imply causation",
    "Coding data (e.g. y = (x − a)/b) simplifies calculations of mean/standard deviation on awkward numbers — the mean must be uncoded fully afterwards, but standard deviation is only affected by the scaling factor (b), not the shift (a)"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating mean, median, standard deviation, often from a frequency table or grouped data, including using coding",
    "Interpreting a box plot, histogram or cumulative frequency graph in context, including comparing two data sets",
    "Identifying and commenting on outliers, deciding whether to exclude them with justification",
    "Interpreting a correlation coefficient in context, avoiding causal claims"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Never claim correlation implies causation — a strong coefficient only shows a linear association exists, not that one variable causes the other",
    "For histograms with unequal class widths, always use frequency density for bar heights — using raw frequency as the height is a serious and common error",
    "When uncoding a mean or standard deviation, the mean uncodes fully (reverse both scaling and shift), but standard deviation only uncodes the scaling part",
    "Always interpret statistics in context using the units/variables from the actual question — stating the standard deviation of 4.2 minutes shows... rather than just giving the bare number 4.2"
   ]}
  ]},
  {title:"Probability", group:"Statistics", sections:[
   {heading:"Core definitions & key equations", points:[
    "P(A) = number of favourable outcomes ÷ total possible outcomes (equally likely outcomes); probabilities range 0 to 1 and sum to 1 across a sample space",
    "Mutually exclusive events: P(A or B) = P(A) + P(B); independent events: P(A and B) = P(A) × P(B)",
    "General addition rule (events that may overlap): P(A or B) = P(A) + P(B) − P(A and B)",
    "Conditional probability: P(A|B) = P(A and B) ÷ P(B) — the probability of A given that B has already happened"
   ]},
   {heading:"Method — diagrams & techniques", points:[
    "Venn diagrams visually represent overlapping events, useful for reading off combined/conditional probabilities directly",
    "Tree diagrams represent sequences of events — multiply along branches for a specific sequence, add different branches leading to the same outcome; essential when probabilities change between stages (without replacement)",
    "Selection without replacement changes probabilities at each stage; selection with replacement keeps them the same (independent trials)",
    "Two-way tables organise data for two categorical variables and can be used directly for joint and conditional probability calculations"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating combined probabilities using tree diagrams or Venn diagrams, including conditional probability",
    "Determining whether two events are independent or mutually exclusive from given probabilities, with reasoning",
    "Without-replacement problems requiring changing probabilities at each stage",
    "Two-way table probability problems, including conditional probability"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "To check independence, verify algebraically whether P(A and B) = P(A) × P(B) — don't assume it because a question sounds like it should be",
    "Mutually exclusive events CANNOT be independent (unless one has probability zero) — a commonly tested misconception, since one event happening tells you the other definitely didn't",
    "For without-replacement tree diagrams, recalculate the total and probabilities freshly at every single stage",
    "Be very careful which event is given in conditional probability — P(A|B) and P(B|A) are generally different, and mixing them up is a very common error"
   ]}
  ]},
  {title:"Statistical Distributions", group:"Statistics", sections:[
   {heading:"Core definitions & key equations", points:[
    "A discrete random variable takes distinct separate values with associated probabilities; a continuous random variable can take any value in a range (described by a probability density function)",
    "Binomial distribution X ~ B(n, p): models the number of successes in n independent trials with fixed success probability p; P(X = r) = nCr × pʳ × (1−p)ⁿ⁻ʳ; mean = np; variance = np(1−p)",
    "Conditions for binomial: fixed number of trials, only two outcomes per trial, trials independent, constant probability of success — always check/state these when modelling a situation",
    "Normal distribution X ~ N(μ, σ²): a continuous, symmetric, bell-shaped distribution defined by its mean and variance"
   ]},
   {heading:"Method — using distributions", points:[
    "Binomial probabilities calculated directly using the formula, or using cumulative probability functions for P(X ≤ r) type questions",
    "Standardising a normal variable: Z = (X − μ) ÷ σ converts to the standard normal distribution N(0,1), allowing probabilities to be found from tables or a calculator",
    "The normal distribution approximates a binomial distribution when n is large and p isn't too close to 0 or 1 — a continuity correction (e.g. X < 20.5 instead of X ≤ 20) is applied since a discrete distribution is being approximated by a continuous one",
    "By symmetry, P(X < μ) = P(X > μ) = 0.5 for a normal distribution, and probabilities for values equally spaced either side of the mean relate through this symmetry"
   ]},
   {heading:"Common exam question types", points:[
    "Calculating binomial probabilities directly or using cumulative probability functions",
    "Justifying whether a binomial model is appropriate, checking the four conditions",
    "Standardising and using normal distribution tables/functions to find probabilities or unknown values",
    "Recognising when to use a normal approximation to a binomial distribution, applying a continuity correction"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always explicitly check and state all four binomial conditions when justifying a binomial model — simply saying it fits a binomial distribution without checking loses marks",
    "For continuous distributions, P(X = a single exact value) is technically zero — always work with P(X < a) or P(X ≤ a) ranges, which is why continuity corrections matter",
    "Don't forget to convert variance to standard deviation (σ = √variance) or vice versa — easy to plug the wrong one into a formula",
    "For find μ or σ problems, set up an equation using the standardised Z-value from tables and solve algebraically — don't guess-and-check"
   ]}
  ]},
  {title:"Hypothesis Testing", group:"Statistics", sections:[
   {heading:"Core definitions & key equations", points:[
    "A hypothesis test uses sample data to assess evidence against an assumed value for a population parameter; the null hypothesis H₀ states the assumed value, the alternative H₁ states what you're testing for",
    "A one-tailed test looks for a change in a specific direction (H₁: p > or < a value); a two-tailed test looks for any change in either direction (H₁: p ≠ a value) — chosen based on the context",
    "The significance level (e.g. 5% or 1%) is the threshold probability used to decide whether observed data is unlikely enough, assuming H₀ is true, to reject H₀"
   ]},
   {heading:"Method — carrying out a test", points:[
    "Calculate the probability of obtaining a result at least as extreme as the one observed, assuming H₀ is true, using the relevant distribution (e.g. binomial)",
    "Compare this probability to the significance level: if it's LESS than the significance level, reject H₀ in favour of H₁; if greater, there isn't enough evidence to reject H₀",
    "Alternative approach: find the critical region (the extreme values that would lead to rejecting H₀) directly, then check whether the observed value falls inside it",
    "Always write a final conclusion IN CONTEXT, referring back to the original scenario, not just reject H₀"
   ]},
   {heading:"Common exam question types", points:[
    "Setting up null and alternative hypotheses correctly, including choosing one-tailed vs two-tailed",
    "Calculating a probability using a binomial distribution and comparing it to a given significance level",
    "Finding a critical region for a test at a given significance level",
    "Writing a full conclusion in context, acknowledging that failing to reject H₀ doesn't prove H₀ true"
   ]},
   {heading:"A* tips & common mistakes", points:[
    "Always conclude in the CONTEXT of the original question rather than just stating reject/do not reject H₀ — e.g. stating there is sufficient evidence at the 5% level to suggest the coin is biased towards heads, rather than a bare statistical statement",
    "For a two-tailed test, split the significance level between both tails (e.g. 2.5% at each end for a 5% two-tailed test) when finding a critical region",
    "Not rejecting H₀ does NOT mean H₀ has been proven true — it only means there isn't sufficient evidence to reject it",
    "Check whether the question wants a one-tailed or two-tailed test based on the wording — testing whether a probability has increased is one-tailed; testing whether it has changed is two-tailed"
   ]}
  ]},
  {title:"Proof, Exponentials, Logarithms & Partial Fractions", group:"Pure Mathematics", sections:[
   {heading:"Algebraic techniques",points:["Proof by deduction uses known facts and valid algebraic steps; proof by exhaustion checks every possible case; proof by contradiction assumes the opposite and derives an impossibility.","For a logarithm, logₐ(xy) = logₐx + logₐy; logₐ(x/y) = logₐx − logₐy; logₐ(xʳ) = r logₐx. The argument must be positive and the base must be positive and not equal to 1.","Solve aˣ = b by taking logarithms: x = ln b / ln a. Exponential models often have the form y = Aeᵏᵗ; k > 0 models growth and k < 0 models decay.","Partial fractions: factor the denominator first. For distinct linear factors use A/(x−a) + B/(x−b); for a repeated factor include every power, e.g. A/(x−a) + B/(x−a)². For an improper fraction, divide first.","⭐ State restrictions after cancelling algebraic factors: cancellation does not restore values excluded from the original denominator."]},
   {heading:"Parametric equations and numerical methods",points:["For x = f(t), y = g(t), dy/dx = (dy/dt)/(dx/dt), provided dx/dt ≠ 0. To find a tangent, calculate the gradient and coordinates at the same parameter value.","For a parametric curve, eliminate t when possible to find a Cartesian equation, but retain restrictions caused by the parameter interval.","Newton–Raphson iteration: xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). Choose a sensible starting value near the root; iteration may fail if f′ is zero or the starting value is poor.","A numerical method gives an approximation, not automatically an exact root. Check convergence and substitute the result into the original equation."]}
  ]},
  {title:"Mechanics: Projectiles, Moments & Friction", group:"Mechanics", sections:[
   {heading:"Projectiles and connected particles",points:["Resolve initial velocity u at angle θ: horizontal component u cos θ; vertical component u sin θ. With air resistance neglected, horizontal acceleration is zero and vertical acceleration is −g if upwards is positive.","Treat horizontal and vertical motion separately but use the same time t. At maximum height, vertical velocity is zero; the horizontal velocity remains constant in the ideal model.","For connected particles joined by a light inextensible string over a smooth pulley, the string has the same tension throughout and connected particles have equal acceleration magnitude. Draw a separate force diagram for each particle.","For a particle on a slope of angle θ, resolve weight into mg sin θ down the slope and mg cos θ perpendicular to the slope. The normal reaction is often R = mg cos θ if there are no other perpendicular forces."]},
   {heading:"Moments and friction",points:["Moment of a force about a point = perpendicular distance from pivot to line of action × force. In equilibrium, total clockwise moments equal total anticlockwise moments.","For translational equilibrium, resultant force is zero in each direction. For full rigid-body equilibrium, also require zero resultant moment about any point.","Limiting friction F = μR, where μ is the coefficient of friction and R is the normal reaction. Before limiting equilibrium, friction adjusts up to its maximum; do not always set F = μR.","A smooth surface has no friction; a rough surface may exert friction opposing relative motion or its tendency. State the assumed direction, then check the sign of the calculated force.","⭐ Draw a clear force diagram, define positive directions, resolve perpendicular and parallel to the motion/slope, and only then apply Newton's second law."]}
  ]},
  {title:"Statistics: Correlation, Regression & Normal Models", group:"Statistics", sections:[
   {heading:"Data and correlation",points:["The product moment correlation coefficient r lies between −1 and 1 and measures strength/direction of linear correlation. Correlation does not prove causation and can be distorted by outliers.","The least-squares regression line of y on x predicts y from x and minimises the sum of squared vertical residuals. Use it for prediction only within a sensible range of observed x-values; extrapolation is unreliable.","A sample should be representative and selected without bias. Random sampling reduces selection bias; larger samples generally reduce sampling variation but do not fix systematic bias.","For grouped continuous data, use class midpoints to estimate the mean and standard deviation; results are estimates because individual values are unknown."]},
   {heading:"Normal distribution and inference",points:["For X ~ N(μ, σ²), the mean is μ and standard deviation is σ. Standardise using Z = (X−μ)/σ, then use normal distribution tables/calculator appropriately.","About 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean respectively (approximate empirical rule).","When using a normal approximation to a binomial distribution, check np and n(1−p) are sufficiently large and apply a continuity correction, e.g. P(X ≤ 5) becomes P(Y < 5.5).","A confidence interval describes a method's long-run coverage, not the probability that a fixed parameter changes. Interpret conclusions in context and distinguish association from cause.","⭐ Define the random variable, state the distribution and parameters, show the standardisation/continuity correction, and give a probability to appropriate accuracy."]}
  ]},
  {title:"Radians, Small-angle Approximations & Trigonometry", group:"Pure Mathematics", sections:[
   {heading:"Radians and exact trig",points:["Radians: θ = arc length ÷ radius. A full turn is 2π radians and 180° = π radians. For a sector, arc length s = rθ and area A = ½r²θ, with θ in radians.","For small θ in radians, sin θ ≈ θ, tan θ ≈ θ and cos θ ≈ 1 − θ²/2. These are approximations, not identities, and θ must be small and measured in radians.","Use identities sin²x + cos²x = 1, tan x = sin x/cos x and 1 + tan²x = sec²x where appropriate. Check the quadrant and required interval when solving trigonometric equations.","For a = R sin(x ± α) or a = R cos(x ± α), combine coefficients using R = √(A² + B²) and choose α using tan α = B/A with quadrant checks. This is useful for solving equations and finding maxima/minima.","For a general solution, include the period and all solutions in the requested interval; calculator inverse trig functions usually return only a principal value."]}
  ]},
  {title:"Integration Techniques & Differential Equations", group:"Pure Mathematics", sections:[
   {heading:"Methods and applications",points:["Reverse the chain rule for integration by substitution: choose u as an expression whose derivative also appears, change all limits for a definite integral, and express the entire integrand in u before integrating.","Integration by parts: ∫u(dv/dx) dx = uv − ∫v(du/dx) dx. Choose u so differentiating it simplifies the expression; choose dv/dx so it is straightforward to integrate.","Partial fractions can simplify rational functions before integration. For repeated linear factors, include each power; for an irreducible quadratic, use a linear numerator. Divide first if the numerator's degree is at least the denominator's.","A differential equation dy/dx = f(x) can be solved by integration. For a separable equation dy/dx = g(x)h(y), rearrange to separate y and x, integrate both sides and use the initial condition to find the constant.","Area between a curve and the x-axis is ∫|f(x)| dx when the curve crosses the axis; split at roots. Area between two curves is ∫(upper − lower) dx, after finding intersections and checking which curve is above.","For volumes of revolution about the x-axis, V = π∫y² dx between the stated limits. Sketch the region and ensure the limits and function correspond to the region being rotated."]}
  ]},
  {title:"Parametric Equations & Implicit Differentiation", group:"Pure Mathematics", sections:[
   {heading:"Curve techniques",points:["For x = f(t), y = g(t), dy/dx = (dy/dt)/(dx/dt), where dx/dt ≠ 0. A stationary point of the curve may occur when dy/dt = 0, but inspect dx/dt and the geometry carefully.","For a tangent or normal, calculate the gradient at the specified parameter value and find the matching x and y coordinates. The normal gradient is the negative reciprocal of the tangent gradient when the tangent is neither horizontal nor vertical.","Implicit differentiation: differentiate both sides with respect to x, treating y as a function of x. For example, d(y²)/dx = 2y(dy/dx), not just 2y.","Eliminate the parameter where useful, but keep restrictions on t and note that one parametric curve may represent only part of a Cartesian curve. A closed curve can require a full parameter interval.","When finding a second derivative for a parametric curve, d²y/dx² = [d/dt(dy/dx)] ÷ (dx/dt). Do not confuse this with d²y/dt²."]}
  ]},
  {title:"Numerical Methods & Iteration", group:"Pure Mathematics", sections:[
   {heading:"Root finding and accuracy",points:["A sign change in a continuous function between a and b guarantees at least one root in (a,b), but no sign change does not guarantee that there is no root (for example, a repeated root may touch the axis).","For an iteration xₙ₊₁ = g(xₙ), use the specified starting value and retain adequate precision throughout. The iteration converges only under suitable conditions; check whether successive values settle to a stable root.","Newton–Raphson: xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). It uses the tangent at the current estimate and can fail if f′(xₙ) is zero or the starting value is unsuitable.","When a question asks for an interval containing a root, show the function values and their signs at the endpoints. When asked to justify an accuracy, use the change in successive iterations or a suitable error bound as requested.","A numerical root is an approximation. Substitute it into the original equation as a reasonableness check and quote the requested number of decimal places or significant figures."]}
  ]},
  {title:"Work, Energy, Power & Connected Particles", group:"Mechanics", sections:[
   {heading:"Modelling and equations",points:["Newton's second law: resultant force = mass × acceleration, ΣF = ma. Resolve forces along a chosen positive direction; a negative acceleration means it acts opposite to that direction.","Work done by a constant force parallel to displacement is W = Fs. If the force acts at angle θ to displacement, W = Fs cos θ. Work done against resistance transfers mechanical energy to other forms.","Kinetic energy = ½mv²; gravitational potential energy change near Earth's surface = mgΔh. Power is rate of doing work or transferring energy: P = work/time; for a force parallel to velocity, P = Fv.","For a particle moving under gravity with no resistance, mechanical energy is conserved. If resistance or friction acts, include work done against it in the energy equation.","For connected particles with a light inextensible string over a smooth pulley, tension is the same throughout the string and acceleration magnitudes are equal. Draw a separate force diagram for each particle and apply ΣF = ma.","On an inclined plane at angle θ, resolve weight into mg sin θ down the slope and mg cos θ perpendicular to it. For limiting friction F = μR; otherwise friction is not automatically equal to μR."]}
  ]},
  {title:"Large Data Set & Statistical Sampling", group:"Statistics", sections:[
   {heading:"Data handling and context",points:["Know the context, variables, units and structure of the Pearson Edexcel large data set specified for your examination series. Practise extracting values, interpreting units and comparing subsets; check the current official materials for the required data set.","Population is the whole group of interest; a sample is the subset observed. Simple random sampling gives each individual an equal chance of selection; systematic sampling selects at fixed intervals after a start; stratified sampling preserves proportions of relevant groups.","Sampling bias arises when the method systematically favours some members. A large biased sample is not necessarily representative. Random sampling reduces selection bias but does not remove all sampling variation.","Outliers can strongly affect the mean, range, standard deviation and correlation coefficient. The median and interquartile range are more resistant to extreme values. State whether an outlier is genuine before excluding it.","For a box plot, compare medians for location and IQR/range for spread, while considering skewness and outliers. For histograms with unequal class widths, frequency density = frequency ÷ class width; bar area represents frequency."]}
  ]},
  {title:"Binomial Distribution & Hypothesis Tests", group:"Statistics", sections:[
   {heading:"Discrete probability models",points:["X ~ B(n,p) models the number of successes in n independent trials with constant success probability p. P(X = r) = ⁿCᵣpʳ(1 − p)ⁿ⁻ʳ; mean = np and variance = np(1 − p).","Check the binomial assumptions: fixed number of trials, two outcomes per trial, independent trials and constant probability of success. Define what counts as a success.","For cumulative probabilities, use complements when efficient: P(X ≥ r) = 1 − P(X ≤ r − 1). Read inequalities carefully; P(X > r) differs from P(X ≥ r).","A hypothesis test starts with H₀ and H₁, chosen to match the question. The significance level is the probability of rejecting H₀ when H₀ is true. Use the specified tail(s) and critical region or p-value consistently.","If p-value < significance level, reject H₀; otherwise do not reject H₀. State a conclusion in context. ‘Do not reject’ does not prove H₀ true, and statistical significance is not the same as practical importance.","For a binomial test, calculate a tail probability under H₀. For a two-tailed test, account for outcomes at least as extreme in both directions according to the test convention taught; do not simply double a tail probability without checking the distribution and critical region."]}
  ]},
  {title:"Vectors in 2D & 3D and Lines", group:"Pure Mathematics", sections:[
   {heading:"Vector methods",points:["A vector has magnitude and direction. For a = (a₁,a₂,a₃), |a| = √(a₁² + a₂² + a₃²). A unit vector in the direction of a is a/|a|, provided a ≠ 0.","Parallel vectors are scalar multiples. To show points are collinear, show the relevant displacement vectors are parallel; to find a ratio on a line, express the position vector as a + λb and solve for λ.","For a line through position vector a with direction vector d, r = a + λd. At an intersection, equate components and solve the simultaneous equations; verify all components agree.","The scalar product a·b = |a||b|cos θ = a₁b₁ + a₂b₂ (+ a₃b₃). Perpendicular non-zero vectors have dot product zero. Use the dot product to find angles and test perpendicularity.","If a question is confined to the 2D Edexcel specification, use two components; do not assume 3D line/vector geometry is examinable in 9MA0 unless explicitly required by your course materials."]}
  ]},
 ,
 {"title":"Save My Exams Supplement — Pure Mathematics Methods","group":"Edexcel 9MA0 · Supplementary revision notes","sections":[{"heading":"Algebra, functions and proof","points":["For a composite function fg(x), calculate g(x) first and substitute the result into f. For an inverse, write y = f(x), swap x and y, then rearrange; state any domain restriction needed for the inverse to be a function.","When using the factor theorem, f(a) = 0 means (x − a) is a factor. For a cubic, find a root, divide by the corresponding linear factor, then solve the remaining quadratic.","For proof by contradiction, assume the negation of the statement and derive a contradiction. For disproof, one valid counterexample is enough. For proof by exhaustion, check every case in the stated finite set.","For inequalities involving a rational expression, find all critical values from the numerator and denominator, make a sign diagram, and exclude values that make the denominator zero.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/maths/edexcel/18/pure/revision-notes/ (Proof; Algebra & Functions)."]},{"heading":"Differentiation, integration and modelling","points":["Differentiate powers using d(xⁿ)/dx = nxⁿ⁻¹. Use the chain, product and quotient rules when the expression structure requires them, and simplify only after applying the correct rule.","A stationary point satisfies dy/dx = 0. Use the second derivative or a sign change in dy/dx to classify it; a zero second derivative alone is inconclusive.","For definite integrals, integrate first and evaluate F(b) − F(a). For area between a curve and the x-axis, check whether the curve crosses the axis; geometric area is non-negative and may require splitting the integral.","In modelling questions, define variables, state assumptions, form the equation, solve it and interpret the result in context. Include units and reject solutions that violate the context or domain.","For a differential equation of the form dy/dx = f(x)g(y), separate variables, integrate both sides, include the constant of integration and use the initial condition to determine it."]}]},
 {"title":"Save My Exams Supplement — Statistics & Mechanics","group":"Edexcel 9MA0 · Supplementary revision notes","sections":[{"heading":"Statistics and hypothesis testing","points":["For a normal model, standardise using Z = (X − μ)/σ. For an inverse-normal problem, identify the required cumulative probability before finding the corresponding z-value and transforming back to X.","For a hypothesis test, define H₀ and H₁ in terms of the parameter and context, use the correct tail, compare the p-value with the significance level (or compare with the critical region), and give a contextual conclusion.","A binomial model requires a fixed number of independent trials, two outcomes per trial and a constant success probability. Use complements carefully: P(X ≥ r) = 1 − P(X ≤ r − 1).","For correlation, describe the direction and strength of association, but do not claim that correlation proves causation. For regression, use the line for interpolation only where appropriate and be cautious about extrapolation.","Save My Exams cross-reference: https://www.savemyexams.com/a-level/maths/edexcel/18/statistics/revision-notes/ (Statistical Sampling; Data Presentation; Distributions and Hypothesis Tests)."]},{"heading":"Mechanics and resolving forces","points":["Resolve forces along convenient perpendicular axes. Choose a positive direction and keep signs consistent; for equilibrium, the resultant force in each axis direction is zero.","Newton’s second law gives resultant force = mass × acceleration. Include all relevant forces in a diagram and distinguish the resultant force from an individual force such as tension or friction.","For constant acceleration, use the SUVAT equations only when acceleration is constant. Define the positive direction and ensure displacement, velocity and acceleration signs are consistent.","For moments about a point, moment = force × perpendicular distance from the pivot to the line of action. For equilibrium, clockwise and anticlockwise moments balance.","Save My Exams has separate Pure, Statistics and Mechanics revision sections for Edexcel 9MA0; use the topic index to cross-check the exact specification scope: https://www.savemyexams.com/a-level/maths/edexcel/18/"]}]}]
};