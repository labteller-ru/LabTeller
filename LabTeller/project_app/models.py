from django.db import models
from django.utils.text import slugify
from django.urls import reverse
from tinymce.models import HTMLField

from django.db import models
from django.utils.text import slugify

class Guide(models.Model):
    title = models.CharField(max_length=200, verbose_name="Заголовок")
    slug = models.SlugField(max_length=200, unique=True, verbose_name="Slug")
    description = models.TextField(verbose_name="Описание")
    image = models.ImageField(upload_to='guides/', verbose_name="Изображение")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Request(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    contact = models.CharField(max_length=255, verbose_name="Контактные данные")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    def __str__(self):
        return f"{self.name} ({self.contact})"

class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

from django.db import models
from tinymce.models import HTMLField
from django.utils.text import slugify
from django.urls import reverse

class Article(models.Model):
    title = models.CharField(max_length=200, verbose_name="Заголовок")
    short_description = models.CharField(max_length=300, verbose_name="Краткое описание", blank=True, null=True)
    content = HTMLField(verbose_name="Контент")  # Изменено на HTMLField из TinyMCE
    image = models.ImageField(upload_to='articles/', verbose_name="Изображение")
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='articles', null=True, blank=True)

    # Поля для рекомендованных каналов
    channel_1_title = models.CharField(max_length=100, verbose_name="Название первого канала", blank=True, null=True)
    channel_1_url = models.URLField(verbose_name="Ссылка на первый канал", blank=True, null=True)
    channel_1_description = models.CharField(max_length=255, verbose_name="Описание первого канала", blank=True,
                                             null=True)  # Изменено на CharField

    channel_2_title = models.CharField(max_length=100, verbose_name="Название второго канала", blank=True, null=True)
    channel_2_url = models.URLField(verbose_name="Ссылка на второй канал", blank=True, null=True)
    channel_2_description = models.CharField(max_length=255, verbose_name="Описание второго канала", blank=True,
                                             null=True)  # Изменено на CharField

    channel_3_title = models.CharField(max_length=100, verbose_name="Название третьего канала", blank=True, null=True)
    channel_3_url = models.URLField(verbose_name="Ссылка на третий канал", blank=True, null=True)
    channel_3_description = models.CharField(max_length=255, verbose_name="Описание третьего канала", blank=True,
                                             null=True)  # Изменено на CharField

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('article_detail', kwargs={'slug': self.slug})

    def __str__(self):
        return self.title


from django.db import models
from django.utils.text import slugify

class GuidesCategory(models.Model):
    name = models.CharField(max_length=200, verbose_name="Название категории")
    slug = models.SlugField(max_length=200, unique=True, verbose_name="Slug")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
