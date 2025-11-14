import sys
def total_energy(x, n):
    """
    Calculate the total energy based on the number of waves n.

    Args:
        x (int): The base energy value.
        n (int): The number of waves.
    Returns:
        int: The total energy after n waves.
    """
    return x if n%2 != 0 else 0

def output():
    """
    Read test cases from stdin, compute total energy, and print the results.

    Input format:
        - First line: an integer T (1 <= T <= 100), the number of test cases.
        - Next T lines: each line contains two integers x and n (1 <= x, n <= 10).
    For each test case:
        - Calls total_energy(x, n).
        - Prints the result to stdout.
    """
    test_cases_input = sys.stdin.readline().strip()
    try:
        test_cases = int(test_cases_input)
    except ValueError:
        raise SystemExit("invalid number of test cases")
    if not (1<= test_cases <= 100):
        raise SystemExit("number of test cases out of range")
    for _ in range(test_cases):
        x_and_n = sys.stdin.readline().strip().split()
        if len(x_and_n) != 2:
            raise SystemExit("each test case must have exactly two integers")
        x, n = map(int, x_and_n)
        if not ( 1 <= x <= 10):
            raise SystemExit("x out of range")
        if not ( 1<= n <= 10):
            raise SystemExit("n out of range")
        print(total_energy(int(x), int(n)))
    print("end of output")

if __name__ == "__main__":
    output()
    
    



