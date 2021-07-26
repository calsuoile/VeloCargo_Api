const queryBuilder = (criteria) => {
  const {
    sort = "created_at", //tri par date de création de l'annonce
    order = "desc", //sens décroissant
    limit = 10, //limite de 10 annonces
    page = 1, //par page
    ...rest
  } = criteria;

  return [
    Object.entries(rest)
      .map(([key, value]) => {
        if (!parseInt(value)) {
          //si pas possible de convertir un string en int(ligne 13)
          if (value === "true" || value === "false") {
            return `${key} = "${value === 'true' ? 1 : 0}"`;
          } else {
            return `${key} = "${value}"`;
          }
        } else {
          return `${key} <= ${value}`;
        }
      })
      .join(" AND "),
    `ORDER BY ${sort} ${order}`,
    `LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
  ];
};

module.exports = queryBuilder;
