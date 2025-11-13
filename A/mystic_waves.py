import sys
def total_energy(x, n):
    return x if n%2 != 0 else 0

def output():
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
    
    



