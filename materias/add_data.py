# import pandas as pd
# from materias.models import Materia, Unidad
#
# file_xlsx_lista_materias_med = 'excel/lista_materias_med.xlsx'
# df_xlsx_lista_materias_med = pd.read_excel(file_xlsx_lista_materias_med)
# file_xlsx_lista_unidades = 'excel/lista_unidades.xlsx'
# df_xlsx_lista_unidades = pd.read_excel(file_xlsx_lista_unidades)
#
# for index, row in df_xlsx_lista_materias_med.iterrows():
#     try:
#         instancia = Materia(
#             materia=row["Materia"],
#             objetivo=row["Objetivo"],
#             bimestre=row["Bimestre"],
#         )
#         instancia.save()
#     except Exception as e:
#         print(f"Error al guardar el registro en la fila {index + 1}: {e}")
#
# for index, row in df_xlsx_lista_unidades.iterrows():
#     try:
#         instancia = Unidad(
#             unidad=row["Unidad"],
#             materia=Materia.objects.get(materia=row["Materia"]),
#         )
#         instancia.save()
#     except Exception as e:
#         print(f"Error al guardar el registro en la fila {index + 1}: {e}")
