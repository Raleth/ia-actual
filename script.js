document.addEventListener('DOMContentLoaded', function () {
    const subtemas = document.querySelectorAll('.submenu a');
    const contenedor = document.getElementById('contenido');

    // --- MODO OSCURO ---
    const btnOscuro = document.getElementById('btn-modo-oscuro');
    const temaGuardado = localStorage.getItem('tema') || 'claro';

    // Función para aplicar tema
    function aplicarTema(tema) {
        if (tema === 'oscuro') {
            document.body.classList.add('dark-mode');
            btnOscuro.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            btnOscuro.textContent = '🌙';
        }
        localStorage.setItem('tema', tema);
    }

    // Carga inicial según lo guardado
    aplicarTema(temaGuardado);

    // Al hacer click alterna
    btnOscuro.addEventListener('click', () => {
        const nuevo = document.body.classList.contains('dark-mode') ? 'claro' : 'oscuro';
        aplicarTema(nuevo);
    });


    const contenidos = {
        'Historia y Evolucion': `
            <h2>Historia y Evolucion</h2>
            <img src="imagenes/historia.png" alt="Historia IA" class="subtema-img">
            <p>La historia de la inteligencia artificial (IA) comienza a mediados del siglo XX, cuando Alan Turing propuso en 1950 su famoso “Test de Turing” para evaluar si una máquina puede exhibir comportamiento inteligente indistinguible del humano. En 1956, la conferencia de Dartmouth, organizada por John McCarthy, Marvin Minsky y otros pioneros, marcó el nacimiento oficial del campo. Durante las décadas siguientes hubo avances en sistemas simbólicos basados en reglas (IA simbólica), pero también periodos de escaso financiamiento y entusiasmo conocidos como “inviernos de la IA” (finales de los 70 y principios de los 90).</p>
            <p>El resurgimiento llegó con el auge del <strong>machine learning</strong> en los años 90 y, sobre todo, con el <strong>deep learning</strong> desde 2010. Gracias al aumento del poder de cómputo y la disponibilidad de grandes volúmenes de datos, surgieron aplicaciones prácticas: reconocimiento de voz, visión por computador y procesamiento de lenguaje natural. Hoy la IA es una disciplina consolidada, con investigadores combinando enfoques simbólicos y estadísticos para resolver problemas cada vez más complejos.</p>
        `,
        'Tipos de I.As': `
            <h2>Tipos de I.As</h2>
            <img src="imagenes/tipos.jpg" alt="Tipos IA" class="subtema-img">
            <p>Existen varias formas de clasificar los sistemas de IA:</p>
            <h3>1. Por nivel de capacidad</h3>
            <ul>
              <li><strong>IA Estrecha (Narrow AI o ANI)</strong>: Especializada en tareas concretas (ej. recomendadores de contenido, diagnósticos médicos específicos).</li>
              <li><strong>IA General (AGI)</strong>: Hipotética, con capacidad de razonar y aprender en cualquier dominio, como un humano.</li>
              <li><strong>Superinteligencia (ASI)</strong>: Nivel superior al intelecto humano en todos los ámbitos; aún teórica.</li>
            </ul>
            <h3>2. Por enfoque metodológico</h3>
            <ul>
              <li><strong>Simbólica (IA clásica)</strong>: Representación del conocimiento mediante reglas lógicas.</li>
              <li><strong>Conexionista</strong>: Inspirada en el cerebro humano, basa sus cálculos en redes neuronales.</li>
              <li><strong>Evolutiva</strong>: Utiliza algoritmos inspirados en la evolución (algoritmos genéticos) para optimizar soluciones.</li>
            </ul>
            <p>Cada tipo tiene sus fortalezas: la IA simbólica ofrece explicabilidad, el enfoque conexionista destaca en reconocimiento de patrones y la IA evolutiva es útil en optimización compleja.</p>
        `,
        'Usos Medicos': `
            <h2>Usos Médicos</h2>
            <img src="imagenes/medicina.webp" alt="Medicina IA" class="subtema-img">
            <ul>
              <li><strong>Diagnóstico por imagen</strong>: Algoritmos que analizan radiografías, resonancias magnéticas o TC para detectar anomalías (tumores, fracturas) con precisión comparable o superior a la humana.</li>
              <li><strong>Predicción de riesgos</strong>: Modelos que, a partir de historiales clínicos y datos genómicos, estiman la probabilidad de enfermedades como cáncer, diabetes o insuficiencia cardíaca.</li>
              <li><strong>Planificación de tratamientos</strong>: Sistemas de apoyo a la decisión que sugieren protocolos personalizados según características del paciente.</li>
              <li><strong>Descubrimiento de fármacos</strong>: Uso de IA para identificar compuestos prometedores y simular su interacción con proteínas, acelerando la investigación.</li>
              <li><strong>Telemedicina y asistentes virtuales</strong>: Chatbots y plataformas que monitorizan síntomas y guían al paciente antes de una consulta presencial.</li>
            </ul>
            <p>Estos usos reducen costos, optimizan recursos y mejoran la calidad y velocidad de la atención.</p>
        `,
        'Industria y Negocios': `
            <h2>Industria y Negocios</h2>
            <img src="imagenes/industria.jpg" alt="Industria IA" class="subtema-img">

            <ul>
              <li><strong>Automatización de procesos</strong>: Robots y sistemas integrados que ejecutan tareas repetitivas en fábricas, aumentando eficiencia y seguridad.</li>
              <li><strong>Mantenimiento predictivo</strong>: Sensores y modelos de aprendizaje que anticipan fallos en maquinaria, reduciendo tiempos de inactividad.</li>
              <li><strong>Optimización de la cadena de suministro</strong>: Algoritmos que ajustan inventarios, rutas de transporte y calendarios de producción en tiempo real.</li>
              <li><strong>Análisis de datos y BI</strong>: Plataformas que extraen patrones de grandes volúmenes de información para tomar decisiones estratégicas.</li>
              <li><strong>Atención al cliente inteligente</strong>: Chatbots y sistemas de recomendación que personalizan ofertas y resuelven consultas sin intervención humana.</li>
            </ul>
            <p>El resultado es mayor agilidad, reducción de costos y ventaja competitiva en mercados globales.</p>
        `,
        'Problemas Eticos': `
            <h2>Problemas Éticos</h2>
            <img src="imagenes/etica.jpg" alt="Etica IA" class="subtema-img">

            <ul>
              <li><strong>Sesgo algorítmico</strong>: Modelos que reproducen o amplifican prejuicios presentes en los datos de entrenamiento, provocando discriminación en decisiones de crédito, selección de personal o justicia penal.</li>
              <li><strong>Privacidad y vigilancia</strong>: Reconocimiento facial y análisis de comportamiento al servicio de la seguridad pueden vulnerar derechos fundamentales y facilitar el control masivo.</li>
              <li><strong>Transparencia y explicabilidad</strong>: Muchos sistemas de deep learning son “cajas negras”; esto dificulta entender por qué toman ciertas decisiones críticas.</li>
              <li><strong>Responsabilidad legal</strong>: Asignar la culpa cuando un sistema autónomo comete un error (accidentes de vehículos, diagnósticos equivocados) sigue siendo un área gris.</li>
              <li><strong>Desplazamiento laboral</strong>: La automatización de tareas rutinarias amenaza empleos tradicionales, exigiendo una redefinición de roles y planes de formación.</li>
            </ul>
        `,
        'Regulaciones Actuales': `
            <h2>Regulaciones Actuales</h2>
            <img src="imagenes/regulacion.webp" alt="Regulacion IA" class="subtema-img">

            <ul>
              <li><strong>Unión Europea (Reglamento de IA)</strong>: Clasifica sistemas por nivel de riesgo y exige evaluaciones de impacto, transparencia y supervisión humana en aplicaciones críticas.</li>
              <li><strong>UNESCO y OCDE</strong>: Principios universales de ética en IA: imparcialidad, protección de datos y responsabilidad.</li>
              <li><strong>Ley 1581/2012 (Colombia)</strong>: Estándares para tratamiento de datos sensibles, sin regular IA de forma explícita pero aplicable.</li>
              <li><strong>Proyectos de ley en Colombia</strong>: Iniciativas para un “Marco de Ética y Governance de IA” con auditorías algorítmicas y sanciones por sesgos.</li>
              <li><strong>Normas ISO (SC 42)</strong>: En desarrollo, para guiar gestión, evaluación y aseguramiento de calidad en sistemas de IA.</li>
            </ul>
        `
    };

    subtemas.forEach(subtema => {
        subtema.addEventListener('click', e => {
            e.preventDefault();
            const clave = subtema.textContent.trim();
            // efecto de desvanecido
            contenedor.style.opacity = 0;
            setTimeout(() => {
                contenedor.innerHTML = contenidos[clave] || `<h2>${clave}</h2><p>Contenido no disponible.</p>`;
                contenedor.style.opacity = 1;
            }, 300);
        });
    });
});
