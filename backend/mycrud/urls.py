from mycrud.views import NoteView, NoteDetailView
from django.urls import path

urlpatterns = [
    path('notes/', NoteView.as_view(), name="notes"),
    path('notes/<int:pk>/', NoteDetailView.as_view(), name="detail-note")
]
