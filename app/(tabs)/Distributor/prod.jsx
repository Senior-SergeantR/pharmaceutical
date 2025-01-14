export const products = {
    Analgesics: [
        {
          id: 1,
          name: "Paracetamol",
          image: require('../../../assets/images/analgesics.png'),
          description: "Pain and fever reducer",
          price: 5.99,
          dosage: "500mg"
        },
        {
          id: 2,
          name: "Ibuprofen",
          image: require('../../../assets/images/analgesics.png'),
          description: "Anti-inflammatory pain reliever",
          price: 7.99,
          dosage: "400mg"
        },
        {
          id: 3,
          name: "Aspirin",
          image: require('../../../assets/images/analgesics.png'),
          description: "Pain relief and blood thinner",
          price: 6.50,
          dosage: "325mg"
        },
        {
          id: 4,
          name: "Naproxen",
          image: require('../../../assets/images/analgesics.png'),
          description: "Long-lasting pain and inflammation relief",
          price: 8.99,
          dosage: "250mg"
        },
        {
          id: 5,
          name: "Diclofenac",
          image: require('../../../assets/images/analgesics.png'),
          description: "Strong anti-inflammatory pain relief",
          price: 12.99,
          dosage: "50mg"
        },
        {
          id: 6,
          name: "Tramadol",
          image: require('../../../assets/images/analgesics.png'),
          description: "Moderate to severe pain relief",
          price: 15.99,
          dosage: "50mg"
        },
        {
          id: 7,
          name: "Codeine",
          image: require('../../../assets/images/analgesics.png'),
          description: "Strong pain relief for severe pain",
          price: 18.99,
          dosage: "30mg"
        },
        {
          id: 8,
          name: "Ketoprofen",
          image: require('../../../assets/images/analgesics.png'),
          description: "Joint and muscle pain relief",
          price: 9.99,
          dosage: "75mg"
        },
        {
          id: 9,
          name: "Mefenamic Acid",
          image: require('../../../assets/images/analgesics.png'),
          description: "Menstrual pain and inflammation relief",
          price: 11.99,
          dosage: "500mg"
        },
        {
          id: 10,
          name: "Celecoxib",
          image: require('../../../assets/images/analgesics.png'),
          description: "Arthritis and chronic pain relief",
          price: 14.99,
          dosage: "200mg"
        }
      ],
      
      Antibiotics: [
        {
          id: 1,
          name: "Amoxicillin",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Broad-spectrum antibiotic",
          price: 12.99,
          dosage: "500mg"
        },
        {
          id: 2,
          name: "Azithromycin",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Treatment for respiratory infections",
          price: 15.99,
          dosage: "250mg"
        },
        {
          id: 3,
          name: "Ciprofloxacin",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Treatment for bacterial infections",
          price: 18.99,
          dosage: "500mg"
        },
        {
          id: 4,
          name: "Doxycycline",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Treatment for various bacterial infections",
          price: 14.99,
          dosage: "100mg"
        },
        {
          id: 5,
          name: "Clarithromycin",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Treatment for skin and respiratory infections",
          price: 16.99,
          dosage: "500mg"
        },
        {
          id: 6,
          name: "Cephalexin",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "First-generation cephalosporin antibiotic",
          price: 13.99,
          dosage: "500mg"
        },
        {
          id: 7,
          name: "Metronidazole",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Treatment for anaerobic bacterial infections",
          price: 11.99,
          dosage: "400mg"
        },
        {
          id: 8,
          name: "Trimethoprim",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Treatment for urinary tract infections",
          price: 9.99,
          dosage: "200mg"
        },
        {
          id: 9,
          name: "Erythromycin",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Macrolide antibiotic for various infections",
          price: 17.99,
          dosage: "250mg"
        },
        {
          id: 10,
          name: "Tetracycline",
          image: require('../../../assets/images/antibiotic.jpg'),
          description: "Broad-spectrum tetracycline antibiotic",
          price: 19.99,
          dosage: "500mg"
        }
      ],

      Antidepressants: [
        {
          id: 1,
          name: "Fluoxetine (Prozac)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SSRI for depression and anxiety",
          price: 24.99,
          dosage: "20mg"
        },
        {
          id: 2,
          name: "Sertraline (Zoloft)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SSRI for depression and panic disorder",
          price: 22.99,
          dosage: "50mg"
        },
        {
          id: 3,
          name: "Escitalopram (Lexapro)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SSRI for major depressive disorder",
          price: 29.99,
          dosage: "10mg"
        },
        {
          id: 4,
          name: "Venlafaxine (Effexor)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SNRI for depression and anxiety",
          price: 27.99,
          dosage: "75mg"
        },
        {
          id: 5,
          name: "Duloxetine (Cymbalta)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SNRI for depression and nerve pain",
          price: 31.99,
          dosage: "30mg"
        },
        {
          id: 6,
          name: "Bupropion (Wellbutrin)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "NDRI for depression and seasonal affective disorder",
          price: 26.99,
          dosage: "150mg"
        },
        {
          id: 7,
          name: "Paroxetine (Paxil)",
          image: require('../../../assets/images/antidepresants.webp'),           
          description: "SSRI for depression and OCD",
          price: 23.99,
          dosage: "20mg"
        },
        {
          id: 8,
          name: "Mirtazapine (Remeron)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "TeCA for depression with sleep problems",
          price: 28.99,
          dosage: "15mg"
        },
        {
          id: 9,
          name: "Citalopram (Celexa)",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SSRI for depression and anxiety disorders",
          price: 21.99,
          dosage: "20mg"
        },
        {
          id: 10,
          name: "Trazodone",
          image: require('../../../assets/images/antidepresants.webp'), 
          description: "SARI for depression and insomnia",
          price: 25.99,
          dosage: "50mg"
        }
      ],

      Antipsychotics: [
        {
          id: 1,
          name: "Risperidone (Risperdal)",
          image: require('../../../assets/images/antipsychotic.jpg'),
          description: "Atypical antipsychotic for schizophrenia",
          price: 34.99,
          dosage: "2mg"
        },
        {
          id: 2,
          name: "Olanzapine (Zyprexa)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "Treatment for schizophrenia and bipolar",
          price: 39.99,
          dosage: "5mg"
        },
        {
          id: 3,
          name: "Quetiapine (Seroquel)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "For schizophrenia and major depression",
          price: 36.99,
          dosage: "25mg"
        },
        {
          id: 4,
          name: "Aripiprazole (Abilify)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "For schizophrenia and mood disorders",
          price: 42.99,
          dosage: "10mg"
        },
        {
          id: 5,
          name: "Clozapine (Clozaril)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "For treatment-resistant schizophrenia",
          price: 45.99,
          dosage: "25mg"
        },
        {
          id: 6,
          name: "Ziprasidone (Geodon)",
          image: require('../../../assets/images/antipsychotic.jpg'),         
           description: "For schizophrenia and acute mania",
          price: 38.99,
          dosage: "20mg"
        },
        {
          id: 7,
          name: "Haloperidol (Haldol)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "Classic antipsychotic medication",
          price: 32.99,
          dosage: "5mg"
        },
        {
          id: 8,
          name: "Paliperidone (Invega)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "Long-acting antipsychotic",
          price: 47.99,
          dosage: "3mg"
        },
        {
          id: 9,
          name: "Lurasidone (Latuda)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "For bipolar depression and schizophrenia",
          price: 49.99,
          dosage: "40mg"
        },
        {
          id: 10,
          name: "Asenapine (Saphris)",
          image: require('../../../assets/images/antipsychotic.jpg'),          
          description: "For schizophrenia and bipolar mania",
          price: 44.99,
          dosage: "5mg"
        }
      ],

      Antivirals: [
        {
          id: 1,
          name: "Acyclovir (Zovirax)",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "Treatment for herpes infections",
          price: 28.99,
          dosage: "400mg"
        },
        {
          id: 2,
          name: "Oseltamivir (Tamiflu)",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "Treatment for influenza A and B",
          price: 45.99,
          dosage: "75mg"
        },
        {
          id: 3,
          name: "Valacyclovir (Valtrex)",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "For herpes and shingles",
          price: 32.99,
          dosage: "500mg"
        },
        {
          id: 4,
          name: "Ribavirin",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "Treatment for hepatitis C",
          price: 38.99,
          dosage: "200mg"
        },
        {
          id: 5,
          name: "Ganciclovir",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "For cytomegalovirus infections",
          price: 41.99,
          dosage: "250mg"
        },
        {
          id: 6,
          name: "Famciclovir",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "For herpes zoster and simplex",
          price: 36.99,
          dosage: "250mg"
        },
        {
          id: 7,
          name: "Zanamivir (Relenza)",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "Inhaled treatment for influenza",
          price: 49.99,
          dosage: "5mg/inhalation"
        },
        {
          id: 8,
          name: "Entecavir",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "Treatment for hepatitis B",
          price: 52.99,
          dosage: "0.5mg"
        },
        {
          id: 9,
          name: "Tenofovir",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "For HIV and hepatitis B",
          price: 55.99,
          dosage: "300mg"
        },
        {
          id: 10,
          name: "Cidofovir",
          image: require('../../../assets/images/antivirals.jpg'),          
          description: "For severe viral eye infections",
          price: 58.99,
          dosage: "75mg/mL"
        }
      ],

      Sedatives: [
        {
          id: 1,
          name: "Zolpidem (Ambien)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "Short-term treatment for insomnia",
          price: 29.99,
          dosage: "10mg"
        },
        {
          id: 2,
          name: "Diazepam (Valium)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "For anxiety and muscle spasms",
          price: 26.99,
          dosage: "5mg"
        },
        {
          id: 3,
          name: "Alprazolam (Xanax)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "For panic and anxiety disorders",
          price: 31.99,
          dosage: "0.5mg"
        },
        {
          id: 4,
          name: "Lorazepam (Ativan)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "For anxiety and insomnia",
          price: 28.99,
          dosage: "1mg"
        },
        {
          id: 5,
          name: "Eszopiclone (Lunesta)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "Sleep medication",
          price: 34.99,
          dosage: "2mg"
        },
        {
          id: 6,
          name: "Temazepam (Restoril)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "Short-term treatment for insomnia",
          price: 32.99,
          dosage: "15mg"
        },
        {
          id: 7,
          name: "Midazolam",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "Pre-surgery sedation",
          price: 36.99,
          dosage: "5mg"
        },
        {
          id: 8,
          name: "Zaleplon (Sonata)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "Short-acting sleep medication",
          price: 33.99,
          dosage: "10mg"
        },
        {
          id: 9,
          name: "Clonazepam (Klonopin)",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "For panic disorders and seizures",
          price: 30.99,
          dosage: "0.5mg"
        },
        {
          id: 10,
          name: "Phenobarbital",
          image: require('../../../assets/images/sedatives.jpg'),          
          description: "For seizures and anxiety",
          price: 27.99,
          dosage: "30mg"
        }
      ],

      Stimulants: [
        {
          id: 1,
          name: "Methylphenidate (Ritalin)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "Treatment for ADHD and narcolepsy",
          price: 38.99,
          dosage: "10mg"
        },
        {
          id: 2,
          name: "Adderall",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "For ADHD and narcolepsy",
          price: 42.99,
          dosage: "20mg"
        },
        {
          id: 3,
          name: "Modafinil (Provigil)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "Wakefulness promoter for narcolepsy",
          price: 45.99,
          dosage: "200mg"
        },
        {
          id: 4,
          name: "Dexmethylphenidate (Focalin)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "ADHD medication",
          price: 41.99,
          dosage: "5mg"
        },
        {
          id: 5,
          name: "Lisdexamfetamine (Vyvanse)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "Long-acting ADHD treatment",
          price: 46.99,
          dosage: "30mg"
        },
        {
          id: 6,
          name: "Armodafinil (Nuvigil)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "For sleep disorders",
          price: 44.99,
          dosage: "150mg"
        },
        {
          id: 7,
          name: "Dextroamphetamine (Dexedrine)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "ADHD and narcolepsy treatment",
          price: 39.99,
          dosage: "10mg"
        },
        {
          id: 8,
          name: "Atomoxetine (Strattera)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "Non-stimulant ADHD medication",
          price: 43.99,
          dosage: "40mg"
        },
        {
          id: 9,
          name: "Caffeine Tablets",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "Mental alertness enhancer",
          price: 15.99,
          dosage: "200mg"
        },
        {
          id: 10,
          name: "Methylphenidate ER (Concerta)",
          image: require('../../../assets/images/stimulants.jpg'),
          description: "Extended-release ADHD treatment",
          price: 47.99,
          dosage: "36mg"
        }
      ],
      
      Antihistamines: [
        {
          id: 1,
          name: "Cetirizine (Zyrtec)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "24-hour allergy relief",
          price: 18.99,
          dosage: "10mg"
        },
        {
          id: 2,
          name: "Loratadine (Claritin)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Non-drowsy allergy relief",
          price: 19.99,
          dosage: "10mg"
        },
        {
          id: 3,
          name: "Fexofenadine (Allegra)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Fast-acting allergy relief",
          price: 21.99,
          dosage: "180mg"
        },
        {
          id: 4,
          name: "Diphenhydramine (Benadryl)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Allergy and sleep aid",
          price: 15.99,
          dosage: "25mg"
        },
        {
          id: 5,
          name: "Desloratadine (Clarinex)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Long-lasting allergy relief",
          price: 23.99,
          dosage: "5mg"
        },
        {
          id: 6,
          name: "Levocetirizine (Xyzal)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Powerful allergy relief",
          price: 24.99,
          dosage: "5mg"
        },
        {
          id: 7,
          name: "Chlorpheniramine",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Classic allergy medication",
          price: 14.99,
          dosage: "4mg"
        },
        {
          id: 8,
          name: "Hydroxyzine (Atarax)",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Antihistamine and anxiolytic",
          price: 20.99,
          dosage: "25mg"
        },
        {
          id: 9,
          name: "Azelastine Nasal",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Nasal allergy spray",
          price: 26.99,
          dosage: "137mcg/spray"
        },
        {
          id: 10,
          name: "Brompheniramine",
          image: require('../../../assets/images/antihistamines.jpg'),
          description: "Multi-symptom allergy relief",
          price: 16.99,
          dosage: "4mg"
        }
      ],

      Antihypertensives: [
        {
          id: 1,
          name: "Lisinopril (Zestril)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "ACE inhibitor for blood pressure",
          price: 22.99,
          dosage: "10mg"
        },
        {
          id: 2,
          name: "Amlodipine (Norvasc)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Calcium channel blocker",
          price: 24.99,
          dosage: "5mg"
        },
        {
          id: 3,
          name: "Losartan (Cozaar)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Angiotensin receptor blocker",
          price: 26.99,
          dosage: "50mg"
        },
        {
          id: 4,
          name: "Metoprolol (Lopressor)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Beta-blocker for heart rate",
          price: 23.99,
          dosage: "25mg"
        },
        {
          id: 5,
          name: "Valsartan (Diovan)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "ARB for blood pressure",
          price: 28.99,
          dosage: "80mg"
        },
        {
          id: 6,
          name: "Atenolol (Tenormin)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Selective beta blocker",
          price: 21.99,
          dosage: "50mg"
        },
        {
          id: 7,
          name: "Ramipril (Altace)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "ACE inhibitor for hypertension",
          price: 25.99,
          dosage: "5mg"
        },
        {
          id: 8,
          name: "Diltiazem (Cardizem)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Calcium channel blocker",
          price: 27.99,
          dosage: "60mg"
        },
        {
          id: 9,
          name: "Carvedilol (Coreg)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Alpha/beta blocker combo",
          price: 29.99,
          dosage: "6.25mg"
        },
        {
          id: 10,
          name: "Irbesartan (Avapro)",
          image: require('../../../assets/images/antihypertensives.webp'),
          description: "Long-acting ARB",
          price: 31.99,
          dosage: "150mg"
        }
      ],

      Antidiabetics: [
        {
          id: 1,
          name: "Metformin (Glucophage)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "First-line diabetes treatment",
          price: 19.99,
          dosage: "500mg"
        },
        {
          id: 2,
          name: "Glimepiride (Amaryl)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "Sulfonylurea for blood sugar",
          price: 24.99,
          dosage: "2mg"
        },
        {
          id: 3,
          name: "Sitagliptin (Januvia)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "DPP-4 inhibitor",
          price: 45.99,
          dosage: "100mg"
        },
        {
          id: 4,
          name: "Empagliflozin (Jardiance)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "SGLT2 inhibitor",
          price: 49.99,
          dosage: "10mg"
        },
        {
          id: 5,
          name: "Pioglitazone (Actos)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "Insulin sensitizer",
          price: 35.99,
          dosage: "15mg"
        },
        {
          id: 6,
          name: "Glipizide (Glucotrol)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "Rapid-acting sulfonylurea",
          price: 22.99,
          dosage: "5mg"
        },
        {
          id: 7,
          name: "Liraglutide (Victoza)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "GLP-1 receptor agonist",
          price: 89.99,
          dosage: "6mg/mL"
        },
        {
          id: 8,
          name: "Dapagliflozin (Farxiga)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "SGLT2 inhibitor",
          price: 52.99,
          dosage: "5mg"
        },
        {
          id: 9,
          name: "Repaglinide (Prandin)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "Meglitinide class",
          price: 42.99,
          dosage: "1mg"
        },
        {
          id: 10,
          name: "Dulaglutide (Trulicity)",
          image: require('../../../assets/images/antidiabetic.jpg'),
          description: "Weekly GLP-1 agonist",
          price: 95.99,
          dosage: "0.75mg/0.5mL"
        }
      ],

      Anticoagulants: [
        {
          id: 1,
          name: "Warfarin (Coumadin)",
          image: require('../../../assets/images/anticoagulants.webp'),         
          description: "Classic blood thinner",
          price: 15.99,
          dosage: "5mg"
        },
        {
          id: 2,
          name: "Rivaroxaban (Xarelto)",
          image: require('../../../assets/images/anticoagulants.webp'),         
           description: "Direct Factor Xa inhibitor",
          price: 42.99,
          dosage: "20mg"
        },
        {
          id: 3,
          name: "Apixaban (Eliquis)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Modern anticoagulant",
          price: 45.99,
          dosage: "5mg"
        },
        {
          id: 4,
          name: "Dabigatran (Pradaxa)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Direct thrombin inhibitor",
          price: 44.99,
          dosage: "150mg"
        },
        {
          id: 5,
          name: "Enoxaparin (Lovenox)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Low molecular weight heparin",
          price: 38.99,
          dosage: "40mg/0.4mL"
        },
        {
          id: 6,
          name: "Heparin",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Standard anticoagulant",
          price: 32.99,
          dosage: "5000 units/mL"
        },
        {
          id: 7,
          name: "Edoxaban (Savaysa)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Once-daily Factor Xa inhibitor",
          price: 41.99,
          dosage: "60mg"
        },
        {
          id: 8,
          name: "Fondaparinux (Arixtra)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Synthetic anticoagulant",
          price: 46.99,
          dosage: "2.5mg/0.5mL"
        },
        {
          id: 9,
          name: "Dalteparin (Fragmin)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Low molecular weight heparin",
          price: 39.99,
          dosage: "5000 IU/0.2mL"
        },
        {
          id: 10,
          name: "Bivalirudin (Angiomax)",
          image: require('../../../assets/images/anticoagulants.webp'),
          description: "Direct thrombin inhibitor",
          price: 48.99,
          dosage: "250mg"
        }
      ],

      Diuretics: [
        {
          id: 1,
          name: "Furosemide (Lasix)",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Powerful loop diuretic",
          price: 16.99,
          dosage: "40mg"
        },
        {
          id: 2,
          name: "Hydrochlorothiazide (HCTZ)",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Thiazide diuretic",
          price: 14.99,
          dosage: "25mg"
        },
        {
          id: 3,
          name: "Spironolactone (Aldactone)",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Potassium-sparing diuretic",
          price: 19.99,
          dosage: "25mg"
        },
        {
          id: 4,
          name: "Bumetanide (Bumex)",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Loop diuretic",
          price: 18.99,
          dosage: "1mg"
        },
        {
          id: 5,
          name: "Chlorthalidone",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Long-acting thiazide-like",
          price: 17.99,
          dosage: "25mg"
        },
        {
          id: 6,
          name: "Torsemide (Demadex)",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Loop diuretic",
          price: 21.99,
          dosage: "10mg"
        },
        {
          id: 7,
          name: "Amiloride",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Potassium-sparing diuretic",
          price: 20.99,
          dosage: "5mg"
        },
        {
          id: 8,
          name: "Indapamide",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Thiazide-like diuretic",
          price: 22.99,
          dosage: "2.5mg"
        },
        {
          id: 9,
          name: "Metolazone (Zaroxolyn)",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Thiazide-like diuretic",
          price: 23.99,
          dosage: "5mg"
        },
        {
          id: 10,
          name: "Triamterene",
          image: require('../../../assets/images/diuretics.jpg'),
          description: "Potassium-sparing diuretic",
          price: 19.99,
          dosage: "37.5mg"
        }
      ],

      Antifungals: [
        {
          id: 1,
          name: "Fluconazole (Diflucan)",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Systemic antifungal treatment",
          price: 25.99,
          dosage: "150mg"
        },
        {
          id: 2,
          name: "Terbinafine (Lamisil)",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "For nail fungus treatment",
          price: 28.99,
          dosage: "250mg"
        },
        {
          id: 3,
          name: "Itraconazole (Sporanox)",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Broad-spectrum antifungal",
          price: 32.99,
          dosage: "100mg"
        },
        {
          id: 4,
          name: "Ketoconazole",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Topical and oral antifungal",
          price: 24.99,
          dosage: "200mg"
        },
        {
          id: 5,
          name: "Nystatin",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "For candida infections",
          price: 19.99,
          dosage: "500,000 units"
        },
        {
          id: 6,
          name: "Voriconazole (Vfend)",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Advanced antifungal therapy",
          price: 45.99,
          dosage: "200mg"
        },
        {
          id: 7,
          name: "Clotrimazole",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Topical antifungal cream",
          price: 15.99,
          dosage: "1% cream"
        },
        {
          id: 8,
          name: "Miconazole",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Multi-use antifungal",
          price: 16.99,
          dosage: "2% cream"
        },
        {
          id: 9,
          name: "Amphotericin B",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "For severe fungal infections",
          price: 52.99,
          dosage: "50mg"
        },
        {
          id: 10,
          name: "Caspofungin (Cancidas)",
          image: require('../../../assets/images/antifungals.jpg'),
          description: "Advanced systemic antifungal",
          price: 58.99,
          dosage: "50mg"
        }
      ],

      Antimalarials: [
        {
          id: 1,
          name: "Chloroquine (Aralen)",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Classic antimalarial treatment",
          price: 26.99,
          dosage: "500mg"
        },
        {
          id: 2,
          name: "Atovaquone/Proguanil (Malarone)",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Prevention and treatment",
          price: 45.99,
          dosage: "250mg/100mg"
        },
        {
          id: 3,
          name: "Mefloquine (Lariam)",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Weekly antimalarial",
          price: 38.99,
          dosage: "250mg"
        },
        {
          id: 4,
          name: "Primaquine",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Prevents malaria relapses",
          price: 32.99,
          dosage: "15mg"
        },
        {
          id: 5,
          name: "Artemether/Lumefantrine (Coartem)",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Combination therapy",
          price: 42.99,
          dosage: "20mg/120mg"
        },
        {
          id: 6,
          name: "Doxycycline",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Preventive antimalarial",
          price: 28.99,
          dosage: "100mg"
        },
        {
          id: 7,
          name: "Quinine Sulfate",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Severe malaria treatment",
          price: 35.99,
          dosage: "324mg"
        },
        {
          id: 8,
          name: "Artesunate",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Severe malaria therapy",
          price: 48.99,
          dosage: "60mg"
        },
        {
          id: 9,
          name: "Pyrimethamine (Daraprim)",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Anti-parasitic treatment",
          price: 39.99,
          dosage: "25mg"
        },
        {
          id: 10,
          name: "Amodiaquine",
          image: require('../../../assets/images/antimalaria.png'),
          description: "Combination malaria therapy",
          price: 36.99,
          dosage: "200mg"
        }
      ],

      Bronchodilators: [
        {
          id: 1,
          name: "Albuterol (Ventolin)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Quick-relief inhaler",
          price: 29.99,
          dosage: "90mcg/actuation"
        },
        {
          id: 2,
          name: "Salmeterol (Serevent)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Long-acting beta agonist",
          price: 45.99,
          dosage: "50mcg/dose"
        },
        {
          id: 3,
          name: "Tiotropium (Spiriva)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Long-acting anticholinergic",
          price: 52.99,
          dosage: "18mcg"
        },
        {
          id: 4,
          name: "Formoterol (Foradil)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Long-acting bronchodilator",
          price: 48.99,
          dosage: "12mcg"
        },
        {
          id: 5,
          name: "Ipratropium (Atrovent)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Short-acting anticholinergic",
          price: 38.99,
          dosage: "20mcg/puff"
        },
        {
          id: 6,
          name: "Indacaterol (Arcapta)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Ultra-long-acting beta agonist",
          price: 55.99,
          dosage: "75mcg"
        },
        {
          id: 7,
          name: "Aclidinium (Tudorza)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Maintenance bronchodilator",
          price: 51.99,
          dosage: "400mcg"
        },
        {
          id: 8,
          name: "Umeclidinium (Incruse)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Once-daily LAMA",
          price: 54.99,
          dosage: "62.5mcg"
        },
        {
          id: 9,
          name: "Glycopyrrolate (Seebri)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Long-acting muscarinic antagonist",
          price: 49.99,
          dosage: "15.6mcg"
        },
        {
          id: 10,
          name: "Olodaterol (Striverdi)",
          image: require('../../../assets/images/Bronchodilators.jpg'),
          description: "Long-acting beta-2 agonist",
          price: 53.99,
          dosage: "2.5mcg/puff"
        }
      ],

      Antiemetics: [
        {
          id: 1,
          name: "Ondansetron (Zofran)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Powerful anti-nausea medication",
          price: 32.99,
          dosage: "4mg"
        },
        {
          id: 2,
          name: "Promethazine (Phenergan)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Multi-purpose antiemetic",
          price: 24.99,
          dosage: "25mg"
        },
        {
          id: 3,
          name: "Metoclopramide (Reglan)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Gastric motility enhancer",
          price: 28.99,
          dosage: "10mg"
        },
        {
          id: 4,
          name: "Granisetron (Kytril)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "5-HT3 receptor antagonist",
          price: 45.99,
          dosage: "1mg"
        },
        {
          id: 5,
          name: "Domperidone",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Dopamine antagonist",
          price: 26.99,
          dosage: "10mg"
        },
        {
          id: 6,
          name: "Palonosetron (Aloxi)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Long-acting antiemetic",
          price: 52.99,
          dosage: "0.5mg"
        },
        {
          id: 7,
          name: "Aprepitant (Emend)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "NK1 receptor antagonist",
          price: 48.99,
          dosage: "125mg"
        },
        {
          id: 8,
          name: "Dolasetron (Anzemet)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Post-operative nausea control",
          price: 42.99,
          dosage: "50mg"
        },
        {
          id: 9,
          name: "Scopolamine Patch",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Motion sickness prevention",
          price: 35.99,
          dosage: "1.5mg"
        },
        {
          id: 10,
          name: "Dronabinol (Marinol)",
          image: require('../../../assets/images/antiemetics.jpg'),
          description: "Cannabis-based antiemetic",
          price: 56.99,
          dosage: "2.5mg"
        }
      ],

      Immunosuppressants: [
        {
          id: 1,
          name: "Tacrolimus (Prograf)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Transplant rejection prevention",
          price: 89.99,
          dosage: "1mg"
        },
        {
          id: 2,
          name: "Cyclosporine (Neoral)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Organ transplant medication",
          price: 95.99,
          dosage: "100mg"
        },
        {
          id: 3,
          name: "Mycophenolate (CellCept)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Prevents organ rejection",
          price: 82.99,
          dosage: "500mg"
        },
        {
          id: 4,
          name: "Azathioprine (Imuran)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Autoimmune disease treatment",
          price: 75.99,
          dosage: "50mg"
        },
        {
          id: 5,
          name: "Sirolimus (Rapamune)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Kidney transplant medication",
          price: 92.99,
          dosage: "1mg"
        },
        {
          id: 6,
          name: "Everolimus (Zortress)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Advanced immunosuppressant",
          price: 98.99,
          dosage: "0.75mg"
        },
        {
          id: 7,
          name: "Methotrexate",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Autoimmune condition treatment",
          price: 68.99,
          dosage: "2.5mg"
        },
        {
          id: 8,
          name: "Adalimumab (Humira)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Biological immunosuppressant",
          price: 125.99,
          dosage: "40mg/0.8mL"
        },
        {
          id: 9,
          name: "Rituximab (Rituxan)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Monoclonal antibody therapy",
          price: 135.99,
          dosage: "10mg/mL"
        },
        {
          id: 10,
          name: "Basiliximab (Simulect)",
          image: require('../../../assets/images/immunosuppressants.jpg'),
          description: "Induction immunosuppressant",
          price: 145.99,
          dosage: "20mg"
        }
      ]
      

  };
  