import mlconjug3
import sys

default_conjugator = mlconjug3.Conjugator(language='fr')

verbConjug = str(default_conjugator.conjugate(sys.argv[1]).conjug_info[sys.argv[2]][sys.argv[3]][sys.argv[4]])
print(verbConjug)

