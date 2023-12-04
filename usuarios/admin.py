from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm, CustomUserCreationForm


# Register your models here.
UsuarioPersonalizado = get_user_model()


@admin.register(UsuarioPersonalizado)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = UsuarioPersonalizado
    list_display = [
        'email',
        'username',
        'is_superuser'
    ]
