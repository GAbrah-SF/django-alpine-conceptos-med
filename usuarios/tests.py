from django.test import TestCase
from django.contrib.auth import get_user_model


# Create your tests here.
class CustomUserTests(TestCase):
    def test_crear_usuario(self):
        USR = get_user_model()
        usr = USR.objects.create_user(
            username="debsconsultores",
            email="debsconsultores@gmail.com",
            password="123"
        )

        # Qué esperamos
        self.assertEquals(usr.username, "debsconsultores")
        self.assertEquals(usr.email, "debsconsultores@gmail.com")
        self.assertTrue(usr.is_active)
        self.assertFalse(usr.is_staff)
        self.assertFalse(usr.is_superuser)

    def test_crear_superusuario(self):
        Usr = get_user_model()
        usr = Usr.objects.create_superuser(
            username="debsconsultores",
            email="debsconsultores@gmail.com",
            password="123"
        )

        # Qué esperamos
        self.assertEquals(usr.username, "debsconsultores")
        self.assertEquals(usr.email, "debsconsultores@gmail.com")
        self.assertTrue(usr.is_active)
        self.assertTrue(usr.is_staff)
        self.assertTrue(usr.is_superuser)
