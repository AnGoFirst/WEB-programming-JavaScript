class SortingLibrary {
    static checkUndefined(array) {
        const undfCount = array.filter((el) => el === undefined).length;
        if (undfCount > 0) {
            console.log(`В масиві ${undfCount} undefined-елементів`);
        }
        return array.filter((el) => el !== undefined);
    }

    static sortExchange(array, ascending = true) {
        let comparisons = 0, swaps = 0;
        let arr = this.checkUndefined(array).slice();
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                comparisons++;
                if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swaps++;
                }
            }
        }
        console.log(`Обміну: Порівняння = ${comparisons}, Обмін = ${swaps}`);
        return arr;
    }

    static sortMinElements(array, ascending = true) {
        let comparisons = 0, swaps = 0;
        let arr = this.checkUndefined(array).slice();
        for (let i = 0; i < arr.length - 1; i++) {
            let index = i;
            for (let j = i + 1; j < arr.length; j++) {
                comparisons++;
                if ((ascending && arr[j] < arr[index]) || (!ascending && arr[j] > arr[index])) {
                    index = j;
                }
            }
            if (index !== i) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                swaps++;
            }
        }
        console.log(`Мінімальних елементів: Порівняння = ${comparisons}, Обмін = ${swaps}`);
        return arr;
    }

    static sortInserts(array, ascending = true) {
        let comparisons = 0, shifts = 0;
        let arr = this.checkUndefined(array).slice();
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
                comparisons++;
                arr[j + 1] = arr[j];
                shifts++;
                j--;
            }
            arr[j + 1] = key;
        }
        console.log(`Вставок: Порівняння = ${comparisons}, Переміщення = ${shifts}`);
        return arr;
    }

    static sortShell(array, ascending = true) {
        let comparisons = 0, swaps = 0;
        let arr = this.checkUndefined(array).slice();
        let gap = Math.floor(arr.length / 2);
        while (gap > 0) {
            for (let i = gap; i < arr.length; i++) {
                let temp = arr[i];
                let j = i;
                while (j >= gap && ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))) {
                    comparisons++;
                    arr[j] = arr[j - gap];
                    swaps++;
                    j -= gap;
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        console.log(`Шелла: Порівняння = ${comparisons}, Обмін = ${swaps}`);
        return arr;
    }

    static sortHoare(array, ascending = true) {
        let comparisons = 0, swaps = 0;
        let arr = this.checkUndefined(array).slice();
        function quickSort(arr) {
            if (arr.length <= 1) return arr;
            let pivot = arr[Math.floor(arr.length / 2)];
            let left = [], right = [], equal = [];
            for (let num of arr) {
                comparisons++;
                if (num < pivot) ascending ? left.push(num) : right.push(num);
                else if (num > pivot) ascending ? right.push(num) : left.push(num);
                else equal.push(num);
            }
            swaps += arr.length - 1;
            return [...quickSort(left), ...equal, ...quickSort(right)];
        }
        let sortedArr = quickSort(arr);
        console.log(`Хоара (швидке сортування): Порівняння = ${comparisons}, Обмін = ${swaps}`);
        return sortedArr;
    }
}