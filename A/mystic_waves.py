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
        x_and_n = sys.stdin.readline().strip()
        x = x_and_n.split(" ")[0]
        n = x_and_n.split(" ")[1]
        print(total_energy(int(x), int(n)))

if __name__ == "__main__":
    output()
    
    



