from pydantic import BaseModel, Field
from typing import Dict, Optional


class HealthResponse(BaseModel):
    """Schema response untuk endpoint health check."""
    status: str = Field(default="ok", example="ok")
    model: str = Field(default="ResNet18", example="ResNet18")
    version: str = Field(default="1.0", example="1.0")
    device: Optional[str] = Field(default="cpu", example="cpu")
    disclaimer: str = Field(
        default="PneumoVision_AI is a screening/research prototype and NOT a clinical diagnostic tool.",
        example="PneumoVision_AI is a screening/research prototype and NOT a clinical diagnostic tool."
    )


class ProbabilityResponse(BaseModel):
    """Distribusi probabilitas softmax per kelas."""
    NORMAL: float = Field(..., description="Probabilitas kelas NORMAL (0.0 - 1.0)", example=0.01)
    PNEUMONIA: float = Field(..., description="Probabilitas kelas PNEUMONIA (0.0 - 1.0)", example=0.99)


class PredictionResponse(BaseModel):
    """Schema response untuk endpoint prediksi rontgen dada."""
    prediction: str = Field(..., description="Kelas yang diprediksi (NORMAL atau PNEUMONIA)", example="PNEUMONIA")
    confidence: float = Field(..., description="Skor keyakinan (confidence) dari probabilitas kelas terpilih (0.0 - 1.0)", example=0.99)
    probabilities: ProbabilityResponse = Field(..., description="Probabilitas softmax untuk setiap kelas")
    disclaimer: str = Field(
        default="Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi.",
        example="Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
    )
