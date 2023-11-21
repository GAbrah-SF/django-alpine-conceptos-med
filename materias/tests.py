from django.test import TestCase

# Create your tests here.
# import pandas as pd
# from materias.models import Materia
#
# file_xlsx_cp = 'excel/lista_materias_med.xlsx'
# df_xlsx_cp = pd.read_excel(file_xlsx_cp)
#
# for index, row in df_xlsx_cp.iterrows():
#     try:
#         instancia = Materia(
#             materia=row["Materia"],
#             objetivo=row["Objetivo"],
#             bimestre=row["Bimestre"],
#         )
#         instancia.save()
#     except Exception as e:
#         print(f"Error al guardar el registro en la fila {index + 1}: {e}")


# import pandas as pd
# from materias.models import Materia, Unidad
#
# file_xlsx_cp = 'excel/lista_unidades.xlsx'
# df_xlsx_cp = pd.read_excel(file_xlsx_cp)
#
# for index, row in df_xlsx_cp.iterrows():
#     try:
#         instancia = Unidad(
#             unidad=row["Unidad"],
#             materia=Materia.objects.get(materia=row["Materia"]),
#         )
#         instancia.save()
#     except Exception as e:
#         print(f"Error al guardar el registro en la fila {index + 1}: {e}")
