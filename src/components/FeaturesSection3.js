import React from "react";
import Section from "./Section";
import Features3 from "./Features3";

function FeaturesSection3(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <Features3
          items={[
            {
              title: "4 indépendantes",
              subtitle:
                "La Compagnie Bretonne, La belle-iloise, Les Mouettes d'Arvor, La Perle des Dieux",
              iconClass: "fas fa-fish",
              iconColor: "link",
            },
            {
              title: "4 artisanales",
              subtitle:
                "La Quiberonnaise, Jean Burel-Océane, Jean de Luz, Kerbriant",
              iconClass: "fas fa-anchor",
              iconColor: "primary",
            },
            {
              title: "la grande distribution",
              subtitle: "Connétable, Capitaine Cook, Parmentier, Saupiquet",
              iconClass: "fab fa-docker",
              iconColor: "danger",
            },
          ]}
        ></Features3>
        <div className="container is-flex is-fluid">
          <div className="content is-medium">
            <br></br>
            <p>
              <em>
                La sardine, c’est bon an mal an, 80 millions de boites produites
                en France et le double importées. La moitié des ménages français
                achètent des conserves de sardines (autant pour le maquereau
                mais 85% achètent du thon).
              </em>
            </p>
            <p>
              <em>
                Le marché français se distingue par une segmentation par qualité
                dite "haut de gamme" caractérisée par les mentions sur la boite
                du millésime, de "sardines fraiches", "à la main", parfois du
                nom du bateau de pêche, pour un prix de 3 à 4 euros.
              </em>
            </p>
            <p>
              <em>
                Pour débusquer les boites « haut-de-gamme » dans la jungle des
                230 millions de boites vendues chaque année en France sous des
                marques multiples, le sardinophile a dressé un panorama des 10
                conserveries de sardines françaises.
              </em>
            </p>
            <h3>4 conserveries indépendantes et en ligne</h3>
            <p>
              <em>
                4 conserveries familiales avec leur propre réseau de
                distribution en boutiques ou en ligne qui se positionnent dans
                le haut de gamme en produisant en France des sardines fraiches,
                jamais surgelées, dans une dizaine de variations d’huiles et de
                saveurs.
              </em>
            </p>
            <h4>🐟 La Compagnie Bretonne - Furic</h4>
            <p>
              <em>
                à Saint Guénolé - Penmarc’h - 60 employés - 9 boutiques ≈ 1
                million de boites sardines/an
              </em>
            </p>
            <p>
              La Compagnie Bretonne - familiale et indépendante - produit des
              boites de sardines au design sobre, avec des informations
              complètes sur le nom du bateau, le millésime, le port de
              débarquement. La proximité de la conserverie avec le premier port
              sardinier de France à Saint Guénolé, et son savoir-faire, se
              traduit par une régularité remarquable, des sardines fraîches,
              bien préparées et savoureuses.
            </p>
            <h4>🐟 La Belle iloise - Hilliet</h4>
            <p>
              <em>
                Quiberon - 350 employés - 84 boutiques ≈ 3 millions de boites de
                sardines/an.
              </em>
            </p>
            <p>
              La Belle-Iloise, c’est un bon rapport qualité-prix, une belle
              régularité, un réseau indépendant de 84 boutiques colorées dans
              toute la France avec un grand choix de références.
            </p>
            <h4>🐟 Les Mouettes d'Arvor - Gonidec</h4>
            <p>
              <em>
                Concarneau - 50 employés ≈ 3 millions de boites de sardines/an.
              </em>
            </p>
            <p>
              Qualité irrégulière pour une gamme confuse et peu lisible, peu
              axée sur la vente en ligne. Gonidec produit aussi des boites de
              qualité en sous-traitance pour beaucoup de marques d'épiceries
              fines.
            </p>
            <h4>🐟 La Perle des Dieux - Gendreau</h4>
            <p>
              <em>
                Saint Gilles Croix de Vie (Vendée) - 200-300 employés ≈ 6
                millions de boites de sardines/an.
              </em>
            </p>
            <p>
              Comme toutes les conserveries qui essaient de produire à la fois
              du bas de gamme pour les grandes surfaces (sous la marque Le
              Trésor des Dieux) et du haut de gamme en épicerie et en ligne
              (sous la marque La Perle des Dieux), il y a des soucis de
              régularité dans la qualité gustative. Présentation soignée avec de
              belles boites aux motifs variés et des séries millésimées.
            </p>
            <h3>4 petites conserveries artisanales</h3>
            <p>
              <em>
                2 petites conserveries vieillissantes et 2 producteurs de
                verrines en petites séries.
              </em>
            </p>
            <h4>🐟 La Quiberonnaise</h4>
            <p>Quiberon - 10-20 employés ≈ 500 000 boites de sardines/an.</p>
            <p>
              Conserverie artisanale toujours dans son atelier historique à
              Quiberon. Sardines très fraiches, soigneusement rangées, jamais
              décevantes, avec une recette de préparation singulière.
              Distribution dans les bonnes épiceries ou via le site internet.
              Design désuet des boites et du site web.
            </p>
            <h4>🐟 Jean Burel - Océane</h4>
            <p>
              Petite conserverie familiale de qualité à Kérilin près de
              Concarneau, mais distribution très locale. Déménagement prochain
              dans des locaux neufs cofinancés par Breizh Immo.
            </p>
            <h4>🐟 Jean de Luz </h4>
            <p>
              {" "}
              Uniquement en verrines de 320g les sardines Jean de Luz ont un
              mode de préparation particulier qui leur donnent un goût unique.
            </p>
            <h4>🐟 Kerbriant </h4>{" "}
            <p>
              {" "}
              Produit sur place à Douarnenez des verrines de 320g, et
              sous-traite ses boites de sardines à la Compagnie Bretonne.
            </p>
            <h3>Les conserveries de grande distribution</h3>
            <p>
              <em>
                Dans les grandes surfaces, des rayons impressionnants, avec de
                multiples références, mais rien pour le palais délicat du
                sardinophile, la tension sur les prix bas se fait aux dépends de
                la fraicheur et de la qualité.
              </em>
            </p>
            <h4>🐟 Capitaine Cook</h4>
            <p>
              Plozévet - 120 employés ≈ 6 millions de boites de sardines/an.
            </p>
            <p>
              Le groupe Intermarché a intégré toute la filière avec sa propre
              flotte (4 bolincheurs modernes chez Scapêche), son usine de
              Plozévet et la marque Capitaine Cook. La distribution se fait
              exclusivement dans le réseau Intermarché autour de 2€.
            </p>
            <h4>🐟 Connétable - Chancerelle</h4>
            <p>
              Douarnenez - 300-400 employés ≈ 30-40 millions de boites de
              sardines/an.
            </p>
            <p>
              La conserverie Chancerelle produit un volume impressionnant de
              conserves en France sous la marque Connétable - mais plus de la
              moitié de sa production (et de nombreuses marques distributeurs)
              se réalise dans plusieurs de ses usines au Maroc.
            </p>
            <h4>
              🐟 Les grands groupes étrangers importateurs et gestionnaires de
              marques.
            </h4>
            <ul>
              <li>
                Petit Navire et Parmentier: Propriété depuis 2010 du géant
                thaïlandais Thaï Union Group. Plus de ligne de production de
                sardines en France - sardines d'importation bas de gamme.
              </li>
              <li>
                Saupiquet: depuis 2000, filiale du groupe international italien
                Bolton Group qui a fermé successivement toutes ses usines en
                Bretagne. Sardines d'importation bas de gamme.
              </li>
              <li>
                Les marques distributeurs tiennent la moitié du marché des
                grandes surfaces, elles ne se positionnent pas dans le haut de
                gamme et sont fabriquées essentiellement au Maroc.
              </li>
            </ul>
            <h3>Les marques d'importation</h3>
            <ul>
              <li>
                Le Maroc est de loin le premier producteur, assurant 72 % de la
                production mondiale en 2015 - il représente plus de la moitié
                des importations en France sous marques distributeurs ou
                marocaines. Bas de gamme avec parfois de bonnes surprises, par
                chance.
              </li>
              <li>
                L'Espagne produit deux fois plus de sardines que la France et
                possède encore un réseau de petites conserveries de qualité. La
                plus prestigieuse est la Real Conservera Espanola, avec des
                boites extrêmement soignées.
              </li>
              <li>
                Le Portugal possède 14 conserveries de sardines, dont
                quelques-unes perpétuent une tradition artisanale de fraicheur
                et de qualité. Pour faire découvrir ces rares artisans et les
                soutenir, nous avons dégusté et préparé avec le Comptoir du
                Portugal à Bordeaux un 
                <a href="https://www.sardinophile.com/pack-sardinophile">
                  PACK SARDINOPHILE avec 20 boîtes d'exception.
                </a>
              </li>
            </ul>
            <h3>Les marques en réseau bio</h3>
            <p>
              Les marques en réseau bio du meilleur au pire: Compagnie Bretonne,
              Jean de Luz, Algo d'Aure (Jean Burel), Phare d'Eckmhul
              (Chancerelle), Capitaine Nat (Ferrigno).
            </p>
            <p>
              C'est l'huile qui est bio, pas le poisson qui constitue 85% du
              produit. Comme la courbe de contamination des océans poubelles ne
              va pas s'inverser avant longtemps, une piste d'innovation pour les
              conserveries serait de travailler sur une vraie norme bio pour la
              sardine - zones de pêche les plus propres, évaluation des toxiques
              par lot et vente à prix premium des lots les plus purs à
              destination des publics sensibles (femmes enceintes et enfants).
            </p>
            <h3>Les marques de luxe "emballeurs"</h3>
            <p>
              Certaines marques d'épicerie fine "ré-emballent" les produits des
              conserveries: Albert Ménès, Rödel, Hénaff, Pêcheurs d'Islande et
              La Grande Epicerie de Paris sont toutes produites en
              sous-traitance à la conserverie Gonidec, J.C. David chez
              Chancerelle, Courtin chez Furic, les sardines Prunier chez la
              Quiberonnaise, Kerbriant chez la Compagnie Bretonne (Il suffit de
              lire et décoder le{" "}
              <a href="https://fr.openfoodfacts.org/categorie/sardines-a-l-huile/codes-emballeurs">
                code emballeur
              </a>
               obligatoire sur les boites pour attribuer une usine à chaque
              marque).
            </p>
            <p>
              Leurs prix de vente entre 5 et 9 euros la boite ne garantit
              malheureusement pas une qualité supérieure aux meilleures séries
              millésimées des mêmes conserveries: pas de cahier des charges
              spécifique sur les recettes ou la qualité de l'huile et du
              poisson.
            </p>
            <h3>Les séries limitées, millésimées et les labels</h3>
            <p>
              Chaque conserverie propose des séries limitées dont les
              collectionneurs sont friands, pour le design et la rareté des
              boites. Ces boites millésimées, vendues 10 à 30% plus chères,
              représentent en général le meilleur de la conserverie avec un
              poisson de pleine saison et un soin particulier pour ces boites
              "de garde".
            </p>
            <p>
              Le Label Rouge est un vrai signe de qualité de production. Il est
              attribué au groupement Poissons Bleus de Bretagne et présente ces
              garanties: pêche à la bolinche, fraicheur extra, non surgelé,
              emboitage en moins de 48h, taux de matière grasse supérieur à 8%,
              4 à 6 sardines par boite et affinage de 4 mois minimum avant la
              vente.
            </p>
            <p>
              Le label MSC pour une pêche durable fait l'objet de polémiques
              régulières sur son laxisme ou l'opacité de ses critères
              d'attribution ou de contrôle.
            </p>
            <p>
              La mention "préparées à l'ancienne" correspond à la norme Afnor NF
              V 45-071 qui encadre la recette traditionnelle avec pré-cuisson en
              friture et travail à la main - cette mention est néanmoins plus
              souple que le Label Rouge, et n'exclut pas la sardine congelée.
            </p>
            <h3>Note de conclusion</h3>
            <p>
              Ce panorama reflète la diversité des stratégies des marques qui
              jouent sur 3 leviers: la pêche et la sélection des bonnes
              sardines, la recette et le fleurissage, le design et le marketing.
              Les marques vont favoriser l'un ou l'autre de ces postes de
              dépenses à la recherche d'un équilibre gustatif, économique et
              pragmatique au niveau de la production. Côté consommateur, on
              retrouve cette recherche d'équilibre entre les 3 composantes du
              goût: certains sont sensibles au design de la boite et à l'image
              de marque (critère subjectif cependant réel au niveau de la
              perception gustative), d'autres apprécient les recettes, la
              préparation (avec aux extrêmes du mélange d'ingrédients les
              rillettes de sardines et les boites pour chat saveur poisson),
              enfin les puristes, les sardinophiles ont le palais plus sensible
              aux qualités nues de la sardine.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection3;
