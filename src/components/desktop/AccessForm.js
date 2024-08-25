import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./AccessForm.css";

function AccessForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      <h1>jjj {process.env.REACT_APP_EMAILJS_SERVICE_ID}</h1>
      <p className="desktop-access-text">
        Servicios de Asesoramiento: Un enfoque personalizado para alcanzar tus
        objetivos Cuando hablamos de entrenamiento y nutrición, el éxito radica
        en la planificación y en cómo se adaptan las estrategias a tu vida y
        necesidades. A continuación, te detallo cómo trabajaremos juntos para
        asegurarnos de que alcances tus metas de la forma más eficiente posible.
        1. Establecimiento de Objetivos y Planificación a Medio o Largo Plazo Lo
        primero que haremos es establecer tus objetivos, ya sea a medio o largo
        plazo. Aquí no solo se trata de definir lo que tú quieres lograr, sino
        también de considerar una serie de factores que muchas veces se pasan
        por alto pero son fundamentales para tu éxito. Analizaremos tu nivel
        actual, tus preferencias en cuanto a ejercicios, tus hábitos
        alimenticios, tu experiencia previa, e incluso tu estructura corporal.
        Con todo esto en mente, estableceremos un plan dividido en etapas o
        bloques, diseñados específicamente para ti. Estos bloques, también
        conocidos como macrociclos, son periodos de tiempo que varían en
        duración y están enfocados en conseguir objetivos concretos. Dentro de
        estos macrociclos, trabajaremos con mesociclos, que son unidades más
        específicas y centradas en metas a corto plazo. Finalmente, los
        microciclos son las unidades más pequeñas y detalladas, que suelen durar
        una semana y están orientadas a aplicar la sobrecarga progresiva. Este
        es el método clave que nos permitirá mejorar poco a poco. Con el excel
        preparado que tenemos entre manos, podrás observar muchisimos parametros
        que muy pocos entrenadores tendrán en cuenta, y es aquí donde nos
        diferenciamos del resto, además estarán a tu disposición más de 200
        videos adjunto al excel de entrenamiento donde aparecen la ejecución de
        cada ejercicio para que no te pierdas en ningún entrenamiento. Puede que
        todo esto te suene a “chino” (sí, lo sé, es un lenguaje bastante
        técnico), pero me gusta que entiendas el porqué de cada paso que damos.
        Quiero que veas la coherencia y lógica detrás de cada decisión, para que
        tengas claro que este proceso está 100% pensado para ti. 2. Nutrición:
        La Clave que Va de la Mano con el Entrenamiento La nutrición es tan
        importante como el entrenamiento, y ambos deben ir de la mano para que
        consigas tus objetivos de la manera más eficiente posible. Una vez que
        completes el formulario de valoración inicial, obtendré información
        clave sobre tus horarios, preferencias alimenticias, si prefieres o no
        usar suplementos, etc. Con estos datos, estructuraré tus menús de forma
        que se adapten a los diferentes días de entrenamiento, descanso y
        descanso activo que planifiquemos. Así, los requerimientos nutricionales
        estarán alineados con las demandas de tu cuerpo en cada momento. Esto no
        solo optimiza tus resultados, sino que también hace que la dieta sea más
        variada y llevadera. Además, te ofreceré opciones de intercambio dentro
        de las comidas similares, para que puedas variar sin salirte de los
        objetivos nutricionales. También te proporcionaré los macronutrientes de
        cada menú. Y sobre la suplementación, quiero que sepas que nunca te
        obligaré a tomar nada. Al final del día, es tu decisión, y es
        completamente posible alcanzar cualquier objetivo con o sin suplementos.
        3. Revisiones: Monitorizando tu Progreso Las revisiones son esenciales
        para ver cómo estás avanzando hacia tus objetivos. Usaremos una carpeta
        compartida en Google Drive, donde registraremos tu evolución de manera
        constante. Subiremos fotos para comparar tu progreso físico y estético,
        y también registraremos datos clave como tu peso corporal, perímetros y
        pliegues. Con esto, podremos calcular tu porcentaje de grasa corporal y
        hacer los ajustes necesarios en tu plan. También valoraremos cómo se
        están recuperando tus grupos musculares entre entrenamientos, lo cual es
        crucial para la preparación de los mesociclos futuros. Aunque cada
        mesociclo tiene una duración concreta, me gusta planificarlos con tiempo
        y basarlos en tu evolución real, por eso es tan importante que rellenes
        la hoja de control de manera constante. Para asegurarnos de que la
        planificación es sostenible a largo plazo, también incluiré un
        cuestionario donde podrás reflejar cómo estás llevando el entrenamiento,
        la dieta y el control del sueño. Esto no solo me ayuda a ajustar el
        plan, sino que también nos permite trabajar juntos para que el proceso
        sea constructivo y efectivo. Después de todo, la sostenibilidad es clave
        para alcanzar cualquier objetivo. Si tienes alguna pregunta o necesitas
        más información, no dudes en escribirme a mi email o rellenar este
        cuestionario. Estoy aquí para ayudarte en cada paso del camino.
      </p>
      <div className="plan-desktop-container" id="asesorias">
        <div className="basic-desktop">
          <h1>PLAN BÁSICO</h1>
          <h2>Entrenamiento</h2>
          <ul>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Rutina de entrenamiento totalmente personalizada.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Formulario inicial para determinar objetivos y preferencias.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Control de objetivos mensual con ajustes personalizados.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Excel básico con +200 videos de ejecución de ejercicios.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento online durante todo el proceso vía WhatsApp o email.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Excel profesional con control de métricas en tiempo real
              (Cuantificación detallada, control de intensidad, control de
              volumen de entrenamiento…)
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento biomecánico del control de movimiento de los
              ejercicios realizados.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Dieta o pauta alimenticia personalizada.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Menús adaptados a diferentes días de entrenamiento, descanso y
              descanso activo.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Información sobre los macronutrientes.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Opciones de intercambio dentro de las comidas similares para poder
              tener más opciones del menú.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento sobre suplementación (en el caso que el cliente
              decida usarlos)
            </li>
          </ul>
        </div>
        <div className="premium-desktop">
          <h1>PLAN PREMIUM</h1>
          <h2>Entrenamiento + Control de sobrecarga progresiva</h2>
          <ul>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Rutina de entrenamiento totalmente personalizada.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Formulario inicial para determinar objetivos y preferencias.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Control de objetivos cada 15 días con ajustes personalizados.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Excel básico con +200 videos de ejecución de ejercicios.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento online durante todo el proceso vía WhatsApp o email.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Excel profesional con control de métricas en tiempo real
              (Cuantificación detallada, control de intensidad, control de
              volumen de entrenamiento…)
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento biomecánico del control de movimiento de los
              ejercicios realizados.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Dieta o pauta alimenticia personalizada.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Menús adaptados a diferentes días de entrenamiento, descanso y
              descanso activo.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Información sobre los macronutrientes.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Opciones de intercambio dentro de las comidas similares para poder
              tener más opciones del menú.
            </li>
            <li className="non-included">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: "red", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento sobre suplementación (en el caso que el cliente
              decida usarlos)
            </li>
          </ul>
        </div>
        <div className="total-desktop">
          <h1>PLAN TOTAL</h1>
          <h2>Entrenamiento + Control de sobrecarga progresiva + Nutrición</h2>
          <ul>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Rutina de entrenamiento totalmente personalizada.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Formulario inicial para determinar objetivos y preferencias.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Control de objetivos cada 15 días con ajustes personalizados.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Excel básico con +200 videos de ejecución de ejercicios.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento online durante todo el proceso vía WhatsApp o email.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Excel profesional con control de métricas en tiempo real
              (Cuantificación detallada, control de intensidad, control de
              volumen de entrenamiento…)
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento biomecánico del control de movimiento de los
              ejercicios realizados.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Dieta o pauta alimenticia personalizada.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Menús adaptados a diferentes días de entrenamiento, descanso y
              descanso activo.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Información sobre los macronutrientes.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Opciones de intercambio dentro de las comidas similares para poder
              tener más opciones del menú.
            </li>
            <li className="included">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "0.5vw" }}
              />{" "}
              Asesoramiento sobre suplementación (en el caso que el cliente
              decida usarlos)
            </li>
          </ul>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="access-form-desktop">
        <label>Nombre</label>
        <input type="text" name="user_firstname" required />
        <label>Apellidos</label>
        <input type="text" name="user_lasttname" required />
        <label>Objetivo Principal</label>
        <textarea name="user_objectives" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Número Móvil</label>
        <input type="text" name="user_phonenumber" required />
        <label>¿Experiencia previa en asesorias personalizadas?</label>
        <input type="radio" id="yes" name="user_response" value="Yes" />
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" name="user_response" value="No" />
        <label htmlFor="no">No</label>
        <label>Disponibilidad</label>
        <input type="text" name="user_disponibility" required />
        <label>¿Como nos has encontrado?</label>
        <input
          type="radio"
          id="family"
          name="user_found"
          value="Recomendacion de amigo/familiar"
        />
        <label htmlFor="family">Recomendación de amigo/familiar</label>
        <input
          type="radio"
          id="social-media"
          name="user_found"
          value="Redes sociales"
        />
        <label htmlFor="social-media">Redes sociales</label>
        <input
          type="radio"
          id="web-page"
          name="user_found"
          value="Pagina Web"
        />
        <label htmlFor="web-page">Página web</label>
        <label>Comentarios Adicionales</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default AccessForm;
