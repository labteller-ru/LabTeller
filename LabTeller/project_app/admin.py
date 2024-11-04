from django.contrib import admin
from django.db import models  # Не забудьте импортировать models, если вы используете его
from .models import Article, Category, Request  # Импортируйте ваши модели
from tinymce.widgets import TinyMCE

class ArticleAdmin(admin.ModelAdmin):
    # Определяем, как поле будет отображаться в админке
    list_display = ('title', 'category', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE(attrs={'cols': 80, 'rows': 30})},
    }

    class Media:
        js = ('js/article.js',)  # Путь к вашему JavaScript-файлу

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'contact', 'created_at')



from django.contrib import admin
from .models import Guide, GuidesCategory

@admin.register(GuidesCategory)
class GuidesCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')  # Display these fields in the admin list view
    prepopulated_fields = {'slug': ('name',)}  # Automatically generate the slug from the name

@admin.register(Guide)
class GuideAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')  # Display these fields in the admin list view
    prepopulated_fields = {'slug': ('title',)}  # Automatically generate the slug from the title

# Регистрируем модели в админке
admin.site.register(Article, ArticleAdmin)
admin.site.register(Category, CategoryAdmin)
