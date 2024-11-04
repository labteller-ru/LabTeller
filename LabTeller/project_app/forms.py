from django import forms
from .models import Request

class RequestForm(forms.ModelForm):
    class Meta:
        model = Request
        fields = ['name', 'contact']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'modal__input', 'placeholder': 'Ваше Имя'}),
            'contact': forms.TextInput(attrs={'class': 'modal__input', 'placeholder': 'Ваш контактный телефон/мессенджер'}),
        }
