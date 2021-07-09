const queryBuilder = (criteria) => {
  const {
    sort = "created_at",
    order = "desc",
    limit = "10",
    page = "1",
    ...rest
  } = criteria;

  return [
    Object.entries(rest)
      .map(([key, value]) => {
        if (!parseInt(value)) {
          //si pas possible de convertir un string en int (ligne 7)
          return `${key} = "${value}"`;
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
