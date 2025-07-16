const malla = [
  // 1º Semestre
  [
    { id: "ps_base_sociocultural", nombre: "Bases Socioculturales de la Psicología" },
    { id: "ps_comunicacion_academica", nombre: "Comunicación Académica y Pensamiento Científico" },
    { id: "ps_historia_psicologia", nombre: "Introducción Histórica a la Psicología" },
    { id: "ps_neurobiologia", nombre: "Neurobiología" },
    { id: "ps_ingles1", nombre: "Inglés I" },
    { id: "ps_taller_etica", nombre: "Taller de Ética y Convivencia Democrática" }
  ],

  // 2º Semestre
  [
    { id: "ps_teoria_psico1", nombre: "Teoría Psicológica I", prerrequisitos: ["ps_historia_psicologia"] },
    { id: "ps_neuro_cognitiva", nombre: "Neurociencia Cognitiva y Afectiva", prerrequisitos: ["ps_neurobiologia"] },
    { id: "ps_ingles2", nombre: "Inglés II", prerrequisitos: ["ps_ingles1"] },
    { id: "ps_taller_relaciones", nombre: "Taller de Relaciones Humanas y Desarrollo Personal" },
    { id: "ps_opt_teologica1", nombre: "Optativo Formación Teológica" }
  ],

  // 3º Semestre
  [
    { id: "ps_teoria_psico2", nombre: "Teoría Psicológica II", prerrequisitos: ["ps_teoria_psico1"] },
    { id: "ps_psicologia_social1", nombre: "Psicología Social I" },
    { id: "ps_desarrollo_infancia", nombre: "Desarrollo Humano en la Infancia" },
    { id: "ps_metodologia_cuantitativa", nombre: "Metodología Cuantitativa" },
    { id: "ps_opt_formacion_general1", nombre: "Optativo Formación General" }
  ],

  // 4º Semestre
  [
    { id: "ps_teoria_psico3", nombre: "Teoría Psicológica III" },
    { id: "ps_psicologia_social2", nombre: "Psicología Social II" },
    { id: "ps_desarrollo_adolescencia", nombre: "Desarrollo Humano en la Adolescencia y Juventud" },
    { id: "ps_epistemologia", nombre: "Epistemología y Metodología" },
    { id: "ps_opt_teologica2", nombre: "Optativo Formación Teológica" }
  ],

  // 5º Semestre
  [
    { id: "ps_teoria_psico4", nombre: "Teoría Psicológica IV" },
    { id: "ps_psicopatologia1", nombre: "Psicopatología y Psiquiatría I" },
    { id: "ps_psicologia_educacional", nombre: "Psicología Educacional" },
    { id: "ps_evaluacion_psico1", nombre: "Evaluación Psicológica I" },
    { id: "ps_minimo_area1", nombre: "Mínimo de Área I" }
  ],

  // 6º Semestre
  [
    { id: "ps_psicopatologia2", nombre: "Psicopatología y Psiquiatría II" },
    { id: "ps_psicologia_laboral", nombre: "Psicología Laboral - Organizacional" },
    { id: "ps_psicologia_social_comunitaria", nombre: "Psicología Social-Comunitaria" },
    { id: "ps_minimo_area2", nombre: "Mínimo de Área II" },
    { id: "ps_metodologia_cualitativa", nombre: "Metodología Cualitativa" }
  ],

  // 7º Semestre
  [
    { id: "ps_psicologia_clinica", nombre: "Psicología Clínica" },
    { id: "ps_evaluacion_psico2", nombre: "Evaluación Psicológica II" },
    { id: "ps_minimo_area3", nombre: "Mínimo de Área III" },
    { id: "ps_taller_investigacion", nombre: "Taller de Investigación" },
    { id: "ps_etica_rol", nombre: "Ética y Rol Profesional" }
  ],

  // 8º Semestre
  [
    { id: "ps_minimo_area4", nombre: "Mínimo de Área IV" },
    { id: "ps_electivo_area", nombre: "Electivo de Área" },
    { id: "ps_desarrollo_adultez", nombre: "Desarrollo Humano en la Adultez Media y Mayor" },
    { id: "ps_diseno_intervencion", nombre: "Diseño y Evaluación de Proyectos de Intervención" },
    { id: "ps_estrategias_crisis", nombre: "Estrategias de Acompañamiento en Crisis" }
  ],

  // 9º Semestre
  [
    { id: "ps_prepractica", nombre: "Prepráctica Profesional" },
    { id: "ps_seminario_grado", nombre: "Seminario de Grado" },
    { id: "ps_minimo_area5", nombre: "Mínimo de Área V" },
    { id: "ps_opt_formacion_complementaria1", nombre: "Optativo Formación Complementaria" },
    { id: "ps_opt_formacion_complementaria2", nombre: "Optativo Formación Complementaria" }
  ],

  // 10º Semestre
  [
    { id: "ps_practica", nombre: "Práctica Profesional" },
    { id: "ps_seminario_titulo", nombre: "Seminario de Título" },
    { id: "ps_examen_titulo", nombre: "Examen de Título" },
    { id: "ps_opt_formacion_complementaria3", nombre: "Optativo Formación Complementaria" },
    { id: "ps_opt_formacion_complementaria4", nombre: "Optativo Formación Complementaria" }
  ]
];
