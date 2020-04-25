import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features2 from "./Features2";
import "./FeaturesSection2.scss";

function FeaturesSection2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <div className="FeaturesSection2__box box">
          <Features2
            columns={4}
            imageRatio="1by1"
            items={[
              {
                title: "1. ouvrir la boite",
                body:
                  "impressions visuelles: nombre de sardines, soin du rangement",
                image: "/img/ouvrir.jpg",
              },
              {
                title: "2. frais ou pas ?",
                body: "évaluer la fraîcheur comme premier critère du savoureux",
                image: "/img/pasfrais.jpg",
              },
              {
                title: "3. les recettes",
                body:
                  "la cuisson, les huiles, les garnitures: toute une cuisine ",
                image: "/img/recettes.jpg",
              },
              {
                title: "4. les tactiques",
                body: "stratégies de sélection des boites et de stockage",
                image: "/img/tactiques.jpg",
              },
            ]}
          ></Features2>
        </div>
        <div className="container is-fluid is-flex">
          <div className="content is-medium">
            <h3>1. À l'ouverture de la boite</h3>

            <p>
              Quasiment toutes les boites sont aujourd’hui à ouverture facile,
              dérivées du Tirvite, anneau sur couvercle préincisé, breveté par
              Ermal Fraze en 1967. Toute boite abimée, percée ou oxydée est
              perdue si non étanche à l’air.
            </p>
            <p>
              L’odeur immédiate à l’ouverture est un bon indicateur de la
              fraîcheur de la sardine, l’odeur iodée d’algue marine
              caractéristique du poisson extra-frais n’est présente que si la
              mise en boite a été réalisée en moins de 24h. Dans la plupart des
              cas, l’odeur est neutre, absente, souvent couverte par le parfum
              des garnitures.
            </p>
            <p>
              Visuellement, on observe la découpe, l’alignement et le taux
              d’écorchures des sardines. Elles sont tête-bêche et dites rangées
              « au blanc », si leur ventre brillant est tourné vers l’ouverture,
              ou « au bleu » si leur dos et leurs stries sont visibles. La
              position au bleu est considérée moins qualitative car elle sert
              souvent à dissimuler les écorchures du côté blanc, plus fragile.
              L’éviscération doit être parfaite et la brillance est un gage de
              fraîcheur.
            </p>
            <p>
              Dans une boite de taille standard (1/6 P25 115g en FR, 1/4 CLUB
              125g en ES,PT), on attend entre 4 et 6 sardines, en dessous de 4
              les grosses sardines sont moins agréables en bouche, au delà de 6
              ce sont des sardinettes. Les boites bas de gamme mettent parfois
              des queues de grosses sardines en guise de sardines - il n’y a pas
              tous les jours à la criée des sardines de taille idéale.
              Globalement, un rendu visuel agréable est un signe qualitatif de
              travail soigné.
            </p>

            <h3>2. Frais ou surgelé ?</h3>
            <p>
              La sardine, comme tous les petits pélagiques, se dégrade très
              rapidement, elle se conserve de quelques heures à l'air libre, à
              quelques jours en réfrigération, jusqu'à 4-6 mois en congélation.
              C'est une course contre la montre que toute la filière mène du
              pêcheur à la conserverie: glace dans les bateaux, sur la criée et
              dans les camions réfrigérés, mise en boite rapide ou chambres
              froides dans les conserveries. Avec les temps de pêche, de
              transport entre le port et la conserverie, et le temps de
              traitement en usine, il est difficile de faire la mise en boîte en
              moins de 24h pour garder la richesse de saveur de la sardine tout
              juste débarquée. Seules les petites conserveries artisanales en
              lien étroit avec les pécheurs à proximité peuvent réaliser cet
              exploit. En usine en France, la norme la plus stricte, Label
              Rouge, autorise J+2 au maximum, soit 72h après la pêche.
            </p>
            <p>
              La gestion de la variation des flux des arrivages de poissons
              frais représente un coût logistique important pour les usines:
              personnel intérimaire en supplément en pleine saison, et creux
              d'activité en basse saison. C'est un surcoût de travail qui
              explique la différence de prix par rapport aux usines qui peuvent
              lisser les flux en décongelant des stocks ou par l'importation de
              sardines surgelées du Maroc. Les achats de sardines par les 10
              conserveries françaises sont à 39% fraiches, 61% congelées. Le
              port de Douarnenez dispose d'une société ultra-moderne - Mak-Froid
              - qui congèle 10t/heure, notamment les surplus débarqués en haute
              saison. Bref, les avantages du surgelé sont tels qu'il a envahi
              toute la production bas de gamme.
            </p>
            <p>
              Les progrès de la surgélation (rapidement à -35° puis
              stabilisation à -18°) la rendent plus difficilement détectable;
              cependant la surgélation-décongélation modifie toujours les
              qualités nutritionnelles et organoleptiques de la sardine, plus ou
              moins selon la qualité de la surgélation, la décongélation à
              l'air, à l'eau, en four ou en micro-onde. Au goût, la saveur est
              dégradée et la capacité d’absorption de l’huile par la chair
              devient très faible, le stockage pour affinage devient
              complètement inopérant.
            </p>

            <h3>3. Les recettes: cuisson, huiles et garnitures</h3>

            <p>
              La pré-cuisson consiste selon les traditions et les conserveries
              en un bain de saumure, une friture à l’huile (recette dite « à
              l’ancienne »), un passage en four, au grill, à la vapeur. Elle
              permet de donner un goût spécifique, et de contrôler les teneurs
              en eau et en graisse. Elle est suivie, selon les processus, soit
              d’un égouttage soit d’un séchage avant la mise en boite.{" "}
            </p>
            <p>
              Ensuite l’appertisation commence par le sertissage des boites pour
              assurer l’étanchéité et se poursuit dans un stérilisateur, ou
              autoclave, pour un traitement thermique à température supérieure à
              100°C, qui s’effectue sous pression. Le chauffage détruit les
              micro-organismes et termine la cuisson. La tendance actuelle est
              d’appliquer des temps de chauffage les plus courts possible, à
              très haute température, afin de préserver au mieux les qualités
              organoleptiques et nutritionnelles des produits.
            </p>
            <p>
              L'huile représente 15 à 30% d'une boite, elle est dans un rapport
              d'échange avec la sardine: elle la parfume et se trouve en retour
              parfumée après quelques mois ou années d'affinage. En France,
              l’huile d’olive est l’huile de choix pour les deux-tiers du
              marché. Les cours de l'huile d'olive étant hauts depuis des
              années, les commandes en gros volumes se font sur des huiles de
              qualité très standard et sans grand caractère. Les huiles
              végétales de tournesol, de colza ou d’arachide sont moins riches
              et parfumées que l’huile d’olive et permettent souvent de mieux
              mettre en valeur la saveur brute de la sardine. Elles sont moins
              coûteuses et aussi plus légères et digestes que l’huile d’olive -
              une bonne alternative.
            </p>
            <p>
              Les garnitures ne sont pas forcément du goût des puristes, les
              saveurs ajoutées doivent se mélanger à la sardine sans l’écraser,
              c’est un équilibre délicat. Les conserveries créent des nouvelles
              recettes pour renouveler leurs gammes et suivre les modes. Les 3
              accompagnements dominants sont la tomate, le citron et le piment.
              La sauce tomate est souvent industrielle et trop sucrée, sauf chez
              certains artisans portugais qui fabriquent leur sauce maison. Le
              choix de fleurissage est très vaste: oignons, algues, clous de
              girofle, poivrons, câpres etc.
            </p>

            <p>
              Les sardines sont le plus souvent utilisées comme ingrédients,
              elles sont également dégustées brutes par les puristes. Avec
              300-500 calories par boite, elle peuvent être partagées à
              l’apéritif, en entrée ou en salades, mais aussi servies en plat
              principal, en couvrant une bonne partie des apports quotidiens
              recommandés. Elles servent également à la réalisation de plats
              complets à base de pâtes, de riz ou encore de tartes, de quiches,
              etc.
            </p>

            <h3>4. Les tactiques du sardinophile</h3>

            <p>
              Comment devient-on sardinophile ? Par tradition familiale, par les
              souvenirs d’enfance, par rencontre avec une boite d'exception, ou
              avec un sardinophile prosélyte… Aussi par calcul nutritionnel ou
              connaissance du bon rapport bénéfices/risques. La sardine contient
              des protéines rares, des lipides de qualité (oméga 3), des
              vitamines et oligo-éléments essentiels. Elle a des taux de mercure
              et de toxiques faibles car elle est pêchée jeune (1-2 ans) et se
              trouve en début de chaine alimentaire; le thon en contient 15 fois
              plus.
            </p>
            <p>
              Le sardinophile développe des tactiques de sélection des boites.
              Il recherche sur les étiquettes les informations clés, marqueurs
              de qualité. D’abord, le millésime ou la date de fabrication (qu'il
              faut parfois déduire de la DLUO - Date Limite d'Utilisation
              Optimale - 5 ans après fabrication). Il préfère sardines les
              sardines de pleine saison, pêchées bien grasses en été. La mention
              « sardines fraîches » garantit l’absence de congélation.
            </p>
            <p>
              {" "}
              La mention du nom du bateau est un gage de qualité qui permet de
              s'assurer que le poisson vient de l'un des 27 bateaux bolincheurs
              de la flotte française. La bolinche ou senne coulissante est un
              filet encerclant conçu pour la capture des poissons pélagiques,
              elle permet de capturer les sardines sans trop les abîmer tandis
              que la pêche en chalut pélagique, avec un filet remorqué en forme
              d’entonnoir, compresse, écrase, écorche le poisson. Les bateaux
              bolincheurs ont une taille réglementaire toujours inférieure à 17m
              et embarquent entre 2 et 5 marins selon leur niveau d’équipement.{" "}
            </p>
            <p>
              La mention "à la main", c'est la main des ouvrières reproduisant
              le geste des Penn Sardin d'antan. En 1880, 160 usines échelonnées
              de Trébeurden au bassin d’Arcachon préparent les poissons bleus,
              débarqués par 15 000 à 20 000 pêcheurs et travaillés par autant
              d’ouvrières. Aujourd'hui seulement 1000 à 2000 sardinières
              emboitent un tonnage équivalent en une série de gestes très
              techniques et répétitifs.
            </p>
            <p>
              A la longue, le sardinophile se fait une opinion sur les marques
              qui deviennent ses favorites, même si la constance d'une marque en
              qualité n'est pas toujours parfaite selon les années ou les
              arrivages. De plus, l'art du marketing parvient souvent à
              distordre les perceptions, c'est la raison d'être de ce site:
              apprendre à discerner. A lire notre page Panorama France, à goûter
              notre Pack Sardinophile, un partage de nos boites favorites.
            </p>
            <p>
              Pour le stockage, un espace dédié dans un placard permet de ranger
              les boites par années, par millésimes et de bien gérer les stocks.
              Mieux encore, en cave, pour garantir des conditions de température
              et d’humidité optimales - même si les sardines ne sont pas - et de
              loin - aussi sensibles que le vin. Le but est de laisser passer au
              moins un an d'affinage avant consommation, le temps de "confire"
              la sardine dans l'huile. Pour les plus patients, 2-3 ans de garde
              semble une mesure optimale, un bon compromis coût de stockage /
              amélioration de la saveur. Au delà de 5 ans, au delà de la DLUO,
              il y a risque d'oxydation de la boite et une évolution de plus en
              plus lente de l’affinage. Il est recommandé de retourner les
              boites régulièrement, au moins tous les 6 mois, pour répartir
              l’huile uniformément.
            </p>

            <h3>4 bis. Le sardinophile à la dérive</h3>
            <p>
              La passion peut conduire le sardinophile aux confins du normal et
              du pathologique:
            </p>

            <ul>
              <li>
                il peut consommer 2 boites par semaine, 100 boites par an, même
                pendant les fêtes.
              </li>
              <li>
                en boutique, il manipule et retourne toutes les boites pour
                trouver les bonnes dates.
              </li>
              <li>
                il sert les sardines en plat principal avec un discours en
                galimatias digne d’un œnophile.
              </li>
              <li>
                il aime suivre « ses » bateaux bolincheurs en ligne,{" "}
                <a href="https://www.marinetraffic.com/fr/ais/details/ports/14967">
                  {" "}
                  à Douarnenez par exemple.
                </a>{" "}
              </li>
              <li>
                il conserve ses sardines en cave, bien classées et les retourne
                bien trop souvent.
              </li>
              <li>
                il ouvre une boite de plus de 5 ans pour les grandes occasions
                et « le grand frisson ».
              </li>
              <li>
                il collectionne les boites en séries limitées et devient
                conséquemment puxisardinophile.
              </li>
              <li>
                il prend un coup de blues devant l’indifférence des jeunes
                générations pour sa passion.
              </li>
              <li>
                il fustige la pollution des océans et la farine de sardines pour
                engraisser les saumons.
              </li>
              <li>
                quand il voyage, il fait des kilomètres pour trouver des
                sardines en conserve inédites.
              </li>
              <li>
                il suit l’actualité des sardines sur les réseaux, et dans la
                lettre du sardinophile.
              </li>
              <li>
                il prend un air passablement snob et dégoûté en présence de
                sardines bas de gamme.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection2;
