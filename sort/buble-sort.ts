const numbers = [5, 3, 2, 4, 7, 1, 0, 6];

const sort = (arr: number[]) => {
  let swapped: boolean;

  do {
    swapped = false;

    for (const i in arr) {
      const current = arr[i];
      const next = arr[+i + 1];

      if (current > next) {
        arr[i] = next;
        arr[+i + 1] = current;

        swapped = true;
      }
    }
  } while (swapped);
};

const sorted = sort(numbers);
