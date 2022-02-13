interface IMovie {
  name: string;
  ratings: { [key: string]: number };
}

const movies: IMovie[] = [
  {
    name: "Interstellar",
    ratings: {
      John: 10,
      Jack: 3,
    },
  },
  {
    name: "Avengers: Infinity War",
    ratings: {
      Jack: 10,
      Jane: 10,
      John: 9,
    },
  },
];

function list(movies: Array<IMovie>): void {
  const maxLength: number = movies.reduce((max, movie) => {
    if (max < movie.name.length) return movie.name.length;
    return max;
  }, 0);

  const tableHeader: string =
    `| № | movies name ${" ".repeat(maxLength - 12)} | rating  |\n` +
    `--------------------${"-".repeat(maxLength - 12)}----------\n`;

  const tableBody: string = movies.reduce((acc, movie, index) => {
    const ratings: Array<number> = Object.values(movie.ratings);
    const averageRating: number = ratings.reduce((sum, value) => sum + value) / ratings.length;
    return (
      acc +
      `| ${index + 1} | ${movie.name}${" ".repeat(maxLength - movie.name.length)} | ${averageRating.toFixed(
        1
      )}     |\n` +
      `--------------------${"-".repeat(maxLength - 12)}----------\n`
    );
  }, "");
  console.log(`${tableHeader}${tableBody}`);
}

list(movies);
