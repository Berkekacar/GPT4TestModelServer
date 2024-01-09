# type your code here
def addNumbers(number1, number2):
    return number1 + number2
import unittest

class TestAddNumbers(unittest.TestCase):
    
    def test_add_numbers(self):
        self.assertEqual(addNumbers(1, 2), 3)
        
    def test_negative_numbers(self):
        self.assertEqual(addNumbers(-5, -10), -15)
        
    def test_zero_input(self):
        self.assertEqual(addNumbers(0, 0), 0)

if __name__ == '__main__':
    unittest.main()